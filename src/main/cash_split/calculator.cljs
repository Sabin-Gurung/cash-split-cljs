(ns cash-split.calculator)

(defn- round [n] (parse-double (.toFixed n 2)))
(defn- sub [a b] (round (- a b)))
(defn average-cost [dt]
  (if (empty? dt)
    0
    (round (/ (apply + (map :amount dt))
              (count dt)))))

(defn- update-budget [avg dt]
  (let [calculate-budget (fn [{amount :amount :as dt} av] (assoc dt :budget (sub amount av)))]
    (map #(calculate-budget % avg) dt)))

(defn- iter-one [[g & gs] [r & rs] result]
  (let [to-give (abs (:budget g))
        to-recieve (:budget r)
        res (sub to-recieve to-give)
        new-g (assoc g :budget res)
        new-r (assoc r :budget res)]
    (cond
      (or (nil? g) (nil? r)) nil
      (neg? res) [(cons new-g gs) rs (update-in result [(:name g) :to-give] conj {:name (:name r) :amount to-recieve})]
      (pos? res) [gs (cons new-r rs) (update-in result [(:name g) :to-give] conj {:name (:name r) :amount to-give})]
      (zero? res) [gs rs (update-in result [(:name g) :to-give] conj {:name (:name r) :amount to-give})])))

(defn- calculate-payment-graph [givers recievers result]
  (->> (iterate (partial apply iter-one) [givers recievers result])
       (take-while some?)
       last
       last
       vals
       (sort :budget)))

(defn calculate-budget [data]
  (let [avg (average-cost data)
        total (apply + (map :amount data))
        data-with-budget (update-budget avg data)
        givers (filter #(neg? (:budget %)) data-with-budget)
        recievers (filter #(not (neg? (:budget %))) data-with-budget)
        data-map (into {} (map (juxt :name identity) data-with-budget))
        payment-graph (calculate-payment-graph givers recievers data-map)]
    {:avg avg
     :total total
     :payment-graph payment-graph}))

(ns cash-split.core
  (:require
   [cash-split.calculator :as calc]
   [cash-split.helpers :as helper :refer [copy-to-clipboard is-number?
                                          str->num take-if trim-starting-0]]
   [goog.dom :as gdom]
   [reagent.core :as r]
   [reagent.dom :as rdom]))

(def initial-state {:input {:budgets [{:name "UserName" :amount 0}]}
                    :result {:avg 0
                             :total 0
                             :payment-graph []}
                    })

(defonce app-data (r/atom initial-state))

(defonce new-default-username 
  (let [counter (atom -1)]
    #(str "User" (swap! counter inc))))

(defn update-result [{{budgets :budgets} :input :as data}]
  (->> (calc/calculate-budget budgets)
       (assoc data :result)))

(defn update-name! [i nme]
  (let [model @app-data]
    (->> (assoc-in model [:input :budgets i :name] nme)
         (update-result)
         (reset! app-data))))

(defn update-amount! [i amount]
  (let [model @app-data]
    (-> (assoc-in model [:input :budgets i :amount] (str->num amount))
        (assoc-in [:input :budgets i :amount-str] amount)
        (update-result)
        (->> (reset! app-data)))))

(defn remove-budget! [i]
  (let [model @app-data
        remove-element #(vec (concat (subvec % 0 i) (subvec % (inc i) (count %))))]
    (->> (update-in model [:input :budgets] remove-element)
         (update-result)
         (reset! app-data))))

(defn add-budget! []
  (let [model @app-data]
    (->> (update-in model [:input :budgets] conj {:name (new-default-username) :amount 0})
         (update-result)
         (reset! app-data))))

(defn reset-app-data! []
  (reset! app-data initial-state))

(defn flatten-payment-graph [payment-graph]
  (->> (filter #(not-empty (:to-give %)) payment-graph)
       (mapcat (fn [{:keys [name to-give]}] (map #(assoc % :from-name name) to-give)))))

(defn input [name cb]
  [:input {:type "text" 
           :value name
           :on-change #(cb (helper/value %)) }])

(defn input-number [name cb]
  [:input {:type "text" 
           :value name
           :on-change #(-> (helper/value %)
                           (trim-starting-0)
                           (take-if is-number?) 
                           (some-> cb)) }])

(defn add-button [cb]
  [:button.add
   {:on-click cb} "+"])

(defn close-button [cb]
  [:button.close
   {:on-click cb} "X"])

(defn budget-item [i {:keys [name amount amount-str]}]
  [:div.budget-item
   [input name #(update-name! i %) ]
   [input-number (or amount-str amount) #(update-amount! i %) ]
   [close-button #(remove-budget! i) ]
   ])

(defn budget-list [budgets]
  [:div
   (for [[i budget] (map-indexed vector budgets)]
     ^{:key i} [budget-item i budget])])

(defn budget-form [budgets]
  [:div.budget-form
   [budget-list budgets]
   [add-button #(add-budget!)]])

(defn payment-summary [payment-graph] 
  (let [arr (->> (flatten-payment-graph payment-graph)
                 (filter #(pos? (:amount %))))]
    [:p
     (for [[i {:keys [name from-name amount]}] (map-indexed vector arr)]
       ^{:key i}[:span from-name " -> " name " = " amount [:br]])
     ]))

(defn result->text [{:keys [avg total payment-graph]}]
  (str "Summary:\n"
       "Total : " total "\n"
       "Average: " avg "\n"
       "----------------------\n"
       (->> (flatten-payment-graph payment-graph)
            (filter #(pos? (:amount %)))
            (map (fn [{:keys [name from-name amount]}] (str from-name " -> " name " = " amount "\n")))
            (apply str))))

(defn result-view [{:keys [avg total payment-graph] :as result}]
  [:div.result 
   [:p "Summary:"]
   [:p 
    "Total : " total [:br]
    "Average : " avg [:br]
    "----------------------------"
    ]
   [payment-summary payment-graph]
   [:button {:on-click #(copy-to-clipboard (result->text result))} "📋"]])

(defn app []
  (let [model @app-data]
    [:div.app
     [:p.title "Ca" [:span.gold "$"] "h " [:span.gold "$"] "plit"]
     [budget-form (get-in model [:input :budgets])]
     [:hr]
     [result-view (:result model)]
     [:p.footer
       "Check out " [:a {:target "_blank" :href "https://github.com/Sabin-Gurung/cash-split-cljs"} "source-code"]
      ]
     ]))

(defn mount-app [] 
  (when-let [el (gdom/getElement "app")] 
    (rdom/render [app] el)))

(defn init []
  (println "----------Initialize App---------------")
  (mount-app))


(defn ^:dev/before-load stop []
  ; (js/console.log "stop")
  )

(defn ^:dev/after-load start []
  ; (js/console.log "start")
  (mount-app))

(comment
  (println @app-data)
  (update-name! 0 "sabin")
  (update-name! 1 "binod")
  (update-amount! 3 10)
  (remove-budget! 3)
  (add-budget!)
  (reset-app-data!)
  (init)
  (js/alert "hello")
  (vec [1 2])
  (new-default-username)
  (-> @app-data
      :result
      result->text
      println
      )

  (calc/calculate-budget (-> @app-data :input :budgets))
  (into {} {:a "1" :b {:c "b" :b [1 2]}})
  (update-result @app-data)

  (number? "1.0")
  (not-empty [1])

  (map-indexed vector [1 2])


  (println "this is a comment"))


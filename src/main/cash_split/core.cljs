(ns cash-split.core
  (:require
    [cash-split.calculator :as calc]
    [cash-split.helpers :as helper]
    [goog.dom :as gdom]
    [reagent.core :as r]
    [reagent.dom :as rdom]))

; (def initial-state {:input {:budgets [{:name "sabin" :amount 100}
;                                       {:name "binod" :amount 20}
;                                       {:name "sahara" :amount 57}
;                                       {:name "ashish" :amount 5}]}
;                     :result {:average 0
;                              :total 0
;                              :payment-graph []}
;                     })

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
    (->> (assoc-in model [:input :budgets i :amount] amount)
         (update-result)
         (reset! app-data))))

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
  [:input.w-100.h-100 {:type "text" 
           :value name
           :on-change #(cb (helper/value %)) }])

(defn input-number [name cb]
  [:input.w-100.h-100 {:type "text" 
           :value name
           :on-change #(some-> (helper/int-value %) cb) }])

(defn add-button [cb]
  [:input.btn.btn-success.add-button.mt-2
   {:type "button" 
    :value "+"
    :on-click cb} ])

(defn close-button [cb]
  [:input.btn.btn-danger.w-100
   {:type "button" 
    :value "X"
    :on-click cb} ])

(defn budget-item [i {:keys [name amount]}]
  [:div.budget-item
   [:div.row
    [:div.col-5 [input name #(update-name! i %)] ]
    [:div.col-5 [input-number amount #(update-amount! i %)] ]
    [:div.col-2.p-1 [close-button #(remove-budget! i)] ]
    ]])

(defn budget-list [budgets]
  [:div
   (for [[i budget] (map-indexed vector budgets)]
     ^{:key i} [budget-item i budget])])

(defn budget-form [budgets]
  [:div.d-flex.justify-content-center
   [:div.budget-form
    [budget-list budgets]
    [add-button #(add-budget!)]]])

(defn payment-summary [payment-graph] 
  (let [arr (->> (flatten-payment-graph payment-graph)
                 (filter #(pos? (:amount %))))]
    [:div
     (for [[i {:keys [name from-name amount]}] (map-indexed vector arr)]
       ^{:key i}[:div from-name " -> " name " = " amount])
     ]))

(defn result-view [{:keys [avg total payment-graph]}]
  [:div.result 
   [:h3 "Summary:"]
   [:div "Total : " total]
   [:div "Average : " avg]
   [:div "---------------"]
   [payment-summary payment-graph]
   ])

(defn app []
  (let [model @app-data]
    [:div.app.container
     [:h3.m-2.text-center "Cash Splitting"]
     [:hr]
     [budget-form (get-in model [:input :budgets])]
     [:hr]
     [result-view (:result model)]
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

  (calc/calculate-budget (-> @app-data :input :budgets))
  (into {} {:a "1" :b {:c "b" :b [1 2]}})
  (update-result @app-data)

  (number? "1.0")
  (not-empty [1])

  (map-indexed vector [1 2])


  (println "this is a comment"))


(ns cash-split.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as r]
   [reagent.dom :as rdom]))


(defn app []
  [:div
   [:h1 "hello world"]
   [:h1 "hello world"]
   [:h1 "hello world"]
   [:h1 "hello world"]
   ]
  )

(defn mount-app [] 
  (when-let [el (gdom/getElement "app")] 
    (rdom/render [app] el)))

(defn init []
  (println "----------Initialize App---------------")
  (mount-app))


(defn ^:dev/before-load stop []
  (js/console.log "stop"))

(defn ^:dev/after-load start []
  (js/console.log "start")
  (mount-app))


(comment
  (init)
  (js/alert "hello")
  (println "this is a comment")
  )

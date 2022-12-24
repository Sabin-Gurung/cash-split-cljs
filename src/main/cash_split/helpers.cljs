(ns cash-split.helpers
  (:require
   [cljs.reader :as reader]))

(defn- parse-num [str]
  (try
    (if (= "" str)
      0
      (let [is-number? (re-matches #"\d+(\.\d+)?" str)] 
        (when is-number? (js/parseInt str))))
    (catch js/Error _ nil)))

(defn value [event]
  (-> event .-target .-value))

(defn int-value [event]
  (parse-num (value event)))

(defn copy-to-clipboard [val]
  (let [el (js/document.createElement "textarea")]
    (set! (.-value el) val)
    (.appendChild js/document.body el)
    (.select el)
    (js/document.execCommand "copy")
    (.removeChild js/document.body el)))

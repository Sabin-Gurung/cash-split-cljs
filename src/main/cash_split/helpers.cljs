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


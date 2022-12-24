(ns cash-split.helpers)

(defn is-number? [str]
  (or (= str "")
      (re-matches #"\d+\.?\d*" str)))

(defn value [event]
  (-> event .-target .-value))

(defn trim-starting-0 [str]
  (if-let [[_ d] (re-matches #"0(\d)" str)] d str))

(defn str->num [st]
  (js/parseFloat st))

(defn copy-to-clipboard [val]
  (let [el (js/document.createElement "textarea")]
    (set! (.-value el) val)
    (.appendChild js/document.body el)
    (.select el)
    (js/document.execCommand "copy")
    (.removeChild js/document.body el)))

(defn take-if [a pred? ]
  (when (pred? a) a))

(defn also [a fn] (fn a) a)

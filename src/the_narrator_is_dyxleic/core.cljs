(ns the-narrator-is-dyxleic.core
  (:require
    [clojure.browser.repl :as repl]
    [clojure.string :as str]
    [the-narrator-is-dyxleic.localstorage :as local-storage]
    [the-narrator-is-dyxleic.levels :as levels]
    ))

(enable-console-print!)

; =============================================================================

(defn get-text [id]
  (.-textContent (.getElementById js/document id)))

(defn set-text [id text]
  (set! (.-textContent (.getElementById js/document id)) text))

(def get-current (partial get-text "current"))

(def set-current (partial set-text "current"))

(defn set-line [before after]
  (set-text "text-before" before)
  (set-text "text-after" after))

(defn set-target [text]
  (set! (.-targetText js/window) text))

(defn get-target []
  (.-targetText js/window))

(defn set-start [text]
  (set! (.-startText js/window) text))

(defn get-start []
  (.-startText js/window))

; =============================================================================
(defn add-class [id class]
  (.add (.-classList (.getElementById js/document id)) class))

(defn remove-class [id class]
  (.remove (.-classList (.getElementById js/document id)) class))

(def operations {
  "reverse" str/reverse
  "rotate" (fn [string]
             (str
               (last string)
               (subs string 0 (dec (count string)))))
  "push-a" (fn [string] (str string "a"))
  "push-b" (fn [string] (str string "b"))})

(defn check-win []
  (if (= (get-current) (get-target))
    (do
      (remove-class "current" "neutral")
      (add-class "current" "correct")
      (js/setTimeout (fn []
          (remove-class "current" "correct")
          (add-class "current" "neutral")
          (increment-level)
          (next-level))
        2500))))

(defn clicked-on [text]
  (let [new-string ((get operations text) (get-current))]
    (set-current new-string)
    (check-win)))

(defn create-item [text]
  (let [item (.createElement js/document "li")]
    (set! (.-textContent item) text)
    (.addEventListener item "click" (fn [] (clicked-on text)))
    item))

(defn update-list [elements]
  (let [list (.getElementById js/document "operations")]
    (set! (.-innerHTML list) "")
    (doseq [element elements]
      (let [item (create-item element)]
        (.appendChild list item)))))

(defn increment-level []
  (local-storage/set-item! "level"
    (inc (js/parseInt (local-storage/get-item "level")))))

(def get-level (partial local-storage/get-item "level"))

(defn next-level []
  (let [{:keys [operations text-before text-after start target]}
        (levels/levels (get-level))]
    (update-list operations)
    (set-line text-before text-after)
    (set-start start)
    (set-current start)
    (set-target target)))

; =============================================================================

(defn set-display! [id visibility]
  (set!
    (.-display (.-style (.getElementById js/document id)))
    visibility))

(defn add-click-listener! [id listener]
  (.addEventListener
    (.getElementById js/document "begin")
    "click"
    listener))

; initial run
(if-not (local-storage/get-item "level")
  (local-storage/set-item! "level" 0))

(add-click-listener! "begin" (fn []
  (set-display! "intro" "none")
  (set-display! "game" "block")

  (add-click-listener! "reset" (fn []
    #(set-current (get-start))))

  (next-level)))
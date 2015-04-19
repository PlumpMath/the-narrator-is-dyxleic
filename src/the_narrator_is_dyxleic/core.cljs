(ns the-narrator-is-dyxleic.core
  (:require
    [clojure.browser.repl :as repl]
    [clojure.string :as str]
    [the-narrator-is-dyxleic.levels :as levels]
    ))

(enable-console-print!)

; =============================================================================

(defn get-text [id]
  (.-textContent (.getElementById js/document id)))

(defn set-text! [id text]
  (set! (.-textContent (.getElementById js/document id)) text))

(def get-current (partial get-text "current"))

(def set-current! (partial set-text! "current"))

(defn set-line! [before after]
  (set-text! "text-before" before)
  (set-text! "text-after" after))

(defn set-target! [text]
  (set! (.-targetText js/window) text))

(defn get-target []
  (.-targetText js/window))

(defn set-start! [text]
  (set! (.-startText js/window) text))

(defn get-start []
  (.-startText js/window))

(defn set-level! [level]
  (set! (.-currentLevel js/window) level))

(defn get-level []
  (.-currentLevel js/window))

; =============================================================================

(defn add-class! [id class]
  (.add (.-classList (.getElementById js/document id)) class))

(defn remove-class! [id class]
  (.remove (.-classList (.getElementById js/document id)) class))

(def operations {
  "reverse" str/reverse
  "rotate" #(str
              (last %)
              (subs % 0 (dec (count %))))
  "pop" #(subs % 0 (dec (count %)))
  "duplicate" #(str % %)
  "duplicate-last" #(str % (last %))
  "push-s" #(str % "s")
  "push-r" #(str % "r")
  "push-as" #(str % "as")
  "rr -> a" #(str/replace % #"rr" "a")
  "rrr -> o" #(str/replace % #"rrr" "o")
  "rh -> reh" #(str/replace % #"rh" "reh")
  "ef -> eaf" #(str/replace % #"ef" "eaf")})

(defn correct? []
  (= (get-current) (get-target)))

(defn check-win! []
  (if (correct?)
    (do
      (remove-class! "current" "neutral")
      (add-class! "current" "correct")
      (js/setTimeout (fn []
          (remove-class! "current" "correct")
          (add-class! "current" "neutral")
          (increment-level!))
        1500))))

(defn clicked-on [text]
  (if-not (correct?)
    (let [new-string ((get operations text) (get-current))]
      (set-current! new-string)
      (check-win!))))

(defn create-item [text]
  (let [item (.createElement js/document "li")]
    (set! (.-textContent item) text)
    (.addEventListener item "click" #(clicked-on text))
    item))

(defn update-list! [elements]
  (let [list (.getElementById js/document "operations")]
    (set! (.-innerHTML list) "")
    (doseq [element elements]
      (let [item (create-item element)]
        (.appendChild list item)))))

(defn increment-level! []
  (if (= (dec (count levels/levels)) (get-level))
    (do (set-display! "game" "none")
        (set-display! "outro" "block"))
    (do
      (set-level! (inc (get-level)))
      (next-level!))))

(defn next-level! []
  (let [{:keys [operations text-before text-after start target]}
        (levels/levels (get-level))]
    (update-list! operations)
    (set-line! text-before text-after)
    (set-start! start)
    (set-current! start)
    (set-target! target)))

; =============================================================================

(defn set-display! [id visibility]
  (set!
    (.-display (.-style (.getElementById js/document id)))
    visibility))

(defn add-click-listener! [id listener]
  (.addEventListener
    (.getElementById js/document id)
    "click"
    listener))

(set-level! 0)

(add-click-listener! "begin1" (fn []
  (set-display! "intro1" "none")
  (set-display! "intro2" "block")

  (add-click-listener! "begin2" (fn []
    (set-display! "intro2" "none")
    (set-display! "game" "block")

    (add-click-listener! "reset"
      #(set-current! (get-start)))

    (next-level!)))))
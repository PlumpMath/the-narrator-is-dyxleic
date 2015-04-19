goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.object', 'goog.string.StringBuffer', 'goog.array']);
goog.addDependency("../the_narrator_is_dyxleic/levels.js", ['the_narrator_is_dyxleic.levels'], ['cljs.core']);
goog.addDependency("../clojure/browser/event.js", ['clojure.browser.event'], ['cljs.core', 'goog.events.EventTarget', 'goog.events.EventType', 'goog.events']);
goog.addDependency("../clojure/browser/net.js", ['clojure.browser.net'], ['goog.net.xpc.CfgFields', 'goog.net.XhrIo', 'goog.json', 'goog.Uri', 'cljs.core', 'goog.net.EventType', 'goog.net.xpc.CrossPageChannel', 'clojure.browser.event']);
goog.addDependency("../clojure/browser/repl.js", ['clojure.browser.repl'], ['cljs.core', 'clojure.browser.net', 'clojure.browser.event']);
goog.addDependency("../clojure/string.js", ['clojure.string'], ['goog.string', 'cljs.core', 'goog.string.StringBuffer']);
goog.addDependency("../the_narrator_is_dyxleic/core.js", ['the_narrator_is_dyxleic.core'], ['clojure.browser.repl', 'the_narrator_is_dyxleic.levels', 'cljs.core', 'clojure.string']);
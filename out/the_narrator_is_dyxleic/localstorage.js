// Compiled by ClojureScript 0.0-2755 {}
goog.provide('the_narrator_is_dyxleic.localstorage');
goog.require('cljs.core');
/**
* Set `key' in browser's localStorage to `val`.
*/
the_narrator_is_dyxleic.localstorage.set_item_BANG_ = (function set_item_BANG_(key,val){
return window.localStorage.setItem(key,val);
});
/**
* Returns value of `key' from browser's localStorage.
*/
the_narrator_is_dyxleic.localstorage.get_item = (function get_item(key){
return window.localStorage.getItem(key);
});
/**
* Remove the browser's localStorage value for the given `key`
*/
the_narrator_is_dyxleic.localstorage.remove_item_BANG_ = (function remove_item_BANG_(key){
return window.localStorage.removeItem(key);
});

//# sourceMappingURL=localstorage.js.map
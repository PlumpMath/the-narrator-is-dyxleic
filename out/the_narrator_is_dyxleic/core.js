// Compiled by ClojureScript 0.0-2755 {}
goog.provide('the_narrator_is_dyxleic.core');
goog.require('cljs.core');
goog.require('the_narrator_is_dyxleic.levels');
goog.require('clojure.string');
goog.require('clojure.browser.repl');
cljs.core.enable_console_print_BANG_.call(null);
the_narrator_is_dyxleic.core.get_text = (function get_text(id){
return document.getElementById(id).textContent;
});
the_narrator_is_dyxleic.core.set_text_BANG_ = (function set_text_BANG_(id,text){
return document.getElementById(id).textContent = text;
});
the_narrator_is_dyxleic.core.get_current = cljs.core.partial.call(null,the_narrator_is_dyxleic.core.get_text,"current");
the_narrator_is_dyxleic.core.set_current_BANG_ = cljs.core.partial.call(null,the_narrator_is_dyxleic.core.set_text_BANG_,"current");
the_narrator_is_dyxleic.core.set_line_BANG_ = (function set_line_BANG_(before,after){
the_narrator_is_dyxleic.core.set_text_BANG_.call(null,"text-before",before);

return the_narrator_is_dyxleic.core.set_text_BANG_.call(null,"text-after",after);
});
the_narrator_is_dyxleic.core.set_target_BANG_ = (function set_target_BANG_(text){
return window.targetText = text;
});
the_narrator_is_dyxleic.core.get_target = (function get_target(){
return window.targetText;
});
the_narrator_is_dyxleic.core.set_start_BANG_ = (function set_start_BANG_(text){
return window.startText = text;
});
the_narrator_is_dyxleic.core.get_start = (function get_start(){
return window.startText;
});
the_narrator_is_dyxleic.core.set_level_BANG_ = (function set_level_BANG_(level){
return window.currentLevel = level;
});
the_narrator_is_dyxleic.core.get_level = (function get_level(){
return window.currentLevel;
});
the_narrator_is_dyxleic.core.add_class_BANG_ = (function add_class_BANG_(id,class$){
return document.getElementById(id).classList.add(class$);
});
the_narrator_is_dyxleic.core.remove_class_BANG_ = (function remove_class_BANG_(id,class$){
return document.getElementById(id).classList.remove(class$);
});
the_narrator_is_dyxleic.core.operations = cljs.core.PersistentHashMap.fromArrays(["rrr -> o","rh -> reh","pop","reverse","duplicate","rr -> a","duplicate-last","push-s","push-as","ef -> eaf","rotate","push-r"],[(function (p1__13268_SHARP_){
return clojure.string.replace.call(null,p1__13268_SHARP_,/rrr/,"o");
}),(function (p1__13269_SHARP_){
return clojure.string.replace.call(null,p1__13269_SHARP_,/rh/,"reh");
}),(function (p1__13261_SHARP_){
return cljs.core.subs.call(null,p1__13261_SHARP_,(0),(cljs.core.count.call(null,p1__13261_SHARP_) - (1)));
}),clojure.string.reverse,(function (p1__13262_SHARP_){
return [cljs.core.str(p1__13262_SHARP_),cljs.core.str(p1__13262_SHARP_)].join('');
}),(function (p1__13267_SHARP_){
return clojure.string.replace.call(null,p1__13267_SHARP_,/rr/,"a");
}),(function (p1__13263_SHARP_){
return [cljs.core.str(p1__13263_SHARP_),cljs.core.str(cljs.core.last.call(null,p1__13263_SHARP_))].join('');
}),(function (p1__13264_SHARP_){
return [cljs.core.str(p1__13264_SHARP_),cljs.core.str("s")].join('');
}),(function (p1__13266_SHARP_){
return [cljs.core.str(p1__13266_SHARP_),cljs.core.str("as")].join('');
}),(function (p1__13270_SHARP_){
return clojure.string.replace.call(null,p1__13270_SHARP_,/ef/,"eaf");
}),(function (p1__13260_SHARP_){
return [cljs.core.str(cljs.core.last.call(null,p1__13260_SHARP_)),cljs.core.str(cljs.core.subs.call(null,p1__13260_SHARP_,(0),(cljs.core.count.call(null,p1__13260_SHARP_) - (1))))].join('');
}),(function (p1__13265_SHARP_){
return [cljs.core.str(p1__13265_SHARP_),cljs.core.str("r")].join('');
})]);
the_narrator_is_dyxleic.core.correct_QMARK_ = (function correct_QMARK_(){
return cljs.core._EQ_.call(null,the_narrator_is_dyxleic.core.get_current.call(null),the_narrator_is_dyxleic.core.get_target.call(null));
});
the_narrator_is_dyxleic.core.check_win_BANG_ = (function check_win_BANG_(){
if(the_narrator_is_dyxleic.core.correct_QMARK_.call(null)){
the_narrator_is_dyxleic.core.remove_class_BANG_.call(null,"current","neutral");

the_narrator_is_dyxleic.core.add_class_BANG_.call(null,"current","correct");

return setTimeout((function (){
the_narrator_is_dyxleic.core.remove_class_BANG_.call(null,"current","correct");

the_narrator_is_dyxleic.core.add_class_BANG_.call(null,"current","neutral");

return the_narrator_is_dyxleic.core.increment_level_BANG_.call(null);
}),(1500));
} else {
return null;
}
});
the_narrator_is_dyxleic.core.clicked_on = (function clicked_on(text){
if(!(the_narrator_is_dyxleic.core.correct_QMARK_.call(null))){
var new_string = cljs.core.get.call(null,the_narrator_is_dyxleic.core.operations,text).call(null,the_narrator_is_dyxleic.core.get_current.call(null));
the_narrator_is_dyxleic.core.set_current_BANG_.call(null,new_string);

return the_narrator_is_dyxleic.core.check_win_BANG_.call(null);
} else {
return null;
}
});
the_narrator_is_dyxleic.core.create_item = (function create_item(text){
var item = document.createElement("li");
item.textContent = text;

item.addEventListener("click",((function (item){
return (function (){
return the_narrator_is_dyxleic.core.clicked_on.call(null,text);
});})(item))
);

return item;
});
the_narrator_is_dyxleic.core.update_list_BANG_ = (function update_list_BANG_(elements){
var list = document.getElementById("operations");
list.innerHTML = "";

var seq__13275 = cljs.core.seq.call(null,elements);
var chunk__13276 = null;
var count__13277 = (0);
var i__13278 = (0);
while(true){
if((i__13278 < count__13277)){
var element = cljs.core._nth.call(null,chunk__13276,i__13278);
var item_13279 = the_narrator_is_dyxleic.core.create_item.call(null,element);
list.appendChild(item_13279);

var G__13280 = seq__13275;
var G__13281 = chunk__13276;
var G__13282 = count__13277;
var G__13283 = (i__13278 + (1));
seq__13275 = G__13280;
chunk__13276 = G__13281;
count__13277 = G__13282;
i__13278 = G__13283;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__13275);
if(temp__4126__auto__){
var seq__13275__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13275__$1)){
var c__4559__auto__ = cljs.core.chunk_first.call(null,seq__13275__$1);
var G__13284 = cljs.core.chunk_rest.call(null,seq__13275__$1);
var G__13285 = c__4559__auto__;
var G__13286 = cljs.core.count.call(null,c__4559__auto__);
var G__13287 = (0);
seq__13275 = G__13284;
chunk__13276 = G__13285;
count__13277 = G__13286;
i__13278 = G__13287;
continue;
} else {
var element = cljs.core.first.call(null,seq__13275__$1);
var item_13288 = the_narrator_is_dyxleic.core.create_item.call(null,element);
list.appendChild(item_13288);

var G__13289 = cljs.core.next.call(null,seq__13275__$1);
var G__13290 = null;
var G__13291 = (0);
var G__13292 = (0);
seq__13275 = G__13289;
chunk__13276 = G__13290;
count__13277 = G__13291;
i__13278 = G__13292;
continue;
}
} else {
return null;
}
}
break;
}
});
the_narrator_is_dyxleic.core.increment_level_BANG_ = (function increment_level_BANG_(){
if(cljs.core._EQ_.call(null,(cljs.core.count.call(null,the_narrator_is_dyxleic.levels.levels) - (1)),the_narrator_is_dyxleic.core.get_level.call(null))){
the_narrator_is_dyxleic.core.set_display_BANG_.call(null,"game","none");

return the_narrator_is_dyxleic.core.set_display_BANG_.call(null,"outro","block");
} else {
the_narrator_is_dyxleic.core.set_level_BANG_.call(null,(the_narrator_is_dyxleic.core.get_level.call(null) + (1)));

return the_narrator_is_dyxleic.core.next_level_BANG_.call(null);
}
});
the_narrator_is_dyxleic.core.next_level_BANG_ = (function next_level_BANG_(){
var map__13294 = the_narrator_is_dyxleic.levels.levels.call(null,the_narrator_is_dyxleic.core.get_level.call(null));
var map__13294__$1 = ((cljs.core.seq_QMARK_.call(null,map__13294))?cljs.core.apply.call(null,cljs.core.hash_map,map__13294):map__13294);
var target = cljs.core.get.call(null,map__13294__$1,new cljs.core.Keyword(null,"target","target",253001721));
var start = cljs.core.get.call(null,map__13294__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var text_after = cljs.core.get.call(null,map__13294__$1,new cljs.core.Keyword(null,"text-after","text-after",-1882964597));
var text_before = cljs.core.get.call(null,map__13294__$1,new cljs.core.Keyword(null,"text-before","text-before",1093985884));
var operations = cljs.core.get.call(null,map__13294__$1,new cljs.core.Keyword(null,"operations","operations",1630691895));
the_narrator_is_dyxleic.core.update_list_BANG_.call(null,operations);

the_narrator_is_dyxleic.core.set_line_BANG_.call(null,text_before,text_after);

the_narrator_is_dyxleic.core.set_start_BANG_.call(null,start);

the_narrator_is_dyxleic.core.set_current_BANG_.call(null,start);

return the_narrator_is_dyxleic.core.set_target_BANG_.call(null,target);
});
the_narrator_is_dyxleic.core.set_display_BANG_ = (function set_display_BANG_(id,visibility){
return document.getElementById(id).style.display = visibility;
});
the_narrator_is_dyxleic.core.add_click_listener_BANG_ = (function add_click_listener_BANG_(id,listener){
return document.getElementById(id).addEventListener("click",listener);
});
the_narrator_is_dyxleic.core.set_level_BANG_.call(null,(0));
the_narrator_is_dyxleic.core.add_click_listener_BANG_.call(null,"begin1",(function (){
the_narrator_is_dyxleic.core.set_display_BANG_.call(null,"intro1","none");

the_narrator_is_dyxleic.core.set_display_BANG_.call(null,"intro2","block");

return the_narrator_is_dyxleic.core.add_click_listener_BANG_.call(null,"begin2",(function (){
the_narrator_is_dyxleic.core.set_display_BANG_.call(null,"intro2","none");

the_narrator_is_dyxleic.core.set_display_BANG_.call(null,"game","block");

the_narrator_is_dyxleic.core.add_click_listener_BANG_.call(null,"reset",(function (){
return the_narrator_is_dyxleic.core.set_current_BANG_.call(null,the_narrator_is_dyxleic.core.get_start.call(null));
}));

return the_narrator_is_dyxleic.core.next_level_BANG_.call(null);
}));
}));

//# sourceMappingURL=core.js.map
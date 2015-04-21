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
the_narrator_is_dyxleic.core.operations = cljs.core.PersistentHashMap.fromArrays(["rrr -> o","rh -> reh","pop","reverse","duplicate","rr -> a","duplicate-last","push-s","ef -> aef","push-as","rotate","push-r"],[(function (p1__25737_SHARP_){
return clojure.string.replace.call(null,p1__25737_SHARP_,/rrr/,"o");
}),(function (p1__25738_SHARP_){
return clojure.string.replace.call(null,p1__25738_SHARP_,/rh/,"reh");
}),(function (p1__25730_SHARP_){
return cljs.core.subs.call(null,p1__25730_SHARP_,(0),(cljs.core.count.call(null,p1__25730_SHARP_) - (1)));
}),clojure.string.reverse,(function (p1__25731_SHARP_){
return [cljs.core.str(p1__25731_SHARP_),cljs.core.str(p1__25731_SHARP_)].join('');
}),(function (p1__25736_SHARP_){
return clojure.string.replace.call(null,p1__25736_SHARP_,/rr/,"a");
}),(function (p1__25732_SHARP_){
return [cljs.core.str(p1__25732_SHARP_),cljs.core.str(cljs.core.last.call(null,p1__25732_SHARP_))].join('');
}),(function (p1__25733_SHARP_){
return [cljs.core.str(p1__25733_SHARP_),cljs.core.str("s")].join('');
}),(function (p1__25739_SHARP_){
return clojure.string.replace.call(null,p1__25739_SHARP_,/ef/,"aef");
}),(function (p1__25735_SHARP_){
return [cljs.core.str(p1__25735_SHARP_),cljs.core.str("as")].join('');
}),(function (p1__25729_SHARP_){
return [cljs.core.str(cljs.core.last.call(null,p1__25729_SHARP_)),cljs.core.str(cljs.core.subs.call(null,p1__25729_SHARP_,(0),(cljs.core.count.call(null,p1__25729_SHARP_) - (1))))].join('');
}),(function (p1__25734_SHARP_){
return [cljs.core.str(p1__25734_SHARP_),cljs.core.str("r")].join('');
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

var seq__25744 = cljs.core.seq.call(null,elements);
var chunk__25745 = null;
var count__25746 = (0);
var i__25747 = (0);
while(true){
if((i__25747 < count__25746)){
var element = cljs.core._nth.call(null,chunk__25745,i__25747);
var item_25748 = the_narrator_is_dyxleic.core.create_item.call(null,element);
list.appendChild(item_25748);

var G__25749 = seq__25744;
var G__25750 = chunk__25745;
var G__25751 = count__25746;
var G__25752 = (i__25747 + (1));
seq__25744 = G__25749;
chunk__25745 = G__25750;
count__25746 = G__25751;
i__25747 = G__25752;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__25744);
if(temp__4126__auto__){
var seq__25744__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25744__$1)){
var c__4559__auto__ = cljs.core.chunk_first.call(null,seq__25744__$1);
var G__25753 = cljs.core.chunk_rest.call(null,seq__25744__$1);
var G__25754 = c__4559__auto__;
var G__25755 = cljs.core.count.call(null,c__4559__auto__);
var G__25756 = (0);
seq__25744 = G__25753;
chunk__25745 = G__25754;
count__25746 = G__25755;
i__25747 = G__25756;
continue;
} else {
var element = cljs.core.first.call(null,seq__25744__$1);
var item_25757 = the_narrator_is_dyxleic.core.create_item.call(null,element);
list.appendChild(item_25757);

var G__25758 = cljs.core.next.call(null,seq__25744__$1);
var G__25759 = null;
var G__25760 = (0);
var G__25761 = (0);
seq__25744 = G__25758;
chunk__25745 = G__25759;
count__25746 = G__25760;
i__25747 = G__25761;
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
var map__25763 = the_narrator_is_dyxleic.levels.levels.call(null,the_narrator_is_dyxleic.core.get_level.call(null));
var map__25763__$1 = ((cljs.core.seq_QMARK_.call(null,map__25763))?cljs.core.apply.call(null,cljs.core.hash_map,map__25763):map__25763);
var target = cljs.core.get.call(null,map__25763__$1,new cljs.core.Keyword(null,"target","target",253001721));
var start = cljs.core.get.call(null,map__25763__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var text_after = cljs.core.get.call(null,map__25763__$1,new cljs.core.Keyword(null,"text-after","text-after",-1882964597));
var text_before = cljs.core.get.call(null,map__25763__$1,new cljs.core.Keyword(null,"text-before","text-before",1093985884));
var operations = cljs.core.get.call(null,map__25763__$1,new cljs.core.Keyword(null,"operations","operations",1630691895));
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
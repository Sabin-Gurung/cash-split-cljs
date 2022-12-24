goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_19591 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_19591(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_19592 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_19592(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__18594 = coll;
var G__18595 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__18594,G__18595) : shadow.dom.lazy_native_coll_seq.call(null,G__18594,G__18595));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__18626 = arguments.length;
switch (G__18626) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__18657 = arguments.length;
switch (G__18657) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__18679 = arguments.length;
switch (G__18679) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__18694 = arguments.length;
switch (G__18694) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__18702 = arguments.length;
switch (G__18702) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__18728 = arguments.length;
switch (G__18728) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e18738){if((e18738 instanceof Object)){
var e = e18738;
return console.log("didnt support attachEvent",el,e);
} else {
throw e18738;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__18746 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__18747 = null;
var count__18748 = (0);
var i__18749 = (0);
while(true){
if((i__18749 < count__18748)){
var el = chunk__18747.cljs$core$IIndexed$_nth$arity$2(null,i__18749);
var handler_19603__$1 = ((function (seq__18746,chunk__18747,count__18748,i__18749,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__18746,chunk__18747,count__18748,i__18749,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_19603__$1);


var G__19604 = seq__18746;
var G__19605 = chunk__18747;
var G__19606 = count__18748;
var G__19607 = (i__18749 + (1));
seq__18746 = G__19604;
chunk__18747 = G__19605;
count__18748 = G__19606;
i__18749 = G__19607;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18746);
if(temp__5804__auto__){
var seq__18746__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18746__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18746__$1);
var G__19608 = cljs.core.chunk_rest(seq__18746__$1);
var G__19609 = c__5568__auto__;
var G__19610 = cljs.core.count(c__5568__auto__);
var G__19611 = (0);
seq__18746 = G__19608;
chunk__18747 = G__19609;
count__18748 = G__19610;
i__18749 = G__19611;
continue;
} else {
var el = cljs.core.first(seq__18746__$1);
var handler_19612__$1 = ((function (seq__18746,chunk__18747,count__18748,i__18749,el,seq__18746__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__18746,chunk__18747,count__18748,i__18749,el,seq__18746__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_19612__$1);


var G__19613 = cljs.core.next(seq__18746__$1);
var G__19614 = null;
var G__19615 = (0);
var G__19616 = (0);
seq__18746 = G__19613;
chunk__18747 = G__19614;
count__18748 = G__19615;
i__18749 = G__19616;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__18770 = arguments.length;
switch (G__18770) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__18781 = cljs.core.seq(events);
var chunk__18782 = null;
var count__18783 = (0);
var i__18784 = (0);
while(true){
if((i__18784 < count__18783)){
var vec__18796 = chunk__18782.cljs$core$IIndexed$_nth$arity$2(null,i__18784);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18796,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18796,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19618 = seq__18781;
var G__19619 = chunk__18782;
var G__19620 = count__18783;
var G__19621 = (i__18784 + (1));
seq__18781 = G__19618;
chunk__18782 = G__19619;
count__18783 = G__19620;
i__18784 = G__19621;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18781);
if(temp__5804__auto__){
var seq__18781__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18781__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18781__$1);
var G__19622 = cljs.core.chunk_rest(seq__18781__$1);
var G__19623 = c__5568__auto__;
var G__19624 = cljs.core.count(c__5568__auto__);
var G__19625 = (0);
seq__18781 = G__19622;
chunk__18782 = G__19623;
count__18783 = G__19624;
i__18784 = G__19625;
continue;
} else {
var vec__18803 = cljs.core.first(seq__18781__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18803,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18803,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19626 = cljs.core.next(seq__18781__$1);
var G__19627 = null;
var G__19628 = (0);
var G__19629 = (0);
seq__18781 = G__19626;
chunk__18782 = G__19627;
count__18783 = G__19628;
i__18784 = G__19629;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__18812 = cljs.core.seq(styles);
var chunk__18813 = null;
var count__18814 = (0);
var i__18815 = (0);
while(true){
if((i__18815 < count__18814)){
var vec__18831 = chunk__18813.cljs$core$IIndexed$_nth$arity$2(null,i__18815);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18831,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18831,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19630 = seq__18812;
var G__19631 = chunk__18813;
var G__19632 = count__18814;
var G__19633 = (i__18815 + (1));
seq__18812 = G__19630;
chunk__18813 = G__19631;
count__18814 = G__19632;
i__18815 = G__19633;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18812);
if(temp__5804__auto__){
var seq__18812__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18812__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18812__$1);
var G__19634 = cljs.core.chunk_rest(seq__18812__$1);
var G__19635 = c__5568__auto__;
var G__19636 = cljs.core.count(c__5568__auto__);
var G__19637 = (0);
seq__18812 = G__19634;
chunk__18813 = G__19635;
count__18814 = G__19636;
i__18815 = G__19637;
continue;
} else {
var vec__18848 = cljs.core.first(seq__18812__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18848,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18848,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19638 = cljs.core.next(seq__18812__$1);
var G__19639 = null;
var G__19640 = (0);
var G__19641 = (0);
seq__18812 = G__19638;
chunk__18813 = G__19639;
count__18814 = G__19640;
i__18815 = G__19641;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__18863_19642 = key;
var G__18863_19643__$1 = (((G__18863_19642 instanceof cljs.core.Keyword))?G__18863_19642.fqn:null);
switch (G__18863_19643__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_19645 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_19645,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_19645,"aria-");
}
})())){
el.setAttribute(ks_19645,value);
} else {
(el[ks_19645] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__18918){
var map__18919 = p__18918;
var map__18919__$1 = cljs.core.__destructure_map(map__18919);
var props = map__18919__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18919__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__18921 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18921,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18921,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18921,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__18925 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__18925,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__18925;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__18929 = arguments.length;
switch (G__18929) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__18937){
var vec__18938 = p__18937;
var seq__18939 = cljs.core.seq(vec__18938);
var first__18940 = cljs.core.first(seq__18939);
var seq__18939__$1 = cljs.core.next(seq__18939);
var nn = first__18940;
var first__18940__$1 = cljs.core.first(seq__18939__$1);
var seq__18939__$2 = cljs.core.next(seq__18939__$1);
var np = first__18940__$1;
var nc = seq__18939__$2;
var node = vec__18938;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18942 = nn;
var G__18943 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18942,G__18943) : create_fn.call(null,G__18942,G__18943));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18945 = nn;
var G__18946 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18945,G__18946) : create_fn.call(null,G__18945,G__18946));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__18950 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18950,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18950,(1),null);
var seq__18953_19653 = cljs.core.seq(node_children);
var chunk__18954_19654 = null;
var count__18955_19655 = (0);
var i__18956_19656 = (0);
while(true){
if((i__18956_19656 < count__18955_19655)){
var child_struct_19658 = chunk__18954_19654.cljs$core$IIndexed$_nth$arity$2(null,i__18956_19656);
var children_19663 = shadow.dom.dom_node(child_struct_19658);
if(cljs.core.seq_QMARK_(children_19663)){
var seq__19010_19665 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19663));
var chunk__19012_19666 = null;
var count__19013_19667 = (0);
var i__19014_19668 = (0);
while(true){
if((i__19014_19668 < count__19013_19667)){
var child_19670 = chunk__19012_19666.cljs$core$IIndexed$_nth$arity$2(null,i__19014_19668);
if(cljs.core.truth_(child_19670)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19670);


var G__19671 = seq__19010_19665;
var G__19672 = chunk__19012_19666;
var G__19673 = count__19013_19667;
var G__19674 = (i__19014_19668 + (1));
seq__19010_19665 = G__19671;
chunk__19012_19666 = G__19672;
count__19013_19667 = G__19673;
i__19014_19668 = G__19674;
continue;
} else {
var G__19675 = seq__19010_19665;
var G__19676 = chunk__19012_19666;
var G__19678 = count__19013_19667;
var G__19679 = (i__19014_19668 + (1));
seq__19010_19665 = G__19675;
chunk__19012_19666 = G__19676;
count__19013_19667 = G__19678;
i__19014_19668 = G__19679;
continue;
}
} else {
var temp__5804__auto___19680 = cljs.core.seq(seq__19010_19665);
if(temp__5804__auto___19680){
var seq__19010_19681__$1 = temp__5804__auto___19680;
if(cljs.core.chunked_seq_QMARK_(seq__19010_19681__$1)){
var c__5568__auto___19683 = cljs.core.chunk_first(seq__19010_19681__$1);
var G__19684 = cljs.core.chunk_rest(seq__19010_19681__$1);
var G__19685 = c__5568__auto___19683;
var G__19686 = cljs.core.count(c__5568__auto___19683);
var G__19687 = (0);
seq__19010_19665 = G__19684;
chunk__19012_19666 = G__19685;
count__19013_19667 = G__19686;
i__19014_19668 = G__19687;
continue;
} else {
var child_19688 = cljs.core.first(seq__19010_19681__$1);
if(cljs.core.truth_(child_19688)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19688);


var G__19690 = cljs.core.next(seq__19010_19681__$1);
var G__19691 = null;
var G__19692 = (0);
var G__19693 = (0);
seq__19010_19665 = G__19690;
chunk__19012_19666 = G__19691;
count__19013_19667 = G__19692;
i__19014_19668 = G__19693;
continue;
} else {
var G__19694 = cljs.core.next(seq__19010_19681__$1);
var G__19695 = null;
var G__19696 = (0);
var G__19697 = (0);
seq__19010_19665 = G__19694;
chunk__19012_19666 = G__19695;
count__19013_19667 = G__19696;
i__19014_19668 = G__19697;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19663);
}


var G__19699 = seq__18953_19653;
var G__19700 = chunk__18954_19654;
var G__19701 = count__18955_19655;
var G__19702 = (i__18956_19656 + (1));
seq__18953_19653 = G__19699;
chunk__18954_19654 = G__19700;
count__18955_19655 = G__19701;
i__18956_19656 = G__19702;
continue;
} else {
var temp__5804__auto___19711 = cljs.core.seq(seq__18953_19653);
if(temp__5804__auto___19711){
var seq__18953_19712__$1 = temp__5804__auto___19711;
if(cljs.core.chunked_seq_QMARK_(seq__18953_19712__$1)){
var c__5568__auto___19713 = cljs.core.chunk_first(seq__18953_19712__$1);
var G__19714 = cljs.core.chunk_rest(seq__18953_19712__$1);
var G__19715 = c__5568__auto___19713;
var G__19716 = cljs.core.count(c__5568__auto___19713);
var G__19717 = (0);
seq__18953_19653 = G__19714;
chunk__18954_19654 = G__19715;
count__18955_19655 = G__19716;
i__18956_19656 = G__19717;
continue;
} else {
var child_struct_19718 = cljs.core.first(seq__18953_19712__$1);
var children_19723 = shadow.dom.dom_node(child_struct_19718);
if(cljs.core.seq_QMARK_(children_19723)){
var seq__19028_19724 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19723));
var chunk__19030_19725 = null;
var count__19031_19726 = (0);
var i__19032_19727 = (0);
while(true){
if((i__19032_19727 < count__19031_19726)){
var child_19728 = chunk__19030_19725.cljs$core$IIndexed$_nth$arity$2(null,i__19032_19727);
if(cljs.core.truth_(child_19728)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19728);


var G__19733 = seq__19028_19724;
var G__19734 = chunk__19030_19725;
var G__19735 = count__19031_19726;
var G__19736 = (i__19032_19727 + (1));
seq__19028_19724 = G__19733;
chunk__19030_19725 = G__19734;
count__19031_19726 = G__19735;
i__19032_19727 = G__19736;
continue;
} else {
var G__19737 = seq__19028_19724;
var G__19738 = chunk__19030_19725;
var G__19739 = count__19031_19726;
var G__19740 = (i__19032_19727 + (1));
seq__19028_19724 = G__19737;
chunk__19030_19725 = G__19738;
count__19031_19726 = G__19739;
i__19032_19727 = G__19740;
continue;
}
} else {
var temp__5804__auto___19741__$1 = cljs.core.seq(seq__19028_19724);
if(temp__5804__auto___19741__$1){
var seq__19028_19748__$1 = temp__5804__auto___19741__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19028_19748__$1)){
var c__5568__auto___19749 = cljs.core.chunk_first(seq__19028_19748__$1);
var G__19750 = cljs.core.chunk_rest(seq__19028_19748__$1);
var G__19751 = c__5568__auto___19749;
var G__19752 = cljs.core.count(c__5568__auto___19749);
var G__19753 = (0);
seq__19028_19724 = G__19750;
chunk__19030_19725 = G__19751;
count__19031_19726 = G__19752;
i__19032_19727 = G__19753;
continue;
} else {
var child_19754 = cljs.core.first(seq__19028_19748__$1);
if(cljs.core.truth_(child_19754)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19754);


var G__19760 = cljs.core.next(seq__19028_19748__$1);
var G__19761 = null;
var G__19762 = (0);
var G__19763 = (0);
seq__19028_19724 = G__19760;
chunk__19030_19725 = G__19761;
count__19031_19726 = G__19762;
i__19032_19727 = G__19763;
continue;
} else {
var G__19764 = cljs.core.next(seq__19028_19748__$1);
var G__19765 = null;
var G__19766 = (0);
var G__19767 = (0);
seq__19028_19724 = G__19764;
chunk__19030_19725 = G__19765;
count__19031_19726 = G__19766;
i__19032_19727 = G__19767;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19723);
}


var G__19768 = cljs.core.next(seq__18953_19712__$1);
var G__19769 = null;
var G__19770 = (0);
var G__19771 = (0);
seq__18953_19653 = G__19768;
chunk__18954_19654 = G__19769;
count__18955_19655 = G__19770;
i__18956_19656 = G__19771;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__19055 = cljs.core.seq(node);
var chunk__19056 = null;
var count__19057 = (0);
var i__19058 = (0);
while(true){
if((i__19058 < count__19057)){
var n = chunk__19056.cljs$core$IIndexed$_nth$arity$2(null,i__19058);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19776 = seq__19055;
var G__19777 = chunk__19056;
var G__19778 = count__19057;
var G__19779 = (i__19058 + (1));
seq__19055 = G__19776;
chunk__19056 = G__19777;
count__19057 = G__19778;
i__19058 = G__19779;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19055);
if(temp__5804__auto__){
var seq__19055__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19055__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19055__$1);
var G__19780 = cljs.core.chunk_rest(seq__19055__$1);
var G__19781 = c__5568__auto__;
var G__19782 = cljs.core.count(c__5568__auto__);
var G__19783 = (0);
seq__19055 = G__19780;
chunk__19056 = G__19781;
count__19057 = G__19782;
i__19058 = G__19783;
continue;
} else {
var n = cljs.core.first(seq__19055__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19784 = cljs.core.next(seq__19055__$1);
var G__19785 = null;
var G__19786 = (0);
var G__19787 = (0);
seq__19055 = G__19784;
chunk__19056 = G__19785;
count__19057 = G__19786;
i__19058 = G__19787;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__19063 = arguments.length;
switch (G__19063) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__19069 = arguments.length;
switch (G__19069) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__19100 = arguments.length;
switch (G__19100) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19811 = arguments.length;
var i__5770__auto___19812 = (0);
while(true){
if((i__5770__auto___19812 < len__5769__auto___19811)){
args__5775__auto__.push((arguments[i__5770__auto___19812]));

var G__19813 = (i__5770__auto___19812 + (1));
i__5770__auto___19812 = G__19813;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__19134_19823 = cljs.core.seq(nodes);
var chunk__19135_19824 = null;
var count__19136_19825 = (0);
var i__19137_19826 = (0);
while(true){
if((i__19137_19826 < count__19136_19825)){
var node_19827 = chunk__19135_19824.cljs$core$IIndexed$_nth$arity$2(null,i__19137_19826);
fragment.appendChild(shadow.dom._to_dom(node_19827));


var G__19828 = seq__19134_19823;
var G__19829 = chunk__19135_19824;
var G__19830 = count__19136_19825;
var G__19831 = (i__19137_19826 + (1));
seq__19134_19823 = G__19828;
chunk__19135_19824 = G__19829;
count__19136_19825 = G__19830;
i__19137_19826 = G__19831;
continue;
} else {
var temp__5804__auto___19832 = cljs.core.seq(seq__19134_19823);
if(temp__5804__auto___19832){
var seq__19134_19833__$1 = temp__5804__auto___19832;
if(cljs.core.chunked_seq_QMARK_(seq__19134_19833__$1)){
var c__5568__auto___19835 = cljs.core.chunk_first(seq__19134_19833__$1);
var G__19838 = cljs.core.chunk_rest(seq__19134_19833__$1);
var G__19839 = c__5568__auto___19835;
var G__19840 = cljs.core.count(c__5568__auto___19835);
var G__19841 = (0);
seq__19134_19823 = G__19838;
chunk__19135_19824 = G__19839;
count__19136_19825 = G__19840;
i__19137_19826 = G__19841;
continue;
} else {
var node_19843 = cljs.core.first(seq__19134_19833__$1);
fragment.appendChild(shadow.dom._to_dom(node_19843));


var G__19844 = cljs.core.next(seq__19134_19833__$1);
var G__19845 = null;
var G__19846 = (0);
var G__19847 = (0);
seq__19134_19823 = G__19844;
chunk__19135_19824 = G__19845;
count__19136_19825 = G__19846;
i__19137_19826 = G__19847;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq19132){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19132));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__19143_19862 = cljs.core.seq(scripts);
var chunk__19144_19863 = null;
var count__19145_19864 = (0);
var i__19146_19865 = (0);
while(true){
if((i__19146_19865 < count__19145_19864)){
var vec__19160_19867 = chunk__19144_19863.cljs$core$IIndexed$_nth$arity$2(null,i__19146_19865);
var script_tag_19868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19160_19867,(0),null);
var script_body_19869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19160_19867,(1),null);
eval(script_body_19869);


var G__19871 = seq__19143_19862;
var G__19872 = chunk__19144_19863;
var G__19873 = count__19145_19864;
var G__19874 = (i__19146_19865 + (1));
seq__19143_19862 = G__19871;
chunk__19144_19863 = G__19872;
count__19145_19864 = G__19873;
i__19146_19865 = G__19874;
continue;
} else {
var temp__5804__auto___19876 = cljs.core.seq(seq__19143_19862);
if(temp__5804__auto___19876){
var seq__19143_19881__$1 = temp__5804__auto___19876;
if(cljs.core.chunked_seq_QMARK_(seq__19143_19881__$1)){
var c__5568__auto___19887 = cljs.core.chunk_first(seq__19143_19881__$1);
var G__19889 = cljs.core.chunk_rest(seq__19143_19881__$1);
var G__19890 = c__5568__auto___19887;
var G__19891 = cljs.core.count(c__5568__auto___19887);
var G__19892 = (0);
seq__19143_19862 = G__19889;
chunk__19144_19863 = G__19890;
count__19145_19864 = G__19891;
i__19146_19865 = G__19892;
continue;
} else {
var vec__19166_19894 = cljs.core.first(seq__19143_19881__$1);
var script_tag_19895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19166_19894,(0),null);
var script_body_19897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19166_19894,(1),null);
eval(script_body_19897);


var G__19912 = cljs.core.next(seq__19143_19881__$1);
var G__19913 = null;
var G__19914 = (0);
var G__19915 = (0);
seq__19143_19862 = G__19912;
chunk__19144_19863 = G__19913;
count__19145_19864 = G__19914;
i__19146_19865 = G__19915;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__19172){
var vec__19174 = p__19172;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19174,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19174,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__19193 = arguments.length;
switch (G__19193) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__19218 = cljs.core.seq(style_keys);
var chunk__19219 = null;
var count__19220 = (0);
var i__19221 = (0);
while(true){
if((i__19221 < count__19220)){
var it = chunk__19219.cljs$core$IIndexed$_nth$arity$2(null,i__19221);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19959 = seq__19218;
var G__19960 = chunk__19219;
var G__19961 = count__19220;
var G__19962 = (i__19221 + (1));
seq__19218 = G__19959;
chunk__19219 = G__19960;
count__19220 = G__19961;
i__19221 = G__19962;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19218);
if(temp__5804__auto__){
var seq__19218__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19218__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19218__$1);
var G__19965 = cljs.core.chunk_rest(seq__19218__$1);
var G__19966 = c__5568__auto__;
var G__19967 = cljs.core.count(c__5568__auto__);
var G__19968 = (0);
seq__19218 = G__19965;
chunk__19219 = G__19966;
count__19220 = G__19967;
i__19221 = G__19968;
continue;
} else {
var it = cljs.core.first(seq__19218__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19970 = cljs.core.next(seq__19218__$1);
var G__19971 = null;
var G__19972 = (0);
var G__19973 = (0);
seq__19218 = G__19970;
chunk__19219 = G__19971;
count__19220 = G__19972;
i__19221 = G__19973;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k19228,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__19244 = k19228;
var G__19244__$1 = (((G__19244 instanceof cljs.core.Keyword))?G__19244.fqn:null);
switch (G__19244__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19228,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__19249){
var vec__19251 = p__19249;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19251,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19251,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19227){
var self__ = this;
var G__19227__$1 = this;
return (new cljs.core.RecordIter((0),G__19227__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19229,other19230){
var self__ = this;
var this19229__$1 = this;
return (((!((other19230 == null)))) && ((((this19229__$1.constructor === other19230.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19229__$1.x,other19230.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19229__$1.y,other19230.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19229__$1.__extmap,other19230.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k19228){
var self__ = this;
var this__5350__auto____$1 = this;
var G__19294 = k19228;
var G__19294__$1 = (((G__19294 instanceof cljs.core.Keyword))?G__19294.fqn:null);
switch (G__19294__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k19228);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__19227){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__19301 = cljs.core.keyword_identical_QMARK_;
var expr__19302 = k__5352__auto__;
if(cljs.core.truth_((pred__19301.cljs$core$IFn$_invoke$arity$2 ? pred__19301.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__19302) : pred__19301.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__19302)))){
return (new shadow.dom.Coordinate(G__19227,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__19301.cljs$core$IFn$_invoke$arity$2 ? pred__19301.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__19302) : pred__19301.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__19302)))){
return (new shadow.dom.Coordinate(self__.x,G__19227,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__19227),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__19227){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__19227,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__19236){
var extmap__5385__auto__ = (function (){var G__19320 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19236,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__19236)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19320);
} else {
return G__19320;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__19236),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__19236),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k19329,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__19339 = k19329;
var G__19339__$1 = (((G__19339 instanceof cljs.core.Keyword))?G__19339.fqn:null);
switch (G__19339__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19329,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__19345){
var vec__19346 = p__19345;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19346,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19346,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19328){
var self__ = this;
var G__19328__$1 = this;
return (new cljs.core.RecordIter((0),G__19328__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19330,other19331){
var self__ = this;
var this19330__$1 = this;
return (((!((other19331 == null)))) && ((((this19330__$1.constructor === other19331.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19330__$1.w,other19331.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19330__$1.h,other19331.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19330__$1.__extmap,other19331.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k19329){
var self__ = this;
var this__5350__auto____$1 = this;
var G__19370 = k19329;
var G__19370__$1 = (((G__19370 instanceof cljs.core.Keyword))?G__19370.fqn:null);
switch (G__19370__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k19329);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__19328){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__19380 = cljs.core.keyword_identical_QMARK_;
var expr__19381 = k__5352__auto__;
if(cljs.core.truth_((pred__19380.cljs$core$IFn$_invoke$arity$2 ? pred__19380.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__19381) : pred__19380.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__19381)))){
return (new shadow.dom.Size(G__19328,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__19380.cljs$core$IFn$_invoke$arity$2 ? pred__19380.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__19381) : pred__19380.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__19381)))){
return (new shadow.dom.Size(self__.w,G__19328,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__19328),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__19328){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__19328,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__19333){
var extmap__5385__auto__ = (function (){var G__19398 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19333,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__19333)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19398);
} else {
return G__19398;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__19333),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__19333),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__20038 = (i + (1));
var G__20039 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__20038;
ret = G__20039;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19424){
var vec__19426 = p__19424;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19426,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19426,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__19432 = arguments.length;
switch (G__19432) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__20052 = ps;
var G__20053 = (i + (1));
el__$1 = G__20052;
i = G__20053;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__19470 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19470,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19470,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19470,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__19475_20057 = cljs.core.seq(props);
var chunk__19476_20058 = null;
var count__19477_20059 = (0);
var i__19478_20060 = (0);
while(true){
if((i__19478_20060 < count__19477_20059)){
var vec__19500_20061 = chunk__19476_20058.cljs$core$IIndexed$_nth$arity$2(null,i__19478_20060);
var k_20062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19500_20061,(0),null);
var v_20063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19500_20061,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_20062);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_20062),v_20063);


var G__20064 = seq__19475_20057;
var G__20065 = chunk__19476_20058;
var G__20066 = count__19477_20059;
var G__20067 = (i__19478_20060 + (1));
seq__19475_20057 = G__20064;
chunk__19476_20058 = G__20065;
count__19477_20059 = G__20066;
i__19478_20060 = G__20067;
continue;
} else {
var temp__5804__auto___20068 = cljs.core.seq(seq__19475_20057);
if(temp__5804__auto___20068){
var seq__19475_20074__$1 = temp__5804__auto___20068;
if(cljs.core.chunked_seq_QMARK_(seq__19475_20074__$1)){
var c__5568__auto___20075 = cljs.core.chunk_first(seq__19475_20074__$1);
var G__20076 = cljs.core.chunk_rest(seq__19475_20074__$1);
var G__20077 = c__5568__auto___20075;
var G__20078 = cljs.core.count(c__5568__auto___20075);
var G__20079 = (0);
seq__19475_20057 = G__20076;
chunk__19476_20058 = G__20077;
count__19477_20059 = G__20078;
i__19478_20060 = G__20079;
continue;
} else {
var vec__19508_20080 = cljs.core.first(seq__19475_20074__$1);
var k_20081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19508_20080,(0),null);
var v_20082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19508_20080,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_20081);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_20081),v_20082);


var G__20083 = cljs.core.next(seq__19475_20074__$1);
var G__20084 = null;
var G__20085 = (0);
var G__20086 = (0);
seq__19475_20057 = G__20083;
chunk__19476_20058 = G__20084;
count__19477_20059 = G__20085;
i__19478_20060 = G__20086;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__19517 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19517,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19517,(1),null);
var seq__19522_20087 = cljs.core.seq(node_children);
var chunk__19524_20088 = null;
var count__19525_20089 = (0);
var i__19526_20090 = (0);
while(true){
if((i__19526_20090 < count__19525_20089)){
var child_struct_20091 = chunk__19524_20088.cljs$core$IIndexed$_nth$arity$2(null,i__19526_20090);
if((!((child_struct_20091 == null)))){
if(typeof child_struct_20091 === 'string'){
var text_20092 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_20092),child_struct_20091].join(''));
} else {
var children_20093 = shadow.dom.svg_node(child_struct_20091);
if(cljs.core.seq_QMARK_(children_20093)){
var seq__19549_20094 = cljs.core.seq(children_20093);
var chunk__19551_20095 = null;
var count__19552_20096 = (0);
var i__19553_20097 = (0);
while(true){
if((i__19553_20097 < count__19552_20096)){
var child_20098 = chunk__19551_20095.cljs$core$IIndexed$_nth$arity$2(null,i__19553_20097);
if(cljs.core.truth_(child_20098)){
node.appendChild(child_20098);


var G__20099 = seq__19549_20094;
var G__20100 = chunk__19551_20095;
var G__20101 = count__19552_20096;
var G__20102 = (i__19553_20097 + (1));
seq__19549_20094 = G__20099;
chunk__19551_20095 = G__20100;
count__19552_20096 = G__20101;
i__19553_20097 = G__20102;
continue;
} else {
var G__20103 = seq__19549_20094;
var G__20104 = chunk__19551_20095;
var G__20105 = count__19552_20096;
var G__20106 = (i__19553_20097 + (1));
seq__19549_20094 = G__20103;
chunk__19551_20095 = G__20104;
count__19552_20096 = G__20105;
i__19553_20097 = G__20106;
continue;
}
} else {
var temp__5804__auto___20107 = cljs.core.seq(seq__19549_20094);
if(temp__5804__auto___20107){
var seq__19549_20108__$1 = temp__5804__auto___20107;
if(cljs.core.chunked_seq_QMARK_(seq__19549_20108__$1)){
var c__5568__auto___20109 = cljs.core.chunk_first(seq__19549_20108__$1);
var G__20110 = cljs.core.chunk_rest(seq__19549_20108__$1);
var G__20111 = c__5568__auto___20109;
var G__20112 = cljs.core.count(c__5568__auto___20109);
var G__20113 = (0);
seq__19549_20094 = G__20110;
chunk__19551_20095 = G__20111;
count__19552_20096 = G__20112;
i__19553_20097 = G__20113;
continue;
} else {
var child_20115 = cljs.core.first(seq__19549_20108__$1);
if(cljs.core.truth_(child_20115)){
node.appendChild(child_20115);


var G__20116 = cljs.core.next(seq__19549_20108__$1);
var G__20117 = null;
var G__20118 = (0);
var G__20119 = (0);
seq__19549_20094 = G__20116;
chunk__19551_20095 = G__20117;
count__19552_20096 = G__20118;
i__19553_20097 = G__20119;
continue;
} else {
var G__20120 = cljs.core.next(seq__19549_20108__$1);
var G__20121 = null;
var G__20122 = (0);
var G__20123 = (0);
seq__19549_20094 = G__20120;
chunk__19551_20095 = G__20121;
count__19552_20096 = G__20122;
i__19553_20097 = G__20123;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_20093);
}
}


var G__20124 = seq__19522_20087;
var G__20125 = chunk__19524_20088;
var G__20126 = count__19525_20089;
var G__20127 = (i__19526_20090 + (1));
seq__19522_20087 = G__20124;
chunk__19524_20088 = G__20125;
count__19525_20089 = G__20126;
i__19526_20090 = G__20127;
continue;
} else {
var G__20128 = seq__19522_20087;
var G__20129 = chunk__19524_20088;
var G__20130 = count__19525_20089;
var G__20131 = (i__19526_20090 + (1));
seq__19522_20087 = G__20128;
chunk__19524_20088 = G__20129;
count__19525_20089 = G__20130;
i__19526_20090 = G__20131;
continue;
}
} else {
var temp__5804__auto___20132 = cljs.core.seq(seq__19522_20087);
if(temp__5804__auto___20132){
var seq__19522_20133__$1 = temp__5804__auto___20132;
if(cljs.core.chunked_seq_QMARK_(seq__19522_20133__$1)){
var c__5568__auto___20134 = cljs.core.chunk_first(seq__19522_20133__$1);
var G__20135 = cljs.core.chunk_rest(seq__19522_20133__$1);
var G__20136 = c__5568__auto___20134;
var G__20137 = cljs.core.count(c__5568__auto___20134);
var G__20138 = (0);
seq__19522_20087 = G__20135;
chunk__19524_20088 = G__20136;
count__19525_20089 = G__20137;
i__19526_20090 = G__20138;
continue;
} else {
var child_struct_20143 = cljs.core.first(seq__19522_20133__$1);
if((!((child_struct_20143 == null)))){
if(typeof child_struct_20143 === 'string'){
var text_20145 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_20145),child_struct_20143].join(''));
} else {
var children_20150 = shadow.dom.svg_node(child_struct_20143);
if(cljs.core.seq_QMARK_(children_20150)){
var seq__19559_20152 = cljs.core.seq(children_20150);
var chunk__19561_20154 = null;
var count__19562_20155 = (0);
var i__19563_20156 = (0);
while(true){
if((i__19563_20156 < count__19562_20155)){
var child_20158 = chunk__19561_20154.cljs$core$IIndexed$_nth$arity$2(null,i__19563_20156);
if(cljs.core.truth_(child_20158)){
node.appendChild(child_20158);


var G__20159 = seq__19559_20152;
var G__20160 = chunk__19561_20154;
var G__20161 = count__19562_20155;
var G__20162 = (i__19563_20156 + (1));
seq__19559_20152 = G__20159;
chunk__19561_20154 = G__20160;
count__19562_20155 = G__20161;
i__19563_20156 = G__20162;
continue;
} else {
var G__20163 = seq__19559_20152;
var G__20164 = chunk__19561_20154;
var G__20165 = count__19562_20155;
var G__20166 = (i__19563_20156 + (1));
seq__19559_20152 = G__20163;
chunk__19561_20154 = G__20164;
count__19562_20155 = G__20165;
i__19563_20156 = G__20166;
continue;
}
} else {
var temp__5804__auto___20167__$1 = cljs.core.seq(seq__19559_20152);
if(temp__5804__auto___20167__$1){
var seq__19559_20168__$1 = temp__5804__auto___20167__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19559_20168__$1)){
var c__5568__auto___20169 = cljs.core.chunk_first(seq__19559_20168__$1);
var G__20170 = cljs.core.chunk_rest(seq__19559_20168__$1);
var G__20171 = c__5568__auto___20169;
var G__20172 = cljs.core.count(c__5568__auto___20169);
var G__20173 = (0);
seq__19559_20152 = G__20170;
chunk__19561_20154 = G__20171;
count__19562_20155 = G__20172;
i__19563_20156 = G__20173;
continue;
} else {
var child_20174 = cljs.core.first(seq__19559_20168__$1);
if(cljs.core.truth_(child_20174)){
node.appendChild(child_20174);


var G__20175 = cljs.core.next(seq__19559_20168__$1);
var G__20176 = null;
var G__20177 = (0);
var G__20178 = (0);
seq__19559_20152 = G__20175;
chunk__19561_20154 = G__20176;
count__19562_20155 = G__20177;
i__19563_20156 = G__20178;
continue;
} else {
var G__20179 = cljs.core.next(seq__19559_20168__$1);
var G__20180 = null;
var G__20181 = (0);
var G__20182 = (0);
seq__19559_20152 = G__20179;
chunk__19561_20154 = G__20180;
count__19562_20155 = G__20181;
i__19563_20156 = G__20182;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_20150);
}
}


var G__20183 = cljs.core.next(seq__19522_20133__$1);
var G__20184 = null;
var G__20185 = (0);
var G__20186 = (0);
seq__19522_20087 = G__20183;
chunk__19524_20088 = G__20184;
count__19525_20089 = G__20185;
i__19526_20090 = G__20186;
continue;
} else {
var G__20187 = cljs.core.next(seq__19522_20133__$1);
var G__20188 = null;
var G__20189 = (0);
var G__20190 = (0);
seq__19522_20087 = G__20187;
chunk__19524_20088 = G__20188;
count__19525_20089 = G__20189;
i__19526_20090 = G__20190;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20192 = arguments.length;
var i__5770__auto___20193 = (0);
while(true){
if((i__5770__auto___20193 < len__5769__auto___20192)){
args__5775__auto__.push((arguments[i__5770__auto___20193]));

var G__20194 = (i__5770__auto___20193 + (1));
i__5770__auto___20193 = G__20194;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq19569){
var G__19570 = cljs.core.first(seq19569);
var seq19569__$1 = cljs.core.next(seq19569);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19570,seq19569__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__19575 = arguments.length;
switch (G__19575) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__15245__auto___20200 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15246__auto__ = (function (){var switch__14992__auto__ = (function (state_19580){
var state_val_19581 = (state_19580[(1)]);
if((state_val_19581 === (1))){
var state_19580__$1 = state_19580;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19580__$1,(2),once_or_cleanup);
} else {
if((state_val_19581 === (2))){
var inst_19577 = (state_19580[(2)]);
var inst_19578 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_19580__$1 = (function (){var statearr_19582 = state_19580;
(statearr_19582[(7)] = inst_19577);

return statearr_19582;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19580__$1,inst_19578);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__14993__auto__ = null;
var shadow$dom$state_machine__14993__auto____0 = (function (){
var statearr_19583 = [null,null,null,null,null,null,null,null];
(statearr_19583[(0)] = shadow$dom$state_machine__14993__auto__);

(statearr_19583[(1)] = (1));

return statearr_19583;
});
var shadow$dom$state_machine__14993__auto____1 = (function (state_19580){
while(true){
var ret_value__14994__auto__ = (function (){try{while(true){
var result__14995__auto__ = switch__14992__auto__(state_19580);
if(cljs.core.keyword_identical_QMARK_(result__14995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14995__auto__;
}
break;
}
}catch (e19584){var ex__14996__auto__ = e19584;
var statearr_19585_20214 = state_19580;
(statearr_19585_20214[(2)] = ex__14996__auto__);


if(cljs.core.seq((state_19580[(4)]))){
var statearr_19586_20215 = state_19580;
(statearr_19586_20215[(1)] = cljs.core.first((state_19580[(4)])));

} else {
throw ex__14996__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20216 = state_19580;
state_19580 = G__20216;
continue;
} else {
return ret_value__14994__auto__;
}
break;
}
});
shadow$dom$state_machine__14993__auto__ = function(state_19580){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__14993__auto____0.call(this);
case 1:
return shadow$dom$state_machine__14993__auto____1.call(this,state_19580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__14993__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__14993__auto____0;
shadow$dom$state_machine__14993__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__14993__auto____1;
return shadow$dom$state_machine__14993__auto__;
})()
})();
var state__15247__auto__ = (function (){var statearr_19587 = f__15246__auto__();
(statearr_19587[(6)] = c__15245__auto___20200);

return statearr_19587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15247__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map

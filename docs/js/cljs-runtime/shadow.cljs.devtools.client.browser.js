goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21692 = arguments.length;
var i__5770__auto___21693 = (0);
while(true){
if((i__5770__auto___21693 < len__5769__auto___21692)){
args__5775__auto__.push((arguments[i__5770__auto___21693]));

var G__21694 = (i__5770__auto___21693 + (1));
i__5770__auto___21693 = G__21694;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq21319){
var G__21320 = cljs.core.first(seq21319);
var seq21319__$1 = cljs.core.next(seq21319);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21320,seq21319__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__21326 = cljs.core.seq(sources);
var chunk__21327 = null;
var count__21328 = (0);
var i__21329 = (0);
while(true){
if((i__21329 < count__21328)){
var map__21342 = chunk__21327.cljs$core$IIndexed$_nth$arity$2(null,i__21329);
var map__21342__$1 = cljs.core.__destructure_map(map__21342);
var src = map__21342__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21342__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21342__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21342__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21342__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21343){var e_21695 = e21343;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21695);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21695.message)].join('')));
}

var G__21696 = seq__21326;
var G__21697 = chunk__21327;
var G__21698 = count__21328;
var G__21699 = (i__21329 + (1));
seq__21326 = G__21696;
chunk__21327 = G__21697;
count__21328 = G__21698;
i__21329 = G__21699;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21326);
if(temp__5804__auto__){
var seq__21326__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21326__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21326__$1);
var G__21700 = cljs.core.chunk_rest(seq__21326__$1);
var G__21701 = c__5568__auto__;
var G__21702 = cljs.core.count(c__5568__auto__);
var G__21703 = (0);
seq__21326 = G__21700;
chunk__21327 = G__21701;
count__21328 = G__21702;
i__21329 = G__21703;
continue;
} else {
var map__21347 = cljs.core.first(seq__21326__$1);
var map__21347__$1 = cljs.core.__destructure_map(map__21347);
var src = map__21347__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21347__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21347__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21347__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21347__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21348){var e_21704 = e21348;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21704);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21704.message)].join('')));
}

var G__21705 = cljs.core.next(seq__21326__$1);
var G__21706 = null;
var G__21707 = (0);
var G__21708 = (0);
seq__21326 = G__21705;
chunk__21327 = G__21706;
count__21328 = G__21707;
i__21329 = G__21708;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__21349 = cljs.core.seq(js_requires);
var chunk__21350 = null;
var count__21351 = (0);
var i__21352 = (0);
while(true){
if((i__21352 < count__21351)){
var js_ns = chunk__21350.cljs$core$IIndexed$_nth$arity$2(null,i__21352);
var require_str_21709 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21709);


var G__21710 = seq__21349;
var G__21711 = chunk__21350;
var G__21712 = count__21351;
var G__21713 = (i__21352 + (1));
seq__21349 = G__21710;
chunk__21350 = G__21711;
count__21351 = G__21712;
i__21352 = G__21713;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21349);
if(temp__5804__auto__){
var seq__21349__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21349__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21349__$1);
var G__21714 = cljs.core.chunk_rest(seq__21349__$1);
var G__21715 = c__5568__auto__;
var G__21716 = cljs.core.count(c__5568__auto__);
var G__21717 = (0);
seq__21349 = G__21714;
chunk__21350 = G__21715;
count__21351 = G__21716;
i__21352 = G__21717;
continue;
} else {
var js_ns = cljs.core.first(seq__21349__$1);
var require_str_21718 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21718);


var G__21719 = cljs.core.next(seq__21349__$1);
var G__21720 = null;
var G__21721 = (0);
var G__21722 = (0);
seq__21349 = G__21719;
chunk__21350 = G__21720;
count__21351 = G__21721;
i__21352 = G__21722;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21354){
var map__21355 = p__21354;
var map__21355__$1 = cljs.core.__destructure_map(map__21355);
var msg = map__21355__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21355__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21355__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21357(s__21358){
return (new cljs.core.LazySeq(null,(function (){
var s__21358__$1 = s__21358;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21358__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__21363 = cljs.core.first(xs__6360__auto__);
var map__21363__$1 = cljs.core.__destructure_map(map__21363);
var src = map__21363__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21363__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21363__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__21358__$1,map__21363,map__21363__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21355,map__21355__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21357_$_iter__21359(s__21360){
return (new cljs.core.LazySeq(null,((function (s__21358__$1,map__21363,map__21363__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21355,map__21355__$1,msg,info,reload_info){
return (function (){
var s__21360__$1 = s__21360;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__21360__$1);
if(temp__5804__auto____$1){
var s__21360__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21360__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__21360__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__21362 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__21361 = (0);
while(true){
if((i__21361 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__21361);
cljs.core.chunk_append(b__21362,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21723 = (i__21361 + (1));
i__21361 = G__21723;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21362),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21357_$_iter__21359(cljs.core.chunk_rest(s__21360__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21362),null);
}
} else {
var warning = cljs.core.first(s__21360__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21357_$_iter__21359(cljs.core.rest(s__21360__$2)));
}
} else {
return null;
}
break;
}
});})(s__21358__$1,map__21363,map__21363__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21355,map__21355__$1,msg,info,reload_info))
,null,null));
});})(s__21358__$1,map__21363,map__21363__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21355,map__21355__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21357(cljs.core.rest(s__21358__$1)));
} else {
var G__21724 = cljs.core.rest(s__21358__$1);
s__21358__$1 = G__21724;
continue;
}
} else {
var G__21725 = cljs.core.rest(s__21358__$1);
s__21358__$1 = G__21725;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__21365_21726 = cljs.core.seq(warnings);
var chunk__21366_21727 = null;
var count__21367_21728 = (0);
var i__21368_21729 = (0);
while(true){
if((i__21368_21729 < count__21367_21728)){
var map__21371_21730 = chunk__21366_21727.cljs$core$IIndexed$_nth$arity$2(null,i__21368_21729);
var map__21371_21731__$1 = cljs.core.__destructure_map(map__21371_21730);
var w_21732 = map__21371_21731__$1;
var msg_21733__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21371_21731__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21734 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21371_21731__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21735 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21371_21731__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21736 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21371_21731__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21736)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21734),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21735),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21733__$1)].join(''));


var G__21737 = seq__21365_21726;
var G__21738 = chunk__21366_21727;
var G__21739 = count__21367_21728;
var G__21740 = (i__21368_21729 + (1));
seq__21365_21726 = G__21737;
chunk__21366_21727 = G__21738;
count__21367_21728 = G__21739;
i__21368_21729 = G__21740;
continue;
} else {
var temp__5804__auto___21741 = cljs.core.seq(seq__21365_21726);
if(temp__5804__auto___21741){
var seq__21365_21742__$1 = temp__5804__auto___21741;
if(cljs.core.chunked_seq_QMARK_(seq__21365_21742__$1)){
var c__5568__auto___21743 = cljs.core.chunk_first(seq__21365_21742__$1);
var G__21745 = cljs.core.chunk_rest(seq__21365_21742__$1);
var G__21746 = c__5568__auto___21743;
var G__21747 = cljs.core.count(c__5568__auto___21743);
var G__21748 = (0);
seq__21365_21726 = G__21745;
chunk__21366_21727 = G__21746;
count__21367_21728 = G__21747;
i__21368_21729 = G__21748;
continue;
} else {
var map__21372_21751 = cljs.core.first(seq__21365_21742__$1);
var map__21372_21752__$1 = cljs.core.__destructure_map(map__21372_21751);
var w_21753 = map__21372_21752__$1;
var msg_21754__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21372_21752__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21755 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21372_21752__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21756 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21372_21752__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21757 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21372_21752__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21757)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21755),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21756),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21754__$1)].join(''));


var G__21758 = cljs.core.next(seq__21365_21742__$1);
var G__21759 = null;
var G__21760 = (0);
var G__21761 = (0);
seq__21365_21726 = G__21758;
chunk__21366_21727 = G__21759;
count__21367_21728 = G__21760;
i__21368_21729 = G__21761;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21353_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21353_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21377){
var map__21378 = p__21377;
var map__21378__$1 = cljs.core.__destructure_map(map__21378);
var msg = map__21378__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21378__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21378__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21379 = cljs.core.seq(updates);
var chunk__21381 = null;
var count__21382 = (0);
var i__21383 = (0);
while(true){
if((i__21383 < count__21382)){
var path = chunk__21381.cljs$core$IIndexed$_nth$arity$2(null,i__21383);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21512_21764 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21516_21765 = null;
var count__21517_21766 = (0);
var i__21518_21767 = (0);
while(true){
if((i__21518_21767 < count__21517_21766)){
var node_21768 = chunk__21516_21765.cljs$core$IIndexed$_nth$arity$2(null,i__21518_21767);
if(cljs.core.not(node_21768.shadow$old)){
var path_match_21769 = shadow.cljs.devtools.client.browser.match_paths(node_21768.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21769)){
var new_link_21770 = (function (){var G__21552 = node_21768.cloneNode(true);
G__21552.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21769),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21552;
})();
(node_21768.shadow$old = true);

(new_link_21770.onload = ((function (seq__21512_21764,chunk__21516_21765,count__21517_21766,i__21518_21767,seq__21379,chunk__21381,count__21382,i__21383,new_link_21770,path_match_21769,node_21768,path,map__21378,map__21378__$1,msg,updates,reload_info){
return (function (e){
var seq__21553_21771 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21555_21772 = null;
var count__21556_21773 = (0);
var i__21557_21774 = (0);
while(true){
if((i__21557_21774 < count__21556_21773)){
var map__21564_21775 = chunk__21555_21772.cljs$core$IIndexed$_nth$arity$2(null,i__21557_21774);
var map__21564_21776__$1 = cljs.core.__destructure_map(map__21564_21775);
var task_21777 = map__21564_21776__$1;
var fn_str_21778 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21564_21776__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21779 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21564_21776__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21780 = goog.getObjectByName(fn_str_21778,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21779)].join(''));

(fn_obj_21780.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21780.cljs$core$IFn$_invoke$arity$2(path,new_link_21770) : fn_obj_21780.call(null,path,new_link_21770));


var G__21783 = seq__21553_21771;
var G__21784 = chunk__21555_21772;
var G__21785 = count__21556_21773;
var G__21786 = (i__21557_21774 + (1));
seq__21553_21771 = G__21783;
chunk__21555_21772 = G__21784;
count__21556_21773 = G__21785;
i__21557_21774 = G__21786;
continue;
} else {
var temp__5804__auto___21787 = cljs.core.seq(seq__21553_21771);
if(temp__5804__auto___21787){
var seq__21553_21788__$1 = temp__5804__auto___21787;
if(cljs.core.chunked_seq_QMARK_(seq__21553_21788__$1)){
var c__5568__auto___21789 = cljs.core.chunk_first(seq__21553_21788__$1);
var G__21790 = cljs.core.chunk_rest(seq__21553_21788__$1);
var G__21791 = c__5568__auto___21789;
var G__21792 = cljs.core.count(c__5568__auto___21789);
var G__21793 = (0);
seq__21553_21771 = G__21790;
chunk__21555_21772 = G__21791;
count__21556_21773 = G__21792;
i__21557_21774 = G__21793;
continue;
} else {
var map__21565_21794 = cljs.core.first(seq__21553_21788__$1);
var map__21565_21795__$1 = cljs.core.__destructure_map(map__21565_21794);
var task_21796 = map__21565_21795__$1;
var fn_str_21797 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21565_21795__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21798 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21565_21795__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21799 = goog.getObjectByName(fn_str_21797,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21798)].join(''));

(fn_obj_21799.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21799.cljs$core$IFn$_invoke$arity$2(path,new_link_21770) : fn_obj_21799.call(null,path,new_link_21770));


var G__21800 = cljs.core.next(seq__21553_21788__$1);
var G__21801 = null;
var G__21802 = (0);
var G__21803 = (0);
seq__21553_21771 = G__21800;
chunk__21555_21772 = G__21801;
count__21556_21773 = G__21802;
i__21557_21774 = G__21803;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21768);
});})(seq__21512_21764,chunk__21516_21765,count__21517_21766,i__21518_21767,seq__21379,chunk__21381,count__21382,i__21383,new_link_21770,path_match_21769,node_21768,path,map__21378,map__21378__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21769], 0));

goog.dom.insertSiblingAfter(new_link_21770,node_21768);


var G__21804 = seq__21512_21764;
var G__21805 = chunk__21516_21765;
var G__21806 = count__21517_21766;
var G__21807 = (i__21518_21767 + (1));
seq__21512_21764 = G__21804;
chunk__21516_21765 = G__21805;
count__21517_21766 = G__21806;
i__21518_21767 = G__21807;
continue;
} else {
var G__21808 = seq__21512_21764;
var G__21809 = chunk__21516_21765;
var G__21810 = count__21517_21766;
var G__21811 = (i__21518_21767 + (1));
seq__21512_21764 = G__21808;
chunk__21516_21765 = G__21809;
count__21517_21766 = G__21810;
i__21518_21767 = G__21811;
continue;
}
} else {
var G__21812 = seq__21512_21764;
var G__21813 = chunk__21516_21765;
var G__21814 = count__21517_21766;
var G__21815 = (i__21518_21767 + (1));
seq__21512_21764 = G__21812;
chunk__21516_21765 = G__21813;
count__21517_21766 = G__21814;
i__21518_21767 = G__21815;
continue;
}
} else {
var temp__5804__auto___21816 = cljs.core.seq(seq__21512_21764);
if(temp__5804__auto___21816){
var seq__21512_21817__$1 = temp__5804__auto___21816;
if(cljs.core.chunked_seq_QMARK_(seq__21512_21817__$1)){
var c__5568__auto___21818 = cljs.core.chunk_first(seq__21512_21817__$1);
var G__21819 = cljs.core.chunk_rest(seq__21512_21817__$1);
var G__21820 = c__5568__auto___21818;
var G__21821 = cljs.core.count(c__5568__auto___21818);
var G__21822 = (0);
seq__21512_21764 = G__21819;
chunk__21516_21765 = G__21820;
count__21517_21766 = G__21821;
i__21518_21767 = G__21822;
continue;
} else {
var node_21823 = cljs.core.first(seq__21512_21817__$1);
if(cljs.core.not(node_21823.shadow$old)){
var path_match_21824 = shadow.cljs.devtools.client.browser.match_paths(node_21823.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21824)){
var new_link_21825 = (function (){var G__21567 = node_21823.cloneNode(true);
G__21567.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21824),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21567;
})();
(node_21823.shadow$old = true);

(new_link_21825.onload = ((function (seq__21512_21764,chunk__21516_21765,count__21517_21766,i__21518_21767,seq__21379,chunk__21381,count__21382,i__21383,new_link_21825,path_match_21824,node_21823,seq__21512_21817__$1,temp__5804__auto___21816,path,map__21378,map__21378__$1,msg,updates,reload_info){
return (function (e){
var seq__21570_21826 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21572_21827 = null;
var count__21573_21828 = (0);
var i__21574_21829 = (0);
while(true){
if((i__21574_21829 < count__21573_21828)){
var map__21581_21830 = chunk__21572_21827.cljs$core$IIndexed$_nth$arity$2(null,i__21574_21829);
var map__21581_21831__$1 = cljs.core.__destructure_map(map__21581_21830);
var task_21832 = map__21581_21831__$1;
var fn_str_21833 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21581_21831__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21834 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21581_21831__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21835 = goog.getObjectByName(fn_str_21833,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21834)].join(''));

(fn_obj_21835.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21835.cljs$core$IFn$_invoke$arity$2(path,new_link_21825) : fn_obj_21835.call(null,path,new_link_21825));


var G__21836 = seq__21570_21826;
var G__21837 = chunk__21572_21827;
var G__21838 = count__21573_21828;
var G__21839 = (i__21574_21829 + (1));
seq__21570_21826 = G__21836;
chunk__21572_21827 = G__21837;
count__21573_21828 = G__21838;
i__21574_21829 = G__21839;
continue;
} else {
var temp__5804__auto___21840__$1 = cljs.core.seq(seq__21570_21826);
if(temp__5804__auto___21840__$1){
var seq__21570_21841__$1 = temp__5804__auto___21840__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21570_21841__$1)){
var c__5568__auto___21842 = cljs.core.chunk_first(seq__21570_21841__$1);
var G__21843 = cljs.core.chunk_rest(seq__21570_21841__$1);
var G__21844 = c__5568__auto___21842;
var G__21845 = cljs.core.count(c__5568__auto___21842);
var G__21846 = (0);
seq__21570_21826 = G__21843;
chunk__21572_21827 = G__21844;
count__21573_21828 = G__21845;
i__21574_21829 = G__21846;
continue;
} else {
var map__21582_21847 = cljs.core.first(seq__21570_21841__$1);
var map__21582_21848__$1 = cljs.core.__destructure_map(map__21582_21847);
var task_21849 = map__21582_21848__$1;
var fn_str_21850 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21582_21848__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21851 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21582_21848__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21852 = goog.getObjectByName(fn_str_21850,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21851)].join(''));

(fn_obj_21852.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21852.cljs$core$IFn$_invoke$arity$2(path,new_link_21825) : fn_obj_21852.call(null,path,new_link_21825));


var G__21853 = cljs.core.next(seq__21570_21841__$1);
var G__21854 = null;
var G__21855 = (0);
var G__21856 = (0);
seq__21570_21826 = G__21853;
chunk__21572_21827 = G__21854;
count__21573_21828 = G__21855;
i__21574_21829 = G__21856;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21823);
});})(seq__21512_21764,chunk__21516_21765,count__21517_21766,i__21518_21767,seq__21379,chunk__21381,count__21382,i__21383,new_link_21825,path_match_21824,node_21823,seq__21512_21817__$1,temp__5804__auto___21816,path,map__21378,map__21378__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21824], 0));

goog.dom.insertSiblingAfter(new_link_21825,node_21823);


var G__21857 = cljs.core.next(seq__21512_21817__$1);
var G__21858 = null;
var G__21859 = (0);
var G__21860 = (0);
seq__21512_21764 = G__21857;
chunk__21516_21765 = G__21858;
count__21517_21766 = G__21859;
i__21518_21767 = G__21860;
continue;
} else {
var G__21861 = cljs.core.next(seq__21512_21817__$1);
var G__21862 = null;
var G__21863 = (0);
var G__21864 = (0);
seq__21512_21764 = G__21861;
chunk__21516_21765 = G__21862;
count__21517_21766 = G__21863;
i__21518_21767 = G__21864;
continue;
}
} else {
var G__21865 = cljs.core.next(seq__21512_21817__$1);
var G__21866 = null;
var G__21867 = (0);
var G__21868 = (0);
seq__21512_21764 = G__21865;
chunk__21516_21765 = G__21866;
count__21517_21766 = G__21867;
i__21518_21767 = G__21868;
continue;
}
}
} else {
}
}
break;
}


var G__21869 = seq__21379;
var G__21870 = chunk__21381;
var G__21871 = count__21382;
var G__21872 = (i__21383 + (1));
seq__21379 = G__21869;
chunk__21381 = G__21870;
count__21382 = G__21871;
i__21383 = G__21872;
continue;
} else {
var G__21873 = seq__21379;
var G__21874 = chunk__21381;
var G__21875 = count__21382;
var G__21876 = (i__21383 + (1));
seq__21379 = G__21873;
chunk__21381 = G__21874;
count__21382 = G__21875;
i__21383 = G__21876;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21379);
if(temp__5804__auto__){
var seq__21379__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21379__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21379__$1);
var G__21877 = cljs.core.chunk_rest(seq__21379__$1);
var G__21878 = c__5568__auto__;
var G__21879 = cljs.core.count(c__5568__auto__);
var G__21880 = (0);
seq__21379 = G__21877;
chunk__21381 = G__21878;
count__21382 = G__21879;
i__21383 = G__21880;
continue;
} else {
var path = cljs.core.first(seq__21379__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21583_21881 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21587_21882 = null;
var count__21588_21883 = (0);
var i__21589_21884 = (0);
while(true){
if((i__21589_21884 < count__21588_21883)){
var node_21885 = chunk__21587_21882.cljs$core$IIndexed$_nth$arity$2(null,i__21589_21884);
if(cljs.core.not(node_21885.shadow$old)){
var path_match_21886 = shadow.cljs.devtools.client.browser.match_paths(node_21885.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21886)){
var new_link_21887 = (function (){var G__21629 = node_21885.cloneNode(true);
G__21629.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21886),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21629;
})();
(node_21885.shadow$old = true);

(new_link_21887.onload = ((function (seq__21583_21881,chunk__21587_21882,count__21588_21883,i__21589_21884,seq__21379,chunk__21381,count__21382,i__21383,new_link_21887,path_match_21886,node_21885,path,seq__21379__$1,temp__5804__auto__,map__21378,map__21378__$1,msg,updates,reload_info){
return (function (e){
var seq__21634_21890 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21636_21891 = null;
var count__21637_21892 = (0);
var i__21638_21893 = (0);
while(true){
if((i__21638_21893 < count__21637_21892)){
var map__21642_21894 = chunk__21636_21891.cljs$core$IIndexed$_nth$arity$2(null,i__21638_21893);
var map__21642_21895__$1 = cljs.core.__destructure_map(map__21642_21894);
var task_21896 = map__21642_21895__$1;
var fn_str_21897 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21642_21895__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21898 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21642_21895__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21899 = goog.getObjectByName(fn_str_21897,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21898)].join(''));

(fn_obj_21899.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21899.cljs$core$IFn$_invoke$arity$2(path,new_link_21887) : fn_obj_21899.call(null,path,new_link_21887));


var G__21900 = seq__21634_21890;
var G__21901 = chunk__21636_21891;
var G__21902 = count__21637_21892;
var G__21903 = (i__21638_21893 + (1));
seq__21634_21890 = G__21900;
chunk__21636_21891 = G__21901;
count__21637_21892 = G__21902;
i__21638_21893 = G__21903;
continue;
} else {
var temp__5804__auto___21904__$1 = cljs.core.seq(seq__21634_21890);
if(temp__5804__auto___21904__$1){
var seq__21634_21905__$1 = temp__5804__auto___21904__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21634_21905__$1)){
var c__5568__auto___21906 = cljs.core.chunk_first(seq__21634_21905__$1);
var G__21907 = cljs.core.chunk_rest(seq__21634_21905__$1);
var G__21908 = c__5568__auto___21906;
var G__21909 = cljs.core.count(c__5568__auto___21906);
var G__21910 = (0);
seq__21634_21890 = G__21907;
chunk__21636_21891 = G__21908;
count__21637_21892 = G__21909;
i__21638_21893 = G__21910;
continue;
} else {
var map__21643_21911 = cljs.core.first(seq__21634_21905__$1);
var map__21643_21912__$1 = cljs.core.__destructure_map(map__21643_21911);
var task_21913 = map__21643_21912__$1;
var fn_str_21914 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21643_21912__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21915 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21643_21912__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21916 = goog.getObjectByName(fn_str_21914,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21915)].join(''));

(fn_obj_21916.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21916.cljs$core$IFn$_invoke$arity$2(path,new_link_21887) : fn_obj_21916.call(null,path,new_link_21887));


var G__21917 = cljs.core.next(seq__21634_21905__$1);
var G__21918 = null;
var G__21919 = (0);
var G__21920 = (0);
seq__21634_21890 = G__21917;
chunk__21636_21891 = G__21918;
count__21637_21892 = G__21919;
i__21638_21893 = G__21920;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21885);
});})(seq__21583_21881,chunk__21587_21882,count__21588_21883,i__21589_21884,seq__21379,chunk__21381,count__21382,i__21383,new_link_21887,path_match_21886,node_21885,path,seq__21379__$1,temp__5804__auto__,map__21378,map__21378__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21886], 0));

goog.dom.insertSiblingAfter(new_link_21887,node_21885);


var G__21921 = seq__21583_21881;
var G__21922 = chunk__21587_21882;
var G__21923 = count__21588_21883;
var G__21924 = (i__21589_21884 + (1));
seq__21583_21881 = G__21921;
chunk__21587_21882 = G__21922;
count__21588_21883 = G__21923;
i__21589_21884 = G__21924;
continue;
} else {
var G__21925 = seq__21583_21881;
var G__21926 = chunk__21587_21882;
var G__21927 = count__21588_21883;
var G__21928 = (i__21589_21884 + (1));
seq__21583_21881 = G__21925;
chunk__21587_21882 = G__21926;
count__21588_21883 = G__21927;
i__21589_21884 = G__21928;
continue;
}
} else {
var G__21929 = seq__21583_21881;
var G__21930 = chunk__21587_21882;
var G__21931 = count__21588_21883;
var G__21932 = (i__21589_21884 + (1));
seq__21583_21881 = G__21929;
chunk__21587_21882 = G__21930;
count__21588_21883 = G__21931;
i__21589_21884 = G__21932;
continue;
}
} else {
var temp__5804__auto___21933__$1 = cljs.core.seq(seq__21583_21881);
if(temp__5804__auto___21933__$1){
var seq__21583_21934__$1 = temp__5804__auto___21933__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21583_21934__$1)){
var c__5568__auto___21935 = cljs.core.chunk_first(seq__21583_21934__$1);
var G__21936 = cljs.core.chunk_rest(seq__21583_21934__$1);
var G__21937 = c__5568__auto___21935;
var G__21938 = cljs.core.count(c__5568__auto___21935);
var G__21939 = (0);
seq__21583_21881 = G__21936;
chunk__21587_21882 = G__21937;
count__21588_21883 = G__21938;
i__21589_21884 = G__21939;
continue;
} else {
var node_21940 = cljs.core.first(seq__21583_21934__$1);
if(cljs.core.not(node_21940.shadow$old)){
var path_match_21941 = shadow.cljs.devtools.client.browser.match_paths(node_21940.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21941)){
var new_link_21942 = (function (){var G__21646 = node_21940.cloneNode(true);
G__21646.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21941),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21646;
})();
(node_21940.shadow$old = true);

(new_link_21942.onload = ((function (seq__21583_21881,chunk__21587_21882,count__21588_21883,i__21589_21884,seq__21379,chunk__21381,count__21382,i__21383,new_link_21942,path_match_21941,node_21940,seq__21583_21934__$1,temp__5804__auto___21933__$1,path,seq__21379__$1,temp__5804__auto__,map__21378,map__21378__$1,msg,updates,reload_info){
return (function (e){
var seq__21647_21943 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21649_21944 = null;
var count__21650_21945 = (0);
var i__21651_21946 = (0);
while(true){
if((i__21651_21946 < count__21650_21945)){
var map__21655_21947 = chunk__21649_21944.cljs$core$IIndexed$_nth$arity$2(null,i__21651_21946);
var map__21655_21948__$1 = cljs.core.__destructure_map(map__21655_21947);
var task_21949 = map__21655_21948__$1;
var fn_str_21950 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21655_21948__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21951 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21655_21948__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21952 = goog.getObjectByName(fn_str_21950,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21951)].join(''));

(fn_obj_21952.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21952.cljs$core$IFn$_invoke$arity$2(path,new_link_21942) : fn_obj_21952.call(null,path,new_link_21942));


var G__21954 = seq__21647_21943;
var G__21955 = chunk__21649_21944;
var G__21956 = count__21650_21945;
var G__21957 = (i__21651_21946 + (1));
seq__21647_21943 = G__21954;
chunk__21649_21944 = G__21955;
count__21650_21945 = G__21956;
i__21651_21946 = G__21957;
continue;
} else {
var temp__5804__auto___21958__$2 = cljs.core.seq(seq__21647_21943);
if(temp__5804__auto___21958__$2){
var seq__21647_21959__$1 = temp__5804__auto___21958__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21647_21959__$1)){
var c__5568__auto___21960 = cljs.core.chunk_first(seq__21647_21959__$1);
var G__21961 = cljs.core.chunk_rest(seq__21647_21959__$1);
var G__21962 = c__5568__auto___21960;
var G__21963 = cljs.core.count(c__5568__auto___21960);
var G__21964 = (0);
seq__21647_21943 = G__21961;
chunk__21649_21944 = G__21962;
count__21650_21945 = G__21963;
i__21651_21946 = G__21964;
continue;
} else {
var map__21656_21965 = cljs.core.first(seq__21647_21959__$1);
var map__21656_21966__$1 = cljs.core.__destructure_map(map__21656_21965);
var task_21967 = map__21656_21966__$1;
var fn_str_21968 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21656_21966__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21969 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21656_21966__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21970 = goog.getObjectByName(fn_str_21968,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21969)].join(''));

(fn_obj_21970.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21970.cljs$core$IFn$_invoke$arity$2(path,new_link_21942) : fn_obj_21970.call(null,path,new_link_21942));


var G__21971 = cljs.core.next(seq__21647_21959__$1);
var G__21972 = null;
var G__21973 = (0);
var G__21974 = (0);
seq__21647_21943 = G__21971;
chunk__21649_21944 = G__21972;
count__21650_21945 = G__21973;
i__21651_21946 = G__21974;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21940);
});})(seq__21583_21881,chunk__21587_21882,count__21588_21883,i__21589_21884,seq__21379,chunk__21381,count__21382,i__21383,new_link_21942,path_match_21941,node_21940,seq__21583_21934__$1,temp__5804__auto___21933__$1,path,seq__21379__$1,temp__5804__auto__,map__21378,map__21378__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21941], 0));

goog.dom.insertSiblingAfter(new_link_21942,node_21940);


var G__21975 = cljs.core.next(seq__21583_21934__$1);
var G__21976 = null;
var G__21977 = (0);
var G__21978 = (0);
seq__21583_21881 = G__21975;
chunk__21587_21882 = G__21976;
count__21588_21883 = G__21977;
i__21589_21884 = G__21978;
continue;
} else {
var G__21979 = cljs.core.next(seq__21583_21934__$1);
var G__21980 = null;
var G__21981 = (0);
var G__21982 = (0);
seq__21583_21881 = G__21979;
chunk__21587_21882 = G__21980;
count__21588_21883 = G__21981;
i__21589_21884 = G__21982;
continue;
}
} else {
var G__21983 = cljs.core.next(seq__21583_21934__$1);
var G__21984 = null;
var G__21985 = (0);
var G__21986 = (0);
seq__21583_21881 = G__21983;
chunk__21587_21882 = G__21984;
count__21588_21883 = G__21985;
i__21589_21884 = G__21986;
continue;
}
}
} else {
}
}
break;
}


var G__21987 = cljs.core.next(seq__21379__$1);
var G__21988 = null;
var G__21989 = (0);
var G__21990 = (0);
seq__21379 = G__21987;
chunk__21381 = G__21988;
count__21382 = G__21989;
i__21383 = G__21990;
continue;
} else {
var G__21991 = cljs.core.next(seq__21379__$1);
var G__21992 = null;
var G__21993 = (0);
var G__21994 = (0);
seq__21379 = G__21991;
chunk__21381 = G__21992;
count__21382 = G__21993;
i__21383 = G__21994;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__21663){
var map__21664 = p__21663;
var map__21664__$1 = cljs.core.__destructure_map(map__21664);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21664__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__21671){
var map__21672 = p__21671;
var map__21672__$1 = cljs.core.__destructure_map(map__21672);
var _ = map__21672__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21672__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21673,done,error){
var map__21674 = p__21673;
var map__21674__$1 = cljs.core.__destructure_map(map__21674);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21674__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21675,done,error){
var map__21676 = p__21675;
var map__21676__$1 = cljs.core.__destructure_map(map__21676);
var msg = map__21676__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21676__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21676__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21676__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21677){
var map__21678 = p__21677;
var map__21678__$1 = cljs.core.__destructure_map(map__21678);
var src = map__21678__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21678__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21682 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21682) : done.call(null,G__21682));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21683){
var map__21684 = p__21683;
var map__21684__$1 = cljs.core.__destructure_map(map__21684);
var msg__$1 = map__21684__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21684__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21685){var ex = e21685;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21686){
var map__21687 = p__21686;
var map__21687__$1 = cljs.core.__destructure_map(map__21687);
var env = map__21687__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21687__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21688){
var map__21689 = p__21688;
var map__21689__$1 = cljs.core.__destructure_map(map__21689);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21689__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21689__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21690){
var map__21691 = p__21690;
var map__21691__$1 = cljs.core.__destructure_map(map__21691);
var svc = map__21691__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21691__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map

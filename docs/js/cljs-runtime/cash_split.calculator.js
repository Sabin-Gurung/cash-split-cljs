goog.provide('cash_split.calculator');
cash_split.calculator.round = (function cash_split$calculator$round(n){
return cljs.core.parse_double(n.toFixed((2)));
});
cash_split.calculator.sub = (function cash_split$calculator$sub(a,b){
return cash_split.calculator.round((a - b));
});
cash_split.calculator.average_cost = (function cash_split$calculator$average_cost(dt){
if(cljs.core.empty_QMARK_(dt)){
return (0);
} else {
return cash_split.calculator.round((cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"amount","amount",364489504),dt)) / cljs.core.count(dt)));
}
});
cash_split.calculator.update_budget = (function cash_split$calculator$update_budget(avg,dt){
var calculate_budget = (function (p__16327,av){
var map__16328 = p__16327;
var map__16328__$1 = cljs.core.__destructure_map(map__16328);
var dt__$1 = map__16328__$1;
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16328__$1,new cljs.core.Keyword(null,"amount","amount",364489504));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dt__$1,new cljs.core.Keyword(null,"budget","budget",-405386281),cash_split.calculator.sub(amount,av));
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16326_SHARP_){
return calculate_budget(p1__16326_SHARP_,avg);
}),dt);
});
cash_split.calculator.iter_one = (function cash_split$calculator$iter_one(p__16329,p__16330,result){
var vec__16331 = p__16329;
var seq__16332 = cljs.core.seq(vec__16331);
var first__16333 = cljs.core.first(seq__16332);
var seq__16332__$1 = cljs.core.next(seq__16332);
var g = first__16333;
var gs = seq__16332__$1;
var vec__16334 = p__16330;
var seq__16335 = cljs.core.seq(vec__16334);
var first__16336 = cljs.core.first(seq__16335);
var seq__16335__$1 = cljs.core.next(seq__16335);
var r = first__16336;
var rs = seq__16335__$1;
var to_give = cljs.core.abs(new cljs.core.Keyword(null,"budget","budget",-405386281).cljs$core$IFn$_invoke$arity$1(g));
var to_recieve = new cljs.core.Keyword(null,"budget","budget",-405386281).cljs$core$IFn$_invoke$arity$1(r);
var res = cash_split.calculator.sub(to_recieve,to_give);
var new_g = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(g,new cljs.core.Keyword(null,"budget","budget",-405386281),res);
var new_r = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,new cljs.core.Keyword(null,"budget","budget",-405386281),res);
if((((g == null)) || ((r == null)))){
return null;
} else {
if((res < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cons(new_g,gs),rs,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(g),new cljs.core.Keyword(null,"to-give","to-give",80058888)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"amount","amount",364489504),to_recieve], null))], null);
} else {
if((res > (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [gs,cljs.core.cons(new_r,rs),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(g),new cljs.core.Keyword(null,"to-give","to-give",80058888)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"amount","amount",364489504),to_give], null))], null);
} else {
if((res === (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [gs,rs,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(g),new cljs.core.Keyword(null,"to-give","to-give",80058888)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"amount","amount",364489504),to_give], null))], null);
} else {
return null;
}
}
}
}
});
cash_split.calculator.calculate_payment_graph = (function cash_split$calculator$calculate_payment_graph(givers,recievers,result){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"budget","budget",-405386281),cljs.core.vals(cljs.core.last(cljs.core.last(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.iterate(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,cash_split.calculator.iter_one),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [givers,recievers,result], null)))))));
});
cash_split.calculator.calculate_budget = (function cash_split$calculator$calculate_budget(data){
var avg = cash_split.calculator.average_cost(data);
var total = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"amount","amount",364489504),data));
var data_with_budget = cash_split.calculator.update_budget(avg,data);
var givers = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__16337_SHARP_){
return (new cljs.core.Keyword(null,"budget","budget",-405386281).cljs$core$IFn$_invoke$arity$1(p1__16337_SHARP_) < (0));
}),data_with_budget);
var recievers = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__16338_SHARP_){
return (!((new cljs.core.Keyword(null,"budget","budget",-405386281).cljs$core$IFn$_invoke$arity$1(p1__16338_SHARP_) < (0))));
}),data_with_budget);
var data_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.identity),data_with_budget));
var payment_graph = cash_split.calculator.calculate_payment_graph(givers,recievers,data_map);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"avg","avg",197406200),avg,new cljs.core.Keyword(null,"total","total",1916810418),total,new cljs.core.Keyword(null,"payment-graph","payment-graph",551310597),payment_graph], null);
});

//# sourceMappingURL=cash_split.calculator.js.map

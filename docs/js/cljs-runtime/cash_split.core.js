goog.provide('cash_split.core');
cash_split.core.initial_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"budgets","budgets",463539840),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"UserName",new cljs.core.Keyword(null,"amount","amount",364489504),(0)], null)], null)], null),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"avg","avg",197406200),(0),new cljs.core.Keyword(null,"total","total",1916810418),(0),new cljs.core.Keyword(null,"payment-graph","payment-graph",551310597),cljs.core.PersistentVector.EMPTY], null)], null);
if((typeof cash_split !== 'undefined') && (typeof cash_split.core !== 'undefined') && (typeof cash_split.core.app_data !== 'undefined')){
} else {
cash_split.core.app_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cash_split.core.initial_state);
}
if((typeof cash_split !== 'undefined') && (typeof cash_split.core !== 'undefined') && (typeof cash_split.core.new_default_username !== 'undefined')){
} else {
cash_split.core.new_default_username = (function (){var counter = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
return (function (){
return ["User",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counter,cljs.core.inc))].join('');
});
})();
}
cash_split.core.update_result = (function cash_split$core$update_result(p__15835){
var map__15836 = p__15835;
var map__15836__$1 = cljs.core.__destructure_map(map__15836);
var data = map__15836__$1;
var map__15837 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15836__$1,new cljs.core.Keyword(null,"input","input",556931961));
var map__15837__$1 = cljs.core.__destructure_map(map__15837);
var budgets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15837__$1,new cljs.core.Keyword(null,"budgets","budgets",463539840));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"result","result",1415092211),cash_split.calculator.calculate_budget(budgets));
});
cash_split.core.update_name_BANG_ = (function cash_split$core$update_name_BANG_(i,nme){
var model = cljs.core.deref(cash_split.core.app_data);
return cljs.core.reset_BANG_(cash_split.core.app_data,cash_split.core.update_result(cljs.core.assoc_in(model,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"budgets","budgets",463539840),i,new cljs.core.Keyword(null,"name","name",1843675177)], null),nme)));
});
cash_split.core.update_amount_BANG_ = (function cash_split$core$update_amount_BANG_(i,amount){
var model = cljs.core.deref(cash_split.core.app_data);
return cljs.core.reset_BANG_(cash_split.core.app_data,cash_split.core.update_result(cljs.core.assoc_in(model,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"budgets","budgets",463539840),i,new cljs.core.Keyword(null,"amount","amount",364489504)], null),amount)));
});
cash_split.core.remove_budget_BANG_ = (function cash_split$core$remove_budget_BANG_(i){
var model = cljs.core.deref(cash_split.core.app_data);
var remove_element = (function (p1__15838_SHARP_){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(p1__15838_SHARP_,(0),i),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(p1__15838_SHARP_,(i + (1)),cljs.core.count(p1__15838_SHARP_))));
});
return cljs.core.reset_BANG_(cash_split.core.app_data,cash_split.core.update_result(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"budgets","budgets",463539840)], null),remove_element)));
});
cash_split.core.add_budget_BANG_ = (function cash_split$core$add_budget_BANG_(){
var model = cljs.core.deref(cash_split.core.app_data);
return cljs.core.reset_BANG_(cash_split.core.app_data,cash_split.core.update_result(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"budgets","budgets",463539840)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cash_split.core.new_default_username(),new cljs.core.Keyword(null,"amount","amount",364489504),(0)], null))));
});
cash_split.core.reset_app_data_BANG_ = (function cash_split$core$reset_app_data_BANG_(){
return cljs.core.reset_BANG_(cash_split.core.app_data,cash_split.core.initial_state);
});
cash_split.core.flatten_payment_graph = (function cash_split$core$flatten_payment_graph(payment_graph){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__15841){
var map__15842 = p__15841;
var map__15842__$1 = cljs.core.__destructure_map(map__15842);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15842__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var to_give = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15842__$1,new cljs.core.Keyword(null,"to-give","to-give",80058888));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15840_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15840_SHARP_,new cljs.core.Keyword(null,"from-name","from-name",1576833737),name);
}),to_give);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__15839_SHARP_){
return cljs.core.not_empty(new cljs.core.Keyword(null,"to-give","to-give",80058888).cljs$core$IFn$_invoke$arity$1(p1__15839_SHARP_));
}),payment_graph)], 0));
});
cash_split.core.input = (function cash_split$core$input(name,cb){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.w-100.h-100","input.w-100.h-100",597380430),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),name,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__15843_SHARP_){
var G__15844 = cash_split.helpers.value(p1__15843_SHARP_);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__15844) : cb.call(null,G__15844));
})], null)], null);
});
cash_split.core.input_number = (function cash_split$core$input_number(name,cb){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.w-100.h-100","input.w-100.h-100",597380430),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),name,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__15845_SHARP_){
var G__15846 = cash_split.helpers.int_value(p1__15845_SHARP_);
if((G__15846 == null)){
return null;
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__15846) : cb.call(null,G__15846));
}
})], null)], null);
});
cash_split.core.add_button = (function cash_split$core$add_button(cb){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.btn.btn-success.add-button.mt-2","input.btn.btn-success.add-button.mt-2",-1227246196),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"+",new cljs.core.Keyword(null,"on-click","on-click",1632826543),cb], null)], null);
});
cash_split.core.close_button = (function cash_split$core$close_button(cb){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.btn.btn-danger.w-100","input.btn.btn-danger.w-100",340382271),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"X",new cljs.core.Keyword(null,"on-click","on-click",1632826543),cb], null)], null);
});
cash_split.core.budget_item = (function cash_split$core$budget_item(i,p__15849){
var map__15850 = p__15849;
var map__15850__$1 = cljs.core.__destructure_map(map__15850);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15850__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15850__$1,new cljs.core.Keyword(null,"amount","amount",364489504));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.budget-item","div.budget-item",-2099709520),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-5","div.col-5",-2108746862),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cash_split.core.input,name,(function (p1__15847_SHARP_){
return cash_split.core.update_name_BANG_(i,p1__15847_SHARP_);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-5","div.col-5",-2108746862),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cash_split.core.input_number,amount,(function (p1__15848_SHARP_){
return cash_split.core.update_amount_BANG_(i,p1__15848_SHARP_);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-2.p-1","div.col-2.p-1",629061660),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cash_split.core.close_button,(function (){
return cash_split.core.remove_budget_BANG_(i);
})], null)], null)], null)], null);
});
cash_split.core.budget_list = (function cash_split$core$budget_list(budgets){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__5523__auto__ = (function cash_split$core$budget_list_$_iter__15851(s__15852){
return (new cljs.core.LazySeq(null,(function (){
var s__15852__$1 = s__15852;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__15852__$1);
if(temp__5804__auto__){
var s__15852__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15852__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__15852__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__15854 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__15853 = (0);
while(true){
if((i__15853 < size__5522__auto__)){
var vec__15855 = cljs.core._nth(c__5521__auto__,i__15853);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15855,(0),null);
var budget = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15855,(1),null);
cljs.core.chunk_append(b__15854,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cash_split.core.budget_item,i,budget], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__15876 = (i__15853 + (1));
i__15853 = G__15876;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15854),cash_split$core$budget_list_$_iter__15851(cljs.core.chunk_rest(s__15852__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15854),null);
}
} else {
var vec__15858 = cljs.core.first(s__15852__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15858,(0),null);
var budget = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15858,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cash_split.core.budget_item,i,budget], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),cash_split$core$budget_list_$_iter__15851(cljs.core.rest(s__15852__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,budgets));
})()], null);
});
cash_split.core.budget_form = (function cash_split$core$budget_form(budgets){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.d-flex.justify-content-center","div.d-flex.justify-content-center",1785182291),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.budget-form","div.budget-form",-1506297108),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cash_split.core.budget_list,budgets], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cash_split.core.add_button,(function (){
return cash_split.core.add_budget_BANG_();
})], null)], null)], null);
});
cash_split.core.payment_summary = (function cash_split$core$payment_summary(payment_graph){
var arr = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__15861_SHARP_){
return (new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(p1__15861_SHARP_) > (0));
}),cash_split.core.flatten_payment_graph(payment_graph));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__5523__auto__ = (function cash_split$core$payment_summary_$_iter__15862(s__15863){
return (new cljs.core.LazySeq(null,(function (){
var s__15863__$1 = s__15863;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__15863__$1);
if(temp__5804__auto__){
var s__15863__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15863__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__15863__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__15865 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__15864 = (0);
while(true){
if((i__15864 < size__5522__auto__)){
var vec__15866 = cljs.core._nth(c__5521__auto__,i__15864);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15866,(0),null);
var map__15869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15866,(1),null);
var map__15869__$1 = cljs.core.__destructure_map(map__15869);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15869__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var from_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15869__$1,new cljs.core.Keyword(null,"from-name","from-name",1576833737));
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15869__$1,new cljs.core.Keyword(null,"amount","amount",364489504));
cljs.core.chunk_append(b__15865,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),from_name," -> ",name," = ",amount], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__15877 = (i__15864 + (1));
i__15864 = G__15877;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15865),cash_split$core$payment_summary_$_iter__15862(cljs.core.chunk_rest(s__15863__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15865),null);
}
} else {
var vec__15870 = cljs.core.first(s__15863__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15870,(0),null);
var map__15873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15870,(1),null);
var map__15873__$1 = cljs.core.__destructure_map(map__15873);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15873__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var from_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15873__$1,new cljs.core.Keyword(null,"from-name","from-name",1576833737));
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15873__$1,new cljs.core.Keyword(null,"amount","amount",364489504));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),from_name," -> ",name," = ",amount], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),cash_split$core$payment_summary_$_iter__15862(cljs.core.rest(s__15863__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,arr));
})()], null);
});
cash_split.core.result_view = (function cash_split$core$result_view(p__15874){
var map__15875 = p__15874;
var map__15875__$1 = cljs.core.__destructure_map(map__15875);
var avg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15875__$1,new cljs.core.Keyword(null,"avg","avg",197406200));
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15875__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var payment_graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15875__$1,new cljs.core.Keyword(null,"payment-graph","payment-graph",551310597));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.result","div.result",285078839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Summary:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Total : ",total], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Average : ",avg], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"---------------"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cash_split.core.payment_summary,payment_graph], null)], null);
});
cash_split.core.app = (function cash_split$core$app(){
var model = cljs.core.deref(cash_split.core.app_data);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.app.container","div.app.container",1006768798),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.m-2.text-center","h3.m-2.text-center",-506910849),"Cash Splitting"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cash_split.core.budget_form,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"budgets","budgets",463539840)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cash_split.core.result_view,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(model)], null)], null);
});
cash_split.core.mount_app = (function cash_split$core$mount_app(){
var temp__5804__auto__ = goog.dom.getElement("app");
if(cljs.core.truth_(temp__5804__auto__)){
var el = temp__5804__auto__;
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cash_split.core.app], null),el);
} else {
return null;
}
});
cash_split.core.init = (function cash_split$core$init(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["----------Initialize App---------------"], 0));

return cash_split.core.mount_app();
});
cash_split.core.stop = (function cash_split$core$stop(){
return null;
});
cash_split.core.start = (function cash_split$core$start(){
return cash_split.core.mount_app();
});

//# sourceMappingURL=cash_split.core.js.map

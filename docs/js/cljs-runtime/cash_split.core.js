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
cash_split.core.update_result = (function cash_split$core$update_result(p__15836){
var map__15837 = p__15836;
var map__15837__$1 = cljs.core.__destructure_map(map__15837);
var data = map__15837__$1;
var map__15838 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15837__$1,new cljs.core.Keyword(null,"input","input",556931961));
var map__15838__$1 = cljs.core.__destructure_map(map__15838);
var budgets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15838__$1,new cljs.core.Keyword(null,"budgets","budgets",463539840));
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
var remove_element = (function (p1__15839_SHARP_){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(p1__15839_SHARP_,(0),i),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(p1__15839_SHARP_,(i + (1)),cljs.core.count(p1__15839_SHARP_))));
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
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__15842){
var map__15843 = p__15842;
var map__15843__$1 = cljs.core.__destructure_map(map__15843);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15843__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var to_give = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15843__$1,new cljs.core.Keyword(null,"to-give","to-give",80058888));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15841_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15841_SHARP_,new cljs.core.Keyword(null,"from-name","from-name",1576833737),name);
}),to_give);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__15840_SHARP_){
return cljs.core.not_empty(new cljs.core.Keyword(null,"to-give","to-give",80058888).cljs$core$IFn$_invoke$arity$1(p1__15840_SHARP_));
}),payment_graph)], 0));
});
cash_split.core.input = (function cash_split$core$input(name,cb){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),name,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__15844_SHARP_){
var G__15845 = cash_split.helpers.value(p1__15844_SHARP_);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__15845) : cb.call(null,G__15845));
})], null)], null);
});
cash_split.core.input_number = (function cash_split$core$input_number(name,cb){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),name,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__15846_SHARP_){
var G__15847 = cash_split.helpers.int_value(p1__15846_SHARP_);
if((G__15847 == null)){
return null;
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__15847) : cb.call(null,G__15847));
}
})], null)], null);
});
cash_split.core.add_button = (function cash_split$core$add_button(cb){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.add","button.add",-556393361),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cb], null),"+"], null);
});
cash_split.core.close_button = (function cash_split$core$close_button(cb){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cb], null),"X"], null);
});
cash_split.core.budget_item = (function cash_split$core$budget_item(i,p__15850){
var map__15851 = p__15850;
var map__15851__$1 = cljs.core.__destructure_map(map__15851);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15851__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15851__$1,new cljs.core.Keyword(null,"amount","amount",364489504));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.budget-item","div.budget-item",-2099709520),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cash_split.core.input,name,(function (p1__15848_SHARP_){
return cash_split.core.update_name_BANG_(i,p1__15848_SHARP_);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cash_split.core.input_number,amount,(function (p1__15849_SHARP_){
return cash_split.core.update_amount_BANG_(i,p1__15849_SHARP_);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cash_split.core.close_button,(function (){
return cash_split.core.remove_budget_BANG_(i);
})], null)], null);
});
cash_split.core.budget_list = (function cash_split$core$budget_list(budgets){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__5523__auto__ = (function cash_split$core$budget_list_$_iter__15852(s__15853){
return (new cljs.core.LazySeq(null,(function (){
var s__15853__$1 = s__15853;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__15853__$1);
if(temp__5804__auto__){
var s__15853__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15853__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__15853__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__15855 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__15854 = (0);
while(true){
if((i__15854 < size__5522__auto__)){
var vec__15856 = cljs.core._nth(c__5521__auto__,i__15854);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15856,(0),null);
var budget = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15856,(1),null);
cljs.core.chunk_append(b__15855,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cash_split.core.budget_item,i,budget], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__15884 = (i__15854 + (1));
i__15854 = G__15884;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15855),cash_split$core$budget_list_$_iter__15852(cljs.core.chunk_rest(s__15853__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15855),null);
}
} else {
var vec__15859 = cljs.core.first(s__15853__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15859,(0),null);
var budget = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15859,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cash_split.core.budget_item,i,budget], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),cash_split$core$budget_list_$_iter__15852(cljs.core.rest(s__15853__$2)));
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.budget-form","div.budget-form",-1506297108),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cash_split.core.budget_list,budgets], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cash_split.core.add_button,(function (){
return cash_split.core.add_budget_BANG_();
})], null)], null);
});
cash_split.core.payment_summary = (function cash_split$core$payment_summary(payment_graph){
var arr = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__15862_SHARP_){
return (new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(p1__15862_SHARP_) > (0));
}),cash_split.core.flatten_payment_graph(payment_graph));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var iter__5523__auto__ = (function cash_split$core$payment_summary_$_iter__15863(s__15864){
return (new cljs.core.LazySeq(null,(function (){
var s__15864__$1 = s__15864;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__15864__$1);
if(temp__5804__auto__){
var s__15864__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15864__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__15864__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__15866 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__15865 = (0);
while(true){
if((i__15865 < size__5522__auto__)){
var vec__15867 = cljs.core._nth(c__5521__auto__,i__15865);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15867,(0),null);
var map__15870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15867,(1),null);
var map__15870__$1 = cljs.core.__destructure_map(map__15870);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15870__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var from_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15870__$1,new cljs.core.Keyword(null,"from-name","from-name",1576833737));
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15870__$1,new cljs.core.Keyword(null,"amount","amount",364489504));
cljs.core.chunk_append(b__15866,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),from_name," -> ",name," = ",amount,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__15885 = (i__15865 + (1));
i__15865 = G__15885;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15866),cash_split$core$payment_summary_$_iter__15863(cljs.core.chunk_rest(s__15864__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15866),null);
}
} else {
var vec__15871 = cljs.core.first(s__15864__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15871,(0),null);
var map__15874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15871,(1),null);
var map__15874__$1 = cljs.core.__destructure_map(map__15874);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15874__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var from_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15874__$1,new cljs.core.Keyword(null,"from-name","from-name",1576833737));
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15874__$1,new cljs.core.Keyword(null,"amount","amount",364489504));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),from_name," -> ",name," = ",amount,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),cash_split$core$payment_summary_$_iter__15863(cljs.core.rest(s__15864__$2)));
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
cash_split.core.result__GT_text = (function cash_split$core$result__GT_text(p__15876){
var map__15877 = p__15876;
var map__15877__$1 = cljs.core.__destructure_map(map__15877);
var avg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15877__$1,new cljs.core.Keyword(null,"avg","avg",197406200));
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15877__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var payment_graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15877__$1,new cljs.core.Keyword(null,"payment-graph","payment-graph",551310597));
return ["Summary:\n","Total : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total),"\n","Average: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(avg),"\n","----------------------\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15880){
var map__15881 = p__15880;
var map__15881__$1 = cljs.core.__destructure_map(map__15881);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15881__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var from_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15881__$1,new cljs.core.Keyword(null,"from-name","from-name",1576833737));
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15881__$1,new cljs.core.Keyword(null,"amount","amount",364489504));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(from_name)," -> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(amount),"\n"].join('');
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__15875_SHARP_){
return (new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(p1__15875_SHARP_) > (0));
}),cash_split.core.flatten_payment_graph(payment_graph)))))].join('');
});
cash_split.core.result_view = (function cash_split$core$result_view(p__15882){
var map__15883 = p__15882;
var map__15883__$1 = cljs.core.__destructure_map(map__15883);
var result = map__15883__$1;
var avg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15883__$1,new cljs.core.Keyword(null,"avg","avg",197406200));
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15883__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var payment_graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15883__$1,new cljs.core.Keyword(null,"payment-graph","payment-graph",551310597));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.result","div.result",285078839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Summary:"], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Total : ",total,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"Average : ",avg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"----------------------------"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cash_split.core.payment_summary,payment_graph], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cash_split.helpers.copy_to_clipboard(cash_split.core.result__GT_text(result));
})], null),"\uD83D\uDCCB"], null)], null);
});
cash_split.core.app = (function cash_split$core$app(){
var model = cljs.core.deref(cash_split.core.app_data);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.app","div.app",-99849286),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.title","p.title",-1265013094),"Ca",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.gold","span.gold",-911136157),"$"], null),"h ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.gold","span.gold",-911136157),"$"], null),"plit"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cash_split.core.budget_form,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"budgets","budgets",463539840)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cash_split.core.result_view,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(model)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.footer","p.footer",70706236),"Check out ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/Sabin-Gurung/cash-split-cljs"], null),"source-code"], null)], null)], null);
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

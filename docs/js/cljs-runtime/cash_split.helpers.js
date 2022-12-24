goog.provide('cash_split.helpers');
cash_split.helpers.parse_num = (function cash_split$helpers$parse_num(str){
try{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",str)){
return (0);
} else {
var is_number_QMARK_ = cljs.core.re_matches(/\d+(\.\d+)?/,str);
if(cljs.core.truth_(is_number_QMARK_)){
return parseInt(str);
} else {
return null;
}
}
}catch (e15434){if((e15434 instanceof Error)){
var _ = e15434;
return null;
} else {
throw e15434;

}
}});
cash_split.helpers.value = (function cash_split$helpers$value(event){
return event.target.value;
});
cash_split.helpers.int_value = (function cash_split$helpers$int_value(event){
return cash_split.helpers.parse_num(cash_split.helpers.value(event));
});
cash_split.helpers.copy_to_clipboard = (function cash_split$helpers$copy_to_clipboard(val){
var el = document.createElement("textarea");
(el.value = val);

document.body.appendChild(el);

el.select();

document.execCommand("copy");

return document.body.removeChild(el);
});

//# sourceMappingURL=cash_split.helpers.js.map

goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15371 = arguments.length;
switch (G__15371) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15386 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15386 = (function (f,blockable,meta15387){
this.f = f;
this.blockable = blockable;
this.meta15387 = meta15387;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15388,meta15387__$1){
var self__ = this;
var _15388__$1 = this;
return (new cljs.core.async.t_cljs$core$async15386(self__.f,self__.blockable,meta15387__$1));
}));

(cljs.core.async.t_cljs$core$async15386.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15388){
var self__ = this;
var _15388__$1 = this;
return self__.meta15387;
}));

(cljs.core.async.t_cljs$core$async15386.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15386.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15386.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async15386.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async15386.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta15387","meta15387",613716531,null)], null);
}));

(cljs.core.async.t_cljs$core$async15386.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15386.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15386");

(cljs.core.async.t_cljs$core$async15386.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15386");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15386.
 */
cljs.core.async.__GT_t_cljs$core$async15386 = (function cljs$core$async$__GT_t_cljs$core$async15386(f__$1,blockable__$1,meta15387){
return (new cljs.core.async.t_cljs$core$async15386(f__$1,blockable__$1,meta15387));
});

}

return (new cljs.core.async.t_cljs$core$async15386(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__15401 = arguments.length;
switch (G__15401) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__15413 = arguments.length;
switch (G__15413) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__15422 = arguments.length;
switch (G__15422) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_18585 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18585) : fn1.call(null,val_18585));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18585) : fn1.call(null,val_18585));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__15427 = arguments.length;
switch (G__15427) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___18588 = n;
var x_18589 = (0);
while(true){
if((x_18589 < n__5636__auto___18588)){
(a[x_18589] = x_18589);

var G__18590 = (x_18589 + (1));
x_18589 = G__18590;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15472 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15472 = (function (flag,meta15473){
this.flag = flag;
this.meta15473 = meta15473;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15474,meta15473__$1){
var self__ = this;
var _15474__$1 = this;
return (new cljs.core.async.t_cljs$core$async15472(self__.flag,meta15473__$1));
}));

(cljs.core.async.t_cljs$core$async15472.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15474){
var self__ = this;
var _15474__$1 = this;
return self__.meta15473;
}));

(cljs.core.async.t_cljs$core$async15472.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15472.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15472.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15472.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async15472.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15473","meta15473",1036948233,null)], null);
}));

(cljs.core.async.t_cljs$core$async15472.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15472.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15472");

(cljs.core.async.t_cljs$core$async15472.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15472");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15472.
 */
cljs.core.async.__GT_t_cljs$core$async15472 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15472(flag__$1,meta15473){
return (new cljs.core.async.t_cljs$core$async15472(flag__$1,meta15473));
});

}

return (new cljs.core.async.t_cljs$core$async15472(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15517 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15517 = (function (flag,cb,meta15518){
this.flag = flag;
this.cb = cb;
this.meta15518 = meta15518;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15519,meta15518__$1){
var self__ = this;
var _15519__$1 = this;
return (new cljs.core.async.t_cljs$core$async15517(self__.flag,self__.cb,meta15518__$1));
}));

(cljs.core.async.t_cljs$core$async15517.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15519){
var self__ = this;
var _15519__$1 = this;
return self__.meta15518;
}));

(cljs.core.async.t_cljs$core$async15517.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15517.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15517.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15517.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async15517.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15518","meta15518",-1543574796,null)], null);
}));

(cljs.core.async.t_cljs$core$async15517.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15517.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15517");

(cljs.core.async.t_cljs$core$async15517.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15517");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15517.
 */
cljs.core.async.__GT_t_cljs$core$async15517 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15517(flag__$1,cb__$1,meta15518){
return (new cljs.core.async.t_cljs$core$async15517(flag__$1,cb__$1,meta15518));
});

}

return (new cljs.core.async.t_cljs$core$async15517(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15548_SHARP_){
var G__15602 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15548_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15602) : fret.call(null,G__15602));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15550_SHARP_){
var G__15605 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15550_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15605) : fret.call(null,G__15605));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18596 = (i + (1));
i = G__18596;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18597 = arguments.length;
var i__5770__auto___18598 = (0);
while(true){
if((i__5770__auto___18598 < len__5769__auto___18597)){
args__5775__auto__.push((arguments[i__5770__auto___18598]));

var G__18599 = (i__5770__auto___18598 + (1));
i__5770__auto___18598 = G__18599;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15629){
var map__15630 = p__15629;
var map__15630__$1 = cljs.core.__destructure_map(map__15630);
var opts = map__15630__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15606){
var G__15613 = cljs.core.first(seq15606);
var seq15606__$1 = cljs.core.next(seq15606);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15613,seq15606__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__15725 = arguments.length;
switch (G__15725) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15245__auto___18605 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15246__auto__ = (function (){var switch__14992__auto__ = (function (state_15795){
var state_val_15796 = (state_15795[(1)]);
if((state_val_15796 === (7))){
var inst_15774 = (state_15795[(2)]);
var state_15795__$1 = state_15795;
var statearr_15831_18606 = state_15795__$1;
(statearr_15831_18606[(2)] = inst_15774);

(statearr_15831_18606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15796 === (1))){
var state_15795__$1 = state_15795;
var statearr_15832_18607 = state_15795__$1;
(statearr_15832_18607[(2)] = null);

(statearr_15832_18607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15796 === (4))){
var inst_15750 = (state_15795[(7)]);
var inst_15750__$1 = (state_15795[(2)]);
var inst_15753 = (inst_15750__$1 == null);
var state_15795__$1 = (function (){var statearr_15875 = state_15795;
(statearr_15875[(7)] = inst_15750__$1);

return statearr_15875;
})();
if(cljs.core.truth_(inst_15753)){
var statearr_15876_18608 = state_15795__$1;
(statearr_15876_18608[(1)] = (5));

} else {
var statearr_15877_18609 = state_15795__$1;
(statearr_15877_18609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15796 === (13))){
var state_15795__$1 = state_15795;
var statearr_15911_18610 = state_15795__$1;
(statearr_15911_18610[(2)] = null);

(statearr_15911_18610[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15796 === (6))){
var inst_15750 = (state_15795[(7)]);
var state_15795__$1 = state_15795;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15795__$1,(11),to,inst_15750);
} else {
if((state_val_15796 === (3))){
var inst_15779 = (state_15795[(2)]);
var state_15795__$1 = state_15795;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15795__$1,inst_15779);
} else {
if((state_val_15796 === (12))){
var state_15795__$1 = state_15795;
var statearr_15935_18611 = state_15795__$1;
(statearr_15935_18611[(2)] = null);

(statearr_15935_18611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15796 === (2))){
var state_15795__$1 = state_15795;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15795__$1,(4),from);
} else {
if((state_val_15796 === (11))){
var inst_15765 = (state_15795[(2)]);
var state_15795__$1 = state_15795;
if(cljs.core.truth_(inst_15765)){
var statearr_15941_18612 = state_15795__$1;
(statearr_15941_18612[(1)] = (12));

} else {
var statearr_15942_18613 = state_15795__$1;
(statearr_15942_18613[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15796 === (9))){
var state_15795__$1 = state_15795;
var statearr_15943_18614 = state_15795__$1;
(statearr_15943_18614[(2)] = null);

(statearr_15943_18614[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15796 === (5))){
var state_15795__$1 = state_15795;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15948_18615 = state_15795__$1;
(statearr_15948_18615[(1)] = (8));

} else {
var statearr_15954_18616 = state_15795__$1;
(statearr_15954_18616[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15796 === (14))){
var inst_15772 = (state_15795[(2)]);
var state_15795__$1 = state_15795;
var statearr_15957_18617 = state_15795__$1;
(statearr_15957_18617[(2)] = inst_15772);

(statearr_15957_18617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15796 === (10))){
var inst_15761 = (state_15795[(2)]);
var state_15795__$1 = state_15795;
var statearr_15965_18618 = state_15795__$1;
(statearr_15965_18618[(2)] = inst_15761);

(statearr_15965_18618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15796 === (8))){
var inst_15756 = cljs.core.async.close_BANG_(to);
var state_15795__$1 = state_15795;
var statearr_15971_18619 = state_15795__$1;
(statearr_15971_18619[(2)] = inst_15756);

(statearr_15971_18619[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14993__auto__ = null;
var cljs$core$async$state_machine__14993__auto____0 = (function (){
var statearr_15972 = [null,null,null,null,null,null,null,null];
(statearr_15972[(0)] = cljs$core$async$state_machine__14993__auto__);

(statearr_15972[(1)] = (1));

return statearr_15972;
});
var cljs$core$async$state_machine__14993__auto____1 = (function (state_15795){
while(true){
var ret_value__14994__auto__ = (function (){try{while(true){
var result__14995__auto__ = switch__14992__auto__(state_15795);
if(cljs.core.keyword_identical_QMARK_(result__14995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14995__auto__;
}
break;
}
}catch (e15975){var ex__14996__auto__ = e15975;
var statearr_15976_18620 = state_15795;
(statearr_15976_18620[(2)] = ex__14996__auto__);


if(cljs.core.seq((state_15795[(4)]))){
var statearr_15977_18622 = state_15795;
(statearr_15977_18622[(1)] = cljs.core.first((state_15795[(4)])));

} else {
throw ex__14996__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18623 = state_15795;
state_15795 = G__18623;
continue;
} else {
return ret_value__14994__auto__;
}
break;
}
});
cljs$core$async$state_machine__14993__auto__ = function(state_15795){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14993__auto____1.call(this,state_15795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14993__auto____0;
cljs$core$async$state_machine__14993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14993__auto____1;
return cljs$core$async$state_machine__14993__auto__;
})()
})();
var state__15247__auto__ = (function (){var statearr_15978 = f__15246__auto__();
(statearr_15978[(6)] = c__15245__auto___18605);

return statearr_15978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15247__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__15990){
var vec__15991 = p__15990;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15991,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15991,(1),null);
var job = vec__15991;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15245__auto___18624 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15246__auto__ = (function (){var switch__14992__auto__ = (function (state_15999){
var state_val_16000 = (state_15999[(1)]);
if((state_val_16000 === (1))){
var state_15999__$1 = state_15999;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15999__$1,(2),res,v);
} else {
if((state_val_16000 === (2))){
var inst_15996 = (state_15999[(2)]);
var inst_15997 = cljs.core.async.close_BANG_(res);
var state_15999__$1 = (function (){var statearr_16003 = state_15999;
(statearr_16003[(7)] = inst_15996);

return statearr_16003;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15999__$1,inst_15997);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14993__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14993__auto____0 = (function (){
var statearr_16004 = [null,null,null,null,null,null,null,null];
(statearr_16004[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14993__auto__);

(statearr_16004[(1)] = (1));

return statearr_16004;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14993__auto____1 = (function (state_15999){
while(true){
var ret_value__14994__auto__ = (function (){try{while(true){
var result__14995__auto__ = switch__14992__auto__(state_15999);
if(cljs.core.keyword_identical_QMARK_(result__14995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14995__auto__;
}
break;
}
}catch (e16005){var ex__14996__auto__ = e16005;
var statearr_16006_18635 = state_15999;
(statearr_16006_18635[(2)] = ex__14996__auto__);


if(cljs.core.seq((state_15999[(4)]))){
var statearr_16008_18636 = state_15999;
(statearr_16008_18636[(1)] = cljs.core.first((state_15999[(4)])));

} else {
throw ex__14996__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18643 = state_15999;
state_15999 = G__18643;
continue;
} else {
return ret_value__14994__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14993__auto__ = function(state_15999){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14993__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14993__auto____1.call(this,state_15999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14993__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14993__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14993__auto__;
})()
})();
var state__15247__auto__ = (function (){var statearr_16009 = f__15246__auto__();
(statearr_16009[(6)] = c__15245__auto___18624);

return statearr_16009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15247__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__16011){
var vec__16016 = p__16011;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16016,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16016,(1),null);
var job = vec__16016;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___18644 = n;
var __18651 = (0);
while(true){
if((__18651 < n__5636__auto___18644)){
var G__16023_18652 = type;
var G__16023_18653__$1 = (((G__16023_18652 instanceof cljs.core.Keyword))?G__16023_18652.fqn:null);
switch (G__16023_18653__$1) {
case "compute":
var c__15245__auto___18656 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18651,c__15245__auto___18656,G__16023_18652,G__16023_18653__$1,n__5636__auto___18644,jobs,results,process__$1,async){
return (function (){
var f__15246__auto__ = (function (){var switch__14992__auto__ = ((function (__18651,c__15245__auto___18656,G__16023_18652,G__16023_18653__$1,n__5636__auto___18644,jobs,results,process__$1,async){
return (function (state_16040){
var state_val_16041 = (state_16040[(1)]);
if((state_val_16041 === (1))){
var state_16040__$1 = state_16040;
var statearr_16042_18658 = state_16040__$1;
(statearr_16042_18658[(2)] = null);

(statearr_16042_18658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16041 === (2))){
var state_16040__$1 = state_16040;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16040__$1,(4),jobs);
} else {
if((state_val_16041 === (3))){
var inst_16038 = (state_16040[(2)]);
var state_16040__$1 = state_16040;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16040__$1,inst_16038);
} else {
if((state_val_16041 === (4))){
var inst_16030 = (state_16040[(2)]);
var inst_16031 = process__$1(inst_16030);
var state_16040__$1 = state_16040;
if(cljs.core.truth_(inst_16031)){
var statearr_16044_18659 = state_16040__$1;
(statearr_16044_18659[(1)] = (5));

} else {
var statearr_16045_18660 = state_16040__$1;
(statearr_16045_18660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16041 === (5))){
var state_16040__$1 = state_16040;
var statearr_16046_18661 = state_16040__$1;
(statearr_16046_18661[(2)] = null);

(statearr_16046_18661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16041 === (6))){
var state_16040__$1 = state_16040;
var statearr_16047_18662 = state_16040__$1;
(statearr_16047_18662[(2)] = null);

(statearr_16047_18662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16041 === (7))){
var inst_16036 = (state_16040[(2)]);
var state_16040__$1 = state_16040;
var statearr_16048_18670 = state_16040__$1;
(statearr_16048_18670[(2)] = inst_16036);

(statearr_16048_18670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18651,c__15245__auto___18656,G__16023_18652,G__16023_18653__$1,n__5636__auto___18644,jobs,results,process__$1,async))
;
return ((function (__18651,switch__14992__auto__,c__15245__auto___18656,G__16023_18652,G__16023_18653__$1,n__5636__auto___18644,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14993__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14993__auto____0 = (function (){
var statearr_16049 = [null,null,null,null,null,null,null];
(statearr_16049[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14993__auto__);

(statearr_16049[(1)] = (1));

return statearr_16049;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14993__auto____1 = (function (state_16040){
while(true){
var ret_value__14994__auto__ = (function (){try{while(true){
var result__14995__auto__ = switch__14992__auto__(state_16040);
if(cljs.core.keyword_identical_QMARK_(result__14995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14995__auto__;
}
break;
}
}catch (e16050){var ex__14996__auto__ = e16050;
var statearr_16051_18680 = state_16040;
(statearr_16051_18680[(2)] = ex__14996__auto__);


if(cljs.core.seq((state_16040[(4)]))){
var statearr_16052_18681 = state_16040;
(statearr_16052_18681[(1)] = cljs.core.first((state_16040[(4)])));

} else {
throw ex__14996__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18688 = state_16040;
state_16040 = G__18688;
continue;
} else {
return ret_value__14994__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14993__auto__ = function(state_16040){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14993__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14993__auto____1.call(this,state_16040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14993__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14993__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14993__auto__;
})()
;})(__18651,switch__14992__auto__,c__15245__auto___18656,G__16023_18652,G__16023_18653__$1,n__5636__auto___18644,jobs,results,process__$1,async))
})();
var state__15247__auto__ = (function (){var statearr_16054 = f__15246__auto__();
(statearr_16054[(6)] = c__15245__auto___18656);

return statearr_16054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15247__auto__);
});})(__18651,c__15245__auto___18656,G__16023_18652,G__16023_18653__$1,n__5636__auto___18644,jobs,results,process__$1,async))
);


break;
case "async":
var c__15245__auto___18689 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18651,c__15245__auto___18689,G__16023_18652,G__16023_18653__$1,n__5636__auto___18644,jobs,results,process__$1,async){
return (function (){
var f__15246__auto__ = (function (){var switch__14992__auto__ = ((function (__18651,c__15245__auto___18689,G__16023_18652,G__16023_18653__$1,n__5636__auto___18644,jobs,results,process__$1,async){
return (function (state_16067){
var state_val_16068 = (state_16067[(1)]);
if((state_val_16068 === (1))){
var state_16067__$1 = state_16067;
var statearr_16069_18690 = state_16067__$1;
(statearr_16069_18690[(2)] = null);

(statearr_16069_18690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16068 === (2))){
var state_16067__$1 = state_16067;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16067__$1,(4),jobs);
} else {
if((state_val_16068 === (3))){
var inst_16065 = (state_16067[(2)]);
var state_16067__$1 = state_16067;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16067__$1,inst_16065);
} else {
if((state_val_16068 === (4))){
var inst_16057 = (state_16067[(2)]);
var inst_16058 = async(inst_16057);
var state_16067__$1 = state_16067;
if(cljs.core.truth_(inst_16058)){
var statearr_16070_18695 = state_16067__$1;
(statearr_16070_18695[(1)] = (5));

} else {
var statearr_16071_18696 = state_16067__$1;
(statearr_16071_18696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16068 === (5))){
var state_16067__$1 = state_16067;
var statearr_16072_18698 = state_16067__$1;
(statearr_16072_18698[(2)] = null);

(statearr_16072_18698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16068 === (6))){
var state_16067__$1 = state_16067;
var statearr_16073_18699 = state_16067__$1;
(statearr_16073_18699[(2)] = null);

(statearr_16073_18699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16068 === (7))){
var inst_16063 = (state_16067[(2)]);
var state_16067__$1 = state_16067;
var statearr_16074_18700 = state_16067__$1;
(statearr_16074_18700[(2)] = inst_16063);

(statearr_16074_18700[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18651,c__15245__auto___18689,G__16023_18652,G__16023_18653__$1,n__5636__auto___18644,jobs,results,process__$1,async))
;
return ((function (__18651,switch__14992__auto__,c__15245__auto___18689,G__16023_18652,G__16023_18653__$1,n__5636__auto___18644,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14993__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14993__auto____0 = (function (){
var statearr_16075 = [null,null,null,null,null,null,null];
(statearr_16075[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14993__auto__);

(statearr_16075[(1)] = (1));

return statearr_16075;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14993__auto____1 = (function (state_16067){
while(true){
var ret_value__14994__auto__ = (function (){try{while(true){
var result__14995__auto__ = switch__14992__auto__(state_16067);
if(cljs.core.keyword_identical_QMARK_(result__14995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14995__auto__;
}
break;
}
}catch (e16076){var ex__14996__auto__ = e16076;
var statearr_16077_18706 = state_16067;
(statearr_16077_18706[(2)] = ex__14996__auto__);


if(cljs.core.seq((state_16067[(4)]))){
var statearr_16078_18707 = state_16067;
(statearr_16078_18707[(1)] = cljs.core.first((state_16067[(4)])));

} else {
throw ex__14996__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18708 = state_16067;
state_16067 = G__18708;
continue;
} else {
return ret_value__14994__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14993__auto__ = function(state_16067){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14993__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14993__auto____1.call(this,state_16067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14993__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14993__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14993__auto__;
})()
;})(__18651,switch__14992__auto__,c__15245__auto___18689,G__16023_18652,G__16023_18653__$1,n__5636__auto___18644,jobs,results,process__$1,async))
})();
var state__15247__auto__ = (function (){var statearr_16079 = f__15246__auto__();
(statearr_16079[(6)] = c__15245__auto___18689);

return statearr_16079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15247__auto__);
});})(__18651,c__15245__auto___18689,G__16023_18652,G__16023_18653__$1,n__5636__auto___18644,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16023_18653__$1)].join('')));

}

var G__18709 = (__18651 + (1));
__18651 = G__18709;
continue;
} else {
}
break;
}

var c__15245__auto___18710 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15246__auto__ = (function (){var switch__14992__auto__ = (function (state_16103){
var state_val_16104 = (state_16103[(1)]);
if((state_val_16104 === (7))){
var inst_16099 = (state_16103[(2)]);
var state_16103__$1 = state_16103;
var statearr_16106_18711 = state_16103__$1;
(statearr_16106_18711[(2)] = inst_16099);

(statearr_16106_18711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16104 === (1))){
var state_16103__$1 = state_16103;
var statearr_16107_18712 = state_16103__$1;
(statearr_16107_18712[(2)] = null);

(statearr_16107_18712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16104 === (4))){
var inst_16082 = (state_16103[(7)]);
var inst_16082__$1 = (state_16103[(2)]);
var inst_16083 = (inst_16082__$1 == null);
var state_16103__$1 = (function (){var statearr_16108 = state_16103;
(statearr_16108[(7)] = inst_16082__$1);

return statearr_16108;
})();
if(cljs.core.truth_(inst_16083)){
var statearr_16109_18713 = state_16103__$1;
(statearr_16109_18713[(1)] = (5));

} else {
var statearr_16110_18714 = state_16103__$1;
(statearr_16110_18714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16104 === (6))){
var inst_16087 = (state_16103[(8)]);
var inst_16082 = (state_16103[(7)]);
var inst_16087__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16089 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16090 = [inst_16082,inst_16087__$1];
var inst_16092 = (new cljs.core.PersistentVector(null,2,(5),inst_16089,inst_16090,null));
var state_16103__$1 = (function (){var statearr_16115 = state_16103;
(statearr_16115[(8)] = inst_16087__$1);

return statearr_16115;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16103__$1,(8),jobs,inst_16092);
} else {
if((state_val_16104 === (3))){
var inst_16101 = (state_16103[(2)]);
var state_16103__$1 = state_16103;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16103__$1,inst_16101);
} else {
if((state_val_16104 === (2))){
var state_16103__$1 = state_16103;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16103__$1,(4),from);
} else {
if((state_val_16104 === (9))){
var inst_16096 = (state_16103[(2)]);
var state_16103__$1 = (function (){var statearr_16120 = state_16103;
(statearr_16120[(9)] = inst_16096);

return statearr_16120;
})();
var statearr_16125_18715 = state_16103__$1;
(statearr_16125_18715[(2)] = null);

(statearr_16125_18715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16104 === (5))){
var inst_16085 = cljs.core.async.close_BANG_(jobs);
var state_16103__$1 = state_16103;
var statearr_16126_18716 = state_16103__$1;
(statearr_16126_18716[(2)] = inst_16085);

(statearr_16126_18716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16104 === (8))){
var inst_16087 = (state_16103[(8)]);
var inst_16094 = (state_16103[(2)]);
var state_16103__$1 = (function (){var statearr_16127 = state_16103;
(statearr_16127[(10)] = inst_16094);

return statearr_16127;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16103__$1,(9),results,inst_16087);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14993__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14993__auto____0 = (function (){
var statearr_16136 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16136[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14993__auto__);

(statearr_16136[(1)] = (1));

return statearr_16136;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14993__auto____1 = (function (state_16103){
while(true){
var ret_value__14994__auto__ = (function (){try{while(true){
var result__14995__auto__ = switch__14992__auto__(state_16103);
if(cljs.core.keyword_identical_QMARK_(result__14995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14995__auto__;
}
break;
}
}catch (e16137){var ex__14996__auto__ = e16137;
var statearr_16138_18717 = state_16103;
(statearr_16138_18717[(2)] = ex__14996__auto__);


if(cljs.core.seq((state_16103[(4)]))){
var statearr_16139_18718 = state_16103;
(statearr_16139_18718[(1)] = cljs.core.first((state_16103[(4)])));

} else {
throw ex__14996__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18719 = state_16103;
state_16103 = G__18719;
continue;
} else {
return ret_value__14994__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14993__auto__ = function(state_16103){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14993__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14993__auto____1.call(this,state_16103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14993__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14993__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14993__auto__;
})()
})();
var state__15247__auto__ = (function (){var statearr_16140 = f__15246__auto__();
(statearr_16140[(6)] = c__15245__auto___18710);

return statearr_16140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15247__auto__);
}));


var c__15245__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15246__auto__ = (function (){var switch__14992__auto__ = (function (state_16178){
var state_val_16179 = (state_16178[(1)]);
if((state_val_16179 === (7))){
var inst_16174 = (state_16178[(2)]);
var state_16178__$1 = state_16178;
var statearr_16180_18720 = state_16178__$1;
(statearr_16180_18720[(2)] = inst_16174);

(statearr_16180_18720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16179 === (20))){
var state_16178__$1 = state_16178;
var statearr_16185_18721 = state_16178__$1;
(statearr_16185_18721[(2)] = null);

(statearr_16185_18721[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16179 === (1))){
var state_16178__$1 = state_16178;
var statearr_16186_18722 = state_16178__$1;
(statearr_16186_18722[(2)] = null);

(statearr_16186_18722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16179 === (4))){
var inst_16143 = (state_16178[(7)]);
var inst_16143__$1 = (state_16178[(2)]);
var inst_16144 = (inst_16143__$1 == null);
var state_16178__$1 = (function (){var statearr_16187 = state_16178;
(statearr_16187[(7)] = inst_16143__$1);

return statearr_16187;
})();
if(cljs.core.truth_(inst_16144)){
var statearr_16188_18723 = state_16178__$1;
(statearr_16188_18723[(1)] = (5));

} else {
var statearr_16189_18724 = state_16178__$1;
(statearr_16189_18724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16179 === (15))){
var inst_16156 = (state_16178[(8)]);
var state_16178__$1 = state_16178;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16178__$1,(18),to,inst_16156);
} else {
if((state_val_16179 === (21))){
var inst_16169 = (state_16178[(2)]);
var state_16178__$1 = state_16178;
var statearr_16194_18725 = state_16178__$1;
(statearr_16194_18725[(2)] = inst_16169);

(statearr_16194_18725[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16179 === (13))){
var inst_16171 = (state_16178[(2)]);
var state_16178__$1 = (function (){var statearr_16199 = state_16178;
(statearr_16199[(9)] = inst_16171);

return statearr_16199;
})();
var statearr_16200_18727 = state_16178__$1;
(statearr_16200_18727[(2)] = null);

(statearr_16200_18727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16179 === (6))){
var inst_16143 = (state_16178[(7)]);
var state_16178__$1 = state_16178;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16178__$1,(11),inst_16143);
} else {
if((state_val_16179 === (17))){
var inst_16164 = (state_16178[(2)]);
var state_16178__$1 = state_16178;
if(cljs.core.truth_(inst_16164)){
var statearr_16207_18729 = state_16178__$1;
(statearr_16207_18729[(1)] = (19));

} else {
var statearr_16208_18730 = state_16178__$1;
(statearr_16208_18730[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16179 === (3))){
var inst_16176 = (state_16178[(2)]);
var state_16178__$1 = state_16178;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16178__$1,inst_16176);
} else {
if((state_val_16179 === (12))){
var inst_16153 = (state_16178[(10)]);
var state_16178__$1 = state_16178;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16178__$1,(14),inst_16153);
} else {
if((state_val_16179 === (2))){
var state_16178__$1 = state_16178;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16178__$1,(4),results);
} else {
if((state_val_16179 === (19))){
var state_16178__$1 = state_16178;
var statearr_16211_18731 = state_16178__$1;
(statearr_16211_18731[(2)] = null);

(statearr_16211_18731[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16179 === (11))){
var inst_16153 = (state_16178[(2)]);
var state_16178__$1 = (function (){var statearr_16212 = state_16178;
(statearr_16212[(10)] = inst_16153);

return statearr_16212;
})();
var statearr_16213_18732 = state_16178__$1;
(statearr_16213_18732[(2)] = null);

(statearr_16213_18732[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16179 === (9))){
var state_16178__$1 = state_16178;
var statearr_16215_18733 = state_16178__$1;
(statearr_16215_18733[(2)] = null);

(statearr_16215_18733[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16179 === (5))){
var state_16178__$1 = state_16178;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16217_18734 = state_16178__$1;
(statearr_16217_18734[(1)] = (8));

} else {
var statearr_16218_18735 = state_16178__$1;
(statearr_16218_18735[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16179 === (14))){
var inst_16156 = (state_16178[(8)]);
var inst_16158 = (state_16178[(11)]);
var inst_16156__$1 = (state_16178[(2)]);
var inst_16157 = (inst_16156__$1 == null);
var inst_16158__$1 = cljs.core.not(inst_16157);
var state_16178__$1 = (function (){var statearr_16221 = state_16178;
(statearr_16221[(8)] = inst_16156__$1);

(statearr_16221[(11)] = inst_16158__$1);

return statearr_16221;
})();
if(inst_16158__$1){
var statearr_16225_18736 = state_16178__$1;
(statearr_16225_18736[(1)] = (15));

} else {
var statearr_16231_18737 = state_16178__$1;
(statearr_16231_18737[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16179 === (16))){
var inst_16158 = (state_16178[(11)]);
var state_16178__$1 = state_16178;
var statearr_16249_18739 = state_16178__$1;
(statearr_16249_18739[(2)] = inst_16158);

(statearr_16249_18739[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16179 === (10))){
var inst_16150 = (state_16178[(2)]);
var state_16178__$1 = state_16178;
var statearr_16252_18740 = state_16178__$1;
(statearr_16252_18740[(2)] = inst_16150);

(statearr_16252_18740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16179 === (18))){
var inst_16161 = (state_16178[(2)]);
var state_16178__$1 = state_16178;
var statearr_16263_18741 = state_16178__$1;
(statearr_16263_18741[(2)] = inst_16161);

(statearr_16263_18741[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16179 === (8))){
var inst_16147 = cljs.core.async.close_BANG_(to);
var state_16178__$1 = state_16178;
var statearr_16264_18742 = state_16178__$1;
(statearr_16264_18742[(2)] = inst_16147);

(statearr_16264_18742[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14993__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14993__auto____0 = (function (){
var statearr_16278 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16278[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14993__auto__);

(statearr_16278[(1)] = (1));

return statearr_16278;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14993__auto____1 = (function (state_16178){
while(true){
var ret_value__14994__auto__ = (function (){try{while(true){
var result__14995__auto__ = switch__14992__auto__(state_16178);
if(cljs.core.keyword_identical_QMARK_(result__14995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14995__auto__;
}
break;
}
}catch (e16281){var ex__14996__auto__ = e16281;
var statearr_16282_18743 = state_16178;
(statearr_16282_18743[(2)] = ex__14996__auto__);


if(cljs.core.seq((state_16178[(4)]))){
var statearr_16283_18744 = state_16178;
(statearr_16283_18744[(1)] = cljs.core.first((state_16178[(4)])));

} else {
throw ex__14996__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18745 = state_16178;
state_16178 = G__18745;
continue;
} else {
return ret_value__14994__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14993__auto__ = function(state_16178){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14993__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14993__auto____1.call(this,state_16178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14993__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14993__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14993__auto__;
})()
})();
var state__15247__auto__ = (function (){var statearr_16288 = f__15246__auto__();
(statearr_16288[(6)] = c__15245__auto__);

return statearr_16288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15247__auto__);
}));

return c__15245__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__16297 = arguments.length;
switch (G__16297) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__16306 = arguments.length;
switch (G__16306) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__16311 = arguments.length;
switch (G__16311) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__15245__auto___18764 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15246__auto__ = (function (){var switch__14992__auto__ = (function (state_16346){
var state_val_16347 = (state_16346[(1)]);
if((state_val_16347 === (7))){
var inst_16340 = (state_16346[(2)]);
var state_16346__$1 = state_16346;
var statearr_16350_18765 = state_16346__$1;
(statearr_16350_18765[(2)] = inst_16340);

(statearr_16350_18765[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16347 === (1))){
var state_16346__$1 = state_16346;
var statearr_16351_18766 = state_16346__$1;
(statearr_16351_18766[(2)] = null);

(statearr_16351_18766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16347 === (4))){
var inst_16320 = (state_16346[(7)]);
var inst_16320__$1 = (state_16346[(2)]);
var inst_16321 = (inst_16320__$1 == null);
var state_16346__$1 = (function (){var statearr_16352 = state_16346;
(statearr_16352[(7)] = inst_16320__$1);

return statearr_16352;
})();
if(cljs.core.truth_(inst_16321)){
var statearr_16353_18768 = state_16346__$1;
(statearr_16353_18768[(1)] = (5));

} else {
var statearr_16355_18769 = state_16346__$1;
(statearr_16355_18769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16347 === (13))){
var state_16346__$1 = state_16346;
var statearr_16356_18771 = state_16346__$1;
(statearr_16356_18771[(2)] = null);

(statearr_16356_18771[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16347 === (6))){
var inst_16320 = (state_16346[(7)]);
var inst_16326 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16320) : p.call(null,inst_16320));
var state_16346__$1 = state_16346;
if(cljs.core.truth_(inst_16326)){
var statearr_16358_18772 = state_16346__$1;
(statearr_16358_18772[(1)] = (9));

} else {
var statearr_16359_18773 = state_16346__$1;
(statearr_16359_18773[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16347 === (3))){
var inst_16343 = (state_16346[(2)]);
var state_16346__$1 = state_16346;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16346__$1,inst_16343);
} else {
if((state_val_16347 === (12))){
var state_16346__$1 = state_16346;
var statearr_16360_18774 = state_16346__$1;
(statearr_16360_18774[(2)] = null);

(statearr_16360_18774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16347 === (2))){
var state_16346__$1 = state_16346;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16346__$1,(4),ch);
} else {
if((state_val_16347 === (11))){
var inst_16320 = (state_16346[(7)]);
var inst_16330 = (state_16346[(2)]);
var state_16346__$1 = state_16346;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16346__$1,(8),inst_16330,inst_16320);
} else {
if((state_val_16347 === (9))){
var state_16346__$1 = state_16346;
var statearr_16362_18775 = state_16346__$1;
(statearr_16362_18775[(2)] = tc);

(statearr_16362_18775[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16347 === (5))){
var inst_16323 = cljs.core.async.close_BANG_(tc);
var inst_16324 = cljs.core.async.close_BANG_(fc);
var state_16346__$1 = (function (){var statearr_16363 = state_16346;
(statearr_16363[(8)] = inst_16323);

return statearr_16363;
})();
var statearr_16364_18776 = state_16346__$1;
(statearr_16364_18776[(2)] = inst_16324);

(statearr_16364_18776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16347 === (14))){
var inst_16338 = (state_16346[(2)]);
var state_16346__$1 = state_16346;
var statearr_16365_18777 = state_16346__$1;
(statearr_16365_18777[(2)] = inst_16338);

(statearr_16365_18777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16347 === (10))){
var state_16346__$1 = state_16346;
var statearr_16366_18778 = state_16346__$1;
(statearr_16366_18778[(2)] = fc);

(statearr_16366_18778[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16347 === (8))){
var inst_16332 = (state_16346[(2)]);
var state_16346__$1 = state_16346;
if(cljs.core.truth_(inst_16332)){
var statearr_16367_18779 = state_16346__$1;
(statearr_16367_18779[(1)] = (12));

} else {
var statearr_16368_18780 = state_16346__$1;
(statearr_16368_18780[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14993__auto__ = null;
var cljs$core$async$state_machine__14993__auto____0 = (function (){
var statearr_16369 = [null,null,null,null,null,null,null,null,null];
(statearr_16369[(0)] = cljs$core$async$state_machine__14993__auto__);

(statearr_16369[(1)] = (1));

return statearr_16369;
});
var cljs$core$async$state_machine__14993__auto____1 = (function (state_16346){
while(true){
var ret_value__14994__auto__ = (function (){try{while(true){
var result__14995__auto__ = switch__14992__auto__(state_16346);
if(cljs.core.keyword_identical_QMARK_(result__14995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14995__auto__;
}
break;
}
}catch (e16370){var ex__14996__auto__ = e16370;
var statearr_16371_18788 = state_16346;
(statearr_16371_18788[(2)] = ex__14996__auto__);


if(cljs.core.seq((state_16346[(4)]))){
var statearr_16372_18789 = state_16346;
(statearr_16372_18789[(1)] = cljs.core.first((state_16346[(4)])));

} else {
throw ex__14996__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18790 = state_16346;
state_16346 = G__18790;
continue;
} else {
return ret_value__14994__auto__;
}
break;
}
});
cljs$core$async$state_machine__14993__auto__ = function(state_16346){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14993__auto____1.call(this,state_16346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14993__auto____0;
cljs$core$async$state_machine__14993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14993__auto____1;
return cljs$core$async$state_machine__14993__auto__;
})()
})();
var state__15247__auto__ = (function (){var statearr_16373 = f__15246__auto__();
(statearr_16373[(6)] = c__15245__auto___18764);

return statearr_16373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15247__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__15245__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15246__auto__ = (function (){var switch__14992__auto__ = (function (state_16397){
var state_val_16398 = (state_16397[(1)]);
if((state_val_16398 === (7))){
var inst_16393 = (state_16397[(2)]);
var state_16397__$1 = state_16397;
var statearr_16399_18795 = state_16397__$1;
(statearr_16399_18795[(2)] = inst_16393);

(statearr_16399_18795[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16398 === (1))){
var inst_16376 = init;
var inst_16377 = inst_16376;
var state_16397__$1 = (function (){var statearr_16400 = state_16397;
(statearr_16400[(7)] = inst_16377);

return statearr_16400;
})();
var statearr_16401_18799 = state_16397__$1;
(statearr_16401_18799[(2)] = null);

(statearr_16401_18799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16398 === (4))){
var inst_16380 = (state_16397[(8)]);
var inst_16380__$1 = (state_16397[(2)]);
var inst_16381 = (inst_16380__$1 == null);
var state_16397__$1 = (function (){var statearr_16402 = state_16397;
(statearr_16402[(8)] = inst_16380__$1);

return statearr_16402;
})();
if(cljs.core.truth_(inst_16381)){
var statearr_16405_18801 = state_16397__$1;
(statearr_16405_18801[(1)] = (5));

} else {
var statearr_16407_18802 = state_16397__$1;
(statearr_16407_18802[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16398 === (6))){
var inst_16377 = (state_16397[(7)]);
var inst_16380 = (state_16397[(8)]);
var inst_16384 = (state_16397[(9)]);
var inst_16384__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16377,inst_16380) : f.call(null,inst_16377,inst_16380));
var inst_16385 = cljs.core.reduced_QMARK_(inst_16384__$1);
var state_16397__$1 = (function (){var statearr_16409 = state_16397;
(statearr_16409[(9)] = inst_16384__$1);

return statearr_16409;
})();
if(inst_16385){
var statearr_16410_18806 = state_16397__$1;
(statearr_16410_18806[(1)] = (8));

} else {
var statearr_16411_18807 = state_16397__$1;
(statearr_16411_18807[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16398 === (3))){
var inst_16395 = (state_16397[(2)]);
var state_16397__$1 = state_16397;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16397__$1,inst_16395);
} else {
if((state_val_16398 === (2))){
var state_16397__$1 = state_16397;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16397__$1,(4),ch);
} else {
if((state_val_16398 === (9))){
var inst_16384 = (state_16397[(9)]);
var inst_16377 = inst_16384;
var state_16397__$1 = (function (){var statearr_16415 = state_16397;
(statearr_16415[(7)] = inst_16377);

return statearr_16415;
})();
var statearr_16416_18810 = state_16397__$1;
(statearr_16416_18810[(2)] = null);

(statearr_16416_18810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16398 === (5))){
var inst_16377 = (state_16397[(7)]);
var state_16397__$1 = state_16397;
var statearr_16417_18811 = state_16397__$1;
(statearr_16417_18811[(2)] = inst_16377);

(statearr_16417_18811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16398 === (10))){
var inst_16391 = (state_16397[(2)]);
var state_16397__$1 = state_16397;
var statearr_16418_18816 = state_16397__$1;
(statearr_16418_18816[(2)] = inst_16391);

(statearr_16418_18816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16398 === (8))){
var inst_16384 = (state_16397[(9)]);
var inst_16387 = cljs.core.deref(inst_16384);
var state_16397__$1 = state_16397;
var statearr_16419_18817 = state_16397__$1;
(statearr_16419_18817[(2)] = inst_16387);

(statearr_16419_18817[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__14993__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14993__auto____0 = (function (){
var statearr_16420 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16420[(0)] = cljs$core$async$reduce_$_state_machine__14993__auto__);

(statearr_16420[(1)] = (1));

return statearr_16420;
});
var cljs$core$async$reduce_$_state_machine__14993__auto____1 = (function (state_16397){
while(true){
var ret_value__14994__auto__ = (function (){try{while(true){
var result__14995__auto__ = switch__14992__auto__(state_16397);
if(cljs.core.keyword_identical_QMARK_(result__14995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14995__auto__;
}
break;
}
}catch (e16421){var ex__14996__auto__ = e16421;
var statearr_16422_18823 = state_16397;
(statearr_16422_18823[(2)] = ex__14996__auto__);


if(cljs.core.seq((state_16397[(4)]))){
var statearr_16423_18824 = state_16397;
(statearr_16423_18824[(1)] = cljs.core.first((state_16397[(4)])));

} else {
throw ex__14996__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18825 = state_16397;
state_16397 = G__18825;
continue;
} else {
return ret_value__14994__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14993__auto__ = function(state_16397){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14993__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14993__auto____1.call(this,state_16397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14993__auto____0;
cljs$core$async$reduce_$_state_machine__14993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14993__auto____1;
return cljs$core$async$reduce_$_state_machine__14993__auto__;
})()
})();
var state__15247__auto__ = (function (){var statearr_16425 = f__15246__auto__();
(statearr_16425[(6)] = c__15245__auto__);

return statearr_16425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15247__auto__);
}));

return c__15245__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__15245__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15246__auto__ = (function (){var switch__14992__auto__ = (function (state_16431){
var state_val_16432 = (state_16431[(1)]);
if((state_val_16432 === (1))){
var inst_16426 = cljs.core.async.reduce(f__$1,init,ch);
var state_16431__$1 = state_16431;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16431__$1,(2),inst_16426);
} else {
if((state_val_16432 === (2))){
var inst_16428 = (state_16431[(2)]);
var inst_16429 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_16428) : f__$1.call(null,inst_16428));
var state_16431__$1 = state_16431;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16431__$1,inst_16429);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14993__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14993__auto____0 = (function (){
var statearr_16433 = [null,null,null,null,null,null,null];
(statearr_16433[(0)] = cljs$core$async$transduce_$_state_machine__14993__auto__);

(statearr_16433[(1)] = (1));

return statearr_16433;
});
var cljs$core$async$transduce_$_state_machine__14993__auto____1 = (function (state_16431){
while(true){
var ret_value__14994__auto__ = (function (){try{while(true){
var result__14995__auto__ = switch__14992__auto__(state_16431);
if(cljs.core.keyword_identical_QMARK_(result__14995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14995__auto__;
}
break;
}
}catch (e16434){var ex__14996__auto__ = e16434;
var statearr_16435_18834 = state_16431;
(statearr_16435_18834[(2)] = ex__14996__auto__);


if(cljs.core.seq((state_16431[(4)]))){
var statearr_16436_18835 = state_16431;
(statearr_16436_18835[(1)] = cljs.core.first((state_16431[(4)])));

} else {
throw ex__14996__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18836 = state_16431;
state_16431 = G__18836;
continue;
} else {
return ret_value__14994__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14993__auto__ = function(state_16431){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14993__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14993__auto____1.call(this,state_16431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14993__auto____0;
cljs$core$async$transduce_$_state_machine__14993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14993__auto____1;
return cljs$core$async$transduce_$_state_machine__14993__auto__;
})()
})();
var state__15247__auto__ = (function (){var statearr_16438 = f__15246__auto__();
(statearr_16438[(6)] = c__15245__auto__);

return statearr_16438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15247__auto__);
}));

return c__15245__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__16441 = arguments.length;
switch (G__16441) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15245__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15246__auto__ = (function (){var switch__14992__auto__ = (function (state_16470){
var state_val_16471 = (state_16470[(1)]);
if((state_val_16471 === (7))){
var inst_16452 = (state_16470[(2)]);
var state_16470__$1 = state_16470;
var statearr_16473_18838 = state_16470__$1;
(statearr_16473_18838[(2)] = inst_16452);

(statearr_16473_18838[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16471 === (1))){
var inst_16446 = cljs.core.seq(coll);
var inst_16447 = inst_16446;
var state_16470__$1 = (function (){var statearr_16474 = state_16470;
(statearr_16474[(7)] = inst_16447);

return statearr_16474;
})();
var statearr_16475_18839 = state_16470__$1;
(statearr_16475_18839[(2)] = null);

(statearr_16475_18839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16471 === (4))){
var inst_16447 = (state_16470[(7)]);
var inst_16450 = cljs.core.first(inst_16447);
var state_16470__$1 = state_16470;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16470__$1,(7),ch,inst_16450);
} else {
if((state_val_16471 === (13))){
var inst_16464 = (state_16470[(2)]);
var state_16470__$1 = state_16470;
var statearr_16476_18840 = state_16470__$1;
(statearr_16476_18840[(2)] = inst_16464);

(statearr_16476_18840[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16471 === (6))){
var inst_16455 = (state_16470[(2)]);
var state_16470__$1 = state_16470;
if(cljs.core.truth_(inst_16455)){
var statearr_16477_18841 = state_16470__$1;
(statearr_16477_18841[(1)] = (8));

} else {
var statearr_16478_18842 = state_16470__$1;
(statearr_16478_18842[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16471 === (3))){
var inst_16468 = (state_16470[(2)]);
var state_16470__$1 = state_16470;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16470__$1,inst_16468);
} else {
if((state_val_16471 === (12))){
var state_16470__$1 = state_16470;
var statearr_16484_18843 = state_16470__$1;
(statearr_16484_18843[(2)] = null);

(statearr_16484_18843[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16471 === (2))){
var inst_16447 = (state_16470[(7)]);
var state_16470__$1 = state_16470;
if(cljs.core.truth_(inst_16447)){
var statearr_16485_18844 = state_16470__$1;
(statearr_16485_18844[(1)] = (4));

} else {
var statearr_16486_18845 = state_16470__$1;
(statearr_16486_18845[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16471 === (11))){
var inst_16461 = cljs.core.async.close_BANG_(ch);
var state_16470__$1 = state_16470;
var statearr_16487_18846 = state_16470__$1;
(statearr_16487_18846[(2)] = inst_16461);

(statearr_16487_18846[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16471 === (9))){
var state_16470__$1 = state_16470;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16492_18847 = state_16470__$1;
(statearr_16492_18847[(1)] = (11));

} else {
var statearr_16493_18851 = state_16470__$1;
(statearr_16493_18851[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16471 === (5))){
var inst_16447 = (state_16470[(7)]);
var state_16470__$1 = state_16470;
var statearr_16494_18852 = state_16470__$1;
(statearr_16494_18852[(2)] = inst_16447);

(statearr_16494_18852[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16471 === (10))){
var inst_16466 = (state_16470[(2)]);
var state_16470__$1 = state_16470;
var statearr_16495_18853 = state_16470__$1;
(statearr_16495_18853[(2)] = inst_16466);

(statearr_16495_18853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16471 === (8))){
var inst_16447 = (state_16470[(7)]);
var inst_16457 = cljs.core.next(inst_16447);
var inst_16447__$1 = inst_16457;
var state_16470__$1 = (function (){var statearr_16497 = state_16470;
(statearr_16497[(7)] = inst_16447__$1);

return statearr_16497;
})();
var statearr_16503_18854 = state_16470__$1;
(statearr_16503_18854[(2)] = null);

(statearr_16503_18854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14993__auto__ = null;
var cljs$core$async$state_machine__14993__auto____0 = (function (){
var statearr_16508 = [null,null,null,null,null,null,null,null];
(statearr_16508[(0)] = cljs$core$async$state_machine__14993__auto__);

(statearr_16508[(1)] = (1));

return statearr_16508;
});
var cljs$core$async$state_machine__14993__auto____1 = (function (state_16470){
while(true){
var ret_value__14994__auto__ = (function (){try{while(true){
var result__14995__auto__ = switch__14992__auto__(state_16470);
if(cljs.core.keyword_identical_QMARK_(result__14995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14995__auto__;
}
break;
}
}catch (e16509){var ex__14996__auto__ = e16509;
var statearr_16510_18855 = state_16470;
(statearr_16510_18855[(2)] = ex__14996__auto__);


if(cljs.core.seq((state_16470[(4)]))){
var statearr_16511_18859 = state_16470;
(statearr_16511_18859[(1)] = cljs.core.first((state_16470[(4)])));

} else {
throw ex__14996__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18860 = state_16470;
state_16470 = G__18860;
continue;
} else {
return ret_value__14994__auto__;
}
break;
}
});
cljs$core$async$state_machine__14993__auto__ = function(state_16470){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14993__auto____1.call(this,state_16470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14993__auto____0;
cljs$core$async$state_machine__14993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14993__auto____1;
return cljs$core$async$state_machine__14993__auto__;
})()
})();
var state__15247__auto__ = (function (){var statearr_16512 = f__15246__auto__();
(statearr_16512[(6)] = c__15245__auto__);

return statearr_16512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15247__auto__);
}));

return c__15245__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__16514 = arguments.length;
switch (G__16514) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18862 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18862(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18864 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18864(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18875 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18875(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18879 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18879(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16563 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16563 = (function (ch,cs,meta16564){
this.ch = ch;
this.cs = cs;
this.meta16564 = meta16564;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16565,meta16564__$1){
var self__ = this;
var _16565__$1 = this;
return (new cljs.core.async.t_cljs$core$async16563(self__.ch,self__.cs,meta16564__$1));
}));

(cljs.core.async.t_cljs$core$async16563.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16565){
var self__ = this;
var _16565__$1 = this;
return self__.meta16564;
}));

(cljs.core.async.t_cljs$core$async16563.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16563.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16563.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16563.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async16563.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async16563.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async16563.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16564","meta16564",-933527749,null)], null);
}));

(cljs.core.async.t_cljs$core$async16563.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16563.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16563");

(cljs.core.async.t_cljs$core$async16563.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16563");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16563.
 */
cljs.core.async.__GT_t_cljs$core$async16563 = (function cljs$core$async$mult_$___GT_t_cljs$core$async16563(ch__$1,cs__$1,meta16564){
return (new cljs.core.async.t_cljs$core$async16563(ch__$1,cs__$1,meta16564));
});

}

return (new cljs.core.async.t_cljs$core$async16563(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__15245__auto___18900 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15246__auto__ = (function (){var switch__14992__auto__ = (function (state_16736){
var state_val_16737 = (state_16736[(1)]);
if((state_val_16737 === (7))){
var inst_16725 = (state_16736[(2)]);
var state_16736__$1 = state_16736;
var statearr_16740_18904 = state_16736__$1;
(statearr_16740_18904[(2)] = inst_16725);

(statearr_16740_18904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16737 === (20))){
var inst_16619 = (state_16736[(7)]);
var inst_16633 = cljs.core.first(inst_16619);
var inst_16634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16633,(0),null);
var inst_16635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16633,(1),null);
var state_16736__$1 = (function (){var statearr_16744 = state_16736;
(statearr_16744[(8)] = inst_16634);

return statearr_16744;
})();
if(cljs.core.truth_(inst_16635)){
var statearr_16746_18909 = state_16736__$1;
(statearr_16746_18909[(1)] = (22));

} else {
var statearr_16747_18910 = state_16736__$1;
(statearr_16747_18910[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16737 === (27))){
var inst_16583 = (state_16736[(9)]);
var inst_16667 = (state_16736[(10)]);
var inst_16675 = (state_16736[(11)]);
var inst_16665 = (state_16736[(12)]);
var inst_16675__$1 = cljs.core._nth(inst_16665,inst_16667);
var inst_16676 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16675__$1,inst_16583,done);
var state_16736__$1 = (function (){var statearr_16748 = state_16736;
(statearr_16748[(11)] = inst_16675__$1);

return statearr_16748;
})();
if(cljs.core.truth_(inst_16676)){
var statearr_16749_18911 = state_16736__$1;
(statearr_16749_18911[(1)] = (30));

} else {
var statearr_16751_18914 = state_16736__$1;
(statearr_16751_18914[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16737 === (1))){
var state_16736__$1 = state_16736;
var statearr_16755_18915 = state_16736__$1;
(statearr_16755_18915[(2)] = null);

(statearr_16755_18915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16737 === (24))){
var inst_16619 = (state_16736[(7)]);
var inst_16640 = (state_16736[(2)]);
var inst_16641 = cljs.core.next(inst_16619);
var inst_16593 = inst_16641;
var inst_16594 = null;
var inst_16595 = (0);
var inst_16596 = (0);
var state_16736__$1 = (function (){var statearr_16756 = state_16736;
(statearr_16756[(13)] = inst_16640);

(statearr_16756[(14)] = inst_16593);

(statearr_16756[(15)] = inst_16595);

(statearr_16756[(16)] = inst_16594);

(statearr_16756[(17)] = inst_16596);

return statearr_16756;
})();
var statearr_16757_18916 = state_16736__$1;
(statearr_16757_18916[(2)] = null);

(statearr_16757_18916[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16737 === (39))){
var state_16736__$1 = state_16736;
var statearr_16763_18917 = state_16736__$1;
(statearr_16763_18917[(2)] = null);

(statearr_16763_18917[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16737 === (4))){
var inst_16583 = (state_16736[(9)]);
var inst_16583__$1 = (state_16736[(2)]);
var inst_16584 = (inst_16583__$1 == null);
var state_16736__$1 = (function (){var statearr_16765 = state_16736;
(statearr_16765[(9)] = inst_16583__$1);

return statearr_16765;
})();
if(cljs.core.truth_(inst_16584)){
var statearr_16766_18920 = state_16736__$1;
(statearr_16766_18920[(1)] = (5));

} else {
var statearr_16767_18924 = state_16736__$1;
(statearr_16767_18924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16737 === (15))){
var inst_16593 = (state_16736[(14)]);
var inst_16595 = (state_16736[(15)]);
var inst_16594 = (state_16736[(16)]);
var inst_16596 = (state_16736[(17)]);
var inst_16612 = (state_16736[(2)]);
var inst_16616 = (inst_16596 + (1));
var tmp16759 = inst_16593;
var tmp16760 = inst_16595;
var tmp16761 = inst_16594;
var inst_16593__$1 = tmp16759;
var inst_16594__$1 = tmp16761;
var inst_16595__$1 = tmp16760;
var inst_16596__$1 = inst_16616;
var state_16736__$1 = (function (){var statearr_16768 = state_16736;
(statearr_16768[(14)] = inst_16593__$1);

(statearr_16768[(15)] = inst_16595__$1);

(statearr_16768[(18)] = inst_16612);

(statearr_16768[(16)] = inst_16594__$1);

(statearr_16768[(17)] = inst_16596__$1);

return statearr_16768;
})();
var statearr_16772_18926 = state_16736__$1;
(statearr_16772_18926[(2)] = null);

(statearr_16772_18926[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16737 === (21))){
var inst_16644 = (state_16736[(2)]);
var state_16736__$1 = state_16736;
var statearr_16778_18927 = state_16736__$1;
(statearr_16778_18927[(2)] = inst_16644);

(statearr_16778_18927[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16737 === (31))){
var inst_16675 = (state_16736[(11)]);
var inst_16679 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16675);
var state_16736__$1 = state_16736;
var statearr_16783_18930 = state_16736__$1;
(statearr_16783_18930[(2)] = inst_16679);

(statearr_16783_18930[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16737 === (32))){
var inst_16666 = (state_16736[(19)]);
var inst_16667 = (state_16736[(10)]);
var inst_16665 = (state_16736[(12)]);
var inst_16664 = (state_16736[(20)]);
var inst_16681 = (state_16736[(2)]);
var inst_16683 = (inst_16667 + (1));
var tmp16773 = inst_16666;
var tmp16774 = inst_16665;
var tmp16775 = inst_16664;
var inst_16664__$1 = tmp16775;
var inst_16665__$1 = tmp16774;
var inst_16666__$1 = tmp16773;
var inst_16667__$1 = inst_16683;
var state_16736__$1 = (function (){var statearr_16788 = state_16736;
(statearr_16788[(19)] = inst_16666__$1);

(statearr_16788[(21)] = inst_16681);

(statearr_16788[(10)] = inst_16667__$1);

(statearr_16788[(12)] = inst_16665__$1);

(statearr_16788[(20)] = inst_16664__$1);

return statearr_16788;
})();
var statearr_16795_18931 = state_16736__$1;
(statearr_16795_18931[(2)] = null);

(statearr_16795_18931[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16737 === (40))){
var inst_16698 = (state_16736[(22)]);
var inst_16702 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16698);
var state_16736__$1 = state_16736;
var statearr_16798_18932 = state_16736__$1;
(statearr_16798_18932[(2)] = inst_16702);

(statearr_16798_18932[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16737 === (33))){
var inst_16686 = (state_16736[(23)]);
var inst_16690 = cljs.core.chunked_seq_QMARK_(inst_16686);
var state_16736__$1 = state_16736;
if(inst_16690){
var statearr_16799_18933 = state_16736__$1;
(statearr_16799_18933[(1)] = (36));

} else {
var statearr_16800_18934 = state_16736__$1;
(statearr_16800_18934[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16737 === (13))){
var inst_16605 = (state_16736[(24)]);
var inst_16609 = cljs.core.async.close_BANG_(inst_16605);
var state_16736__$1 = state_16736;
var statearr_16801_18935 = state_16736__$1;
(statearr_16801_18935[(2)] = inst_16609);

(statearr_16801_18935[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16737 === (22))){
var inst_16634 = (state_16736[(8)]);
var inst_16637 = cljs.core.async.close_BANG_(inst_16634);
var state_16736__$1 = state_16736;
var statearr_16805_18936 = state_16736__$1;
(statearr_16805_18936[(2)] = inst_16637);

(statearr_16805_18936[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16737 === (36))){
var inst_16686 = (state_16736[(23)]);
var inst_16692 = cljs.core.chunk_first(inst_16686);
var inst_16694 = cljs.core.chunk_rest(inst_16686);
var inst_16695 = cljs.core.count(inst_16692);
var inst_16664 = inst_16694;
var inst_16665 = inst_16692;
var inst_16666 = inst_16695;
var inst_16667 = (0);
var state_16736__$1 = (function (){var statearr_16807 = state_16736;
(statearr_16807[(19)] = inst_16666);

(statearr_16807[(10)] = inst_16667);

(statearr_16807[(12)] = inst_16665);

(statearr_16807[(20)] = inst_16664);

return statearr_16807;
})();
var statearr_16809_18941 = state_16736__$1;
(statearr_16809_18941[(2)] = null);

(statearr_16809_18941[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16737 === (41))){
var inst_16686 = (state_16736[(23)]);
var inst_16704 = (state_16736[(2)]);
var inst_16705 = cljs.core.next(inst_16686);
var inst_16664 = inst_16705;
var inst_16665 = null;
var inst_16666 = (0);
var inst_16667 = (0);
var state_16736__$1 = (function (){var statearr_16810 = state_16736;
(statearr_16810[(19)] = inst_16666);

(statearr_16810[(10)] = inst_16667);

(statearr_16810[(12)] = inst_16665);

(statearr_16810[(20)] = inst_16664);

(statearr_16810[(25)] = inst_16704);

return statearr_16810;
})();
var statearr_16811_18944 = state_16736__$1;
(statearr_16811_18944[(2)] = null);

(statearr_16811_18944[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16737 === (43))){
var state_16736__$1 = state_16736;
var statearr_16812_18947 = state_16736__$1;
(statearr_16812_18947[(2)] = null);

(statearr_16812_18947[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16737 === (29))){
var inst_16713 = (state_16736[(2)]);
var state_16736__$1 = state_16736;
var statearr_16813_18948 = state_16736__$1;
(statearr_16813_18948[(2)] = inst_16713);

(statearr_16813_18948[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16737 === (44))){
var inst_16722 = (state_16736[(2)]);
var state_16736__$1 = (function (){var statearr_16815 = state_16736;
(statearr_16815[(26)] = inst_16722);

return statearr_16815;
})();
var statearr_16816_18949 = state_16736__$1;
(statearr_16816_18949[(2)] = null);

(statearr_16816_18949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16737 === (6))){
var inst_16654 = (state_16736[(27)]);
var inst_16653 = cljs.core.deref(cs);
var inst_16654__$1 = cljs.core.keys(inst_16653);
var inst_16655 = cljs.core.count(inst_16654__$1);
var inst_16656 = cljs.core.reset_BANG_(dctr,inst_16655);
var inst_16661 = cljs.core.seq(inst_16654__$1);
var inst_16664 = inst_16661;
var inst_16665 = null;
var inst_16666 = (0);
var inst_16667 = (0);
var state_16736__$1 = (function (){var statearr_16819 = state_16736;
(statearr_16819[(27)] = inst_16654__$1);

(statearr_16819[(28)] = inst_16656);

(statearr_16819[(19)] = inst_16666);

(statearr_16819[(10)] = inst_16667);

(statearr_16819[(12)] = inst_16665);

(statearr_16819[(20)] = inst_16664);

return statearr_16819;
})();
var statearr_16820_18957 = state_16736__$1;
(statearr_16820_18957[(2)] = null);

(statearr_16820_18957[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16737 === (28))){
var inst_16686 = (state_16736[(23)]);
var inst_16664 = (state_16736[(20)]);
var inst_16686__$1 = cljs.core.seq(inst_16664);
var state_16736__$1 = (function (){var statearr_16825 = state_16736;
(statearr_16825[(23)] = inst_16686__$1);

return statearr_16825;
})();
if(inst_16686__$1){
var statearr_16826_18966 = state_16736__$1;
(statearr_16826_18966[(1)] = (33));

} else {
var statearr_16833_18967 = state_16736__$1;
(statearr_16833_18967[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16737 === (25))){
var inst_16666 = (state_16736[(19)]);
var inst_16667 = (state_16736[(10)]);
var inst_16672 = (inst_16667 < inst_16666);
var inst_16673 = inst_16672;
var state_16736__$1 = state_16736;
if(cljs.core.truth_(inst_16673)){
var statearr_16844_18968 = state_16736__$1;
(statearr_16844_18968[(1)] = (27));

} else {
var statearr_16845_18969 = state_16736__$1;
(statearr_16845_18969[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16737 === (34))){
var state_16736__$1 = state_16736;
var statearr_16846_18970 = state_16736__$1;
(statearr_16846_18970[(2)] = null);

(statearr_16846_18970[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16737 === (17))){
var state_16736__$1 = state_16736;
var statearr_16848_18971 = state_16736__$1;
(statearr_16848_18971[(2)] = null);

(statearr_16848_18971[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16737 === (3))){
var inst_16727 = (state_16736[(2)]);
var state_16736__$1 = state_16736;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16736__$1,inst_16727);
} else {
if((state_val_16737 === (12))){
var inst_16649 = (state_16736[(2)]);
var state_16736__$1 = state_16736;
var statearr_16850_18983 = state_16736__$1;
(statearr_16850_18983[(2)] = inst_16649);

(statearr_16850_18983[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16737 === (2))){
var state_16736__$1 = state_16736;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16736__$1,(4),ch);
} else {
if((state_val_16737 === (23))){
var state_16736__$1 = state_16736;
var statearr_16852_18984 = state_16736__$1;
(statearr_16852_18984[(2)] = null);

(statearr_16852_18984[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16737 === (35))){
var inst_16711 = (state_16736[(2)]);
var state_16736__$1 = state_16736;
var statearr_16853_18985 = state_16736__$1;
(statearr_16853_18985[(2)] = inst_16711);

(statearr_16853_18985[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16737 === (19))){
var inst_16619 = (state_16736[(7)]);
var inst_16623 = cljs.core.chunk_first(inst_16619);
var inst_16624 = cljs.core.chunk_rest(inst_16619);
var inst_16625 = cljs.core.count(inst_16623);
var inst_16593 = inst_16624;
var inst_16594 = inst_16623;
var inst_16595 = inst_16625;
var inst_16596 = (0);
var state_16736__$1 = (function (){var statearr_16854 = state_16736;
(statearr_16854[(14)] = inst_16593);

(statearr_16854[(15)] = inst_16595);

(statearr_16854[(16)] = inst_16594);

(statearr_16854[(17)] = inst_16596);

return statearr_16854;
})();
var statearr_16855_18987 = state_16736__$1;
(statearr_16855_18987[(2)] = null);

(statearr_16855_18987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16737 === (11))){
var inst_16619 = (state_16736[(7)]);
var inst_16593 = (state_16736[(14)]);
var inst_16619__$1 = cljs.core.seq(inst_16593);
var state_16736__$1 = (function (){var statearr_16856 = state_16736;
(statearr_16856[(7)] = inst_16619__$1);

return statearr_16856;
})();
if(inst_16619__$1){
var statearr_16857_18994 = state_16736__$1;
(statearr_16857_18994[(1)] = (16));

} else {
var statearr_16859_18995 = state_16736__$1;
(statearr_16859_18995[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16737 === (9))){
var inst_16651 = (state_16736[(2)]);
var state_16736__$1 = state_16736;
var statearr_16860_18996 = state_16736__$1;
(statearr_16860_18996[(2)] = inst_16651);

(statearr_16860_18996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16737 === (5))){
var inst_16591 = cljs.core.deref(cs);
var inst_16592 = cljs.core.seq(inst_16591);
var inst_16593 = inst_16592;
var inst_16594 = null;
var inst_16595 = (0);
var inst_16596 = (0);
var state_16736__$1 = (function (){var statearr_16861 = state_16736;
(statearr_16861[(14)] = inst_16593);

(statearr_16861[(15)] = inst_16595);

(statearr_16861[(16)] = inst_16594);

(statearr_16861[(17)] = inst_16596);

return statearr_16861;
})();
var statearr_16862_18998 = state_16736__$1;
(statearr_16862_18998[(2)] = null);

(statearr_16862_18998[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16737 === (14))){
var state_16736__$1 = state_16736;
var statearr_16863_18999 = state_16736__$1;
(statearr_16863_18999[(2)] = null);

(statearr_16863_18999[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16737 === (45))){
var inst_16719 = (state_16736[(2)]);
var state_16736__$1 = state_16736;
var statearr_16864_19000 = state_16736__$1;
(statearr_16864_19000[(2)] = inst_16719);

(statearr_16864_19000[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16737 === (26))){
var inst_16654 = (state_16736[(27)]);
var inst_16715 = (state_16736[(2)]);
var inst_16716 = cljs.core.seq(inst_16654);
var state_16736__$1 = (function (){var statearr_16867 = state_16736;
(statearr_16867[(29)] = inst_16715);

return statearr_16867;
})();
if(inst_16716){
var statearr_16869_19001 = state_16736__$1;
(statearr_16869_19001[(1)] = (42));

} else {
var statearr_16870_19002 = state_16736__$1;
(statearr_16870_19002[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16737 === (16))){
var inst_16619 = (state_16736[(7)]);
var inst_16621 = cljs.core.chunked_seq_QMARK_(inst_16619);
var state_16736__$1 = state_16736;
if(inst_16621){
var statearr_16871_19003 = state_16736__$1;
(statearr_16871_19003[(1)] = (19));

} else {
var statearr_16872_19004 = state_16736__$1;
(statearr_16872_19004[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16737 === (38))){
var inst_16708 = (state_16736[(2)]);
var state_16736__$1 = state_16736;
var statearr_16873_19005 = state_16736__$1;
(statearr_16873_19005[(2)] = inst_16708);

(statearr_16873_19005[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16737 === (30))){
var state_16736__$1 = state_16736;
var statearr_16874_19006 = state_16736__$1;
(statearr_16874_19006[(2)] = null);

(statearr_16874_19006[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16737 === (10))){
var inst_16594 = (state_16736[(16)]);
var inst_16596 = (state_16736[(17)]);
var inst_16604 = cljs.core._nth(inst_16594,inst_16596);
var inst_16605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16604,(0),null);
var inst_16606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16604,(1),null);
var state_16736__$1 = (function (){var statearr_16875 = state_16736;
(statearr_16875[(24)] = inst_16605);

return statearr_16875;
})();
if(cljs.core.truth_(inst_16606)){
var statearr_16876_19007 = state_16736__$1;
(statearr_16876_19007[(1)] = (13));

} else {
var statearr_16877_19008 = state_16736__$1;
(statearr_16877_19008[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16737 === (18))){
var inst_16647 = (state_16736[(2)]);
var state_16736__$1 = state_16736;
var statearr_16879_19009 = state_16736__$1;
(statearr_16879_19009[(2)] = inst_16647);

(statearr_16879_19009[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16737 === (42))){
var state_16736__$1 = state_16736;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16736__$1,(45),dchan);
} else {
if((state_val_16737 === (37))){
var inst_16583 = (state_16736[(9)]);
var inst_16686 = (state_16736[(23)]);
var inst_16698 = (state_16736[(22)]);
var inst_16698__$1 = cljs.core.first(inst_16686);
var inst_16699 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16698__$1,inst_16583,done);
var state_16736__$1 = (function (){var statearr_16880 = state_16736;
(statearr_16880[(22)] = inst_16698__$1);

return statearr_16880;
})();
if(cljs.core.truth_(inst_16699)){
var statearr_16881_19016 = state_16736__$1;
(statearr_16881_19016[(1)] = (39));

} else {
var statearr_16882_19017 = state_16736__$1;
(statearr_16882_19017[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16737 === (8))){
var inst_16595 = (state_16736[(15)]);
var inst_16596 = (state_16736[(17)]);
var inst_16598 = (inst_16596 < inst_16595);
var inst_16599 = inst_16598;
var state_16736__$1 = state_16736;
if(cljs.core.truth_(inst_16599)){
var statearr_16883_19018 = state_16736__$1;
(statearr_16883_19018[(1)] = (10));

} else {
var statearr_16884_19019 = state_16736__$1;
(statearr_16884_19019[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__14993__auto__ = null;
var cljs$core$async$mult_$_state_machine__14993__auto____0 = (function (){
var statearr_16885 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16885[(0)] = cljs$core$async$mult_$_state_machine__14993__auto__);

(statearr_16885[(1)] = (1));

return statearr_16885;
});
var cljs$core$async$mult_$_state_machine__14993__auto____1 = (function (state_16736){
while(true){
var ret_value__14994__auto__ = (function (){try{while(true){
var result__14995__auto__ = switch__14992__auto__(state_16736);
if(cljs.core.keyword_identical_QMARK_(result__14995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14995__auto__;
}
break;
}
}catch (e16886){var ex__14996__auto__ = e16886;
var statearr_16887_19020 = state_16736;
(statearr_16887_19020[(2)] = ex__14996__auto__);


if(cljs.core.seq((state_16736[(4)]))){
var statearr_16888_19021 = state_16736;
(statearr_16888_19021[(1)] = cljs.core.first((state_16736[(4)])));

} else {
throw ex__14996__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19022 = state_16736;
state_16736 = G__19022;
continue;
} else {
return ret_value__14994__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14993__auto__ = function(state_16736){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14993__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14993__auto____1.call(this,state_16736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14993__auto____0;
cljs$core$async$mult_$_state_machine__14993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14993__auto____1;
return cljs$core$async$mult_$_state_machine__14993__auto__;
})()
})();
var state__15247__auto__ = (function (){var statearr_16889 = f__15246__auto__();
(statearr_16889[(6)] = c__15245__auto___18900);

return statearr_16889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15247__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16894 = arguments.length;
switch (G__16894) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_19024 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_19024(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_19027 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_19027(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_19034 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_19034(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_19036 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_19036(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_19037 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_19037(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19038 = arguments.length;
var i__5770__auto___19039 = (0);
while(true){
if((i__5770__auto___19039 < len__5769__auto___19038)){
args__5775__auto__.push((arguments[i__5770__auto___19039]));

var G__19040 = (i__5770__auto___19039 + (1));
i__5770__auto___19039 = G__19040;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16922){
var map__16923 = p__16922;
var map__16923__$1 = cljs.core.__destructure_map(map__16923);
var opts = map__16923__$1;
var statearr_16924_19050 = state;
(statearr_16924_19050[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16925_19051 = state;
(statearr_16925_19051[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_16927_19052 = state;
(statearr_16927_19052[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16916){
var G__16917 = cljs.core.first(seq16916);
var seq16916__$1 = cljs.core.next(seq16916);
var G__16918 = cljs.core.first(seq16916__$1);
var seq16916__$2 = cljs.core.next(seq16916__$1);
var G__16919 = cljs.core.first(seq16916__$2);
var seq16916__$3 = cljs.core.next(seq16916__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16917,G__16918,G__16919,seq16916__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16937 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16937 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16938){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16938 = meta16938;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16939,meta16938__$1){
var self__ = this;
var _16939__$1 = this;
return (new cljs.core.async.t_cljs$core$async16937(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16938__$1));
}));

(cljs.core.async.t_cljs$core$async16937.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16939){
var self__ = this;
var _16939__$1 = this;
return self__.meta16938;
}));

(cljs.core.async.t_cljs$core$async16937.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16937.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16937.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16937.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16937.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16937.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16937.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16937.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16937.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16938","meta16938",1450141281,null)], null);
}));

(cljs.core.async.t_cljs$core$async16937.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16937.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16937");

(cljs.core.async.t_cljs$core$async16937.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16937");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16937.
 */
cljs.core.async.__GT_t_cljs$core$async16937 = (function cljs$core$async$mix_$___GT_t_cljs$core$async16937(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16938){
return (new cljs.core.async.t_cljs$core$async16937(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16938));
});

}

return (new cljs.core.async.t_cljs$core$async16937(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15245__auto___19065 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15246__auto__ = (function (){var switch__14992__auto__ = (function (state_17032){
var state_val_17033 = (state_17032[(1)]);
if((state_val_17033 === (7))){
var inst_16987 = (state_17032[(2)]);
var state_17032__$1 = state_17032;
if(cljs.core.truth_(inst_16987)){
var statearr_17037_19066 = state_17032__$1;
(statearr_17037_19066[(1)] = (8));

} else {
var statearr_17039_19068 = state_17032__$1;
(statearr_17039_19068[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (20))){
var inst_16980 = (state_17032[(7)]);
var state_17032__$1 = state_17032;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17032__$1,(23),out,inst_16980);
} else {
if((state_val_17033 === (1))){
var inst_16961 = calc_state();
var inst_16962 = cljs.core.__destructure_map(inst_16961);
var inst_16963 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16962,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16964 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16962,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16965 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16962,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16967 = inst_16961;
var state_17032__$1 = (function (){var statearr_17043 = state_17032;
(statearr_17043[(8)] = inst_16965);

(statearr_17043[(9)] = inst_16963);

(statearr_17043[(10)] = inst_16967);

(statearr_17043[(11)] = inst_16964);

return statearr_17043;
})();
var statearr_17045_19070 = state_17032__$1;
(statearr_17045_19070[(2)] = null);

(statearr_17045_19070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (24))){
var inst_16970 = (state_17032[(12)]);
var inst_16967 = inst_16970;
var state_17032__$1 = (function (){var statearr_17046 = state_17032;
(statearr_17046[(10)] = inst_16967);

return statearr_17046;
})();
var statearr_17047_19071 = state_17032__$1;
(statearr_17047_19071[(2)] = null);

(statearr_17047_19071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (4))){
var inst_16982 = (state_17032[(13)]);
var inst_16980 = (state_17032[(7)]);
var inst_16979 = (state_17032[(2)]);
var inst_16980__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16979,(0),null);
var inst_16981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16979,(1),null);
var inst_16982__$1 = (inst_16980__$1 == null);
var state_17032__$1 = (function (){var statearr_17048 = state_17032;
(statearr_17048[(13)] = inst_16982__$1);

(statearr_17048[(7)] = inst_16980__$1);

(statearr_17048[(14)] = inst_16981);

return statearr_17048;
})();
if(cljs.core.truth_(inst_16982__$1)){
var statearr_17049_19072 = state_17032__$1;
(statearr_17049_19072[(1)] = (5));

} else {
var statearr_17050_19073 = state_17032__$1;
(statearr_17050_19073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (15))){
var inst_17002 = (state_17032[(15)]);
var inst_16972 = (state_17032[(16)]);
var inst_17002__$1 = cljs.core.empty_QMARK_(inst_16972);
var state_17032__$1 = (function (){var statearr_17051 = state_17032;
(statearr_17051[(15)] = inst_17002__$1);

return statearr_17051;
})();
if(inst_17002__$1){
var statearr_17052_19074 = state_17032__$1;
(statearr_17052_19074[(1)] = (17));

} else {
var statearr_17053_19079 = state_17032__$1;
(statearr_17053_19079[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (21))){
var inst_16970 = (state_17032[(12)]);
var inst_16967 = inst_16970;
var state_17032__$1 = (function (){var statearr_17055 = state_17032;
(statearr_17055[(10)] = inst_16967);

return statearr_17055;
})();
var statearr_17056_19083 = state_17032__$1;
(statearr_17056_19083[(2)] = null);

(statearr_17056_19083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (13))){
var inst_16994 = (state_17032[(2)]);
var inst_16995 = calc_state();
var inst_16967 = inst_16995;
var state_17032__$1 = (function (){var statearr_17057 = state_17032;
(statearr_17057[(10)] = inst_16967);

(statearr_17057[(17)] = inst_16994);

return statearr_17057;
})();
var statearr_17058_19084 = state_17032__$1;
(statearr_17058_19084[(2)] = null);

(statearr_17058_19084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (22))){
var inst_17024 = (state_17032[(2)]);
var state_17032__$1 = state_17032;
var statearr_17059_19086 = state_17032__$1;
(statearr_17059_19086[(2)] = inst_17024);

(statearr_17059_19086[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (6))){
var inst_16981 = (state_17032[(14)]);
var inst_16985 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16981,change);
var state_17032__$1 = state_17032;
var statearr_17063_19087 = state_17032__$1;
(statearr_17063_19087[(2)] = inst_16985);

(statearr_17063_19087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (25))){
var state_17032__$1 = state_17032;
var statearr_17066_19088 = state_17032__$1;
(statearr_17066_19088[(2)] = null);

(statearr_17066_19088[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (17))){
var inst_16973 = (state_17032[(18)]);
var inst_16981 = (state_17032[(14)]);
var inst_17004 = (inst_16973.cljs$core$IFn$_invoke$arity$1 ? inst_16973.cljs$core$IFn$_invoke$arity$1(inst_16981) : inst_16973.call(null,inst_16981));
var inst_17005 = cljs.core.not(inst_17004);
var state_17032__$1 = state_17032;
var statearr_17073_19090 = state_17032__$1;
(statearr_17073_19090[(2)] = inst_17005);

(statearr_17073_19090[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (3))){
var inst_17028 = (state_17032[(2)]);
var state_17032__$1 = state_17032;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17032__$1,inst_17028);
} else {
if((state_val_17033 === (12))){
var state_17032__$1 = state_17032;
var statearr_17074_19101 = state_17032__$1;
(statearr_17074_19101[(2)] = null);

(statearr_17074_19101[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (2))){
var inst_16967 = (state_17032[(10)]);
var inst_16970 = (state_17032[(12)]);
var inst_16970__$1 = cljs.core.__destructure_map(inst_16967);
var inst_16972 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16970__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16973 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16970__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16974 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16970__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_17032__$1 = (function (){var statearr_17078 = state_17032;
(statearr_17078[(18)] = inst_16973);

(statearr_17078[(12)] = inst_16970__$1);

(statearr_17078[(16)] = inst_16972);

return statearr_17078;
})();
return cljs.core.async.ioc_alts_BANG_(state_17032__$1,(4),inst_16974);
} else {
if((state_val_17033 === (23))){
var inst_17015 = (state_17032[(2)]);
var state_17032__$1 = state_17032;
if(cljs.core.truth_(inst_17015)){
var statearr_17083_19102 = state_17032__$1;
(statearr_17083_19102[(1)] = (24));

} else {
var statearr_17084_19103 = state_17032__$1;
(statearr_17084_19103[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (19))){
var inst_17009 = (state_17032[(2)]);
var state_17032__$1 = state_17032;
var statearr_17090_19107 = state_17032__$1;
(statearr_17090_19107[(2)] = inst_17009);

(statearr_17090_19107[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (11))){
var inst_16981 = (state_17032[(14)]);
var inst_16991 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16981);
var state_17032__$1 = state_17032;
var statearr_17095_19109 = state_17032__$1;
(statearr_17095_19109[(2)] = inst_16991);

(statearr_17095_19109[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (9))){
var inst_16999 = (state_17032[(19)]);
var inst_16972 = (state_17032[(16)]);
var inst_16981 = (state_17032[(14)]);
var inst_16999__$1 = (inst_16972.cljs$core$IFn$_invoke$arity$1 ? inst_16972.cljs$core$IFn$_invoke$arity$1(inst_16981) : inst_16972.call(null,inst_16981));
var state_17032__$1 = (function (){var statearr_17096 = state_17032;
(statearr_17096[(19)] = inst_16999__$1);

return statearr_17096;
})();
if(cljs.core.truth_(inst_16999__$1)){
var statearr_17097_19110 = state_17032__$1;
(statearr_17097_19110[(1)] = (14));

} else {
var statearr_17098_19111 = state_17032__$1;
(statearr_17098_19111[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (5))){
var inst_16982 = (state_17032[(13)]);
var state_17032__$1 = state_17032;
var statearr_17099_19119 = state_17032__$1;
(statearr_17099_19119[(2)] = inst_16982);

(statearr_17099_19119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (14))){
var inst_16999 = (state_17032[(19)]);
var state_17032__$1 = state_17032;
var statearr_17100_19120 = state_17032__$1;
(statearr_17100_19120[(2)] = inst_16999);

(statearr_17100_19120[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (26))){
var inst_17020 = (state_17032[(2)]);
var state_17032__$1 = state_17032;
var statearr_17105_19121 = state_17032__$1;
(statearr_17105_19121[(2)] = inst_17020);

(statearr_17105_19121[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (16))){
var inst_17011 = (state_17032[(2)]);
var state_17032__$1 = state_17032;
if(cljs.core.truth_(inst_17011)){
var statearr_17106_19122 = state_17032__$1;
(statearr_17106_19122[(1)] = (20));

} else {
var statearr_17107_19123 = state_17032__$1;
(statearr_17107_19123[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (10))){
var inst_17026 = (state_17032[(2)]);
var state_17032__$1 = state_17032;
var statearr_17108_19125 = state_17032__$1;
(statearr_17108_19125[(2)] = inst_17026);

(statearr_17108_19125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (18))){
var inst_17002 = (state_17032[(15)]);
var state_17032__$1 = state_17032;
var statearr_17109_19126 = state_17032__$1;
(statearr_17109_19126[(2)] = inst_17002);

(statearr_17109_19126[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17033 === (8))){
var inst_16980 = (state_17032[(7)]);
var inst_16989 = (inst_16980 == null);
var state_17032__$1 = state_17032;
if(cljs.core.truth_(inst_16989)){
var statearr_17111_19127 = state_17032__$1;
(statearr_17111_19127[(1)] = (11));

} else {
var statearr_17113_19128 = state_17032__$1;
(statearr_17113_19128[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__14993__auto__ = null;
var cljs$core$async$mix_$_state_machine__14993__auto____0 = (function (){
var statearr_17116 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17116[(0)] = cljs$core$async$mix_$_state_machine__14993__auto__);

(statearr_17116[(1)] = (1));

return statearr_17116;
});
var cljs$core$async$mix_$_state_machine__14993__auto____1 = (function (state_17032){
while(true){
var ret_value__14994__auto__ = (function (){try{while(true){
var result__14995__auto__ = switch__14992__auto__(state_17032);
if(cljs.core.keyword_identical_QMARK_(result__14995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14995__auto__;
}
break;
}
}catch (e17117){var ex__14996__auto__ = e17117;
var statearr_17118_19129 = state_17032;
(statearr_17118_19129[(2)] = ex__14996__auto__);


if(cljs.core.seq((state_17032[(4)]))){
var statearr_17119_19130 = state_17032;
(statearr_17119_19130[(1)] = cljs.core.first((state_17032[(4)])));

} else {
throw ex__14996__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19131 = state_17032;
state_17032 = G__19131;
continue;
} else {
return ret_value__14994__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14993__auto__ = function(state_17032){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14993__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14993__auto____1.call(this,state_17032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14993__auto____0;
cljs$core$async$mix_$_state_machine__14993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14993__auto____1;
return cljs$core$async$mix_$_state_machine__14993__auto__;
})()
})();
var state__15247__auto__ = (function (){var statearr_17121 = f__15246__auto__();
(statearr_17121[(6)] = c__15245__auto___19065);

return statearr_17121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15247__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_19133 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_19133(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_19138 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_19138(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_19139 = (function() {
var G__19140 = null;
var G__19140__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__19140__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__19140 = function(p,v){
switch(arguments.length){
case 1:
return G__19140__1.call(this,p);
case 2:
return G__19140__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19140.cljs$core$IFn$_invoke$arity$1 = G__19140__1;
G__19140.cljs$core$IFn$_invoke$arity$2 = G__19140__2;
return G__19140;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__17179 = arguments.length;
switch (G__17179) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19139(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19139(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__17198 = arguments.length;
switch (G__17198) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__17191_SHARP_){
if(cljs.core.truth_((p1__17191_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17191_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17191_SHARP_.call(null,topic)))){
return p1__17191_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17191_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17208 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17208 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17209){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17209 = meta17209;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17210,meta17209__$1){
var self__ = this;
var _17210__$1 = this;
return (new cljs.core.async.t_cljs$core$async17208(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17209__$1));
}));

(cljs.core.async.t_cljs$core$async17208.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17210){
var self__ = this;
var _17210__$1 = this;
return self__.meta17209;
}));

(cljs.core.async.t_cljs$core$async17208.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17208.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17208.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17208.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async17208.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async17208.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async17208.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async17208.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta17209","meta17209",-931914346,null)], null);
}));

(cljs.core.async.t_cljs$core$async17208.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17208.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17208");

(cljs.core.async.t_cljs$core$async17208.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17208");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17208.
 */
cljs.core.async.__GT_t_cljs$core$async17208 = (function cljs$core$async$__GT_t_cljs$core$async17208(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17209){
return (new cljs.core.async.t_cljs$core$async17208(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17209));
});

}

return (new cljs.core.async.t_cljs$core$async17208(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15245__auto___19163 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15246__auto__ = (function (){var switch__14992__auto__ = (function (state_17323){
var state_val_17324 = (state_17323[(1)]);
if((state_val_17324 === (7))){
var inst_17316 = (state_17323[(2)]);
var state_17323__$1 = state_17323;
var statearr_17329_19164 = state_17323__$1;
(statearr_17329_19164[(2)] = inst_17316);

(statearr_17329_19164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17324 === (20))){
var state_17323__$1 = state_17323;
var statearr_17332_19165 = state_17323__$1;
(statearr_17332_19165[(2)] = null);

(statearr_17332_19165[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17324 === (1))){
var state_17323__$1 = state_17323;
var statearr_17333_19169 = state_17323__$1;
(statearr_17333_19169[(2)] = null);

(statearr_17333_19169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17324 === (24))){
var inst_17292 = (state_17323[(7)]);
var inst_17308 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17292);
var state_17323__$1 = state_17323;
var statearr_17338_19171 = state_17323__$1;
(statearr_17338_19171[(2)] = inst_17308);

(statearr_17338_19171[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17324 === (4))){
var inst_17233 = (state_17323[(8)]);
var inst_17233__$1 = (state_17323[(2)]);
var inst_17234 = (inst_17233__$1 == null);
var state_17323__$1 = (function (){var statearr_17343 = state_17323;
(statearr_17343[(8)] = inst_17233__$1);

return statearr_17343;
})();
if(cljs.core.truth_(inst_17234)){
var statearr_17345_19173 = state_17323__$1;
(statearr_17345_19173[(1)] = (5));

} else {
var statearr_17348_19177 = state_17323__$1;
(statearr_17348_19177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17324 === (15))){
var inst_17286 = (state_17323[(2)]);
var state_17323__$1 = state_17323;
var statearr_17349_19180 = state_17323__$1;
(statearr_17349_19180[(2)] = inst_17286);

(statearr_17349_19180[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17324 === (21))){
var inst_17313 = (state_17323[(2)]);
var state_17323__$1 = (function (){var statearr_17356 = state_17323;
(statearr_17356[(9)] = inst_17313);

return statearr_17356;
})();
var statearr_17358_19182 = state_17323__$1;
(statearr_17358_19182[(2)] = null);

(statearr_17358_19182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17324 === (13))){
var inst_17261 = (state_17323[(10)]);
var inst_17266 = cljs.core.chunked_seq_QMARK_(inst_17261);
var state_17323__$1 = state_17323;
if(inst_17266){
var statearr_17360_19184 = state_17323__$1;
(statearr_17360_19184[(1)] = (16));

} else {
var statearr_17361_19185 = state_17323__$1;
(statearr_17361_19185[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17324 === (22))){
var inst_17301 = (state_17323[(2)]);
var state_17323__$1 = state_17323;
if(cljs.core.truth_(inst_17301)){
var statearr_17365_19186 = state_17323__$1;
(statearr_17365_19186[(1)] = (23));

} else {
var statearr_17366_19187 = state_17323__$1;
(statearr_17366_19187[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17324 === (6))){
var inst_17295 = (state_17323[(11)]);
var inst_17233 = (state_17323[(8)]);
var inst_17292 = (state_17323[(7)]);
var inst_17292__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17233) : topic_fn.call(null,inst_17233));
var inst_17293 = cljs.core.deref(mults);
var inst_17295__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17293,inst_17292__$1);
var state_17323__$1 = (function (){var statearr_17373 = state_17323;
(statearr_17373[(11)] = inst_17295__$1);

(statearr_17373[(7)] = inst_17292__$1);

return statearr_17373;
})();
if(cljs.core.truth_(inst_17295__$1)){
var statearr_17378_19188 = state_17323__$1;
(statearr_17378_19188[(1)] = (19));

} else {
var statearr_17380_19189 = state_17323__$1;
(statearr_17380_19189[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17324 === (25))){
var inst_17310 = (state_17323[(2)]);
var state_17323__$1 = state_17323;
var statearr_17382_19190 = state_17323__$1;
(statearr_17382_19190[(2)] = inst_17310);

(statearr_17382_19190[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17324 === (17))){
var inst_17261 = (state_17323[(10)]);
var inst_17273 = cljs.core.first(inst_17261);
var inst_17274 = cljs.core.async.muxch_STAR_(inst_17273);
var inst_17275 = cljs.core.async.close_BANG_(inst_17274);
var inst_17277 = cljs.core.next(inst_17261);
var inst_17243 = inst_17277;
var inst_17244 = null;
var inst_17245 = (0);
var inst_17246 = (0);
var state_17323__$1 = (function (){var statearr_17386 = state_17323;
(statearr_17386[(12)] = inst_17245);

(statearr_17386[(13)] = inst_17243);

(statearr_17386[(14)] = inst_17246);

(statearr_17386[(15)] = inst_17275);

(statearr_17386[(16)] = inst_17244);

return statearr_17386;
})();
var statearr_17390_19191 = state_17323__$1;
(statearr_17390_19191[(2)] = null);

(statearr_17390_19191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17324 === (3))){
var inst_17318 = (state_17323[(2)]);
var state_17323__$1 = state_17323;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17323__$1,inst_17318);
} else {
if((state_val_17324 === (12))){
var inst_17288 = (state_17323[(2)]);
var state_17323__$1 = state_17323;
var statearr_17397_19194 = state_17323__$1;
(statearr_17397_19194[(2)] = inst_17288);

(statearr_17397_19194[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17324 === (2))){
var state_17323__$1 = state_17323;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17323__$1,(4),ch);
} else {
if((state_val_17324 === (23))){
var state_17323__$1 = state_17323;
var statearr_17400_19195 = state_17323__$1;
(statearr_17400_19195[(2)] = null);

(statearr_17400_19195[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17324 === (19))){
var inst_17295 = (state_17323[(11)]);
var inst_17233 = (state_17323[(8)]);
var inst_17299 = cljs.core.async.muxch_STAR_(inst_17295);
var state_17323__$1 = state_17323;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17323__$1,(22),inst_17299,inst_17233);
} else {
if((state_val_17324 === (11))){
var inst_17243 = (state_17323[(13)]);
var inst_17261 = (state_17323[(10)]);
var inst_17261__$1 = cljs.core.seq(inst_17243);
var state_17323__$1 = (function (){var statearr_17408 = state_17323;
(statearr_17408[(10)] = inst_17261__$1);

return statearr_17408;
})();
if(inst_17261__$1){
var statearr_17409_19196 = state_17323__$1;
(statearr_17409_19196[(1)] = (13));

} else {
var statearr_17412_19197 = state_17323__$1;
(statearr_17412_19197[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17324 === (9))){
var inst_17290 = (state_17323[(2)]);
var state_17323__$1 = state_17323;
var statearr_17415_19198 = state_17323__$1;
(statearr_17415_19198[(2)] = inst_17290);

(statearr_17415_19198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17324 === (5))){
var inst_17240 = cljs.core.deref(mults);
var inst_17241 = cljs.core.vals(inst_17240);
var inst_17242 = cljs.core.seq(inst_17241);
var inst_17243 = inst_17242;
var inst_17244 = null;
var inst_17245 = (0);
var inst_17246 = (0);
var state_17323__$1 = (function (){var statearr_17421 = state_17323;
(statearr_17421[(12)] = inst_17245);

(statearr_17421[(13)] = inst_17243);

(statearr_17421[(14)] = inst_17246);

(statearr_17421[(16)] = inst_17244);

return statearr_17421;
})();
var statearr_17425_19199 = state_17323__$1;
(statearr_17425_19199[(2)] = null);

(statearr_17425_19199[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17324 === (14))){
var state_17323__$1 = state_17323;
var statearr_17430_19200 = state_17323__$1;
(statearr_17430_19200[(2)] = null);

(statearr_17430_19200[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17324 === (16))){
var inst_17261 = (state_17323[(10)]);
var inst_17268 = cljs.core.chunk_first(inst_17261);
var inst_17269 = cljs.core.chunk_rest(inst_17261);
var inst_17270 = cljs.core.count(inst_17268);
var inst_17243 = inst_17269;
var inst_17244 = inst_17268;
var inst_17245 = inst_17270;
var inst_17246 = (0);
var state_17323__$1 = (function (){var statearr_17434 = state_17323;
(statearr_17434[(12)] = inst_17245);

(statearr_17434[(13)] = inst_17243);

(statearr_17434[(14)] = inst_17246);

(statearr_17434[(16)] = inst_17244);

return statearr_17434;
})();
var statearr_17437_19201 = state_17323__$1;
(statearr_17437_19201[(2)] = null);

(statearr_17437_19201[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17324 === (10))){
var inst_17245 = (state_17323[(12)]);
var inst_17243 = (state_17323[(13)]);
var inst_17246 = (state_17323[(14)]);
var inst_17244 = (state_17323[(16)]);
var inst_17252 = cljs.core._nth(inst_17244,inst_17246);
var inst_17253 = cljs.core.async.muxch_STAR_(inst_17252);
var inst_17254 = cljs.core.async.close_BANG_(inst_17253);
var inst_17257 = (inst_17246 + (1));
var tmp17426 = inst_17245;
var tmp17427 = inst_17243;
var tmp17428 = inst_17244;
var inst_17243__$1 = tmp17427;
var inst_17244__$1 = tmp17428;
var inst_17245__$1 = tmp17426;
var inst_17246__$1 = inst_17257;
var state_17323__$1 = (function (){var statearr_17440 = state_17323;
(statearr_17440[(17)] = inst_17254);

(statearr_17440[(12)] = inst_17245__$1);

(statearr_17440[(13)] = inst_17243__$1);

(statearr_17440[(14)] = inst_17246__$1);

(statearr_17440[(16)] = inst_17244__$1);

return statearr_17440;
})();
var statearr_17445_19203 = state_17323__$1;
(statearr_17445_19203[(2)] = null);

(statearr_17445_19203[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17324 === (18))){
var inst_17283 = (state_17323[(2)]);
var state_17323__$1 = state_17323;
var statearr_17447_19204 = state_17323__$1;
(statearr_17447_19204[(2)] = inst_17283);

(statearr_17447_19204[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17324 === (8))){
var inst_17245 = (state_17323[(12)]);
var inst_17246 = (state_17323[(14)]);
var inst_17249 = (inst_17246 < inst_17245);
var inst_17250 = inst_17249;
var state_17323__$1 = state_17323;
if(cljs.core.truth_(inst_17250)){
var statearr_17451_19205 = state_17323__$1;
(statearr_17451_19205[(1)] = (10));

} else {
var statearr_17454_19206 = state_17323__$1;
(statearr_17454_19206[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14993__auto__ = null;
var cljs$core$async$state_machine__14993__auto____0 = (function (){
var statearr_17456 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17456[(0)] = cljs$core$async$state_machine__14993__auto__);

(statearr_17456[(1)] = (1));

return statearr_17456;
});
var cljs$core$async$state_machine__14993__auto____1 = (function (state_17323){
while(true){
var ret_value__14994__auto__ = (function (){try{while(true){
var result__14995__auto__ = switch__14992__auto__(state_17323);
if(cljs.core.keyword_identical_QMARK_(result__14995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14995__auto__;
}
break;
}
}catch (e17457){var ex__14996__auto__ = e17457;
var statearr_17458_19214 = state_17323;
(statearr_17458_19214[(2)] = ex__14996__auto__);


if(cljs.core.seq((state_17323[(4)]))){
var statearr_17461_19215 = state_17323;
(statearr_17461_19215[(1)] = cljs.core.first((state_17323[(4)])));

} else {
throw ex__14996__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19216 = state_17323;
state_17323 = G__19216;
continue;
} else {
return ret_value__14994__auto__;
}
break;
}
});
cljs$core$async$state_machine__14993__auto__ = function(state_17323){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14993__auto____1.call(this,state_17323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14993__auto____0;
cljs$core$async$state_machine__14993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14993__auto____1;
return cljs$core$async$state_machine__14993__auto__;
})()
})();
var state__15247__auto__ = (function (){var statearr_17466 = f__15246__auto__();
(statearr_17466[(6)] = c__15245__auto___19163);

return statearr_17466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15247__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__17475 = arguments.length;
switch (G__17475) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__17494 = arguments.length;
switch (G__17494) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__17511 = arguments.length;
switch (G__17511) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__15245__auto___19233 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15246__auto__ = (function (){var switch__14992__auto__ = (function (state_17579){
var state_val_17582 = (state_17579[(1)]);
if((state_val_17582 === (7))){
var state_17579__$1 = state_17579;
var statearr_17590_19234 = state_17579__$1;
(statearr_17590_19234[(2)] = null);

(statearr_17590_19234[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (1))){
var state_17579__$1 = state_17579;
var statearr_17591_19235 = state_17579__$1;
(statearr_17591_19235[(2)] = null);

(statearr_17591_19235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (4))){
var inst_17523 = (state_17579[(7)]);
var inst_17524 = (state_17579[(8)]);
var inst_17527 = (inst_17524 < inst_17523);
var state_17579__$1 = state_17579;
if(cljs.core.truth_(inst_17527)){
var statearr_17598_19237 = state_17579__$1;
(statearr_17598_19237[(1)] = (6));

} else {
var statearr_17599_19238 = state_17579__$1;
(statearr_17599_19238[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (15))){
var inst_17563 = (state_17579[(9)]);
var inst_17568 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17563);
var state_17579__$1 = state_17579;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17579__$1,(17),out,inst_17568);
} else {
if((state_val_17582 === (13))){
var inst_17563 = (state_17579[(9)]);
var inst_17563__$1 = (state_17579[(2)]);
var inst_17564 = cljs.core.some(cljs.core.nil_QMARK_,inst_17563__$1);
var state_17579__$1 = (function (){var statearr_17605 = state_17579;
(statearr_17605[(9)] = inst_17563__$1);

return statearr_17605;
})();
if(cljs.core.truth_(inst_17564)){
var statearr_17606_19239 = state_17579__$1;
(statearr_17606_19239[(1)] = (14));

} else {
var statearr_17607_19240 = state_17579__$1;
(statearr_17607_19240[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (6))){
var state_17579__$1 = state_17579;
var statearr_17611_19242 = state_17579__$1;
(statearr_17611_19242[(2)] = null);

(statearr_17611_19242[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (17))){
var inst_17570 = (state_17579[(2)]);
var state_17579__$1 = (function (){var statearr_17627 = state_17579;
(statearr_17627[(10)] = inst_17570);

return statearr_17627;
})();
var statearr_17630_19243 = state_17579__$1;
(statearr_17630_19243[(2)] = null);

(statearr_17630_19243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (3))){
var inst_17575 = (state_17579[(2)]);
var state_17579__$1 = state_17579;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17579__$1,inst_17575);
} else {
if((state_val_17582 === (12))){
var _ = (function (){var statearr_17635 = state_17579;
(statearr_17635[(4)] = cljs.core.rest((state_17579[(4)])));

return statearr_17635;
})();
var state_17579__$1 = state_17579;
var ex17625 = (state_17579__$1[(2)]);
var statearr_17636_19246 = state_17579__$1;
(statearr_17636_19246[(5)] = ex17625);


if((ex17625 instanceof Object)){
var statearr_17660_19247 = state_17579__$1;
(statearr_17660_19247[(1)] = (11));

(statearr_17660_19247[(5)] = null);

} else {
throw ex17625;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (2))){
var inst_17522 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17523 = cnt;
var inst_17524 = (0);
var state_17579__$1 = (function (){var statearr_17661 = state_17579;
(statearr_17661[(7)] = inst_17523);

(statearr_17661[(8)] = inst_17524);

(statearr_17661[(11)] = inst_17522);

return statearr_17661;
})();
var statearr_17662_19248 = state_17579__$1;
(statearr_17662_19248[(2)] = null);

(statearr_17662_19248[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (11))){
var inst_17537 = (state_17579[(2)]);
var inst_17538 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17579__$1 = (function (){var statearr_17663 = state_17579;
(statearr_17663[(12)] = inst_17537);

return statearr_17663;
})();
var statearr_17664_19250 = state_17579__$1;
(statearr_17664_19250[(2)] = inst_17538);

(statearr_17664_19250[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (9))){
var inst_17524 = (state_17579[(8)]);
var _ = (function (){var statearr_17665 = state_17579;
(statearr_17665[(4)] = cljs.core.cons((12),(state_17579[(4)])));

return statearr_17665;
})();
var inst_17546 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17524) : chs__$1.call(null,inst_17524));
var inst_17548 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17524) : done.call(null,inst_17524));
var inst_17549 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17546,inst_17548);
var ___$1 = (function (){var statearr_17666 = state_17579;
(statearr_17666[(4)] = cljs.core.rest((state_17579[(4)])));

return statearr_17666;
})();
var state_17579__$1 = state_17579;
var statearr_17667_19254 = state_17579__$1;
(statearr_17667_19254[(2)] = inst_17549);

(statearr_17667_19254[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (5))){
var inst_17560 = (state_17579[(2)]);
var state_17579__$1 = (function (){var statearr_17668 = state_17579;
(statearr_17668[(13)] = inst_17560);

return statearr_17668;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17579__$1,(13),dchan);
} else {
if((state_val_17582 === (14))){
var inst_17566 = cljs.core.async.close_BANG_(out);
var state_17579__$1 = state_17579;
var statearr_17673_19255 = state_17579__$1;
(statearr_17673_19255[(2)] = inst_17566);

(statearr_17673_19255[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (16))){
var inst_17573 = (state_17579[(2)]);
var state_17579__$1 = state_17579;
var statearr_17675_19256 = state_17579__$1;
(statearr_17675_19256[(2)] = inst_17573);

(statearr_17675_19256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (10))){
var inst_17524 = (state_17579[(8)]);
var inst_17553 = (state_17579[(2)]);
var inst_17554 = (inst_17524 + (1));
var inst_17524__$1 = inst_17554;
var state_17579__$1 = (function (){var statearr_17677 = state_17579;
(statearr_17677[(8)] = inst_17524__$1);

(statearr_17677[(14)] = inst_17553);

return statearr_17677;
})();
var statearr_17680_19257 = state_17579__$1;
(statearr_17680_19257[(2)] = null);

(statearr_17680_19257[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (8))){
var inst_17558 = (state_17579[(2)]);
var state_17579__$1 = state_17579;
var statearr_17682_19258 = state_17579__$1;
(statearr_17682_19258[(2)] = inst_17558);

(statearr_17682_19258[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14993__auto__ = null;
var cljs$core$async$state_machine__14993__auto____0 = (function (){
var statearr_17687 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17687[(0)] = cljs$core$async$state_machine__14993__auto__);

(statearr_17687[(1)] = (1));

return statearr_17687;
});
var cljs$core$async$state_machine__14993__auto____1 = (function (state_17579){
while(true){
var ret_value__14994__auto__ = (function (){try{while(true){
var result__14995__auto__ = switch__14992__auto__(state_17579);
if(cljs.core.keyword_identical_QMARK_(result__14995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14995__auto__;
}
break;
}
}catch (e17691){var ex__14996__auto__ = e17691;
var statearr_17693_19259 = state_17579;
(statearr_17693_19259[(2)] = ex__14996__auto__);


if(cljs.core.seq((state_17579[(4)]))){
var statearr_17699_19260 = state_17579;
(statearr_17699_19260[(1)] = cljs.core.first((state_17579[(4)])));

} else {
throw ex__14996__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19261 = state_17579;
state_17579 = G__19261;
continue;
} else {
return ret_value__14994__auto__;
}
break;
}
});
cljs$core$async$state_machine__14993__auto__ = function(state_17579){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14993__auto____1.call(this,state_17579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14993__auto____0;
cljs$core$async$state_machine__14993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14993__auto____1;
return cljs$core$async$state_machine__14993__auto__;
})()
})();
var state__15247__auto__ = (function (){var statearr_17711 = f__15246__auto__();
(statearr_17711[(6)] = c__15245__auto___19233);

return statearr_17711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15247__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__17742 = arguments.length;
switch (G__17742) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15245__auto___19263 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15246__auto__ = (function (){var switch__14992__auto__ = (function (state_17793){
var state_val_17794 = (state_17793[(1)]);
if((state_val_17794 === (7))){
var inst_17768 = (state_17793[(7)]);
var inst_17769 = (state_17793[(8)]);
var inst_17768__$1 = (state_17793[(2)]);
var inst_17769__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17768__$1,(0),null);
var inst_17770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17768__$1,(1),null);
var inst_17771 = (inst_17769__$1 == null);
var state_17793__$1 = (function (){var statearr_17801 = state_17793;
(statearr_17801[(7)] = inst_17768__$1);

(statearr_17801[(8)] = inst_17769__$1);

(statearr_17801[(9)] = inst_17770);

return statearr_17801;
})();
if(cljs.core.truth_(inst_17771)){
var statearr_17802_19264 = state_17793__$1;
(statearr_17802_19264[(1)] = (8));

} else {
var statearr_17804_19265 = state_17793__$1;
(statearr_17804_19265[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (1))){
var inst_17758 = cljs.core.vec(chs);
var inst_17759 = inst_17758;
var state_17793__$1 = (function (){var statearr_17805 = state_17793;
(statearr_17805[(10)] = inst_17759);

return statearr_17805;
})();
var statearr_17806_19266 = state_17793__$1;
(statearr_17806_19266[(2)] = null);

(statearr_17806_19266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (4))){
var inst_17759 = (state_17793[(10)]);
var state_17793__$1 = state_17793;
return cljs.core.async.ioc_alts_BANG_(state_17793__$1,(7),inst_17759);
} else {
if((state_val_17794 === (6))){
var inst_17788 = (state_17793[(2)]);
var state_17793__$1 = state_17793;
var statearr_17811_19267 = state_17793__$1;
(statearr_17811_19267[(2)] = inst_17788);

(statearr_17811_19267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (3))){
var inst_17790 = (state_17793[(2)]);
var state_17793__$1 = state_17793;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17793__$1,inst_17790);
} else {
if((state_val_17794 === (2))){
var inst_17759 = (state_17793[(10)]);
var inst_17761 = cljs.core.count(inst_17759);
var inst_17762 = (inst_17761 > (0));
var state_17793__$1 = state_17793;
if(cljs.core.truth_(inst_17762)){
var statearr_17815_19268 = state_17793__$1;
(statearr_17815_19268[(1)] = (4));

} else {
var statearr_17818_19269 = state_17793__$1;
(statearr_17818_19269[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (11))){
var inst_17759 = (state_17793[(10)]);
var inst_17779 = (state_17793[(2)]);
var tmp17812 = inst_17759;
var inst_17759__$1 = tmp17812;
var state_17793__$1 = (function (){var statearr_17820 = state_17793;
(statearr_17820[(11)] = inst_17779);

(statearr_17820[(10)] = inst_17759__$1);

return statearr_17820;
})();
var statearr_17823_19270 = state_17793__$1;
(statearr_17823_19270[(2)] = null);

(statearr_17823_19270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (9))){
var inst_17769 = (state_17793[(8)]);
var state_17793__$1 = state_17793;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17793__$1,(11),out,inst_17769);
} else {
if((state_val_17794 === (5))){
var inst_17786 = cljs.core.async.close_BANG_(out);
var state_17793__$1 = state_17793;
var statearr_17829_19271 = state_17793__$1;
(statearr_17829_19271[(2)] = inst_17786);

(statearr_17829_19271[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (10))){
var inst_17783 = (state_17793[(2)]);
var state_17793__$1 = state_17793;
var statearr_17831_19272 = state_17793__$1;
(statearr_17831_19272[(2)] = inst_17783);

(statearr_17831_19272[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (8))){
var inst_17768 = (state_17793[(7)]);
var inst_17769 = (state_17793[(8)]);
var inst_17770 = (state_17793[(9)]);
var inst_17759 = (state_17793[(10)]);
var inst_17774 = (function (){var cs = inst_17759;
var vec__17764 = inst_17768;
var v = inst_17769;
var c = inst_17770;
return (function (p1__17728_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17728_SHARP_);
});
})();
var inst_17775 = cljs.core.filterv(inst_17774,inst_17759);
var inst_17759__$1 = inst_17775;
var state_17793__$1 = (function (){var statearr_17846 = state_17793;
(statearr_17846[(10)] = inst_17759__$1);

return statearr_17846;
})();
var statearr_17847_19273 = state_17793__$1;
(statearr_17847_19273[(2)] = null);

(statearr_17847_19273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14993__auto__ = null;
var cljs$core$async$state_machine__14993__auto____0 = (function (){
var statearr_17852 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17852[(0)] = cljs$core$async$state_machine__14993__auto__);

(statearr_17852[(1)] = (1));

return statearr_17852;
});
var cljs$core$async$state_machine__14993__auto____1 = (function (state_17793){
while(true){
var ret_value__14994__auto__ = (function (){try{while(true){
var result__14995__auto__ = switch__14992__auto__(state_17793);
if(cljs.core.keyword_identical_QMARK_(result__14995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14995__auto__;
}
break;
}
}catch (e17858){var ex__14996__auto__ = e17858;
var statearr_17862_19278 = state_17793;
(statearr_17862_19278[(2)] = ex__14996__auto__);


if(cljs.core.seq((state_17793[(4)]))){
var statearr_17863_19279 = state_17793;
(statearr_17863_19279[(1)] = cljs.core.first((state_17793[(4)])));

} else {
throw ex__14996__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19280 = state_17793;
state_17793 = G__19280;
continue;
} else {
return ret_value__14994__auto__;
}
break;
}
});
cljs$core$async$state_machine__14993__auto__ = function(state_17793){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14993__auto____1.call(this,state_17793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14993__auto____0;
cljs$core$async$state_machine__14993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14993__auto____1;
return cljs$core$async$state_machine__14993__auto__;
})()
})();
var state__15247__auto__ = (function (){var statearr_17885 = f__15246__auto__();
(statearr_17885[(6)] = c__15245__auto___19263);

return statearr_17885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15247__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__17920 = arguments.length;
switch (G__17920) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15245__auto___19282 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15246__auto__ = (function (){var switch__14992__auto__ = (function (state_17957){
var state_val_17958 = (state_17957[(1)]);
if((state_val_17958 === (7))){
var inst_17934 = (state_17957[(7)]);
var inst_17934__$1 = (state_17957[(2)]);
var inst_17939 = (inst_17934__$1 == null);
var inst_17940 = cljs.core.not(inst_17939);
var state_17957__$1 = (function (){var statearr_17960 = state_17957;
(statearr_17960[(7)] = inst_17934__$1);

return statearr_17960;
})();
if(inst_17940){
var statearr_17961_19284 = state_17957__$1;
(statearr_17961_19284[(1)] = (8));

} else {
var statearr_17962_19285 = state_17957__$1;
(statearr_17962_19285[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17958 === (1))){
var inst_17926 = (0);
var state_17957__$1 = (function (){var statearr_17963 = state_17957;
(statearr_17963[(8)] = inst_17926);

return statearr_17963;
})();
var statearr_17964_19286 = state_17957__$1;
(statearr_17964_19286[(2)] = null);

(statearr_17964_19286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17958 === (4))){
var state_17957__$1 = state_17957;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17957__$1,(7),ch);
} else {
if((state_val_17958 === (6))){
var inst_17952 = (state_17957[(2)]);
var state_17957__$1 = state_17957;
var statearr_17966_19287 = state_17957__$1;
(statearr_17966_19287[(2)] = inst_17952);

(statearr_17966_19287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17958 === (3))){
var inst_17954 = (state_17957[(2)]);
var inst_17955 = cljs.core.async.close_BANG_(out);
var state_17957__$1 = (function (){var statearr_17978 = state_17957;
(statearr_17978[(9)] = inst_17954);

return statearr_17978;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17957__$1,inst_17955);
} else {
if((state_val_17958 === (2))){
var inst_17926 = (state_17957[(8)]);
var inst_17929 = (inst_17926 < n);
var state_17957__$1 = state_17957;
if(cljs.core.truth_(inst_17929)){
var statearr_17982_19295 = state_17957__$1;
(statearr_17982_19295[(1)] = (4));

} else {
var statearr_17984_19296 = state_17957__$1;
(statearr_17984_19296[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17958 === (11))){
var inst_17926 = (state_17957[(8)]);
var inst_17943 = (state_17957[(2)]);
var inst_17944 = (inst_17926 + (1));
var inst_17926__$1 = inst_17944;
var state_17957__$1 = (function (){var statearr_17985 = state_17957;
(statearr_17985[(10)] = inst_17943);

(statearr_17985[(8)] = inst_17926__$1);

return statearr_17985;
})();
var statearr_17987_19300 = state_17957__$1;
(statearr_17987_19300[(2)] = null);

(statearr_17987_19300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17958 === (9))){
var state_17957__$1 = state_17957;
var statearr_17991_19304 = state_17957__$1;
(statearr_17991_19304[(2)] = null);

(statearr_17991_19304[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17958 === (5))){
var state_17957__$1 = state_17957;
var statearr_17993_19305 = state_17957__$1;
(statearr_17993_19305[(2)] = null);

(statearr_17993_19305[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17958 === (10))){
var inst_17949 = (state_17957[(2)]);
var state_17957__$1 = state_17957;
var statearr_17994_19306 = state_17957__$1;
(statearr_17994_19306[(2)] = inst_17949);

(statearr_17994_19306[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17958 === (8))){
var inst_17934 = (state_17957[(7)]);
var state_17957__$1 = state_17957;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17957__$1,(11),out,inst_17934);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14993__auto__ = null;
var cljs$core$async$state_machine__14993__auto____0 = (function (){
var statearr_17999 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17999[(0)] = cljs$core$async$state_machine__14993__auto__);

(statearr_17999[(1)] = (1));

return statearr_17999;
});
var cljs$core$async$state_machine__14993__auto____1 = (function (state_17957){
while(true){
var ret_value__14994__auto__ = (function (){try{while(true){
var result__14995__auto__ = switch__14992__auto__(state_17957);
if(cljs.core.keyword_identical_QMARK_(result__14995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14995__auto__;
}
break;
}
}catch (e18003){var ex__14996__auto__ = e18003;
var statearr_18007_19311 = state_17957;
(statearr_18007_19311[(2)] = ex__14996__auto__);


if(cljs.core.seq((state_17957[(4)]))){
var statearr_18008_19312 = state_17957;
(statearr_18008_19312[(1)] = cljs.core.first((state_17957[(4)])));

} else {
throw ex__14996__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19313 = state_17957;
state_17957 = G__19313;
continue;
} else {
return ret_value__14994__auto__;
}
break;
}
});
cljs$core$async$state_machine__14993__auto__ = function(state_17957){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14993__auto____1.call(this,state_17957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14993__auto____0;
cljs$core$async$state_machine__14993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14993__auto____1;
return cljs$core$async$state_machine__14993__auto__;
})()
})();
var state__15247__auto__ = (function (){var statearr_18011 = f__15246__auto__();
(statearr_18011[(6)] = c__15245__auto___19282);

return statearr_18011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15247__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18017 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18017 = (function (f,ch,meta18018){
this.f = f;
this.ch = ch;
this.meta18018 = meta18018;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18019,meta18018__$1){
var self__ = this;
var _18019__$1 = this;
return (new cljs.core.async.t_cljs$core$async18017(self__.f,self__.ch,meta18018__$1));
}));

(cljs.core.async.t_cljs$core$async18017.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18019){
var self__ = this;
var _18019__$1 = this;
return self__.meta18018;
}));

(cljs.core.async.t_cljs$core$async18017.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18017.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18017.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18017.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18017.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18033 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18033 = (function (f,ch,meta18018,_,fn1,meta18034){
this.f = f;
this.ch = ch;
this.meta18018 = meta18018;
this._ = _;
this.fn1 = fn1;
this.meta18034 = meta18034;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18035,meta18034__$1){
var self__ = this;
var _18035__$1 = this;
return (new cljs.core.async.t_cljs$core$async18033(self__.f,self__.ch,self__.meta18018,self__._,self__.fn1,meta18034__$1));
}));

(cljs.core.async.t_cljs$core$async18033.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18035){
var self__ = this;
var _18035__$1 = this;
return self__.meta18034;
}));

(cljs.core.async.t_cljs$core$async18033.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18033.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async18033.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18033.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__18013_SHARP_){
var G__18045 = (((p1__18013_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18013_SHARP_) : self__.f.call(null,p1__18013_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18045) : f1.call(null,G__18045));
});
}));

(cljs.core.async.t_cljs$core$async18033.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18018","meta18018",-647486821,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async18017","cljs.core.async/t_cljs$core$async18017",2086641587,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta18034","meta18034",560739465,null)], null);
}));

(cljs.core.async.t_cljs$core$async18033.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18033.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18033");

(cljs.core.async.t_cljs$core$async18033.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18033");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18033.
 */
cljs.core.async.__GT_t_cljs$core$async18033 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18033(f__$1,ch__$1,meta18018__$1,___$2,fn1__$1,meta18034){
return (new cljs.core.async.t_cljs$core$async18033(f__$1,ch__$1,meta18018__$1,___$2,fn1__$1,meta18034));
});

}

return (new cljs.core.async.t_cljs$core$async18033(self__.f,self__.ch,self__.meta18018,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__18048 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18048) : self__.f.call(null,G__18048));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async18017.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18017.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async18017.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18018","meta18018",-647486821,null)], null);
}));

(cljs.core.async.t_cljs$core$async18017.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18017.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18017");

(cljs.core.async.t_cljs$core$async18017.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18017");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18017.
 */
cljs.core.async.__GT_t_cljs$core$async18017 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18017(f__$1,ch__$1,meta18018){
return (new cljs.core.async.t_cljs$core$async18017(f__$1,ch__$1,meta18018));
});

}

return (new cljs.core.async.t_cljs$core$async18017(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18061 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18061 = (function (f,ch,meta18062){
this.f = f;
this.ch = ch;
this.meta18062 = meta18062;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18063,meta18062__$1){
var self__ = this;
var _18063__$1 = this;
return (new cljs.core.async.t_cljs$core$async18061(self__.f,self__.ch,meta18062__$1));
}));

(cljs.core.async.t_cljs$core$async18061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18063){
var self__ = this;
var _18063__$1 = this;
return self__.meta18062;
}));

(cljs.core.async.t_cljs$core$async18061.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18061.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18061.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18061.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18061.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18061.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async18061.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18062","meta18062",-1856044267,null)], null);
}));

(cljs.core.async.t_cljs$core$async18061.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18061.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18061");

(cljs.core.async.t_cljs$core$async18061.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18061");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18061.
 */
cljs.core.async.__GT_t_cljs$core$async18061 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async18061(f__$1,ch__$1,meta18062){
return (new cljs.core.async.t_cljs$core$async18061(f__$1,ch__$1,meta18062));
});

}

return (new cljs.core.async.t_cljs$core$async18061(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18077 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18077 = (function (p,ch,meta18078){
this.p = p;
this.ch = ch;
this.meta18078 = meta18078;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18079,meta18078__$1){
var self__ = this;
var _18079__$1 = this;
return (new cljs.core.async.t_cljs$core$async18077(self__.p,self__.ch,meta18078__$1));
}));

(cljs.core.async.t_cljs$core$async18077.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18079){
var self__ = this;
var _18079__$1 = this;
return self__.meta18078;
}));

(cljs.core.async.t_cljs$core$async18077.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18077.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18077.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18077.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18077.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18077.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18077.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async18077.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18078","meta18078",695812164,null)], null);
}));

(cljs.core.async.t_cljs$core$async18077.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18077.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18077");

(cljs.core.async.t_cljs$core$async18077.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18077");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18077.
 */
cljs.core.async.__GT_t_cljs$core$async18077 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async18077(p__$1,ch__$1,meta18078){
return (new cljs.core.async.t_cljs$core$async18077(p__$1,ch__$1,meta18078));
});

}

return (new cljs.core.async.t_cljs$core$async18077(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__18084 = arguments.length;
switch (G__18084) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15245__auto___19358 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15246__auto__ = (function (){var switch__14992__auto__ = (function (state_18107){
var state_val_18108 = (state_18107[(1)]);
if((state_val_18108 === (7))){
var inst_18103 = (state_18107[(2)]);
var state_18107__$1 = state_18107;
var statearr_18109_19362 = state_18107__$1;
(statearr_18109_19362[(2)] = inst_18103);

(statearr_18109_19362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18108 === (1))){
var state_18107__$1 = state_18107;
var statearr_18110_19363 = state_18107__$1;
(statearr_18110_19363[(2)] = null);

(statearr_18110_19363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18108 === (4))){
var inst_18089 = (state_18107[(7)]);
var inst_18089__$1 = (state_18107[(2)]);
var inst_18090 = (inst_18089__$1 == null);
var state_18107__$1 = (function (){var statearr_18112 = state_18107;
(statearr_18112[(7)] = inst_18089__$1);

return statearr_18112;
})();
if(cljs.core.truth_(inst_18090)){
var statearr_18113_19364 = state_18107__$1;
(statearr_18113_19364[(1)] = (5));

} else {
var statearr_18114_19365 = state_18107__$1;
(statearr_18114_19365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18108 === (6))){
var inst_18089 = (state_18107[(7)]);
var inst_18094 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18089) : p.call(null,inst_18089));
var state_18107__$1 = state_18107;
if(cljs.core.truth_(inst_18094)){
var statearr_18115_19366 = state_18107__$1;
(statearr_18115_19366[(1)] = (8));

} else {
var statearr_18117_19367 = state_18107__$1;
(statearr_18117_19367[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18108 === (3))){
var inst_18105 = (state_18107[(2)]);
var state_18107__$1 = state_18107;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18107__$1,inst_18105);
} else {
if((state_val_18108 === (2))){
var state_18107__$1 = state_18107;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18107__$1,(4),ch);
} else {
if((state_val_18108 === (11))){
var inst_18097 = (state_18107[(2)]);
var state_18107__$1 = state_18107;
var statearr_18118_19368 = state_18107__$1;
(statearr_18118_19368[(2)] = inst_18097);

(statearr_18118_19368[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18108 === (9))){
var state_18107__$1 = state_18107;
var statearr_18120_19369 = state_18107__$1;
(statearr_18120_19369[(2)] = null);

(statearr_18120_19369[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18108 === (5))){
var inst_18092 = cljs.core.async.close_BANG_(out);
var state_18107__$1 = state_18107;
var statearr_18121_19371 = state_18107__$1;
(statearr_18121_19371[(2)] = inst_18092);

(statearr_18121_19371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18108 === (10))){
var inst_18100 = (state_18107[(2)]);
var state_18107__$1 = (function (){var statearr_18122 = state_18107;
(statearr_18122[(8)] = inst_18100);

return statearr_18122;
})();
var statearr_18124_19376 = state_18107__$1;
(statearr_18124_19376[(2)] = null);

(statearr_18124_19376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18108 === (8))){
var inst_18089 = (state_18107[(7)]);
var state_18107__$1 = state_18107;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18107__$1,(11),out,inst_18089);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14993__auto__ = null;
var cljs$core$async$state_machine__14993__auto____0 = (function (){
var statearr_18125 = [null,null,null,null,null,null,null,null,null];
(statearr_18125[(0)] = cljs$core$async$state_machine__14993__auto__);

(statearr_18125[(1)] = (1));

return statearr_18125;
});
var cljs$core$async$state_machine__14993__auto____1 = (function (state_18107){
while(true){
var ret_value__14994__auto__ = (function (){try{while(true){
var result__14995__auto__ = switch__14992__auto__(state_18107);
if(cljs.core.keyword_identical_QMARK_(result__14995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14995__auto__;
}
break;
}
}catch (e18126){var ex__14996__auto__ = e18126;
var statearr_18127_19386 = state_18107;
(statearr_18127_19386[(2)] = ex__14996__auto__);


if(cljs.core.seq((state_18107[(4)]))){
var statearr_18129_19387 = state_18107;
(statearr_18129_19387[(1)] = cljs.core.first((state_18107[(4)])));

} else {
throw ex__14996__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19388 = state_18107;
state_18107 = G__19388;
continue;
} else {
return ret_value__14994__auto__;
}
break;
}
});
cljs$core$async$state_machine__14993__auto__ = function(state_18107){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14993__auto____1.call(this,state_18107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14993__auto____0;
cljs$core$async$state_machine__14993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14993__auto____1;
return cljs$core$async$state_machine__14993__auto__;
})()
})();
var state__15247__auto__ = (function (){var statearr_18133 = f__15246__auto__();
(statearr_18133[(6)] = c__15245__auto___19358);

return statearr_18133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15247__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18137 = arguments.length;
switch (G__18137) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__15245__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15246__auto__ = (function (){var switch__14992__auto__ = (function (state_18199){
var state_val_18200 = (state_18199[(1)]);
if((state_val_18200 === (7))){
var inst_18195 = (state_18199[(2)]);
var state_18199__$1 = state_18199;
var statearr_18201_19390 = state_18199__$1;
(statearr_18201_19390[(2)] = inst_18195);

(statearr_18201_19390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18200 === (20))){
var inst_18165 = (state_18199[(7)]);
var inst_18176 = (state_18199[(2)]);
var inst_18177 = cljs.core.next(inst_18165);
var inst_18151 = inst_18177;
var inst_18152 = null;
var inst_18153 = (0);
var inst_18154 = (0);
var state_18199__$1 = (function (){var statearr_18202 = state_18199;
(statearr_18202[(8)] = inst_18151);

(statearr_18202[(9)] = inst_18152);

(statearr_18202[(10)] = inst_18176);

(statearr_18202[(11)] = inst_18154);

(statearr_18202[(12)] = inst_18153);

return statearr_18202;
})();
var statearr_18203_19391 = state_18199__$1;
(statearr_18203_19391[(2)] = null);

(statearr_18203_19391[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18200 === (1))){
var state_18199__$1 = state_18199;
var statearr_18208_19392 = state_18199__$1;
(statearr_18208_19392[(2)] = null);

(statearr_18208_19392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18200 === (4))){
var inst_18140 = (state_18199[(13)]);
var inst_18140__$1 = (state_18199[(2)]);
var inst_18141 = (inst_18140__$1 == null);
var state_18199__$1 = (function (){var statearr_18209 = state_18199;
(statearr_18209[(13)] = inst_18140__$1);

return statearr_18209;
})();
if(cljs.core.truth_(inst_18141)){
var statearr_18210_19396 = state_18199__$1;
(statearr_18210_19396[(1)] = (5));

} else {
var statearr_18211_19397 = state_18199__$1;
(statearr_18211_19397[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18200 === (15))){
var state_18199__$1 = state_18199;
var statearr_18215_19399 = state_18199__$1;
(statearr_18215_19399[(2)] = null);

(statearr_18215_19399[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18200 === (21))){
var state_18199__$1 = state_18199;
var statearr_18216_19400 = state_18199__$1;
(statearr_18216_19400[(2)] = null);

(statearr_18216_19400[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18200 === (13))){
var inst_18151 = (state_18199[(8)]);
var inst_18152 = (state_18199[(9)]);
var inst_18154 = (state_18199[(11)]);
var inst_18153 = (state_18199[(12)]);
var inst_18161 = (state_18199[(2)]);
var inst_18162 = (inst_18154 + (1));
var tmp18212 = inst_18151;
var tmp18213 = inst_18152;
var tmp18214 = inst_18153;
var inst_18151__$1 = tmp18212;
var inst_18152__$1 = tmp18213;
var inst_18153__$1 = tmp18214;
var inst_18154__$1 = inst_18162;
var state_18199__$1 = (function (){var statearr_18217 = state_18199;
(statearr_18217[(8)] = inst_18151__$1);

(statearr_18217[(9)] = inst_18152__$1);

(statearr_18217[(14)] = inst_18161);

(statearr_18217[(11)] = inst_18154__$1);

(statearr_18217[(12)] = inst_18153__$1);

return statearr_18217;
})();
var statearr_18218_19401 = state_18199__$1;
(statearr_18218_19401[(2)] = null);

(statearr_18218_19401[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18200 === (22))){
var state_18199__$1 = state_18199;
var statearr_18220_19402 = state_18199__$1;
(statearr_18220_19402[(2)] = null);

(statearr_18220_19402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18200 === (6))){
var inst_18140 = (state_18199[(13)]);
var inst_18149 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18140) : f.call(null,inst_18140));
var inst_18150 = cljs.core.seq(inst_18149);
var inst_18151 = inst_18150;
var inst_18152 = null;
var inst_18153 = (0);
var inst_18154 = (0);
var state_18199__$1 = (function (){var statearr_18222 = state_18199;
(statearr_18222[(8)] = inst_18151);

(statearr_18222[(9)] = inst_18152);

(statearr_18222[(11)] = inst_18154);

(statearr_18222[(12)] = inst_18153);

return statearr_18222;
})();
var statearr_18223_19403 = state_18199__$1;
(statearr_18223_19403[(2)] = null);

(statearr_18223_19403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18200 === (17))){
var inst_18165 = (state_18199[(7)]);
var inst_18169 = cljs.core.chunk_first(inst_18165);
var inst_18170 = cljs.core.chunk_rest(inst_18165);
var inst_18171 = cljs.core.count(inst_18169);
var inst_18151 = inst_18170;
var inst_18152 = inst_18169;
var inst_18153 = inst_18171;
var inst_18154 = (0);
var state_18199__$1 = (function (){var statearr_18224 = state_18199;
(statearr_18224[(8)] = inst_18151);

(statearr_18224[(9)] = inst_18152);

(statearr_18224[(11)] = inst_18154);

(statearr_18224[(12)] = inst_18153);

return statearr_18224;
})();
var statearr_18225_19404 = state_18199__$1;
(statearr_18225_19404[(2)] = null);

(statearr_18225_19404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18200 === (3))){
var inst_18197 = (state_18199[(2)]);
var state_18199__$1 = state_18199;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18199__$1,inst_18197);
} else {
if((state_val_18200 === (12))){
var inst_18185 = (state_18199[(2)]);
var state_18199__$1 = state_18199;
var statearr_18226_19405 = state_18199__$1;
(statearr_18226_19405[(2)] = inst_18185);

(statearr_18226_19405[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18200 === (2))){
var state_18199__$1 = state_18199;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18199__$1,(4),in$);
} else {
if((state_val_18200 === (23))){
var inst_18193 = (state_18199[(2)]);
var state_18199__$1 = state_18199;
var statearr_18227_19406 = state_18199__$1;
(statearr_18227_19406[(2)] = inst_18193);

(statearr_18227_19406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18200 === (19))){
var inst_18180 = (state_18199[(2)]);
var state_18199__$1 = state_18199;
var statearr_18228_19407 = state_18199__$1;
(statearr_18228_19407[(2)] = inst_18180);

(statearr_18228_19407[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18200 === (11))){
var inst_18151 = (state_18199[(8)]);
var inst_18165 = (state_18199[(7)]);
var inst_18165__$1 = cljs.core.seq(inst_18151);
var state_18199__$1 = (function (){var statearr_18229 = state_18199;
(statearr_18229[(7)] = inst_18165__$1);

return statearr_18229;
})();
if(inst_18165__$1){
var statearr_18230_19408 = state_18199__$1;
(statearr_18230_19408[(1)] = (14));

} else {
var statearr_18231_19409 = state_18199__$1;
(statearr_18231_19409[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18200 === (9))){
var inst_18187 = (state_18199[(2)]);
var inst_18188 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18199__$1 = (function (){var statearr_18232 = state_18199;
(statearr_18232[(15)] = inst_18187);

return statearr_18232;
})();
if(cljs.core.truth_(inst_18188)){
var statearr_18233_19410 = state_18199__$1;
(statearr_18233_19410[(1)] = (21));

} else {
var statearr_18234_19411 = state_18199__$1;
(statearr_18234_19411[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18200 === (5))){
var inst_18143 = cljs.core.async.close_BANG_(out);
var state_18199__$1 = state_18199;
var statearr_18235_19412 = state_18199__$1;
(statearr_18235_19412[(2)] = inst_18143);

(statearr_18235_19412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18200 === (14))){
var inst_18165 = (state_18199[(7)]);
var inst_18167 = cljs.core.chunked_seq_QMARK_(inst_18165);
var state_18199__$1 = state_18199;
if(inst_18167){
var statearr_18236_19413 = state_18199__$1;
(statearr_18236_19413[(1)] = (17));

} else {
var statearr_18237_19414 = state_18199__$1;
(statearr_18237_19414[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18200 === (16))){
var inst_18183 = (state_18199[(2)]);
var state_18199__$1 = state_18199;
var statearr_18238_19415 = state_18199__$1;
(statearr_18238_19415[(2)] = inst_18183);

(statearr_18238_19415[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18200 === (10))){
var inst_18152 = (state_18199[(9)]);
var inst_18154 = (state_18199[(11)]);
var inst_18159 = cljs.core._nth(inst_18152,inst_18154);
var state_18199__$1 = state_18199;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18199__$1,(13),out,inst_18159);
} else {
if((state_val_18200 === (18))){
var inst_18165 = (state_18199[(7)]);
var inst_18174 = cljs.core.first(inst_18165);
var state_18199__$1 = state_18199;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18199__$1,(20),out,inst_18174);
} else {
if((state_val_18200 === (8))){
var inst_18154 = (state_18199[(11)]);
var inst_18153 = (state_18199[(12)]);
var inst_18156 = (inst_18154 < inst_18153);
var inst_18157 = inst_18156;
var state_18199__$1 = state_18199;
if(cljs.core.truth_(inst_18157)){
var statearr_18241_19417 = state_18199__$1;
(statearr_18241_19417[(1)] = (10));

} else {
var statearr_18242_19418 = state_18199__$1;
(statearr_18242_19418[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14993__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14993__auto____0 = (function (){
var statearr_18243 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18243[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14993__auto__);

(statearr_18243[(1)] = (1));

return statearr_18243;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14993__auto____1 = (function (state_18199){
while(true){
var ret_value__14994__auto__ = (function (){try{while(true){
var result__14995__auto__ = switch__14992__auto__(state_18199);
if(cljs.core.keyword_identical_QMARK_(result__14995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14995__auto__;
}
break;
}
}catch (e18244){var ex__14996__auto__ = e18244;
var statearr_18245_19422 = state_18199;
(statearr_18245_19422[(2)] = ex__14996__auto__);


if(cljs.core.seq((state_18199[(4)]))){
var statearr_18246_19423 = state_18199;
(statearr_18246_19423[(1)] = cljs.core.first((state_18199[(4)])));

} else {
throw ex__14996__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19425 = state_18199;
state_18199 = G__19425;
continue;
} else {
return ret_value__14994__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14993__auto__ = function(state_18199){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14993__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14993__auto____1.call(this,state_18199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14993__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14993__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14993__auto__;
})()
})();
var state__15247__auto__ = (function (){var statearr_18251 = f__15246__auto__();
(statearr_18251[(6)] = c__15245__auto__);

return statearr_18251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15247__auto__);
}));

return c__15245__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__18253 = arguments.length;
switch (G__18253) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__18258 = arguments.length;
switch (G__18258) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__18262 = arguments.length;
switch (G__18262) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15245__auto___19434 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15246__auto__ = (function (){var switch__14992__auto__ = (function (state_18289){
var state_val_18290 = (state_18289[(1)]);
if((state_val_18290 === (7))){
var inst_18284 = (state_18289[(2)]);
var state_18289__$1 = state_18289;
var statearr_18291_19435 = state_18289__$1;
(statearr_18291_19435[(2)] = inst_18284);

(statearr_18291_19435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18290 === (1))){
var inst_18266 = null;
var state_18289__$1 = (function (){var statearr_18295 = state_18289;
(statearr_18295[(7)] = inst_18266);

return statearr_18295;
})();
var statearr_18300_19437 = state_18289__$1;
(statearr_18300_19437[(2)] = null);

(statearr_18300_19437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18290 === (4))){
var inst_18269 = (state_18289[(8)]);
var inst_18269__$1 = (state_18289[(2)]);
var inst_18270 = (inst_18269__$1 == null);
var inst_18271 = cljs.core.not(inst_18270);
var state_18289__$1 = (function (){var statearr_18307 = state_18289;
(statearr_18307[(8)] = inst_18269__$1);

return statearr_18307;
})();
if(inst_18271){
var statearr_18308_19438 = state_18289__$1;
(statearr_18308_19438[(1)] = (5));

} else {
var statearr_18309_19439 = state_18289__$1;
(statearr_18309_19439[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18290 === (6))){
var state_18289__$1 = state_18289;
var statearr_18316_19440 = state_18289__$1;
(statearr_18316_19440[(2)] = null);

(statearr_18316_19440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18290 === (3))){
var inst_18286 = (state_18289[(2)]);
var inst_18287 = cljs.core.async.close_BANG_(out);
var state_18289__$1 = (function (){var statearr_18317 = state_18289;
(statearr_18317[(9)] = inst_18286);

return statearr_18317;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18289__$1,inst_18287);
} else {
if((state_val_18290 === (2))){
var state_18289__$1 = state_18289;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18289__$1,(4),ch);
} else {
if((state_val_18290 === (11))){
var inst_18269 = (state_18289[(8)]);
var inst_18278 = (state_18289[(2)]);
var inst_18266 = inst_18269;
var state_18289__$1 = (function (){var statearr_18318 = state_18289;
(statearr_18318[(10)] = inst_18278);

(statearr_18318[(7)] = inst_18266);

return statearr_18318;
})();
var statearr_18319_19441 = state_18289__$1;
(statearr_18319_19441[(2)] = null);

(statearr_18319_19441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18290 === (9))){
var inst_18269 = (state_18289[(8)]);
var state_18289__$1 = state_18289;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18289__$1,(11),out,inst_18269);
} else {
if((state_val_18290 === (5))){
var inst_18269 = (state_18289[(8)]);
var inst_18266 = (state_18289[(7)]);
var inst_18273 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18269,inst_18266);
var state_18289__$1 = state_18289;
if(inst_18273){
var statearr_18328_19445 = state_18289__$1;
(statearr_18328_19445[(1)] = (8));

} else {
var statearr_18329_19446 = state_18289__$1;
(statearr_18329_19446[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18290 === (10))){
var inst_18281 = (state_18289[(2)]);
var state_18289__$1 = state_18289;
var statearr_18333_19447 = state_18289__$1;
(statearr_18333_19447[(2)] = inst_18281);

(statearr_18333_19447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18290 === (8))){
var inst_18266 = (state_18289[(7)]);
var tmp18324 = inst_18266;
var inst_18266__$1 = tmp18324;
var state_18289__$1 = (function (){var statearr_18335 = state_18289;
(statearr_18335[(7)] = inst_18266__$1);

return statearr_18335;
})();
var statearr_18336_19448 = state_18289__$1;
(statearr_18336_19448[(2)] = null);

(statearr_18336_19448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14993__auto__ = null;
var cljs$core$async$state_machine__14993__auto____0 = (function (){
var statearr_18340 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18340[(0)] = cljs$core$async$state_machine__14993__auto__);

(statearr_18340[(1)] = (1));

return statearr_18340;
});
var cljs$core$async$state_machine__14993__auto____1 = (function (state_18289){
while(true){
var ret_value__14994__auto__ = (function (){try{while(true){
var result__14995__auto__ = switch__14992__auto__(state_18289);
if(cljs.core.keyword_identical_QMARK_(result__14995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14995__auto__;
}
break;
}
}catch (e18341){var ex__14996__auto__ = e18341;
var statearr_18342_19449 = state_18289;
(statearr_18342_19449[(2)] = ex__14996__auto__);


if(cljs.core.seq((state_18289[(4)]))){
var statearr_18343_19450 = state_18289;
(statearr_18343_19450[(1)] = cljs.core.first((state_18289[(4)])));

} else {
throw ex__14996__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19454 = state_18289;
state_18289 = G__19454;
continue;
} else {
return ret_value__14994__auto__;
}
break;
}
});
cljs$core$async$state_machine__14993__auto__ = function(state_18289){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14993__auto____1.call(this,state_18289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14993__auto____0;
cljs$core$async$state_machine__14993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14993__auto____1;
return cljs$core$async$state_machine__14993__auto__;
})()
})();
var state__15247__auto__ = (function (){var statearr_18344 = f__15246__auto__();
(statearr_18344[(6)] = c__15245__auto___19434);

return statearr_18344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15247__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18350 = arguments.length;
switch (G__18350) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15245__auto___19456 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15246__auto__ = (function (){var switch__14992__auto__ = (function (state_18389){
var state_val_18390 = (state_18389[(1)]);
if((state_val_18390 === (7))){
var inst_18385 = (state_18389[(2)]);
var state_18389__$1 = state_18389;
var statearr_18395_19457 = state_18389__$1;
(statearr_18395_19457[(2)] = inst_18385);

(statearr_18395_19457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18390 === (1))){
var inst_18352 = (new Array(n));
var inst_18353 = inst_18352;
var inst_18354 = (0);
var state_18389__$1 = (function (){var statearr_18396 = state_18389;
(statearr_18396[(7)] = inst_18353);

(statearr_18396[(8)] = inst_18354);

return statearr_18396;
})();
var statearr_18399_19458 = state_18389__$1;
(statearr_18399_19458[(2)] = null);

(statearr_18399_19458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18390 === (4))){
var inst_18357 = (state_18389[(9)]);
var inst_18357__$1 = (state_18389[(2)]);
var inst_18358 = (inst_18357__$1 == null);
var inst_18359 = cljs.core.not(inst_18358);
var state_18389__$1 = (function (){var statearr_18402 = state_18389;
(statearr_18402[(9)] = inst_18357__$1);

return statearr_18402;
})();
if(inst_18359){
var statearr_18406_19459 = state_18389__$1;
(statearr_18406_19459[(1)] = (5));

} else {
var statearr_18407_19460 = state_18389__$1;
(statearr_18407_19460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18390 === (15))){
var inst_18379 = (state_18389[(2)]);
var state_18389__$1 = state_18389;
var statearr_18410_19461 = state_18389__$1;
(statearr_18410_19461[(2)] = inst_18379);

(statearr_18410_19461[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18390 === (13))){
var state_18389__$1 = state_18389;
var statearr_18411_19462 = state_18389__$1;
(statearr_18411_19462[(2)] = null);

(statearr_18411_19462[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18390 === (6))){
var inst_18354 = (state_18389[(8)]);
var inst_18375 = (inst_18354 > (0));
var state_18389__$1 = state_18389;
if(cljs.core.truth_(inst_18375)){
var statearr_18413_19463 = state_18389__$1;
(statearr_18413_19463[(1)] = (12));

} else {
var statearr_18414_19464 = state_18389__$1;
(statearr_18414_19464[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18390 === (3))){
var inst_18387 = (state_18389[(2)]);
var state_18389__$1 = state_18389;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18389__$1,inst_18387);
} else {
if((state_val_18390 === (12))){
var inst_18353 = (state_18389[(7)]);
var inst_18377 = cljs.core.vec(inst_18353);
var state_18389__$1 = state_18389;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18389__$1,(15),out,inst_18377);
} else {
if((state_val_18390 === (2))){
var state_18389__$1 = state_18389;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18389__$1,(4),ch);
} else {
if((state_val_18390 === (11))){
var inst_18369 = (state_18389[(2)]);
var inst_18370 = (new Array(n));
var inst_18353 = inst_18370;
var inst_18354 = (0);
var state_18389__$1 = (function (){var statearr_18417 = state_18389;
(statearr_18417[(7)] = inst_18353);

(statearr_18417[(8)] = inst_18354);

(statearr_18417[(10)] = inst_18369);

return statearr_18417;
})();
var statearr_18418_19465 = state_18389__$1;
(statearr_18418_19465[(2)] = null);

(statearr_18418_19465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18390 === (9))){
var inst_18353 = (state_18389[(7)]);
var inst_18367 = cljs.core.vec(inst_18353);
var state_18389__$1 = state_18389;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18389__$1,(11),out,inst_18367);
} else {
if((state_val_18390 === (5))){
var inst_18353 = (state_18389[(7)]);
var inst_18354 = (state_18389[(8)]);
var inst_18362 = (state_18389[(11)]);
var inst_18357 = (state_18389[(9)]);
var inst_18361 = (inst_18353[inst_18354] = inst_18357);
var inst_18362__$1 = (inst_18354 + (1));
var inst_18363 = (inst_18362__$1 < n);
var state_18389__$1 = (function (){var statearr_18424 = state_18389;
(statearr_18424[(12)] = inst_18361);

(statearr_18424[(11)] = inst_18362__$1);

return statearr_18424;
})();
if(cljs.core.truth_(inst_18363)){
var statearr_18425_19467 = state_18389__$1;
(statearr_18425_19467[(1)] = (8));

} else {
var statearr_18430_19468 = state_18389__$1;
(statearr_18430_19468[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18390 === (14))){
var inst_18382 = (state_18389[(2)]);
var inst_18383 = cljs.core.async.close_BANG_(out);
var state_18389__$1 = (function (){var statearr_18437 = state_18389;
(statearr_18437[(13)] = inst_18382);

return statearr_18437;
})();
var statearr_18438_19469 = state_18389__$1;
(statearr_18438_19469[(2)] = inst_18383);

(statearr_18438_19469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18390 === (10))){
var inst_18373 = (state_18389[(2)]);
var state_18389__$1 = state_18389;
var statearr_18439_19473 = state_18389__$1;
(statearr_18439_19473[(2)] = inst_18373);

(statearr_18439_19473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18390 === (8))){
var inst_18353 = (state_18389[(7)]);
var inst_18362 = (state_18389[(11)]);
var tmp18431 = inst_18353;
var inst_18353__$1 = tmp18431;
var inst_18354 = inst_18362;
var state_18389__$1 = (function (){var statearr_18440 = state_18389;
(statearr_18440[(7)] = inst_18353__$1);

(statearr_18440[(8)] = inst_18354);

return statearr_18440;
})();
var statearr_18441_19474 = state_18389__$1;
(statearr_18441_19474[(2)] = null);

(statearr_18441_19474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14993__auto__ = null;
var cljs$core$async$state_machine__14993__auto____0 = (function (){
var statearr_18443 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18443[(0)] = cljs$core$async$state_machine__14993__auto__);

(statearr_18443[(1)] = (1));

return statearr_18443;
});
var cljs$core$async$state_machine__14993__auto____1 = (function (state_18389){
while(true){
var ret_value__14994__auto__ = (function (){try{while(true){
var result__14995__auto__ = switch__14992__auto__(state_18389);
if(cljs.core.keyword_identical_QMARK_(result__14995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14995__auto__;
}
break;
}
}catch (e18444){var ex__14996__auto__ = e18444;
var statearr_18445_19482 = state_18389;
(statearr_18445_19482[(2)] = ex__14996__auto__);


if(cljs.core.seq((state_18389[(4)]))){
var statearr_18446_19483 = state_18389;
(statearr_18446_19483[(1)] = cljs.core.first((state_18389[(4)])));

} else {
throw ex__14996__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19484 = state_18389;
state_18389 = G__19484;
continue;
} else {
return ret_value__14994__auto__;
}
break;
}
});
cljs$core$async$state_machine__14993__auto__ = function(state_18389){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14993__auto____1.call(this,state_18389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14993__auto____0;
cljs$core$async$state_machine__14993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14993__auto____1;
return cljs$core$async$state_machine__14993__auto__;
})()
})();
var state__15247__auto__ = (function (){var statearr_18447 = f__15246__auto__();
(statearr_18447[(6)] = c__15245__auto___19456);

return statearr_18447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15247__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18451 = arguments.length;
switch (G__18451) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15245__auto___19493 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15246__auto__ = (function (){var switch__14992__auto__ = (function (state_18504){
var state_val_18505 = (state_18504[(1)]);
if((state_val_18505 === (7))){
var inst_18500 = (state_18504[(2)]);
var state_18504__$1 = state_18504;
var statearr_18507_19498 = state_18504__$1;
(statearr_18507_19498[(2)] = inst_18500);

(statearr_18507_19498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18505 === (1))){
var inst_18454 = [];
var inst_18455 = inst_18454;
var inst_18456 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18504__$1 = (function (){var statearr_18508 = state_18504;
(statearr_18508[(7)] = inst_18456);

(statearr_18508[(8)] = inst_18455);

return statearr_18508;
})();
var statearr_18509_19499 = state_18504__$1;
(statearr_18509_19499[(2)] = null);

(statearr_18509_19499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18505 === (4))){
var inst_18459 = (state_18504[(9)]);
var inst_18459__$1 = (state_18504[(2)]);
var inst_18460 = (inst_18459__$1 == null);
var inst_18461 = cljs.core.not(inst_18460);
var state_18504__$1 = (function (){var statearr_18510 = state_18504;
(statearr_18510[(9)] = inst_18459__$1);

return statearr_18510;
})();
if(inst_18461){
var statearr_18511_19503 = state_18504__$1;
(statearr_18511_19503[(1)] = (5));

} else {
var statearr_18512_19504 = state_18504__$1;
(statearr_18512_19504[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18505 === (15))){
var inst_18455 = (state_18504[(8)]);
var inst_18492 = cljs.core.vec(inst_18455);
var state_18504__$1 = state_18504;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18504__$1,(18),out,inst_18492);
} else {
if((state_val_18505 === (13))){
var inst_18484 = (state_18504[(2)]);
var state_18504__$1 = state_18504;
var statearr_18513_19505 = state_18504__$1;
(statearr_18513_19505[(2)] = inst_18484);

(statearr_18513_19505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18505 === (6))){
var inst_18455 = (state_18504[(8)]);
var inst_18489 = inst_18455.length;
var inst_18490 = (inst_18489 > (0));
var state_18504__$1 = state_18504;
if(cljs.core.truth_(inst_18490)){
var statearr_18514_19506 = state_18504__$1;
(statearr_18514_19506[(1)] = (15));

} else {
var statearr_18515_19507 = state_18504__$1;
(statearr_18515_19507[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18505 === (17))){
var inst_18497 = (state_18504[(2)]);
var inst_18498 = cljs.core.async.close_BANG_(out);
var state_18504__$1 = (function (){var statearr_18516 = state_18504;
(statearr_18516[(10)] = inst_18497);

return statearr_18516;
})();
var statearr_18517_19511 = state_18504__$1;
(statearr_18517_19511[(2)] = inst_18498);

(statearr_18517_19511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18505 === (3))){
var inst_18502 = (state_18504[(2)]);
var state_18504__$1 = state_18504;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18504__$1,inst_18502);
} else {
if((state_val_18505 === (12))){
var inst_18455 = (state_18504[(8)]);
var inst_18475 = cljs.core.vec(inst_18455);
var state_18504__$1 = state_18504;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18504__$1,(14),out,inst_18475);
} else {
if((state_val_18505 === (2))){
var state_18504__$1 = state_18504;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18504__$1,(4),ch);
} else {
if((state_val_18505 === (11))){
var inst_18464 = (state_18504[(11)]);
var inst_18455 = (state_18504[(8)]);
var inst_18459 = (state_18504[(9)]);
var inst_18472 = inst_18455.push(inst_18459);
var tmp18518 = inst_18455;
var inst_18455__$1 = tmp18518;
var inst_18456 = inst_18464;
var state_18504__$1 = (function (){var statearr_18524 = state_18504;
(statearr_18524[(7)] = inst_18456);

(statearr_18524[(12)] = inst_18472);

(statearr_18524[(8)] = inst_18455__$1);

return statearr_18524;
})();
var statearr_18525_19513 = state_18504__$1;
(statearr_18525_19513[(2)] = null);

(statearr_18525_19513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18505 === (9))){
var inst_18456 = (state_18504[(7)]);
var inst_18468 = cljs.core.keyword_identical_QMARK_(inst_18456,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_18504__$1 = state_18504;
var statearr_18526_19516 = state_18504__$1;
(statearr_18526_19516[(2)] = inst_18468);

(statearr_18526_19516[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18505 === (5))){
var inst_18456 = (state_18504[(7)]);
var inst_18465 = (state_18504[(13)]);
var inst_18464 = (state_18504[(11)]);
var inst_18459 = (state_18504[(9)]);
var inst_18464__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18459) : f.call(null,inst_18459));
var inst_18465__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18464__$1,inst_18456);
var state_18504__$1 = (function (){var statearr_18529 = state_18504;
(statearr_18529[(13)] = inst_18465__$1);

(statearr_18529[(11)] = inst_18464__$1);

return statearr_18529;
})();
if(inst_18465__$1){
var statearr_18530_19520 = state_18504__$1;
(statearr_18530_19520[(1)] = (8));

} else {
var statearr_18531_19521 = state_18504__$1;
(statearr_18531_19521[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18505 === (14))){
var inst_18464 = (state_18504[(11)]);
var inst_18459 = (state_18504[(9)]);
var inst_18477 = (state_18504[(2)]);
var inst_18480 = [];
var inst_18481 = inst_18480.push(inst_18459);
var inst_18455 = inst_18480;
var inst_18456 = inst_18464;
var state_18504__$1 = (function (){var statearr_18532 = state_18504;
(statearr_18532[(14)] = inst_18477);

(statearr_18532[(15)] = inst_18481);

(statearr_18532[(7)] = inst_18456);

(statearr_18532[(8)] = inst_18455);

return statearr_18532;
})();
var statearr_18533_19528 = state_18504__$1;
(statearr_18533_19528[(2)] = null);

(statearr_18533_19528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18505 === (16))){
var state_18504__$1 = state_18504;
var statearr_18534_19529 = state_18504__$1;
(statearr_18534_19529[(2)] = null);

(statearr_18534_19529[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18505 === (10))){
var inst_18470 = (state_18504[(2)]);
var state_18504__$1 = state_18504;
if(cljs.core.truth_(inst_18470)){
var statearr_18536_19530 = state_18504__$1;
(statearr_18536_19530[(1)] = (11));

} else {
var statearr_18537_19532 = state_18504__$1;
(statearr_18537_19532[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18505 === (18))){
var inst_18494 = (state_18504[(2)]);
var state_18504__$1 = state_18504;
var statearr_18539_19538 = state_18504__$1;
(statearr_18539_19538[(2)] = inst_18494);

(statearr_18539_19538[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18505 === (8))){
var inst_18465 = (state_18504[(13)]);
var state_18504__$1 = state_18504;
var statearr_18540_19539 = state_18504__$1;
(statearr_18540_19539[(2)] = inst_18465);

(statearr_18540_19539[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14993__auto__ = null;
var cljs$core$async$state_machine__14993__auto____0 = (function (){
var statearr_18544 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18544[(0)] = cljs$core$async$state_machine__14993__auto__);

(statearr_18544[(1)] = (1));

return statearr_18544;
});
var cljs$core$async$state_machine__14993__auto____1 = (function (state_18504){
while(true){
var ret_value__14994__auto__ = (function (){try{while(true){
var result__14995__auto__ = switch__14992__auto__(state_18504);
if(cljs.core.keyword_identical_QMARK_(result__14995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14995__auto__;
}
break;
}
}catch (e18545){var ex__14996__auto__ = e18545;
var statearr_18546_19540 = state_18504;
(statearr_18546_19540[(2)] = ex__14996__auto__);


if(cljs.core.seq((state_18504[(4)]))){
var statearr_18547_19541 = state_18504;
(statearr_18547_19541[(1)] = cljs.core.first((state_18504[(4)])));

} else {
throw ex__14996__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19542 = state_18504;
state_18504 = G__19542;
continue;
} else {
return ret_value__14994__auto__;
}
break;
}
});
cljs$core$async$state_machine__14993__auto__ = function(state_18504){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14993__auto____1.call(this,state_18504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14993__auto____0;
cljs$core$async$state_machine__14993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14993__auto____1;
return cljs$core$async$state_machine__14993__auto__;
})()
})();
var state__15247__auto__ = (function (){var statearr_18548 = f__15246__auto__();
(statearr_18548[(6)] = c__15245__auto___19493);

return statearr_18548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15247__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map

window.__require = function t(e, o, n) {
function i(c, l) {
if (!o[c]) {
if (!e[c]) {
var a = c.split("/");
a = a[a.length - 1];
if (!e[a]) {
var s = "function" == typeof __require && __require;
if (!l && s) return s(a, !0);
if (r) return r(a, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = a;
}
var u = o[c] = {
exports: {}
};
e[c][0].call(u.exports, function(t) {
return i(e[c][1][t] || t);
}, u, u.exports, t, e, o, n);
}
return o[c].exports;
}
for (var r = "function" == typeof __require && __require, c = 0; c < n.length; c++) i(n[c]);
return i;
}({
BaseComponent: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "098c2aQvoBM0JgDbMtlllp3", "BaseComponent");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var l = t.length - 1; l >= 0; l--) (i = t[l]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, c = r.ccclass, l = (r.property, function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._model = null;
return e;
}
e.prototype.onLoad = function() {
t.prototype.onLoad.call(this);
};
e.prototype._dataChanged = function(t) {};
return e = i([ c ], e);
}(cc.Component));
o.BaseComponent = l;
cc._RF.pop();
}, {} ],
BaseModel: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "22f5d5FiEtKeLNx7HoA2lCw", "BaseModel");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = function() {
function t() {
this._component = null;
this._data = null;
}
t.prototype.init = function(t) {
this._component = t;
return this;
};
t.prototype.getData = function() {
return this._data;
};
t.prototype.setData = function(t) {
this._data = t;
this._component && this._component._dataChanged(this._data);
};
return t;
}();
o.BaseModel = n;
cc._RF.pop();
}, {} ],
CallNative: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "9d54cDZ01NFA7rUCgfuMw/6", "CallNative");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = function() {
function t() {
jsb && jsb.reflection || console.error("jsb or reflection is undefined!");
}
Object.defineProperty(t, "instance", {
get: function() {
this._instance || (this._instance = new t());
return this._instance;
},
enumerable: !0,
configurable: !0
});
t.prototype.callBackHome = function(t) {
jsb.reflection.callStaticMethod("com/eagle/video/Hello", "gameBack", "(I)V", t);
};
t.prototype.callSceneData = function() {
var t = jsb.reflection.callStaticMethod("com/eagle/video/Hello", "sceneData", "(V)I");
console.log("[callSceneData] return sceneId = ", t);
return t || 1;
};
t.prototype.callVoid = function() {};
t.prototype.helloNative = function() {
var t = jsb.reflection.callStaticMethod("com/eagle/video/Hello", "helloNativeI", "(II)I", 1, 1);
console.log("called helloNativeI and ret from native ", t);
jsb.reflection.callStaticMethod("com/eagle/video/Hello", "helloNativeS", "(Ljava/lang/String;)V", "hello native, i'm js");
var e = jsb.reflection.callStaticMethod("com/eagle/video/DataReflection", "getPackageData", "()Ljava/lang/String;");
console.log(e);
if (e) try {
1 == JSON.parse(e).launchSceneID ? cc.director.loadScene("Main1") : cc.director.loadScene("Main2");
} catch (t) {
console.error(t);
}
};
t.prototype.callStaticFunc = function(t, e, o) {
t && e && o && !o.length ? jsb.reflection.callStaticMethod(t, e, "") : console.error("callStaticFunc params is defenced!");
};
t.OpenScene = "Main2";
t._instance = null;
return t;
}();
o.CallNative = n;
cc._RF.pop();
}, {} ],
FileUtil: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "ad8b72xWgJMmpokVnuRrlPR", "FileUtil");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = function() {
function t() {
this._jsb_fileutil = jsb.fileUtils;
this._jsb_fileutil || console.error("Inner delegate is undefined.");
console.log(this._jsb_fileutil.toString());
}
Object.defineProperty(t, "instance", {
get: function() {
this._instance || (this._instance = new t());
return this._instance;
},
enumerable: !0,
configurable: !0
});
t.prototype.getWritableUrl = function() {
return this._jsb_fileutil.getWritablePath();
};
t.prototype.getDefaultResourceRootPath = function() {
return this._jsb_fileutil.getDefaultResourceRootPath();
};
t.prototype.createDirectory = function(t) {
return !!this.isDirectoryExist(t) || this._jsb_fileutil.createDirectory(t);
};
t.prototype.isDirectoryExist = function(t) {
return this._jsb_fileutil.isDirectoryExist(t);
};
t.prototype.isFileExist = function(t) {
return this._jsb_fileutil.isFileExist(t);
};
t.prototype.writeStringToFile = function(t, e) {
return this._jsb_fileutil.writeStringToFile(t, e);
};
t.prototype.writeToFile = function(t, e) {
return this._jsb_fileutil.writeToFile(t, e);
};
t.prototype.getValueMapFromFile = function(t) {
return this._jsb_fileutil.getValueMapFromFile(t);
};
t.prototype.getStringFromFile = function(t) {
return this._jsb_fileutil.getStringFromFile(t);
};
t.prototype.getFileDir = function(t) {
return this._jsb_fileutil.getFileDir(t);
};
t.prototype.normalizePath = function(t) {
return this._jsb_fileutil.normalizePath(t);
};
t.prototype.loadFilenameLookupDictionaryFromFile = function(t) {
this._jsb_fileutil.loadFilenameLookupDictionaryFromFile(t);
};
t.prototype.removeDirectory = function(t) {
return this._jsb_fileutil.removeDirectory(t);
};
t.prototype.removeFile = function(t) {
return this._jsb_fileutil.removeFile(t);
};
t.prototype.getFileSize = function(t) {
return this._jsb_fileutil.getFileSize(t);
};
t.prototype.listFiles = function(t) {
return this._jsb_fileutil.listFiles(t);
};
t.prototype.getSuitableFOpen = function(t) {
return this._jsb_fileutil.getSuitableFOpen(t);
};
t.prototype.setWritablePath = function(t) {
return this._jsb_fileutil.setWritablePath(t);
};
t._instance = null;
return t;
}();
o.FileUtil = n;
cc._RF.pop();
}, {} ],
FitterHeightFirst: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "60192oBLuxI5qq5hnvynaFH", "FitterHeightFirst");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var l = t.length - 1; l >= 0; l--) (i = t[l]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator.ccclass, c = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.canvas = null;
e.sceneName = null;
e.isHeightFirst = null;
return e;
}
e.prototype.onLoad = function() {
this.sceneName = cc.director.getScene().name;
console.debug("场景 " + this.sceneName + " FitterHeightFirst组件加载");
var t = cc.find("Canvas");
this.canvas = t.getComponent(cc.Canvas);
this.updateFit();
t.on(cc.Node.EventType.SIZE_CHANGED, this.resetFit, this);
};
e.prototype.updateFit = function() {
var t = this.canvas, e = t.designResolution, o = cc.view.getFrameSize();
if (o.height / o.width - e.height / e.width > .01) {
var n = null === this.isHeightFirst || this.isHeightFirst;
this.isHeightFirst = !1;
if (n && (!0 !== t.fitWidth || !1 !== t.fitHeight)) {
t.fitWidth = !0;
t.fitHeight = !1;
console.debug("场景 " + this.sceneName + " 比设计更高，按宽适配");
}
} else {
n = null === this.isHeightFirst || !this.isHeightFirst;
this.isHeightFirst = !0;
if (n && (!1 !== t.fitWidth || !0 !== t.fitHeight)) {
t.fitWidth = !1;
t.fitHeight = !0;
console.debug("场景 " + this.sceneName + " 按高适配");
}
}
};
e.prototype.resetFit = function() {
console.debug("场景 " + this.sceneName + " 重新计算fit");
this.updateFit();
};
return e = i([ r ], e);
}(cc.Component);
o.default = c;
cc._RF.pop();
}, {} ],
FitterWidthFirst: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "142d3MY6OdIGLVBeXu+EB/P", "FitterWidthFirst");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var l = t.length - 1; l >= 0; l--) (i = t[l]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator.ccclass, c = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.canvas = null;
e.sceneName = null;
e.isWidthFirst = null;
return e;
}
e.prototype.onLoad = function() {
this.sceneName = cc.director.getScene().name;
console.debug("场景 " + this.sceneName + " FitterHeightFirst组件加载");
var t = cc.find("Canvas");
this.canvas = t.getComponent(cc.Canvas);
this.updateFit();
t.on(cc.Node.EventType.SIZE_CHANGED, this.resetFit, this);
};
e.prototype.updateFit = function() {
var t = this.canvas, e = t.designResolution, o = cc.view.getFrameSize();
if (o.width / o.height - e.width / e.height > .01) {
var n = null === this.isWidthFirst || this.isWidthFirst;
this.isWidthFirst = !1;
if (n && (!1 !== t.fitWidth || !0 !== t.fitHeight)) {
t.fitWidth = !1;
t.fitHeight = !0;
console.debug("比设计更宽，按高适配");
}
} else {
n = null === this.isWidthFirst || !this.isWidthFirst;
this.isWidthFirst = !0;
if (n && (!0 !== t.fitWidth || !1 !== t.fitHeight)) {
t.fitWidth = !0;
t.fitHeight = !1;
console.debug("按宽适配");
}
}
};
e.prototype.resetFit = function() {
console.debug("场景 " + this.sceneName + " 重新计算fit");
this.updateFit();
};
return e = i([ r ], e);
}(cc.Component);
o.default = c;
cc._RF.pop();
}, {} ],
Framwork: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "701d1ixw4ZKObI/LP5CLfT2", "Framwork");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = function() {
return function() {};
}();
o.Framwork = n;
cc._RF.pop();
}, {} ],
IPlatform: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "2866cb5PVRLvIxDGLYOY4Br", "IPlatform");
Object.defineProperty(o, "__esModule", {
value: !0
});
cc._RF.pop();
}, {} ],
LoadingScene: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "d3febLvGO5JI4JB7htXqbYn", "LoadingScene");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var l = t.length - 1; l >= 0; l--) (i = t[l]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../../Framwork/NativeBridge/CallNative"), c = cc._decorator, l = c.ccclass, a = (c.property, 
function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
cc.log("ccc lifecycle onLoad");
};
e.prototype.start = function() {
cc.log("ccc lifecycle start");
var t, e = r.CallNative.instance.callSceneData();
t = 1 == e ? "Main" : "Main2";
this.scheduleOnce(function() {
cc.log("turn to ", t);
cc.director.loadScene(t);
}, 1);
};
e.prototype.onDisable = function() {
console.log("ccc lifecycle onDisable");
};
e.prototype.onEnable = function() {
console.log("ccc lifecycle onEnable");
};
e.prototype.onDestroy = function() {
console.log("ccc lifecycle onDestroy");
};
return e = i([ l ], e);
}(cc.Component));
o.default = a;
cc._RF.pop();
}, {
"../../Framwork/NativeBridge/CallNative": "CallNative"
} ],
MainScene2: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "4916dLxnTBP+Y83zhE3sB+P", "MainScene2");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var l = t.length - 1; l >= 0; l--) (i = t[l]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../../Framwork/NativeBridge/CallNative"), c = cc._decorator, l = c.ccclass, a = (c.property, 
function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.start = function() {};
e.prototype.tapBackHome = function() {
cc.log("MainScene2 tapBackHome");
r.CallNative.instance.callBackHome(2);
};
e.prototype.tapPlay = function() {
cc.log("MainScene2 tapPlay");
};
return e = i([ l ], e);
}(cc.Component));
o.default = a;
cc._RF.pop();
}, {
"../../Framwork/NativeBridge/CallNative": "CallNative"
} ],
MainScene: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "00eebcGrjhKGJ3EcsMgH7gl", "MainScene");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var l = t.length - 1; l >= 0; l--) (i = t[l]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../../Framwork/NativeBridge/CallNative"), c = cc._decorator, l = c.ccclass, a = (c.property, 
function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
console.log("ccc lifecycle onLoad");
};
e.prototype.start = function() {
console.log("ccc lifecycle start");
};
e.prototype.tapBackHome = function() {
cc.log("tapBackHome");
r.CallNative.instance.callBackHome(1);
};
e.prototype.tapPlay = function() {
cc.log("tapPlay");
};
e.prototype.onDisable = function() {
console.log("ccc lifecycle onDisable");
};
e.prototype.onEnable = function() {
console.log("ccc lifecycle onEnable");
};
e.prototype.onDestroy = function() {
console.log("ccc lifecycle onDestroy");
};
return e = i([ l ], e);
}(cc.Component));
o.default = a;
cc._RF.pop();
}, {
"../../Framwork/NativeBridge/CallNative": "CallNative"
} ],
PlatformAndroid: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "0cc83M4dHdGRIk45Nz9DUEV", "PlatformAndroid");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = function() {
function t() {
this._platform = "android";
}
Object.defineProperty(t, "instance", {
get: function() {
this._instance || (this._instance = new t());
return this._instance;
},
enumerable: !0,
configurable: !0
});
t.support = function() {
return cc.sys.platform === cc.sys.ANDROID;
};
t.prototype.platform = function() {
return this._platform;
};
t.prototype.callNativeSync = function(t) {};
t.prototype.loadScene = function(t) {
console.log("[PlatformAndroid], loadScene params " + t);
console.log(typeof t);
setTimeout(function() {
cc.director.loadScene("Main", function() {
console.log("Main is loaded!");
});
}, 2);
};
t.prototype.onSceneLoaded = function() {};
t.prototype.exitScene = function() {};
t.prototype.onSceneExit = function() {};
t._instance = null;
return t;
}();
o.PlatformAndroid = n;
cc._RF.pop();
}, {} ],
Ret: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "51c42i0mUdI8YMw3ZjGbsJi", "Ret");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = function() {
return function() {};
}();
o.Ret = n;
cc._RF.pop();
}, {} ]
}, {}, [ "Framwork", "BaseComponent", "BaseModel", "CallNative", "Ret", "IPlatform", "PlatformAndroid", "FileUtil", "FitterHeightFirst", "FitterWidthFirst", "LoadingScene", "MainScene", "MainScene2" ]);
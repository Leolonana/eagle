"use strict";
cc._RF.push(module, '00eebcGrjhKGJ3EcsMgH7gl', 'MainScene');
// Main/Scripts/MainScene.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var CallNative_1 = require("../../Framwork/NativeBridge/CallNative");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MainScene = /** @class */ (function (_super) {
    __extends(MainScene, _super);
    function MainScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    MainScene.prototype.onLoad = function () {
        console.log("ccc lifecycle onLoad");
    };
    MainScene.prototype.start = function () {
        console.log("ccc lifecycle start");
        // CallNative.instance.helloNative()
    };
    //点击返回
    MainScene.prototype.tapBackHome = function () {
        cc.log("tapBackHome");
        CallNative_1.CallNative.instance.callBackHome(1);
    };
    //点击播放
    MainScene.prototype.tapPlay = function () {
        cc.log("tapPlay");
    };
    // update (dt) {}
    MainScene.prototype.onDisable = function () {
        console.log("ccc lifecycle onDisable");
    };
    MainScene.prototype.onEnable = function () {
        console.log("ccc lifecycle onEnable");
    };
    MainScene.prototype.onDestroy = function () {
        console.log("ccc lifecycle onDestroy");
    };
    MainScene = __decorate([
        ccclass
    ], MainScene);
    return MainScene;
}(cc.Component));
exports.default = MainScene;

cc._RF.pop();
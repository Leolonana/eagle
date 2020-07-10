"use strict";
cc._RF.push(module, 'd3febLvGO5JI4JB7htXqbYn', 'LoadingScene');
// Loading/Scripts/LoadingScene.ts

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
var LoadingScene = /** @class */ (function (_super) {
    __extends(LoadingScene, _super);
    function LoadingScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    LoadingScene.prototype.onLoad = function () {
        cc.log("ccc lifecycle onLoad");
    };
    LoadingScene.prototype.start = function () {
        cc.log("ccc lifecycle start");
        var sceneId = CallNative_1.CallNative.instance.callSceneData();
        var sceneName;
        if (sceneId == 1) {
            sceneName = "Main";
        }
        else {
            sceneName = "Main2";
        }
        //自动跳转到对应场景
        this.scheduleOnce(function () {
            cc.log("turn to ", sceneName);
            cc.director.loadScene(sceneName);
        }, 1);
    };
    // update (dt) {}
    LoadingScene.prototype.onDisable = function () {
        console.log("ccc lifecycle onDisable");
    };
    LoadingScene.prototype.onEnable = function () {
        console.log("ccc lifecycle onEnable");
    };
    LoadingScene.prototype.onDestroy = function () {
        console.log("ccc lifecycle onDestroy");
    };
    LoadingScene = __decorate([
        ccclass
    ], LoadingScene);
    return LoadingScene;
}(cc.Component));
exports.default = LoadingScene;

cc._RF.pop();
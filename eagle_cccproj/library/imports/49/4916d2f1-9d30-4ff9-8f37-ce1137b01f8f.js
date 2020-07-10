"use strict";
cc._RF.push(module, '4916dLxnTBP+Y83zhE3sB+P', 'MainScene2');
// Main2/Scripts/MainScene2.ts

"use strict";
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
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MainScene2 = /** @class */ (function (_super) {
    __extends(MainScene2, _super);
    function MainScene2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    MainScene2.prototype.start = function () {
    };
    //点击返回
    MainScene2.prototype.tapBackHome = function () {
        cc.log("MainScene2 tapBackHome");
        CallNative_1.CallNative.instance.callBackHome(2);
    };
    //点击播放
    MainScene2.prototype.tapPlay = function () {
        cc.log("MainScene2 tapPlay");
    };
    MainScene2 = __decorate([
        ccclass
    ], MainScene2);
    return MainScene2;
}(cc.Component));
exports.default = MainScene2;

cc._RF.pop();
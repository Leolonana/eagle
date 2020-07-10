"use strict";
cc._RF.push(module, 'c434dk8Y+pOQ4SMkMZpXeW6', 'WritingRightStar');
// Writing/Script/WritingRightStar.ts

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
var WritingSmallDot_1 = require("./WritingSmallDot");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DOT_SHOWN_DURATION = [0.2, 0.4];
var STAR_SHOWN_DURATION = DOT_SHOWN_DURATION[0] + DOT_SHOWN_DURATION[1];
var DOT_SHOWN_SCALE = [1.5, 1];
var STAR_ROTATION = 360 * 2;
var TURN_ON_DELAY = 0.1;
/**
 * 显示的星星
 */
var WritingRightStar = /** @class */ (function (_super) {
    __extends(WritingRightStar, _super);
    function WritingRightStar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rightStarShown = null;
        _this._isTriggered = false;
        return _this;
    }
    WritingRightStar_1 = WritingRightStar;
    /**
     * 设置显示音频
     * @param rightStarShown
     */
    WritingRightStar.prototype.setAudio = function (rightStarShown) {
        this.rightStarShown = rightStarShown;
    };
    /**
     * 获取星星展示动画
     */
    WritingRightStar.getStarShownAction = function () {
        return cc.spawn(cc.sequence(cc.scaleTo(DOT_SHOWN_DURATION[0], DOT_SHOWN_SCALE[0], DOT_SHOWN_SCALE[0]), cc.scaleTo(DOT_SHOWN_DURATION[1], DOT_SHOWN_SCALE[1], DOT_SHOWN_SCALE[1])), 
        // 随机多旋转0-90度
        cc.rotateTo(STAR_SHOWN_DURATION, STAR_ROTATION + 90 * Math.random()));
    };
    WritingRightStar.prototype.isTriggered = function () {
        return this._isTriggered;
    };
    /**
     * 重置
     */
    WritingRightStar.prototype.reset = function () {
        this._isTriggered = false;
        this.node.active = false;
    };
    /**
     * 点亮该星星，旋转出来，周边小点也同时渐显出来
     */
    WritingRightStar.prototype.turnOn = function () {
        this.node.scale = 0;
        this.node.active = true;
        this.node.runAction(cc.sequence(cc.delayTime(TURN_ON_DELAY), WritingRightStar_1.getStarShownAction()));
        cc.audioEngine.play(this.rightStarShown, false, 1);
        this._isTriggered = true;
    };
    var WritingRightStar_1;
    WritingRightStar = WritingRightStar_1 = __decorate([
        ccclass
    ], WritingRightStar);
    return WritingRightStar;
}(WritingSmallDot_1.default));
exports.default = WritingRightStar;

cc._RF.pop();
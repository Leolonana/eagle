"use strict";
cc._RF.push(module, '12a105yR3BHcYncC1anukvk', 'WritingDot');
// Writing/Script/WritingDot.ts

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
var WritingRightStar_1 = require("./WritingRightStar");
var WritingSmallDot_1 = require("./WritingSmallDot");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MAIN_DOT_SHOWN_DURATION = 0.2;
var DOT_SHOWN_DURATION = [0.2, 0.4];
/**
 * 笔画节点，管理每个引导点、画到后显示的星星及其周边点缀的小点的显示隐藏
 */
var WritingDot = /** @class */ (function (_super) {
    __extends(WritingDot, _super);
    function WritingDot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mainDot = null;
        _this.starFinished = null;
        _this.mainDotShown = null;
        _this.mainDotErased = null;
        _this.starFinishedShown = null;
        _this._isTriggered = false;
        _this.relativeDots = null;
        return _this;
    }
    /**
     * 设置音效
     * @param mainDotShown 黄色点出现音效
     * @param mainDotErased 黄色点擦除音效
     * @param starFinishedShown 彩色星星出现音效
     * @param rightStarShown 白色星星出现音效
     */
    WritingDot.prototype.setAudios = function (mainDotShown, mainDotErased, starFinishedShown, rightStarShown) {
        this.mainDotShown = mainDotShown;
        this.mainDotErased = mainDotErased;
        this.starFinishedShown = starFinishedShown;
        this.getRelativeDots().forEach(function (smallDot) {
            if (smallDot instanceof WritingRightStar_1.default) {
                smallDot.setAudio(rightStarShown);
            }
        });
    };
    WritingDot.prototype.isTriggered = function () {
        return this._isTriggered;
    };
    /**
     * 获取子节点中的正确星星与小点组件列表
     */
    WritingDot.prototype.getRelativeDots = function () {
        if (this.relativeDots === null) {
            if (this.node.childrenCount > 0) {
                this.relativeDots = this.node.children.map(function (dot) {
                    return dot.getComponent(WritingSmallDot_1.default);
                });
            }
            else {
                this.relativeDots = [];
            }
        }
        return this.relativeDots;
    };
    /**
     * 擦除（画笔画到的时候调用）
     */
    WritingDot.prototype.erase = function () {
        if (this.mainDot) {
            cc.audioEngine.play(this.mainDotErased, false, 1);
        }
        this._isTriggered = true;
        this.hideAll();
    };
    /**
     * 重置
     */
    WritingDot.prototype.reset = function () {
        this._isTriggered = false;
        // 一开始先隐藏，等动画触发显示
        this.hideAll();
    };
    /**
     * 隐藏所有点
     */
    WritingDot.prototype.hideAll = function () {
        if (this.mainDot) {
            this.mainDot.active = false;
            this.mainDot.getComponent(cc.Sprite).enabled = true;
        }
        if (this.starFinished) {
            this.starFinished.active = false;
            this.starFinished.getComponent(cc.Sprite).enabled = true;
        }
        this.getRelativeDots().forEach(function (dot) {
            dot.reset();
        });
    };
    /**
     * 动画显示引导节点
     */
    WritingDot.prototype.showGuide = function () {
        this._isTriggered = false;
        if (this.starFinished) {
            this.starFinished.scale = 0;
            this.starFinished.active = true;
            this.starFinished.runAction(WritingRightStar_1.default.getStarShownAction());
            cc.audioEngine.play(this.starFinishedShown, false, 1);
        }
        else if (this.mainDot) {
            this.mainDot.scale = 0;
            this.mainDot.active = true;
            this.mainDot.runAction(cc.scaleTo(MAIN_DOT_SHOWN_DURATION, 1, 1).easing(cc.easeBackOut()));
            cc.audioEngine.play(this.mainDotShown, false, 1);
        }
    };
    /**
     * 点亮该节点，引导点隐藏，星星旋转出来，周边小点也同时渐显出来
     */
    WritingDot.prototype.turnOn = function () {
        // 引导点和结束点只能隐藏其图片，因为还有子节点星星要显示
        if (this.mainDot) {
            this.mainDot.getComponent(cc.Sprite).enabled = false;
        }
        else if (this.starFinished) {
            this.starFinished.getComponent(cc.Sprite).enabled = false;
        }
        // 剩余没点亮的星星也点亮
        this.getRelativeDots()
            .filter(function (dot) { return !dot.isTriggered(); })
            .forEach(function (dot) {
            dot.turnOn();
        });
        this._isTriggered = true;
    };
    WritingDot.LAST_DOT_SHOWN_DURATION = DOT_SHOWN_DURATION[0] + DOT_SHOWN_DURATION[1];
    __decorate([
        property(cc.Node)
    ], WritingDot.prototype, "mainDot", void 0);
    __decorate([
        property(cc.Node)
    ], WritingDot.prototype, "starFinished", void 0);
    WritingDot = __decorate([
        ccclass
    ], WritingDot);
    return WritingDot;
}(cc.Component));
exports.default = WritingDot;

cc._RF.pop();
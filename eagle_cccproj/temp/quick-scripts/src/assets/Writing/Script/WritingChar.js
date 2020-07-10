"use strict";
cc._RF.push(module, '20065i2yvVCPpPZieUAZivI', 'WritingChar');
// Writing/Script/WritingChar.ts

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
var WritingDot_1 = require("./WritingDot");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FILL_DURATION = 0.5;
/**
 * 书写字符
 *
 * 注：配置字符时，每个线条的最后一点，必须是引导节点
 */
var WritingChar = /** @class */ (function (_super) {
    __extends(WritingChar, _super);
    function WritingChar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.image = null;
        _this.mask = null;
        _this.drawPanel = null;
        _this.filledChar = null;
        _this.linesNode = null;
        _this.lines = null;
        return _this;
    }
    WritingChar.prototype.onLoad = function () {
        this.mask.spriteFrame = this.image.spriteFrame;
    };
    /**
     * 获取该字符所有笔画
     */
    WritingChar.prototype.getLines = function () {
        if (this.lines === null) {
            this.lines = this.linesNode.children.map(function (line) {
                return line.children.map(function (dotNode) {
                    var dot = dotNode.getComponent(WritingDot_1.default);
                    dot.reset();
                    return dot;
                });
            });
        }
        return this.lines;
    };
    /**
     * 重置所有点状态
     */
    WritingChar.prototype.reset = function () {
        this.lines.forEach(function (line) {
            line.forEach(function (dot) {
                dot.reset();
            });
        });
    };
    /**
     * 填充，渐显下面的图层，渐隐上面的画布
     */
    WritingChar.prototype.fill = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.drawPanel.node.runAction(cc.fadeTo(FILL_DURATION, 0));
            _this.filledChar.opacity = 0;
            _this.filledChar.active = true;
            _this.filledChar.runAction(cc.sequence(cc.fadeTo(FILL_DURATION, 255), cc.callFunc(resolve)));
        });
    };
    /**
     * 显示画板
     */
    WritingChar.prototype.showDrawPanel = function () {
        this.mask.node.active = true;
    };
    __decorate([
        property(cc.Sprite)
    ], WritingChar.prototype, "image", void 0);
    __decorate([
        property(cc.Mask)
    ], WritingChar.prototype, "mask", void 0);
    __decorate([
        property(cc.Graphics)
    ], WritingChar.prototype, "drawPanel", void 0);
    __decorate([
        property(cc.Node)
    ], WritingChar.prototype, "filledChar", void 0);
    __decorate([
        property(cc.Node)
    ], WritingChar.prototype, "linesNode", void 0);
    WritingChar = __decorate([
        ccclass
    ], WritingChar);
    return WritingChar;
}(cc.Component));
exports.default = WritingChar;

cc._RF.pop();
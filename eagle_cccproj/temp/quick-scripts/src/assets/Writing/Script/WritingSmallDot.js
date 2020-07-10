"use strict";
cc._RF.push(module, 'a2a06omQWtCRoW9tn0c5XcO', 'WritingSmallDot');
// Writing/Script/WritingSmallDot.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var OTHER_DOTS_SHOWN_DURATION = 0.2;
var WritingSmallDot = /** @class */ (function (_super) {
    __extends(WritingSmallDot, _super);
    function WritingSmallDot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WritingSmallDot.prototype.isTriggered = function () {
        return this.node.active;
    };
    /**
     * 重置
     */
    WritingSmallDot.prototype.reset = function () {
        this.node.active = false;
    };
    /**
     * 渐显出来
     */
    WritingSmallDot.prototype.turnOn = function () {
        var dot = this.node;
        dot.opacity = 0;
        dot.active = true;
        dot.runAction(cc.fadeTo(OTHER_DOTS_SHOWN_DURATION, 255));
    };
    WritingSmallDot = __decorate([
        ccclass
    ], WritingSmallDot);
    return WritingSmallDot;
}(cc.Component));
exports.default = WritingSmallDot;

cc._RF.pop();
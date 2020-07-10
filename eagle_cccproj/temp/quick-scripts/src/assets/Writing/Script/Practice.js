"use strict";
cc._RF.push(module, '59a84dhL11JorpqQrXIHnC2', 'Practice');
// Writing/Script/Practice.ts

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
var ccclass = cc._decorator.ccclass;
/**
 * 练习类，需绑定在预制体顶层供框架调用。子类必须实现对应的接口。
 *
 * 注：本来用interface就行，但是要想通过getComponent获取实例，只能用类。
 */
var Practice = /** @class */ (function (_super) {
    __extends(Practice, _super);
    function Practice() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.framework = null;
        return _this;
    }
    Practice.prototype.setFramework = function (framework) {
        this.framework = framework;
    };
    /**
     * 练习隐藏，当从当前练习切到下一个练习时，原练习会回调onHide
     */
    Practice.prototype.onHide = function () { };
    /**
     * 练习显示，当练习展示（包括首个练习倒计时后显示，及切换成当前练习）时，会回调onShow
     */
    Practice.prototype.onShow = function () { };
    Practice = __decorate([
        ccclass
    ], Practice);
    return Practice;
}(cc.Component));
exports.default = Practice;

cc._RF.pop();
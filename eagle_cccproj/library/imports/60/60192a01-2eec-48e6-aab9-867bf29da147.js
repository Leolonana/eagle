"use strict";
cc._RF.push(module, '60192oBLuxI5qq5hnvynaFH', 'FitterHeightFirst');
// Framwork/Utils/FitterHeightFirst.ts

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
 * 优先高度适配组件，当屏幕比设计分辨率更高时，适配宽，否则适配高。
 * 注意：如果有需要在代码中获取组件的位置的操作，不要在onLoad里去做，因为修改了适配方式后会重新布局，onLoad里取到的会是旧的。
 */
var FitterHeightFirst = /** @class */ (function (_super) {
    __extends(FitterHeightFirst, _super);
    function FitterHeightFirst() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.canvas = null;
        _this.sceneName = null;
        // 是否按高适配，防止设置后导致canvas尺寸改变而重复设置
        _this.isHeightFirst = null;
        return _this;
    }
    FitterHeightFirst.prototype.onLoad = function () {
        this.sceneName = cc.director.getScene().name;
        console.debug("\u573A\u666F " + this.sceneName + " FitterHeightFirst\u7EC4\u4EF6\u52A0\u8F7D");
        var canvasNode = cc.find('Canvas');
        this.canvas = canvasNode.getComponent(cc.Canvas);
        // 更新配置
        this.updateFit();
        // 监听窗口改变，重置
        canvasNode.on(cc.Node.EventType.SIZE_CHANGED, this.resetFit, this);
    };
    /**
     * 更新fit配置
     */
    FitterHeightFirst.prototype.updateFit = function () {
        var canvas = this.canvas;
        var design = canvas.designResolution;
        var device = cc.view.getFrameSize();
        // 当相差超过0.01时，才算更高，这样差别不是很大的屏幕，仍可以按高走
        if (device.height / device.width - design.height / design.width > 0.01) {
            var needToSet = this.isHeightFirst === null || this.isHeightFirst;
            this.isHeightFirst = false;
            // 针对首次设置，若默认配置一样，也不用更新
            if (needToSet && (canvas.fitWidth !== true || canvas.fitHeight !== false)) {
                canvas.fitWidth = true;
                canvas.fitHeight = false;
                console.debug("\u573A\u666F " + this.sceneName + " \u6BD4\u8BBE\u8BA1\u66F4\u9AD8\uFF0C\u6309\u5BBD\u9002\u914D");
            }
        }
        else {
            var needToSet = this.isHeightFirst === null || !this.isHeightFirst;
            this.isHeightFirst = true;
            // 针对首次设置，若默认配置一样，也不用更新
            if (needToSet && (canvas.fitWidth !== false || canvas.fitHeight !== true)) {
                canvas.fitWidth = false;
                canvas.fitHeight = true;
                console.debug("\u573A\u666F " + this.sceneName + " \u6309\u9AD8\u9002\u914D");
            }
        }
    };
    FitterHeightFirst.prototype.resetFit = function () {
        console.debug("\u573A\u666F " + this.sceneName + " \u91CD\u65B0\u8BA1\u7B97fit");
        this.updateFit();
    };
    FitterHeightFirst = __decorate([
        ccclass
    ], FitterHeightFirst);
    return FitterHeightFirst;
}(cc.Component));
exports.default = FitterHeightFirst;

cc._RF.pop();

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framwork/Utils/FitterWidthFirst.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '142d3MY6OdIGLVBeXu+EB/P', 'FitterWidthFirst');
// Framwork/Utils/FitterWidthFirst.ts

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
 * 优先宽度适配组件，当屏幕比设计分辨率更宽时，适配高，否则适配宽。
 * 注意：如果有需要在代码中获取组件的位置的操作，不要在onLoad里去做，因为修改了适配方式后会重新布局，onLoad里取到的会是旧的。
 */
var FitterWidthFirst = /** @class */ (function (_super) {
    __extends(FitterWidthFirst, _super);
    function FitterWidthFirst() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.canvas = null;
        _this.sceneName = null;
        // 是否按高适配，防止设置后导致canvas尺寸改变而重复设置
        _this.isWidthFirst = null;
        return _this;
    }
    FitterWidthFirst.prototype.onLoad = function () {
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
    FitterWidthFirst.prototype.updateFit = function () {
        var canvas = this.canvas;
        var design = canvas.designResolution;
        var device = cc.view.getFrameSize();
        // 当相差超过0.01时，才算更宽，这样差别不是很大的屏幕，仍可以按宽走
        if (device.width / device.height - design.width / design.height > 0.01) {
            var needToSet = this.isWidthFirst === null || this.isWidthFirst;
            this.isWidthFirst = false;
            // 针对首次设置，若默认配置一样，也不用更新
            if (needToSet && (canvas.fitWidth !== false || canvas.fitHeight !== true)) {
                canvas.fitWidth = false;
                canvas.fitHeight = true;
                console.debug('比设计更宽，按高适配');
            }
        }
        else {
            var needToSet = this.isWidthFirst === null || !this.isWidthFirst;
            this.isWidthFirst = true;
            // 针对首次设置，若默认配置一样，也不用更新
            if (needToSet && (canvas.fitWidth !== true || canvas.fitHeight !== false)) {
                canvas.fitWidth = true;
                canvas.fitHeight = false;
                console.debug('按宽适配');
            }
        }
    };
    FitterWidthFirst.prototype.resetFit = function () {
        console.debug("\u573A\u666F " + this.sceneName + " \u91CD\u65B0\u8BA1\u7B97fit");
        this.updateFit();
    };
    FitterWidthFirst = __decorate([
        ccclass
    ], FitterWidthFirst);
    return FitterWidthFirst;
}(cc.Component));
exports.default = FitterWidthFirst;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9GcmFtd29yay9VdGlscy9GaXR0ZXJXaWR0aEZpcnN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFRLElBQUEsK0JBQU8sQ0FBbUI7QUFFbEM7OztHQUdHO0FBRUg7SUFBOEMsb0NBQVk7SUFEMUQ7UUFBQSxxRUF5REM7UUF2RFcsWUFBTSxHQUFjLElBQUksQ0FBQztRQUV6QixlQUFTLEdBQVcsSUFBSSxDQUFDO1FBRWpDLGdDQUFnQztRQUN4QixrQkFBWSxHQUFZLElBQUksQ0FBQzs7SUFrRHpDLENBQUM7SUFoREcsaUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDN0MsT0FBTyxDQUFDLEtBQUssQ0FBQyxrQkFBTSxJQUFJLENBQUMsU0FBUywrQ0FBd0IsQ0FBQyxDQUFDO1FBRTVELElBQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVqRCxPQUFPO1FBQ1AsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLFlBQVk7UUFDWixVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRDs7T0FFRztJQUNLLG9DQUFTLEdBQWpCO1FBQ0ksSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7UUFDdkMsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN0QyxxQ0FBcUM7UUFDckMsSUFBSSxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksRUFBRTtZQUNwRSxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2xFLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBRTFCLHVCQUF1QjtZQUN2QixJQUFJLFNBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEtBQUssS0FBSyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLEVBQUU7Z0JBQ3ZFLE1BQU0sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUN4QixNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDeEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUMvQjtTQUNKO2FBQU07WUFDSCxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDbkUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFFekIsdUJBQXVCO1lBQ3ZCLElBQUksU0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsS0FBSyxJQUFJLElBQUksTUFBTSxDQUFDLFNBQVMsS0FBSyxLQUFLLENBQUMsRUFBRTtnQkFDdkUsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZCLE1BQU0sQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUN6QixPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3pCO1NBQ0o7SUFDTCxDQUFDO0lBRU8sbUNBQVEsR0FBaEI7UUFDSSxPQUFPLENBQUMsS0FBSyxDQUFDLGtCQUFNLElBQUksQ0FBQyxTQUFTLGlDQUFVLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQXZEZ0IsZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0F3RHBDO0lBQUQsdUJBQUM7Q0F4REQsQUF3REMsQ0F4RDZDLEVBQUUsQ0FBQyxTQUFTLEdBd0R6RDtrQkF4RG9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcblxuLyoqXG4gKiDkvJjlhYjlrr3luqbpgILphY3nu4Tku7bvvIzlvZPlsY/luZXmr5Torr7orqHliIbovqjnjofmm7Tlrr3ml7bvvIzpgILphY3pq5jvvIzlkKbliJnpgILphY3lrr3jgIJcbiAqIOazqOaEj++8muWmguaenOaciemcgOimgeWcqOS7o+eggeS4reiOt+WPlue7hOS7tueahOS9jee9rueahOaTjeS9nO+8jOS4jeimgeWcqG9uTG9hZOmHjOWOu+WBmu+8jOWboOS4uuS/ruaUueS6humAgumFjeaWueW8j+WQjuS8mumHjeaWsOW4g+WxgO+8jG9uTG9hZOmHjOWPluWIsOeahOS8muaYr+aXp+eahOOAglxuICovXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRml0dGVyV2lkdGhGaXJzdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBjYW52YXM6IGNjLkNhbnZhcyA9IG51bGw7XG5cbiAgICBwcml2YXRlIHNjZW5lTmFtZTogc3RyaW5nID0gbnVsbDtcblxuICAgIC8vIOaYr+WQpuaMiemrmOmAgumFje+8jOmYsuatouiuvue9ruWQjuWvvOiHtGNhbnZhc+WwuuWvuOaUueWPmOiAjOmHjeWkjeiuvue9rlxuICAgIHByaXZhdGUgaXNXaWR0aEZpcnN0OiBib29sZWFuID0gbnVsbDtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5zY2VuZU5hbWUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWU7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoYOWcuuaZryAke3RoaXMuc2NlbmVOYW1lfSBGaXR0ZXJIZWlnaHRGaXJzdOe7hOS7tuWKoOi9vWApO1xuXG4gICAgICAgIGNvbnN0IGNhbnZhc05vZGUgPSBjYy5maW5kKCdDYW52YXMnKTtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXNOb2RlLmdldENvbXBvbmVudChjYy5DYW52YXMpO1xuXG4gICAgICAgIC8vIOabtOaWsOmFjee9rlxuICAgICAgICB0aGlzLnVwZGF0ZUZpdCgpO1xuICAgICAgICAvLyDnm5HlkKznqpflj6PmlLnlj5jvvIzph43nva5cbiAgICAgICAgY2FudmFzTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5TSVpFX0NIQU5HRUQsIHRoaXMucmVzZXRGaXQsIHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOabtOaWsGZpdOmFjee9rlxuICAgICAqL1xuICAgIHByaXZhdGUgdXBkYXRlRml0KCkge1xuICAgICAgICBjb25zdCBjYW52YXMgPSB0aGlzLmNhbnZhcztcbiAgICAgICAgY29uc3QgZGVzaWduID0gY2FudmFzLmRlc2lnblJlc29sdXRpb247XG4gICAgICAgIGNvbnN0IGRldmljZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XG4gICAgICAgIC8vIOW9k+ebuOW3rui2hei/hzAuMDHml7bvvIzmiY3nrpfmm7Tlrr3vvIzov5nmoLflt67liKvkuI3mmK/lvojlpKfnmoTlsY/luZXvvIzku43lj6/ku6XmjInlrr3otbBcbiAgICAgICAgaWYgKGRldmljZS53aWR0aCAvIGRldmljZS5oZWlnaHQgLSBkZXNpZ24ud2lkdGggLyBkZXNpZ24uaGVpZ2h0ID4gMC4wMSkge1xuICAgICAgICAgICAgY29uc3QgbmVlZFRvU2V0ID0gdGhpcy5pc1dpZHRoRmlyc3QgPT09IG51bGwgfHwgdGhpcy5pc1dpZHRoRmlyc3Q7XG4gICAgICAgICAgICB0aGlzLmlzV2lkdGhGaXJzdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAvLyDpkojlr7npppbmrKHorr7nva7vvIzoi6Xpu5jorqTphY3nva7kuIDmoLfvvIzkuZ/kuI3nlKjmm7TmlrBcbiAgICAgICAgICAgIGlmIChuZWVkVG9TZXQgJiYgKGNhbnZhcy5maXRXaWR0aCAhPT0gZmFsc2UgfHwgY2FudmFzLmZpdEhlaWdodCAhPT0gdHJ1ZSkpIHtcbiAgICAgICAgICAgICAgICBjYW52YXMuZml0V2lkdGggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCfmr5Torr7orqHmm7Tlrr3vvIzmjInpq5jpgILphY0nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG5lZWRUb1NldCA9IHRoaXMuaXNXaWR0aEZpcnN0ID09PSBudWxsIHx8ICF0aGlzLmlzV2lkdGhGaXJzdDtcbiAgICAgICAgICAgIHRoaXMuaXNXaWR0aEZpcnN0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8g6ZKI5a+56aaW5qyh6K6+572u77yM6Iul6buY6K6k6YWN572u5LiA5qC377yM5Lmf5LiN55So5pu05pawXG4gICAgICAgICAgICBpZiAobmVlZFRvU2V0ICYmIChjYW52YXMuZml0V2lkdGggIT09IHRydWUgfHwgY2FudmFzLmZpdEhlaWdodCAhPT0gZmFsc2UpKSB7XG4gICAgICAgICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1Zygn5oyJ5a696YCC6YWNJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlc2V0Rml0KCkge1xuICAgICAgICBjb25zb2xlLmRlYnVnKGDlnLrmma8gJHt0aGlzLnNjZW5lTmFtZX0g6YeN5paw6K6h566XZml0YCk7XG4gICAgICAgIHRoaXMudXBkYXRlRml0KCk7XG4gICAgfVxufVxuIl19
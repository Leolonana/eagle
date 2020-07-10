
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framwork/Utils/FitterHeightFirst.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9GcmFtd29yay9VdGlscy9GaXR0ZXJIZWlnaHRGaXJzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBUSxJQUFBLCtCQUFPLENBQW1CO0FBRWxDOzs7R0FHRztBQUVIO0lBQStDLHFDQUFZO0lBRDNEO1FBQUEscUVBeURDO1FBdkRXLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFFekIsZUFBUyxHQUFXLElBQUksQ0FBQztRQUVqQyxnQ0FBZ0M7UUFDeEIsbUJBQWEsR0FBWSxJQUFJLENBQUM7O0lBa0QxQyxDQUFDO0lBaERHLGtDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQzdDLE9BQU8sQ0FBQyxLQUFLLENBQUMsa0JBQU0sSUFBSSxDQUFDLFNBQVMsK0NBQXdCLENBQUMsQ0FBQztRQUU1RCxJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFakQsT0FBTztRQUNQLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixZQUFZO1FBQ1osVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQ7O09BRUc7SUFDSyxxQ0FBUyxHQUFqQjtRQUNJLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDO1FBQ3ZDLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEMscUNBQXFDO1FBQ3JDLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLEVBQUU7WUFDcEUsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUNwRSxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUUzQix1QkFBdUI7WUFDdkIsSUFBSSxTQUFTLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLElBQUksSUFBSSxNQUFNLENBQUMsU0FBUyxLQUFLLEtBQUssQ0FBQyxFQUFFO2dCQUN2RSxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDdkIsTUFBTSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ3pCLE9BQU8sQ0FBQyxLQUFLLENBQUMsa0JBQU0sSUFBSSxDQUFDLFNBQVMsa0VBQWEsQ0FBQyxDQUFDO2FBQ3BEO1NBQ0o7YUFBTTtZQUNILElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUNyRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUUxQix1QkFBdUI7WUFDdkIsSUFBSSxTQUFTLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLEtBQUssSUFBSSxNQUFNLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxFQUFFO2dCQUN2RSxNQUFNLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDeEIsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLE9BQU8sQ0FBQyxLQUFLLENBQUMsa0JBQU0sSUFBSSxDQUFDLFNBQVMsOEJBQU8sQ0FBQyxDQUFDO2FBQzlDO1NBQ0o7SUFDTCxDQUFDO0lBRU8sb0NBQVEsR0FBaEI7UUFDSSxPQUFPLENBQUMsS0FBSyxDQUFDLGtCQUFNLElBQUksQ0FBQyxTQUFTLGlDQUFVLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQXZEZ0IsaUJBQWlCO1FBRHJDLE9BQU87T0FDYSxpQkFBaUIsQ0F3RHJDO0lBQUQsd0JBQUM7Q0F4REQsQUF3REMsQ0F4RDhDLEVBQUUsQ0FBQyxTQUFTLEdBd0QxRDtrQkF4RG9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcblxuLyoqXG4gKiDkvJjlhYjpq5jluqbpgILphY3nu4Tku7bvvIzlvZPlsY/luZXmr5Torr7orqHliIbovqjnjofmm7Tpq5jml7bvvIzpgILphY3lrr3vvIzlkKbliJnpgILphY3pq5jjgIJcbiAqIOazqOaEj++8muWmguaenOaciemcgOimgeWcqOS7o+eggeS4reiOt+WPlue7hOS7tueahOS9jee9rueahOaTjeS9nO+8jOS4jeimgeWcqG9uTG9hZOmHjOWOu+WBmu+8jOWboOS4uuS/ruaUueS6humAgumFjeaWueW8j+WQjuS8mumHjeaWsOW4g+WxgO+8jG9uTG9hZOmHjOWPluWIsOeahOS8muaYr+aXp+eahOOAglxuICovXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRml0dGVySGVpZ2h0Rmlyc3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHByaXZhdGUgY2FudmFzOiBjYy5DYW52YXMgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBzY2VuZU5hbWU6IHN0cmluZyA9IG51bGw7XG5cbiAgICAvLyDmmK/lkKbmjInpq5jpgILphY3vvIzpmLLmraLorr7nva7lkI7lr7zoh7RjYW52YXPlsLrlr7jmlLnlj5jogIzph43lpI3orr7nva5cbiAgICBwcml2YXRlIGlzSGVpZ2h0Rmlyc3Q6IGJvb2xlYW4gPSBudWxsO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLnNjZW5lTmFtZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZTtcbiAgICAgICAgY29uc29sZS5kZWJ1Zyhg5Zy65pmvICR7dGhpcy5zY2VuZU5hbWV9IEZpdHRlckhlaWdodEZpcnN057uE5Lu25Yqg6L29YCk7XG5cbiAgICAgICAgY29uc3QgY2FudmFzTm9kZSA9IGNjLmZpbmQoJ0NhbnZhcycpO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc05vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcyk7XG5cbiAgICAgICAgLy8g5pu05paw6YWN572uXG4gICAgICAgIHRoaXMudXBkYXRlRml0KCk7XG4gICAgICAgIC8vIOebkeWQrOeql+WPo+aUueWPmO+8jOmHjee9rlxuICAgICAgICBjYW52YXNOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlNJWkVfQ0hBTkdFRCwgdGhpcy5yZXNldEZpdCwgdGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5pu05pawZml06YWN572uXG4gICAgICovXG4gICAgcHJpdmF0ZSB1cGRhdGVGaXQoKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuY2FudmFzO1xuICAgICAgICBjb25zdCBkZXNpZ24gPSBjYW52YXMuZGVzaWduUmVzb2x1dGlvbjtcbiAgICAgICAgY29uc3QgZGV2aWNlID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcbiAgICAgICAgLy8g5b2T55u45beu6LaF6L+HMC4wMeaXtu+8jOaJjeeul+abtOmrmO+8jOi/meagt+W3ruWIq+S4jeaYr+W+iOWkp+eahOWxj+W5le+8jOS7jeWPr+S7peaMiemrmOi1sFxuICAgICAgICBpZiAoZGV2aWNlLmhlaWdodCAvIGRldmljZS53aWR0aCAtIGRlc2lnbi5oZWlnaHQgLyBkZXNpZ24ud2lkdGggPiAwLjAxKSB7XG4gICAgICAgICAgICBjb25zdCBuZWVkVG9TZXQgPSB0aGlzLmlzSGVpZ2h0Rmlyc3QgPT09IG51bGwgfHwgdGhpcy5pc0hlaWdodEZpcnN0O1xuICAgICAgICAgICAgdGhpcy5pc0hlaWdodEZpcnN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIOmSiOWvuemmluasoeiuvue9ru+8jOiLpem7mOiupOmFjee9ruS4gOagt++8jOS5n+S4jeeUqOabtOaWsFxuICAgICAgICAgICAgaWYgKG5lZWRUb1NldCAmJiAoY2FudmFzLmZpdFdpZHRoICE9PSB0cnVlIHx8IGNhbnZhcy5maXRIZWlnaHQgIT09IGZhbHNlKSkge1xuICAgICAgICAgICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoYOWcuuaZryAke3RoaXMuc2NlbmVOYW1lfSDmr5Torr7orqHmm7Tpq5jvvIzmjInlrr3pgILphY1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG5lZWRUb1NldCA9IHRoaXMuaXNIZWlnaHRGaXJzdCA9PT0gbnVsbCB8fCAhdGhpcy5pc0hlaWdodEZpcnN0O1xuICAgICAgICAgICAgdGhpcy5pc0hlaWdodEZpcnN0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8g6ZKI5a+56aaW5qyh6K6+572u77yM6Iul6buY6K6k6YWN572u5LiA5qC377yM5Lmf5LiN55So5pu05pawXG4gICAgICAgICAgICBpZiAobmVlZFRvU2V0ICYmIChjYW52YXMuZml0V2lkdGggIT09IGZhbHNlIHx8IGNhbnZhcy5maXRIZWlnaHQgIT09IHRydWUpKSB7XG4gICAgICAgICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1Zyhg5Zy65pmvICR7dGhpcy5zY2VuZU5hbWV9IOaMiemrmOmAgumFjWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNldEZpdCgpIHtcbiAgICAgICAgY29uc29sZS5kZWJ1Zyhg5Zy65pmvICR7dGhpcy5zY2VuZU5hbWV9IOmHjeaWsOiuoeeul2ZpdGApO1xuICAgICAgICB0aGlzLnVwZGF0ZUZpdCgpO1xuICAgIH1cbn1cbiJdfQ==
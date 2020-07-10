
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Writing/Script/WritingChar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Xcml0aW5nL1NjcmlwdC9Xcml0aW5nQ2hhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBc0M7QUFFaEMsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUU1QyxJQUFNLGFBQWEsR0FBRyxHQUFHLENBQUM7QUFFMUI7Ozs7R0FJRztBQUVIO0lBQXlDLCtCQUFZO0lBRHJEO1FBQUEscUVBcUVDO1FBbEVHLFdBQUssR0FBYyxJQUFJLENBQUM7UUFHeEIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUdyQixlQUFTLEdBQWdCLElBQUksQ0FBQztRQUc5QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLFdBQUssR0FBbUIsSUFBSSxDQUFDOztJQW9EakMsQ0FBQztJQWxERyw0QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7SUFDbkQsQ0FBQztJQUVEOztPQUVHO0lBQ0ksOEJBQVEsR0FBZjtRQUNJLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJO2dCQUMxQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUMsT0FBTztvQkFDN0IsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxvQkFBVSxDQUFDLENBQUM7b0JBQzdDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDWixPQUFPLEdBQUcsQ0FBQztnQkFDZixDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1NBQ047UUFFRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksMkJBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRztnQkFDYixHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDaEIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7T0FFRztJQUNJLDBCQUFJLEdBQVg7UUFBQSxpQkFPQztRQU5HLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPO1lBQ3ZCLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNELEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUM1QixLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDOUIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7T0FFRztJQUNJLG1DQUFhLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUNqQyxDQUFDO0lBakVEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OENBQ0k7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDRztJQUdyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2tEQUNRO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDUTtJQWRULFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FvRS9CO0lBQUQsa0JBQUM7Q0FwRUQsQUFvRUMsQ0FwRXdDLEVBQUUsQ0FBQyxTQUFTLEdBb0VwRDtrQkFwRW9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV3JpdGluZ0RvdCBmcm9tICcuL1dyaXRpbmdEb3QnO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5jb25zdCBGSUxMX0RVUkFUSU9OID0gMC41O1xuXG4vKipcbiAqIOS5puWGmeWtl+esplxuICogXG4gKiDms6jvvJrphY3nva7lrZfnrKbml7bvvIzmr4/kuKrnur/mnaHnmoTmnIDlkI7kuIDngrnvvIzlv4XpobvmmK/lvJXlr7zoioLngrlcbiAqL1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdyaXRpbmdDaGFyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIGltYWdlOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk1hc2spXG4gICAgbWFzazogY2MuTWFzayA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuR3JhcGhpY3MpXG4gICAgZHJhd1BhbmVsOiBjYy5HcmFwaGljcyA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBmaWxsZWRDaGFyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpbmVzTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBsaW5lczogV3JpdGluZ0RvdFtdW10gPSBudWxsO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLm1hc2suc3ByaXRlRnJhbWUgPSB0aGlzLmltYWdlLnNwcml0ZUZyYW1lO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+WPluivpeWtl+espuaJgOacieeslOeUu1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXRMaW5lcygpIHtcbiAgICAgICAgaWYgKHRoaXMubGluZXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMubGluZXMgPSB0aGlzLmxpbmVzTm9kZS5jaGlsZHJlbi5tYXAoKGxpbmUpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGluZS5jaGlsZHJlbi5tYXAoKGRvdE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZG90ID0gZG90Tm9kZS5nZXRDb21wb25lbnQoV3JpdGluZ0RvdCk7XG4gICAgICAgICAgICAgICAgICAgIGRvdC5yZXNldCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZG90O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5saW5lcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDph43nva7miYDmnInngrnnirbmgIFcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMubGluZXMuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgICAgICAgICAgbGluZS5mb3JFYWNoKChkb3QpID0+IHtcbiAgICAgICAgICAgICAgICBkb3QucmVzZXQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDloavlhYXvvIzmuJDmmL7kuIvpnaLnmoTlm77lsYLvvIzmuJDpmpDkuIrpnaLnmoTnlLvluINcbiAgICAgKi9cbiAgICBwdWJsaWMgZmlsbCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRyYXdQYW5lbC5ub2RlLnJ1bkFjdGlvbihjYy5mYWRlVG8oRklMTF9EVVJBVElPTiwgMCkpO1xuICAgICAgICAgICAgdGhpcy5maWxsZWRDaGFyLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgdGhpcy5maWxsZWRDaGFyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmZpbGxlZENoYXIucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmZhZGVUbyhGSUxMX0RVUkFUSU9OLCAyNTUpLCBjYy5jYWxsRnVuYyhyZXNvbHZlKSkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmmL7npLrnlLvmnb9cbiAgICAgKi9cbiAgICBwdWJsaWMgc2hvd0RyYXdQYW5lbCgpIHtcbiAgICAgICAgdGhpcy5tYXNrLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG59XG4iXX0=
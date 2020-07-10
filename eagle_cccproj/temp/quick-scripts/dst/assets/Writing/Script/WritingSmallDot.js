
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Writing/Script/WritingSmallDot.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Xcml0aW5nL1NjcmlwdC9Xcml0aW5nU21hbGxEb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUU1QyxJQUFNLHlCQUF5QixHQUFHLEdBQUcsQ0FBQztBQUd0QztJQUE2QyxtQ0FBWTtJQUF6RDs7SUFxQkEsQ0FBQztJQXBCVSxxQ0FBVyxHQUFsQjtRQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDNUIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksK0JBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQ7O09BRUc7SUFDSSxnQ0FBTSxHQUFiO1FBQ0ksSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN0QixHQUFHLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNoQixHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNsQixHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMseUJBQXlCLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBcEJnQixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBcUJuQztJQUFELHNCQUFDO0NBckJELEFBcUJDLENBckI0QyxFQUFFLENBQUMsU0FBUyxHQXFCeEQ7a0JBckJvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuY29uc3QgT1RIRVJfRE9UU19TSE9XTl9EVVJBVElPTiA9IDAuMjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdyaXRpbmdTbWFsbERvdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHVibGljIGlzVHJpZ2dlcmVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmFjdGl2ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDph43nva5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmuJDmmL7lh7rmnaVcbiAgICAgKi9cbiAgICBwdWJsaWMgdHVybk9uKCkge1xuICAgICAgICBjb25zdCBkb3QgPSB0aGlzLm5vZGU7XG4gICAgICAgIGRvdC5vcGFjaXR5ID0gMDtcbiAgICAgICAgZG90LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGRvdC5ydW5BY3Rpb24oY2MuZmFkZVRvKE9USEVSX0RPVFNfU0hPV05fRFVSQVRJT04sIDI1NSkpO1xuICAgIH1cbn1cbiJdfQ==
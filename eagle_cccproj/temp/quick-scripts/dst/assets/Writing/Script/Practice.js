
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Writing/Script/Practice.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Xcml0aW5nL1NjcmlwdC9QcmFjdGljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUSxJQUFBLCtCQUFPLENBQW1CO0FBRWxDOzs7O0dBSUc7QUFFSDtJQUErQyw0QkFBWTtJQUQzRDtRQUFBLHFFQXlCQztRQWZhLGVBQVMsR0FBdUIsSUFBSSxDQUFDOztJQWVuRCxDQUFDO0lBYlUsK0JBQVksR0FBbkIsVUFBb0IsU0FBNkI7UUFDN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUVEOztPQUVHO0lBQ0kseUJBQU0sR0FBYixjQUFpQixDQUFDO0lBRWxCOztPQUVHO0lBQ0kseUJBQU0sR0FBYixjQUFpQixDQUFDO0lBdkJRLFFBQVE7UUFEckMsT0FBTztPQUNzQixRQUFRLENBd0JyQztJQUFELGVBQUM7Q0F4QkQsQUF3QkMsQ0F4QjhDLEVBQUUsQ0FBQyxTQUFTLEdBd0IxRDtrQkF4QjZCLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRnJhbWV3b3JrSW50ZXJmYWNlIGZyb20gJy4vRnJhbWV3b3JrSW50ZXJmYWNlJztcblxuY29uc3QgeyBjY2NsYXNzIH0gPSBjYy5fZGVjb3JhdG9yO1xuXG4vKipcbiAqIOe7g+S5oOexu++8jOmcgOe7keWumuWcqOmihOWItuS9k+mhtuWxguS+m+ahhuaetuiwg+eUqOOAguWtkOexu+W/hemhu+WunueOsOWvueW6lOeahOaOpeWPo+OAglxuICpcbiAqIOazqO+8muacrOadpeeUqGludGVyZmFjZeWwseihjO+8jOS9huaYr+imgeaDs+mAmui/h2dldENvbXBvbmVudOiOt+WPluWunuS+i++8jOWPquiDveeUqOexu+OAglxuICovXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgUHJhY3RpY2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIOW8guatpeWIneWni+WMlue7g+S5oO+8jOWmguaenOWHuueOsOW8guW4uO+8jOiusOW+l3JlamVjdOOAglxuICAgICAqIEBwYXJhbSBjb3Vyc2VJZCDor77nqItpZFxuICAgICAqIEBwYXJhbSBwcmFjdGljZUlkIOe7g+S5oOe0ouW8le+8iOS7jjDlvIDlp4vvvIlcbiAgICAgKiBAcGFyYW0gcHJhY3RpY2VEYXRhIOW9k+WJjee7g+S5oOaVsOaNrlxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCBpbml0KGNvdXJzZUlkOiBzdHJpbmcsIHByYWN0aWNlSWQ6IHN0cmluZywgcHJhY3RpY2VEYXRhOiBhbnkpOiBQcm9taXNlPHZvaWQ+O1xuXG4gICAgcHJvdGVjdGVkIGZyYW1ld29yazogRnJhbWV3b3JrSW50ZXJmYWNlID0gbnVsbDtcblxuICAgIHB1YmxpYyBzZXRGcmFtZXdvcmsoZnJhbWV3b3JrOiBGcmFtZXdvcmtJbnRlcmZhY2UpIHtcbiAgICAgICAgdGhpcy5mcmFtZXdvcmsgPSBmcmFtZXdvcms7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog57uD5Lmg6ZqQ6JeP77yM5b2T5LuO5b2T5YmN57uD5Lmg5YiH5Yiw5LiL5LiA5Liq57uD5Lmg5pe277yM5Y6f57uD5Lmg5Lya5Zue6LCDb25IaWRlXG4gICAgICovXG4gICAgcHVibGljIG9uSGlkZSgpIHt9XG5cbiAgICAvKipcbiAgICAgKiDnu4PkuaDmmL7npLrvvIzlvZPnu4PkuaDlsZXnpLrvvIjljIXmi6zpppbkuKrnu4PkuaDlgJLorqHml7blkI7mmL7npLrvvIzlj4rliIfmjaLmiJDlvZPliY3nu4PkuaDvvInml7bvvIzkvJrlm57osINvblNob3dcbiAgICAgKi9cbiAgICBwdWJsaWMgb25TaG93KCkge31cbn1cbiJdfQ==
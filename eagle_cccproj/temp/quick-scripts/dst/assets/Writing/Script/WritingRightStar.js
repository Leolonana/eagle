
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Writing/Script/WritingRightStar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c434dk8Y+pOQ4SMkMZpXeW6', 'WritingRightStar');
// Writing/Script/WritingRightStar.ts

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
var WritingSmallDot_1 = require("./WritingSmallDot");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DOT_SHOWN_DURATION = [0.2, 0.4];
var STAR_SHOWN_DURATION = DOT_SHOWN_DURATION[0] + DOT_SHOWN_DURATION[1];
var DOT_SHOWN_SCALE = [1.5, 1];
var STAR_ROTATION = 360 * 2;
var TURN_ON_DELAY = 0.1;
/**
 * 显示的星星
 */
var WritingRightStar = /** @class */ (function (_super) {
    __extends(WritingRightStar, _super);
    function WritingRightStar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rightStarShown = null;
        _this._isTriggered = false;
        return _this;
    }
    WritingRightStar_1 = WritingRightStar;
    /**
     * 设置显示音频
     * @param rightStarShown
     */
    WritingRightStar.prototype.setAudio = function (rightStarShown) {
        this.rightStarShown = rightStarShown;
    };
    /**
     * 获取星星展示动画
     */
    WritingRightStar.getStarShownAction = function () {
        return cc.spawn(cc.sequence(cc.scaleTo(DOT_SHOWN_DURATION[0], DOT_SHOWN_SCALE[0], DOT_SHOWN_SCALE[0]), cc.scaleTo(DOT_SHOWN_DURATION[1], DOT_SHOWN_SCALE[1], DOT_SHOWN_SCALE[1])), 
        // 随机多旋转0-90度
        cc.rotateTo(STAR_SHOWN_DURATION, STAR_ROTATION + 90 * Math.random()));
    };
    WritingRightStar.prototype.isTriggered = function () {
        return this._isTriggered;
    };
    /**
     * 重置
     */
    WritingRightStar.prototype.reset = function () {
        this._isTriggered = false;
        this.node.active = false;
    };
    /**
     * 点亮该星星，旋转出来，周边小点也同时渐显出来
     */
    WritingRightStar.prototype.turnOn = function () {
        this.node.scale = 0;
        this.node.active = true;
        this.node.runAction(cc.sequence(cc.delayTime(TURN_ON_DELAY), WritingRightStar_1.getStarShownAction()));
        cc.audioEngine.play(this.rightStarShown, false, 1);
        this._isTriggered = true;
    };
    var WritingRightStar_1;
    WritingRightStar = WritingRightStar_1 = __decorate([
        ccclass
    ], WritingRightStar);
    return WritingRightStar;
}(WritingSmallDot_1.default));
exports.default = WritingRightStar;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Xcml0aW5nL1NjcmlwdC9Xcml0aW5nUmlnaHRTdGFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFnRDtBQUUxQyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRTVDLElBQU0sa0JBQWtCLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDdEMsSUFBTSxtQkFBbUIsR0FBRyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxRSxJQUFNLGVBQWUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNqQyxJQUFNLGFBQWEsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQzlCLElBQU0sYUFBYSxHQUFHLEdBQUcsQ0FBQztBQUUxQjs7R0FFRztBQUVIO0lBQThDLG9DQUFlO0lBRDdEO1FBQUEscUVBb0RDO1FBbERHLG9CQUFjLEdBQWlCLElBQUksQ0FBQztRQXdCNUIsa0JBQVksR0FBRyxLQUFLLENBQUM7O0lBMEJqQyxDQUFDO3lCQW5Eb0IsZ0JBQWdCO0lBR2pDOzs7T0FHRztJQUNJLG1DQUFRLEdBQWYsVUFBZ0IsY0FBNEI7UUFDeEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7SUFDekMsQ0FBQztJQUVEOztPQUVHO0lBQ1csbUNBQWtCLEdBQWhDO1FBQ0ksT0FBTyxFQUFFLENBQUMsS0FBSyxDQUNYLEVBQUUsQ0FBQyxRQUFRLENBQ1AsRUFBRSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3pFLEVBQUUsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUM1RTtRQUNELGFBQWE7UUFDYixFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLGFBQWEsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQ3ZFLENBQUM7SUFDTixDQUFDO0lBSU0sc0NBQVcsR0FBbEI7UUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDN0IsQ0FBQztJQUVEOztPQUVHO0lBQ0ksZ0NBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBRTFCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQ7O09BRUc7SUFDSSxpQ0FBTSxHQUFiO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEVBQUUsa0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFbkQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQzs7SUFsRGdCLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBbURwQztJQUFELHVCQUFDO0NBbkRELEFBbURDLENBbkQ2Qyx5QkFBZSxHQW1ENUQ7a0JBbkRvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV3JpdGluZ1NtYWxsRG90IGZyb20gJy4vV3JpdGluZ1NtYWxsRG90JztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuY29uc3QgRE9UX1NIT1dOX0RVUkFUSU9OID0gWzAuMiwgMC40XTtcbmNvbnN0IFNUQVJfU0hPV05fRFVSQVRJT04gPSBET1RfU0hPV05fRFVSQVRJT05bMF0gKyBET1RfU0hPV05fRFVSQVRJT05bMV07XG5jb25zdCBET1RfU0hPV05fU0NBTEUgPSBbMS41LCAxXTtcbmNvbnN0IFNUQVJfUk9UQVRJT04gPSAzNjAgKiAyO1xuY29uc3QgVFVSTl9PTl9ERUxBWSA9IDAuMTtcblxuLyoqXG4gKiDmmL7npLrnmoTmmJ/mmJ9cbiAqL1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdyaXRpbmdSaWdodFN0YXIgZXh0ZW5kcyBXcml0aW5nU21hbGxEb3Qge1xuICAgIHJpZ2h0U3RhclNob3duOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICog6K6+572u5pi+56S66Z+z6aKRXG4gICAgICogQHBhcmFtIHJpZ2h0U3RhclNob3duIFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRBdWRpbyhyaWdodFN0YXJTaG93bjogY2MuQXVkaW9DbGlwKSB7XG4gICAgICAgIHRoaXMucmlnaHRTdGFyU2hvd24gPSByaWdodFN0YXJTaG93bjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5bmmJ/mmJ/lsZXnpLrliqjnlLtcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdldFN0YXJTaG93bkFjdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGNjLnNwYXduKFxuICAgICAgICAgICAgY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbyhET1RfU0hPV05fRFVSQVRJT05bMF0sIERPVF9TSE9XTl9TQ0FMRVswXSwgRE9UX1NIT1dOX1NDQUxFWzBdKSxcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKERPVF9TSE9XTl9EVVJBVElPTlsxXSwgRE9UX1NIT1dOX1NDQUxFWzFdLCBET1RfU0hPV05fU0NBTEVbMV0pXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgLy8g6ZqP5py65aSa5peL6L2sMC05MOW6plxuICAgICAgICAgICAgY2Mucm90YXRlVG8oU1RBUl9TSE9XTl9EVVJBVElPTiwgU1RBUl9ST1RBVElPTiArIDkwICogTWF0aC5yYW5kb20oKSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pc1RyaWdnZXJlZCA9IGZhbHNlO1xuXG4gICAgcHVibGljIGlzVHJpZ2dlcmVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNUcmlnZ2VyZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6YeN572uXG4gICAgICovXG4gICAgcHVibGljIHJlc2V0KCkge1xuICAgICAgICB0aGlzLl9pc1RyaWdnZXJlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDngrnkuq7or6XmmJ/mmJ/vvIzml4vovazlh7rmnaXvvIzlkajovrnlsI/ngrnkuZ/lkIzml7bmuJDmmL7lh7rmnaVcbiAgICAgKi9cbiAgICBwdWJsaWMgdHVybk9uKCkge1xuICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSAwO1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoVFVSTl9PTl9ERUxBWSksIFdyaXRpbmdSaWdodFN0YXIuZ2V0U3RhclNob3duQWN0aW9uKCkpKTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnJpZ2h0U3RhclNob3duLCBmYWxzZSwgMSk7XG5cbiAgICAgICAgdGhpcy5faXNUcmlnZ2VyZWQgPSB0cnVlO1xuICAgIH1cbn1cbiJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Writing/Script/WritingDot.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '12a105yR3BHcYncC1anukvk', 'WritingDot');
// Writing/Script/WritingDot.ts

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
var WritingRightStar_1 = require("./WritingRightStar");
var WritingSmallDot_1 = require("./WritingSmallDot");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MAIN_DOT_SHOWN_DURATION = 0.2;
var DOT_SHOWN_DURATION = [0.2, 0.4];
/**
 * 笔画节点，管理每个引导点、画到后显示的星星及其周边点缀的小点的显示隐藏
 */
var WritingDot = /** @class */ (function (_super) {
    __extends(WritingDot, _super);
    function WritingDot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mainDot = null;
        _this.starFinished = null;
        _this.mainDotShown = null;
        _this.mainDotErased = null;
        _this.starFinishedShown = null;
        _this._isTriggered = false;
        _this.relativeDots = null;
        return _this;
    }
    /**
     * 设置音效
     * @param mainDotShown 黄色点出现音效
     * @param mainDotErased 黄色点擦除音效
     * @param starFinishedShown 彩色星星出现音效
     * @param rightStarShown 白色星星出现音效
     */
    WritingDot.prototype.setAudios = function (mainDotShown, mainDotErased, starFinishedShown, rightStarShown) {
        this.mainDotShown = mainDotShown;
        this.mainDotErased = mainDotErased;
        this.starFinishedShown = starFinishedShown;
        this.getRelativeDots().forEach(function (smallDot) {
            if (smallDot instanceof WritingRightStar_1.default) {
                smallDot.setAudio(rightStarShown);
            }
        });
    };
    WritingDot.prototype.isTriggered = function () {
        return this._isTriggered;
    };
    /**
     * 获取子节点中的正确星星与小点组件列表
     */
    WritingDot.prototype.getRelativeDots = function () {
        if (this.relativeDots === null) {
            if (this.node.childrenCount > 0) {
                this.relativeDots = this.node.children.map(function (dot) {
                    return dot.getComponent(WritingSmallDot_1.default);
                });
            }
            else {
                this.relativeDots = [];
            }
        }
        return this.relativeDots;
    };
    /**
     * 擦除（画笔画到的时候调用）
     */
    WritingDot.prototype.erase = function () {
        if (this.mainDot) {
            cc.audioEngine.play(this.mainDotErased, false, 1);
        }
        this._isTriggered = true;
        this.hideAll();
    };
    /**
     * 重置
     */
    WritingDot.prototype.reset = function () {
        this._isTriggered = false;
        // 一开始先隐藏，等动画触发显示
        this.hideAll();
    };
    /**
     * 隐藏所有点
     */
    WritingDot.prototype.hideAll = function () {
        if (this.mainDot) {
            this.mainDot.active = false;
            this.mainDot.getComponent(cc.Sprite).enabled = true;
        }
        if (this.starFinished) {
            this.starFinished.active = false;
            this.starFinished.getComponent(cc.Sprite).enabled = true;
        }
        this.getRelativeDots().forEach(function (dot) {
            dot.reset();
        });
    };
    /**
     * 动画显示引导节点
     */
    WritingDot.prototype.showGuide = function () {
        this._isTriggered = false;
        if (this.starFinished) {
            this.starFinished.scale = 0;
            this.starFinished.active = true;
            this.starFinished.runAction(WritingRightStar_1.default.getStarShownAction());
            cc.audioEngine.play(this.starFinishedShown, false, 1);
        }
        else if (this.mainDot) {
            this.mainDot.scale = 0;
            this.mainDot.active = true;
            this.mainDot.runAction(cc.scaleTo(MAIN_DOT_SHOWN_DURATION, 1, 1).easing(cc.easeBackOut()));
            cc.audioEngine.play(this.mainDotShown, false, 1);
        }
    };
    /**
     * 点亮该节点，引导点隐藏，星星旋转出来，周边小点也同时渐显出来
     */
    WritingDot.prototype.turnOn = function () {
        // 引导点和结束点只能隐藏其图片，因为还有子节点星星要显示
        if (this.mainDot) {
            this.mainDot.getComponent(cc.Sprite).enabled = false;
        }
        else if (this.starFinished) {
            this.starFinished.getComponent(cc.Sprite).enabled = false;
        }
        // 剩余没点亮的星星也点亮
        this.getRelativeDots()
            .filter(function (dot) { return !dot.isTriggered(); })
            .forEach(function (dot) {
            dot.turnOn();
        });
        this._isTriggered = true;
    };
    WritingDot.LAST_DOT_SHOWN_DURATION = DOT_SHOWN_DURATION[0] + DOT_SHOWN_DURATION[1];
    __decorate([
        property(cc.Node)
    ], WritingDot.prototype, "mainDot", void 0);
    __decorate([
        property(cc.Node)
    ], WritingDot.prototype, "starFinished", void 0);
    WritingDot = __decorate([
        ccclass
    ], WritingDot);
    return WritingDot;
}(cc.Component));
exports.default = WritingDot;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Xcml0aW5nL1NjcmlwdC9Xcml0aW5nRG90LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFrRDtBQUNsRCxxREFBZ0Q7QUFFMUMsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUU1QyxJQUFNLHVCQUF1QixHQUFHLEdBQUcsQ0FBQztBQUNwQyxJQUFNLGtCQUFrQixHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBRXRDOztHQUVHO0FBRUg7SUFBd0MsOEJBQVk7SUFEcEQ7UUFBQSxxRUE4SUM7UUF6SUcsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsbUJBQWEsR0FBaUIsSUFBSSxDQUFDO1FBRW5DLHVCQUFpQixHQUFpQixJQUFJLENBQUM7UUF5Qi9CLGtCQUFZLEdBQUcsS0FBSyxDQUFDO1FBTXJCLGtCQUFZLEdBQXNCLElBQUksQ0FBQzs7SUFpR25ELENBQUM7SUE5SEc7Ozs7OztPQU1HO0lBQ0ksOEJBQVMsR0FBaEIsVUFDSSxZQUEwQixFQUMxQixhQUEyQixFQUMzQixpQkFBK0IsRUFDL0IsY0FBNEI7UUFFNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBQzNDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFRO1lBQ3BDLElBQUksUUFBUSxZQUFZLDBCQUFnQixFQUFFO2dCQUN0QyxRQUFRLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQ3JDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBSU0sZ0NBQVcs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OiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXcml0aW5nUmlnaHRTdGFyIGZyb20gJy4vV3JpdGluZ1JpZ2h0U3Rhcic7XG5pbXBvcnQgV3JpdGluZ1NtYWxsRG90IGZyb20gJy4vV3JpdGluZ1NtYWxsRG90JztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuY29uc3QgTUFJTl9ET1RfU0hPV05fRFVSQVRJT04gPSAwLjI7XG5jb25zdCBET1RfU0hPV05fRFVSQVRJT04gPSBbMC4yLCAwLjRdO1xuXG4vKipcbiAqIOeslOeUu+iKgueCue+8jOeuoeeQhuavj+S4quW8leWvvOeCueOAgeeUu+WIsOWQjuaYvuekuueahOaYn+aYn+WPiuWFtuWRqOi+ueeCuee8gOeahOWwj+eCueeahOaYvuekuumakOiXj1xuICovXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV3JpdGluZ0RvdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHVibGljIHN0YXRpYyBMQVNUX0RPVF9TSE9XTl9EVVJBVElPTiA9IERPVF9TSE9XTl9EVVJBVElPTlswXSArIERPVF9TSE9XTl9EVVJBVElPTlsxXTtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG1haW5Eb3Q6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc3RhckZpbmlzaGVkOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIG1haW5Eb3RTaG93bjogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIG1haW5Eb3RFcmFzZWQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBzdGFyRmluaXNoZWRTaG93bjogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIOiuvue9rumfs+aViFxuICAgICAqIEBwYXJhbSBtYWluRG90U2hvd24g6buE6Imy54K55Ye6546w6Z+z5pWIXG4gICAgICogQHBhcmFtIG1haW5Eb3RFcmFzZWQg6buE6Imy54K55pOm6Zmk6Z+z5pWIXG4gICAgICogQHBhcmFtIHN0YXJGaW5pc2hlZFNob3duIOW9qeiJsuaYn+aYn+WHuueOsOmfs+aViFxuICAgICAqIEBwYXJhbSByaWdodFN0YXJTaG93biDnmb3oibLmmJ/mmJ/lh7rnjrDpn7PmlYhcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0QXVkaW9zKFxuICAgICAgICBtYWluRG90U2hvd246IGNjLkF1ZGlvQ2xpcCxcbiAgICAgICAgbWFpbkRvdEVyYXNlZDogY2MuQXVkaW9DbGlwLFxuICAgICAgICBzdGFyRmluaXNoZWRTaG93bjogY2MuQXVkaW9DbGlwLFxuICAgICAgICByaWdodFN0YXJTaG93bjogY2MuQXVkaW9DbGlwXG4gICAgKSB7XG4gICAgICAgIHRoaXMubWFpbkRvdFNob3duID0gbWFpbkRvdFNob3duO1xuICAgICAgICB0aGlzLm1haW5Eb3RFcmFzZWQgPSBtYWluRG90RXJhc2VkO1xuICAgICAgICB0aGlzLnN0YXJGaW5pc2hlZFNob3duID0gc3RhckZpbmlzaGVkU2hvd247XG4gICAgICAgIHRoaXMuZ2V0UmVsYXRpdmVEb3RzKCkuZm9yRWFjaCgoc21hbGxEb3QpID0+IHtcbiAgICAgICAgICAgIGlmIChzbWFsbERvdCBpbnN0YW5jZW9mIFdyaXRpbmdSaWdodFN0YXIpIHtcbiAgICAgICAgICAgICAgICBzbWFsbERvdC5zZXRBdWRpbyhyaWdodFN0YXJTaG93bik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2lzVHJpZ2dlcmVkID0gZmFsc2U7XG5cbiAgICBwdWJsaWMgaXNUcmlnZ2VyZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1RyaWdnZXJlZDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbGF0aXZlRG90czogV3JpdGluZ1NtYWxsRG90W10gPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICog6I635Y+W5a2Q6IqC54K55Lit55qE5q2j56Gu5pif5pif5LiO5bCP54K557uE5Lu25YiX6KGoXG4gICAgICovXG4gICAgcHVibGljIGdldFJlbGF0aXZlRG90cygpIHtcbiAgICAgICAgaWYgKHRoaXMucmVsYXRpdmVEb3RzID09PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLmNoaWxkcmVuQ291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWxhdGl2ZURvdHMgPSB0aGlzLm5vZGUuY2hpbGRyZW4ubWFwKChkb3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRvdC5nZXRDb21wb25lbnQoV3JpdGluZ1NtYWxsRG90KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWxhdGl2ZURvdHMgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnJlbGF0aXZlRG90cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmk6bpmaTvvIjnlLvnrJTnlLvliLDnmoTml7blgJnosIPnlKjvvIlcbiAgICAgKi9cbiAgICBwdWJsaWMgZXJhc2UoKSB7XG4gICAgICAgIGlmICh0aGlzLm1haW5Eb3QpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5tYWluRG90RXJhc2VkLCBmYWxzZSwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9pc1RyaWdnZXJlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuaGlkZUFsbCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOmHjee9rlxuICAgICAqL1xuICAgIHB1YmxpYyByZXNldCgpIHtcbiAgICAgICAgdGhpcy5faXNUcmlnZ2VyZWQgPSBmYWxzZTtcbiAgICAgICAgLy8g5LiA5byA5aeL5YWI6ZqQ6JeP77yM562J5Yqo55S76Kem5Y+R5pi+56S6XG4gICAgICAgIHRoaXMuaGlkZUFsbCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOmakOiXj+aJgOacieeCuVxuICAgICAqL1xuICAgIHByaXZhdGUgaGlkZUFsbCgpIHtcbiAgICAgICAgaWYgKHRoaXMubWFpbkRvdCkge1xuICAgICAgICAgICAgdGhpcy5tYWluRG90LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5tYWluRG90LmdldENvbXBvbmVudChjYy5TcHJpdGUpLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhckZpbmlzaGVkKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJGaW5pc2hlZC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc3RhckZpbmlzaGVkLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nZXRSZWxhdGl2ZURvdHMoKS5mb3JFYWNoKChkb3QpID0+IHtcbiAgICAgICAgICAgIGRvdC5yZXNldCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliqjnlLvmmL7npLrlvJXlr7zoioLngrlcbiAgICAgKi9cbiAgICBwdWJsaWMgc2hvd0d1aWRlKCkge1xuICAgICAgICB0aGlzLl9pc1RyaWdnZXJlZCA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5zdGFyRmluaXNoZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhckZpbmlzaGVkLnNjYWxlID0gMDtcbiAgICAgICAgICAgIHRoaXMuc3RhckZpbmlzaGVkLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnN0YXJGaW5pc2hlZC5ydW5BY3Rpb24oV3JpdGluZ1JpZ2h0U3Rhci5nZXRTdGFyU2hvd25BY3Rpb24oKSk7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc3RhckZpbmlzaGVkU2hvd24sIGZhbHNlLCAxKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1haW5Eb3QpIHtcbiAgICAgICAgICAgIHRoaXMubWFpbkRvdC5zY2FsZSA9IDA7XG4gICAgICAgICAgICB0aGlzLm1haW5Eb3QuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubWFpbkRvdC5ydW5BY3Rpb24oY2Muc2NhbGVUbyhNQUlOX0RPVF9TSE9XTl9EVVJBVElPTiwgMSwgMSkuZWFzaW5nKGNjLmVhc2VCYWNrT3V0KCkpKTtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5tYWluRG90U2hvd24sIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOeCueS6ruivpeiKgueCue+8jOW8leWvvOeCuemakOiXj++8jOaYn+aYn+aXi+i9rOWHuuadpe+8jOWRqOi+ueWwj+eCueS5n+WQjOaXtua4kOaYvuWHuuadpVxuICAgICAqL1xuICAgIHB1YmxpYyB0dXJuT24oKSB7XG4gICAgICAgIC8vIOW8leWvvOeCueWSjOe7k+adn+eCueWPquiDvemakOiXj+WFtuWbvueJh++8jOWboOS4uui/mOacieWtkOiKgueCueaYn+aYn+imgeaYvuekulxuICAgICAgICBpZiAodGhpcy5tYWluRG90KSB7XG4gICAgICAgICAgICB0aGlzLm1haW5Eb3QuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhckZpbmlzaGVkKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJGaW5pc2hlZC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDliankvZnmsqHngrnkuq7nmoTmmJ/mmJ/kuZ/ngrnkuq5cbiAgICAgICAgdGhpcy5nZXRSZWxhdGl2ZURvdHMoKVxuICAgICAgICAgICAgLmZpbHRlcigoZG90KSA9PiAhZG90LmlzVHJpZ2dlcmVkKCkpXG4gICAgICAgICAgICAuZm9yRWFjaCgoZG90KSA9PiB7XG4gICAgICAgICAgICAgICAgZG90LnR1cm5PbigpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5faXNUcmlnZ2VyZWQgPSB0cnVlO1xuICAgIH1cbn1cbiJdfQ==
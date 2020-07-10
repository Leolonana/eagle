
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framwork/Base/IProtocol.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f142bFnmGRIb5tfUA5sOsnl', 'IProtocol');
// Framwork/Base/IProtocol.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EStadus = void 0;
/** 协议返回状态值 */
var EStadus;
(function (EStadus) {
    EStadus[EStadus["UNKOWN"] = -1] = "UNKOWN";
    EStadus[EStadus["ERROR"] = 100] = "ERROR";
    EStadus[EStadus["OK"] = 200] = "OK";
})(EStadus = exports.EStadus || (exports.EStadus = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9GcmFtd29yay9CYXNlL0lQcm90b2NvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxjQUFjO0FBQ2QsSUFBWSxPQUlYO0FBSkQsV0FBWSxPQUFPO0lBQ2YsMENBQVcsQ0FBQTtJQUNYLHlDQUFXLENBQUE7SUFDWCxtQ0FBUSxDQUFBO0FBQ1osQ0FBQyxFQUpXLE9BQU8sR0FBUCxlQUFPLEtBQVAsZUFBTyxRQUlsQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqIOWNj+iurui/lOWbnueKtuaAgeWAvCAqL1xuZXhwb3J0IGVudW0gRVN0YWR1cyB7XG4gICAgVU5LT1dOID0gLTEsXG4gICAgRVJST1IgPSAxMDAsXG4gICAgT0sgPSAyMDBcbn1cblxuLyoqIOWNj+iurui/lOWbnuS9k+aOpeWPoyAqL1xuZXhwb3J0IGludGVyZmFjZSBJUmV0IHtcbiAgICAvKiog54q25oCB56CBICovXG4gICAgc3RhZHVzOiBudW1iZXI7XG5cbiAgICAvKiog6ZSZ6K+v5L+h5oGvICovXG4gICAgbXNnPzogc3RyaW5nO1xuXG4gICAgLyoqIOaVsOaNruS9kyAqL1xuICAgIGRhdGE6IGFueTtcbn1cblxuLyoqIOWNj+iuruivt+axguS9k+aOpeWPoyAqL1xuZXhwb3J0IGludGVyZmFjZSBJUmVxIHtcbiAgICAvKiog6Lev5b6EICovXG4gICAgdXJsOiBzdHJpbmc7XG5cbiAgICAvKiog5Y+C5pWwICovXG4gICAgcGFyYW1hdGVyczogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm90b2NvbExpc3RlbmVyIHtcblxuICAgIG9uUmVjZWl2ZVByb3RvY29sKHBhcmFtKTtcblxufSJdfQ==
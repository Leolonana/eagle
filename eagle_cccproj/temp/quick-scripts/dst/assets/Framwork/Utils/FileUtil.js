
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Framwork/Utils/FileUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ad8b72xWgJMmpokVnuRrlPR', 'FileUtil');
// Framwork/Utils/FileUtil.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileUtil = /** @class */ (function () {
    function FileUtil() {
        this._jsb_fileutil = jsb.fileUtils;
        if (!this._jsb_fileutil)
            console.error('Inner delegate is undefined.');
        console.log(this._jsb_fileutil.toString());
    }
    Object.defineProperty(FileUtil, "instance", {
        get: function () {
            if (!this._instance)
                this._instance = new FileUtil();
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 获取可写路径
     */
    FileUtil.prototype.getWritableUrl = function () {
        return this._jsb_fileutil.getWritablePath();
    };
    /**
     * 获取默认资源根目录
     * @return 一般同 getWritableUrl
     */
    FileUtil.prototype.getDefaultResourceRootPath = function () {
        return this._jsb_fileutil.getDefaultResourceRootPath();
    };
    /**
     * 创建目录
     * @param dir 目录路径
     */
    FileUtil.prototype.createDirectory = function (dir) {
        if (this.isDirectoryExist(dir))
            return true;
        return this._jsb_fileutil.createDirectory(dir);
    };
    /**
     * 返回目录是否存在
     * @param dir 目录
     */
    FileUtil.prototype.isDirectoryExist = function (dir) {
        return this._jsb_fileutil.isDirectoryExist(dir);
    };
    /**
     * 返回文件是否存在
     * @param path 文件路径
     */
    FileUtil.prototype.isFileExist = function (path) {
        return this._jsb_fileutil.isFileExist(path);
    };
    /**
     * 将字符串写入文件（复位）
     * @param str 写入字符串
     * @param path 文件路径
     */
    FileUtil.prototype.writeStringToFile = function (str, path) {
        return this._jsb_fileutil.writeStringToFile(str, path);
    };
    /**
     * 将对象写入文件（复位）
     * @param obj 写入对象
     * @param path 文件路径
     */
    FileUtil.prototype.writeToFile = function (obj, path) {
        return this._jsb_fileutil.writeToFile(obj, path);
    };
    /**
     * 获取文件内容
     * @param path 文件路径
     */
    FileUtil.prototype.getValueMapFromFile = function (path) {
        return this._jsb_fileutil.getValueMapFromFile(path);
    };
    /**
     * 获取文件内容（字符串）
     * @param path 文件路径
     */
    FileUtil.prototype.getStringFromFile = function (path) {
        return this._jsb_fileutil.getStringFromFile(path);
    };
    /**
     * 获取文件所在目录
     * @param path 文件路径
     */
    FileUtil.prototype.getFileDir = function (path) {
        return this._jsb_fileutil.getFileDir(path);
    };
    FileUtil.prototype.normalizePath = function (path) {
        return this._jsb_fileutil.normalizePath(path);
    };
    FileUtil.prototype.loadFilenameLookupDictionaryFromFile = function (path) {
        this._jsb_fileutil.loadFilenameLookupDictionaryFromFile(path);
    };
    /**
     * 移除目录（以及目录下所有文件）
     * @param dir 目录
     */
    FileUtil.prototype.removeDirectory = function (dir) {
        return this._jsb_fileutil.removeDirectory(dir);
    };
    /**
     * 移除文件
     * @param path 文件路径
     */
    FileUtil.prototype.removeFile = function (path) {
        return this._jsb_fileutil.removeFile(path);
    };
    /**
     * 获取文件大小
     * @param path 文件路径
     */
    FileUtil.prototype.getFileSize = function (path) {
        return this._jsb_fileutil.getFileSize(path);
    };
    /**
     * 列出目录所有文件
     * @param dir 目录
     */
    FileUtil.prototype.listFiles = function (dir) {
        return this._jsb_fileutil.listFiles(dir);
    };
    FileUtil.prototype.getSuitableFOpen = function (path) {
        return this._jsb_fileutil.getSuitableFOpen(path);
    };
    FileUtil.prototype.setWritablePath = function (path) {
        return this._jsb_fileutil.setWritablePath(path);
    };
    FileUtil._instance = null;
    return FileUtil;
}());
exports.FileUtil = FileUtil;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9GcmFtd29yay9VdGlscy9GaWxlVXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0lBSUk7UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhO1lBQ25CLE9BQU8sQ0FBQyxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQztRQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBR0Qsc0JBQWtCLG9CQUFRO2FBQTFCO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO2dCQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztZQUNwQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFFRDs7T0FFRztJQUNJLGlDQUFjLEdBQXJCO1FBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFFRDs7O09BR0c7SUFDSSw2Q0FBMEIsR0FBakM7UUFDSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztJQUMzRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksa0NBQWUsR0FBdEIsVUFBdUIsR0FBVztRQUM5QixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7WUFDMUIsT0FBTyxJQUFJLENBQUM7UUFFaEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksbUNBQWdCLEdBQXZCLFVBQXdCLEdBQVc7UUFDL0IsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRDs7O09BR0c7SUFDSSw4QkFBVyxHQUFsQixVQUFtQixJQUFZO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxvQ0FBaUIsR0FBeEIsVUFBeUIsR0FBVyxFQUFFLElBQVk7UUFDOUMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLDhCQUFXLEdBQWxCLFVBQW1CLEdBQVcsRUFBRSxJQUFZO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRDs7O09BR0c7SUFDSSxzQ0FBbUIsR0FBMUIsVUFBMkIsSUFBWTtRQUNuQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVEOzs7T0FHRztJQUNJLG9DQUFpQixHQUF4QixVQUF5QixJQUFZO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksNkJBQVUsR0FBakIsVUFBa0IsSUFBWTtRQUMxQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFTSxnQ0FBYSxHQUFwQixVQUFxQixJQUFZO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVNLHVEQUFvQyxHQUEzQyxVQUE0QyxJQUFZO1FBQ3BELElBQUksQ0FBQyxhQUFhLENBQUMsb0NBQW9DLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVEOzs7T0FHRztJQUNJLGtDQUFlLEdBQXRCLFVBQXVCLEdBQVc7UUFDOUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksNkJBQVUsR0FBakIsVUFBa0IsSUFBWTtRQUMxQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRDs7O09BR0c7SUFDSSw4QkFBVyxHQUFsQixVQUFtQixJQUFZO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVEOzs7T0FHRztJQUNJLDRCQUFTLEdBQWhCLFVBQWlCLEdBQVc7UUFDeEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRU0sbUNBQWdCLEdBQXZCLFVBQXdCLElBQVk7UUFDaEMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFTSxrQ0FBZSxHQUF0QixVQUF1QixJQUFZO1FBQy9CLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQXpJYyxrQkFBUyxHQUFhLElBQUksQ0FBQztJQTJJOUMsZUFBQztDQXRKRCxBQXNKQyxJQUFBO0FBdEpZLDRCQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBjbGFzcyBGaWxlVXRpbCB7XHJcblxyXG4gICAgcHJpdmF0ZSBfanNiX2ZpbGV1dGlsOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fanNiX2ZpbGV1dGlsID0ganNiLmZpbGVVdGlscztcclxuICAgICAgICBpZiAoIXRoaXMuX2pzYl9maWxldXRpbClcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignSW5uZXIgZGVsZWdhdGUgaXMgdW5kZWZpbmVkLicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2pzYl9maWxldXRpbC50b1N0cmluZygpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IEZpbGVVdGlsID0gbnVsbDtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCk6IEZpbGVVdGlsIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKVxyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBGaWxlVXRpbCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWPr+WGmei3r+W+hFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0V3JpdGFibGVVcmwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fanNiX2ZpbGV1dGlsLmdldFdyaXRhYmxlUGF0aCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W6buY6K6k6LWE5rqQ5qC555uu5b2VXHJcbiAgICAgKiBAcmV0dXJuIOS4gOiIrOWQjCBnZXRXcml0YWJsZVVybFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0RGVmYXVsdFJlc291cmNlUm9vdFBhdGgoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fanNiX2ZpbGV1dGlsLmdldERlZmF1bHRSZXNvdXJjZVJvb3RQYXRoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJvlu7rnm67lvZVcclxuICAgICAqIEBwYXJhbSBkaXIg55uu5b2V6Lev5b6EXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjcmVhdGVEaXJlY3RvcnkoZGlyOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5pc0RpcmVjdG9yeUV4aXN0KGRpcikpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fanNiX2ZpbGV1dGlsLmNyZWF0ZURpcmVjdG9yeShkaXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6L+U5Zue55uu5b2V5piv5ZCm5a2Y5ZyoXHJcbiAgICAgKiBAcGFyYW0gZGlyIOebruW9lVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNEaXJlY3RvcnlFeGlzdChkaXI6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9qc2JfZmlsZXV0aWwuaXNEaXJlY3RvcnlFeGlzdChkaXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6L+U5Zue5paH5Lu25piv5ZCm5a2Y5ZyoXHJcbiAgICAgKiBAcGFyYW0gcGF0aCDmlofku7bot6/lvoRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzRmlsZUV4aXN0KHBhdGg6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9qc2JfZmlsZXV0aWwuaXNGaWxlRXhpc3QocGF0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlsIblrZfnrKbkuLLlhpnlhaXmlofku7bvvIjlpI3kvY3vvIlcclxuICAgICAqIEBwYXJhbSBzdHIg5YaZ5YWl5a2X56ym5LiyXHJcbiAgICAgKiBAcGFyYW0gcGF0aCDmlofku7bot6/lvoRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHdyaXRlU3RyaW5nVG9GaWxlKHN0cjogc3RyaW5nLCBwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fanNiX2ZpbGV1dGlsLndyaXRlU3RyaW5nVG9GaWxlKHN0ciwgcGF0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlsIblr7nosaHlhpnlhaXmlofku7bvvIjlpI3kvY3vvIlcclxuICAgICAqIEBwYXJhbSBvYmog5YaZ5YWl5a+56LGhXHJcbiAgICAgKiBAcGFyYW0gcGF0aCDmlofku7bot6/lvoRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHdyaXRlVG9GaWxlKG9iajogT2JqZWN0LCBwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fanNiX2ZpbGV1dGlsLndyaXRlVG9GaWxlKG9iaiwgcGF0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmlofku7blhoXlrrlcclxuICAgICAqIEBwYXJhbSBwYXRoIOaWh+S7tui3r+W+hFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0VmFsdWVNYXBGcm9tRmlsZShwYXRoOiBzdHJpbmcpOiBPYmplY3Qge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9qc2JfZmlsZXV0aWwuZ2V0VmFsdWVNYXBGcm9tRmlsZShwYXRoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluaWh+S7tuWGheWuue+8iOWtl+espuS4su+8iVxyXG4gICAgICogQHBhcmFtIHBhdGgg5paH5Lu26Lev5b6EXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRTdHJpbmdGcm9tRmlsZShwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9qc2JfZmlsZXV0aWwuZ2V0U3RyaW5nRnJvbUZpbGUocGF0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmlofku7bmiYDlnKjnm67lvZVcclxuICAgICAqIEBwYXJhbSBwYXRoIOaWh+S7tui3r+W+hFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0RmlsZURpcihwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9qc2JfZmlsZXV0aWwuZ2V0RmlsZURpcihwYXRoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbm9ybWFsaXplUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9qc2JfZmlsZXV0aWwubm9ybWFsaXplUGF0aChwYXRoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZEZpbGVuYW1lTG9va3VwRGljdGlvbmFyeUZyb21GaWxlKHBhdGg6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2pzYl9maWxldXRpbC5sb2FkRmlsZW5hbWVMb29rdXBEaWN0aW9uYXJ5RnJvbUZpbGUocGF0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnp7vpmaTnm67lvZXvvIjku6Xlj4rnm67lvZXkuIvmiYDmnInmlofku7bvvIlcclxuICAgICAqIEBwYXJhbSBkaXIg55uu5b2VXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZW1vdmVEaXJlY3RvcnkoZGlyOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fanNiX2ZpbGV1dGlsLnJlbW92ZURpcmVjdG9yeShkaXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog56e76Zmk5paH5Lu2XHJcbiAgICAgKiBAcGFyYW0gcGF0aCDmlofku7bot6/lvoRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlbW92ZUZpbGUocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2pzYl9maWxldXRpbC5yZW1vdmVGaWxlKHBhdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5paH5Lu25aSn5bCPXHJcbiAgICAgKiBAcGFyYW0gcGF0aCDmlofku7bot6/lvoRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldEZpbGVTaXplKHBhdGg6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2pzYl9maWxldXRpbC5nZXRGaWxlU2l6ZShwYXRoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIl+WHuuebruW9leaJgOacieaWh+S7tlxyXG4gICAgICogQHBhcmFtIGRpciDnm67lvZVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxpc3RGaWxlcyhkaXI6IHN0cmluZyk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fanNiX2ZpbGV1dGlsLmxpc3RGaWxlcyhkaXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRTdWl0YWJsZUZPcGVuKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2pzYl9maWxldXRpbC5nZXRTdWl0YWJsZUZPcGVuKHBhdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRXcml0YWJsZVBhdGgocGF0aDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2pzYl9maWxldXRpbC5zZXRXcml0YWJsZVBhdGgocGF0aCk7XHJcbiAgICB9XHJcblxyXG59Il19
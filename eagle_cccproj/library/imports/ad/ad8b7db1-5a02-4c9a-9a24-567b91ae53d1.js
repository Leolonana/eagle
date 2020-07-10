"use strict";
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
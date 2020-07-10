
export class FileUtil {

    private _jsb_fileutil: any;

    constructor() {
        this._jsb_fileutil = jsb.fileUtils;
        if (!this._jsb_fileutil)
            console.error('Inner delegate is undefined.');
        console.log(this._jsb_fileutil.toString());
    }

    private static _instance: FileUtil = null;
    public static get instance(): FileUtil {
        if (!this._instance)
            this._instance = new FileUtil();
        return this._instance;
    }

    /**
     * 获取可写路径
     */
    public getWritableUrl(): string {
        return this._jsb_fileutil.getWritablePath();
    }

    /**
     * 获取默认资源根目录
     * @return 一般同 getWritableUrl
     */
    public getDefaultResourceRootPath(): string {
        return this._jsb_fileutil.getDefaultResourceRootPath();
    }

    /**
     * 创建目录
     * @param dir 目录路径
     */
    public createDirectory(dir: string): boolean {
        if (this.isDirectoryExist(dir))
            return true;

        return this._jsb_fileutil.createDirectory(dir);
    }

    /**
     * 返回目录是否存在
     * @param dir 目录
     */
    public isDirectoryExist(dir: string) {
        return this._jsb_fileutil.isDirectoryExist(dir);
    }

    /**
     * 返回文件是否存在
     * @param path 文件路径
     */
    public isFileExist(path: string) {
        return this._jsb_fileutil.isFileExist(path);
    }

    /**
     * 将字符串写入文件（复位）
     * @param str 写入字符串
     * @param path 文件路径
     */
    public writeStringToFile(str: string, path: string): boolean {
        return this._jsb_fileutil.writeStringToFile(str, path);
    }

    /**
     * 将对象写入文件（复位）
     * @param obj 写入对象
     * @param path 文件路径
     */
    public writeToFile(obj: Object, path: string): boolean {
        return this._jsb_fileutil.writeToFile(obj, path);
    }

    /**
     * 获取文件内容
     * @param path 文件路径
     */
    public getValueMapFromFile(path: string): Object {
        return this._jsb_fileutil.getValueMapFromFile(path);
    }

    /**
     * 获取文件内容（字符串）
     * @param path 文件路径
     */
    public getStringFromFile(path: string): string {
        return this._jsb_fileutil.getStringFromFile(path);
    }

    /**
     * 获取文件所在目录
     * @param path 文件路径
     */
    public getFileDir(path: string): string {
        return this._jsb_fileutil.getFileDir(path);
    }

    public normalizePath(path: string): string {
        return this._jsb_fileutil.normalizePath(path);
    }

    public loadFilenameLookupDictionaryFromFile(path: string) {
        this._jsb_fileutil.loadFilenameLookupDictionaryFromFile(path);
    }

    /**
     * 移除目录（以及目录下所有文件）
     * @param dir 目录
     */
    public removeDirectory(dir: string): boolean {
        return this._jsb_fileutil.removeDirectory(dir);
    }

    /**
     * 移除文件
     * @param path 文件路径
     */
    public removeFile(path: string): boolean {
        return this._jsb_fileutil.removeFile(path);
    }

    /**
     * 获取文件大小
     * @param path 文件路径
     */
    public getFileSize(path: string): number {
        return this._jsb_fileutil.getFileSize(path);
    }

    /**
     * 列出目录所有文件
     * @param dir 目录
     */
    public listFiles(dir: string): string[] {
        return this._jsb_fileutil.listFiles(dir);
    }

    public getSuitableFOpen(path: string): string {
        return this._jsb_fileutil.getSuitableFOpen(path);
    }

    public setWritablePath(path: string) {
        return this._jsb_fileutil.setWritablePath(path);
    }

}
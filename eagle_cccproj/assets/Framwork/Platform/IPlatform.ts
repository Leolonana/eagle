
/**
 * 平台接口
 * @author guob
 * @date 2020/06/08
 */
export interface IPlatform {

    /** 获取当前平台标识 */
    platform(): string;

    /** 加载场景 */
    loadScene(params: string): void;

    /** 加载场景成功回调 */
    onSceneLoaded();

    /** 退出场景 */
    exitScene(): void;

    /** 退出场景成功回调 */
    onSceneExit(): void; 

}
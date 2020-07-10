/**
 * 框架接口，提供给练习回调
 */
export default interface FrameworkInterface {
    /**
     * 获得星星，如果星星数比现在的多，会播放获得动画。同时，更新总成绩。
     * 
     * @param num 星星数
     */
    onStarGot(num: number): void;

    /**
     * 练习完成，框架会播放过关动画
     */
    onPracticeFinished(): void;

    /**
     * 锁定练习切换，调用后，用户点击切换练习按钮不会切换。
     * 
     * 通常用在播放各个练习的通关效果，或引导动画时。
     * 
     * 当调用unlockSwitch或onPracticeFinished切换练习后，会自动解锁。
     * 
     * 注意：lockSwitch必须配合unlockSwitch成对使用
     * @param syncBtnShow 是否同步显示/隐藏掉切换按钮，默认同步
     */
    lockSwitch(syncBtnShow?: boolean): void;

    /**
     * 解锁练习切换
     * @param syncBtnShow 是否同步显示/隐藏掉切换按钮，默认同步
     */
    unlockSwitch(syncBtnShow?: boolean): void;

    showTabBar(): void;
    
    hideTabBar(): void;
}

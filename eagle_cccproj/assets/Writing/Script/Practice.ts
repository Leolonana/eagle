import FrameworkInterface from './FrameworkInterface';

const { ccclass } = cc._decorator;

/**
 * 练习类，需绑定在预制体顶层供框架调用。子类必须实现对应的接口。
 *
 * 注：本来用interface就行，但是要想通过getComponent获取实例，只能用类。
 */
@ccclass
export default abstract class Practice extends cc.Component {
    /**
     * 异步初始化练习，如果出现异常，记得reject。
     * @param courseId 课程id
     * @param practiceId 练习索引（从0开始）
     * @param practiceData 当前练习数据
     */
    public abstract init(courseId: string, practiceId: string, practiceData: any): Promise<void>;

    protected framework: FrameworkInterface = null;

    public setFramework(framework: FrameworkInterface) {
        this.framework = framework;
    }

    /**
     * 练习隐藏，当从当前练习切到下一个练习时，原练习会回调onHide
     */
    public onHide() {}

    /**
     * 练习显示，当练习展示（包括首个练习倒计时后显示，及切换成当前练习）时，会回调onShow
     */
    public onShow() {}
}

import { PlatformUtil } from "../Utils/PlatformUtil";

const TAG = "Native";

/**
 * 原生接口
 * @author guob
 * @date 2020/07/01
 */
export class Native {

    private _callNativeStaticMethod;

    constructor() {
        this._callNativeStaticMethod = jsb.reflection.callStaticMethod;
    }

    private static _instance: Native;
    public static get instance(): Native {
        if (!this._instance) {
            this._instance = new Native();
        }
        return this._instance;
    }

    /**
     * 调用原生方法
     * @param params 
     */
    public call(params: {
        package: string,
        class: string,
        method: string,
        sign?: string,
        args?: any[],
    }): string {
        console.debug(`[${TAG}] _callNative class ${params.class}, method ${params.method}, sign ${params.sign}, paramaters ${params.args}.`)
        if (!params || !params.class || !params.method) {
            console.error(`[${TAG}] _callNative illegal paramaters!`)
            return;
        }

        try {
            if (PlatformUtil.isAndroid()) { // 安卓
                let sign = this._getSign(params.sign);
                if (this._checkParam(params.args, params.sign)) {
                    let evalString = "this._callNativeStaticMethod(params.package+params.class,params.method,sign,";
                    params.args.forEach((param, index) => {
                        evalString += param;
                        if (index >= params.args.length - 1) {
                            evalString += ")";
                        }
                    });
                    eval(evalString);
                } else {
                    return this._callNativeStaticMethod(params.class, params.method, sign);
                }
            } else if (PlatformUtil.isIOS()) {  // IOS
                if (this._checkParam(params.args, params.sign)) {
                    let evalString = "this._callNativeStaticMethod(params.class,params.method,";
                    params.args.forEach((param, index) => {
                        evalString += param;
                        if (index >= params.args.length - 1) {
                            evalString += ")";
                        }
                    });
                    eval(evalString);
                } else {
                    return this._callNativeStaticMethod(params.class, params.method);
                }
            } else {    // 其他
                let sign = this._getSign(params.sign);
                if (this._checkParam(params.args, params.sign)) {
                    let evalString = "this._callNativeStaticMethod(params.package+params.class,params.method,sign,";
                    params.args.forEach((param, index) => {
                        evalString += param;
                        if (index >= params.args.length - 1) {
                            evalString += ")";
                        }
                    });
                    console.log(evalString);
                    
                    eval(evalString);
                } else {
                    return this._callNativeStaticMethod(params.class, params.method, sign);
                }

            }
        } catch (error) {
            console.error(error);
        }
    }

    /**
     * 参数签名
     * @param sign 最后一个字符代表返回值，其余为参数
     * @returns signature 
     * @example _getSign("IFBS") return "(IFZ)Ljava/lang/String;"
     */
    private _getSign(sign: string): string {
        if (!sign) return "()V";

        let javaSignMap = {
            I: "I",
            F: "F",
            B: "Z",
            S: "Ljava/lang/String;"
        };

        let sigs = sign.split("");
        if (!sigs || sigs.length <= 0) return "()V";

        let signature = "(";
        sigs.forEach((sig, index) => {
            if (index >= sigs.length - 1) {
                signature += ")";
            }

            if (!javaSignMap[sig]) {
                throw new Error(`[${TAG}] _getSign cannot resolve sig:${sig} of ${sign}!`);
            }

            signature += javaSignMap[sig];
        });
        return signature;
    }

    /**
     * 检查参数
     * @param params 参数数组
     * @param sign 参数签名字符串
     */
    private _checkParam(params: any[], sign?: string) {
        if (!params || params.length <= 0) return;

        let signTypeMap = {
            I: "number",
            F: "number",
            B: "boolean",
            S: "string"
        }

        let sigs;
        if (sign) {
            sigs = sign.substring(0, sign.length - 1).split("");
            if (sigs.length !== params.length) {
                throw new Error(`[${TAG}] _checkParam params ${params} do not match signatures ${sign} in length!`);
            }
        }

        for (let i = 0; i < params.length; i++) {
            // 检查参数类型
            if (!params[i] || typeof (params[i]) != "number" || typeof (params[i]) != "boolean" || typeof (params[i]) != "string") {
                throw new Error(`[${TAG}] _checkParam illegal params ${params} ${params[i]}!`);
            }

            // 检查参数签名
            if (sigs) {
                if (signTypeMap[sigs[i]] !== typeof (params[i])) {
                    throw new Error(`[${TAG}] _checkParam params ${params} do not match signatures ${sign}!`);
                }
            }
        }
        return true
    }

}
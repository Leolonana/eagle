import { Native } from "./Native";
import { IRet, EStadus } from "./IProtocol";
import { PlatformUtil } from "../Utils/PlatformUtil";

const TAG = "BaseProtocol";

/**
 * 协议抽象基类
 */
export abstract class BaseProtocol {
    private readonly Head = "eagle://";
    private readonly Separator = "?";

    private readonly Package = "com/eagle/base/jni/";
    private readonly Class = "PlatformSystem";


    public openProtocol(url: string) {
        if (!url || !url.split(this.Head)[1]) {
            console.error(`[${TAG}] openProtocol illegal url ${url}`)
            return;
        }

        let body = url.split(this.Head)[1]
        let method = body.split(this.Separator)[1]
        let args = body.split(this.Separator)[2] || "null"

        if (PlatformUtil.isAndroid() || PlatformUtil.isIOS()) {
            return this.callNative({
                package: this.Package,
                class: this.Class,
                method: method,
                sign: "(S)S",
                args: [args]
            });
        } else {
            //TODO when call the other host platform

        }
    }

    private callNative(params: {
        package: string,
        class: string,
        method: string,
        sign?: string,
        args?: any[],
    }): any {
        if (!params) {
            console.error(`[${TAG}] callNative params is undefined!`);
            return;
        }

        let ret = Native.instance.call(params);
        try {
            let retObj = JSON.parse(ret) as IRet;
            if (retObj.stadus == EStadus.OK) {
                return retObj.data;
            } else {
                console.error(`[${TAG}] callNative return error msg:${retObj.msg}!`);
                return;
            }
        } catch (error) {
            console.error(`[${TAG}] callNative ret:${ret}, decode exception:${error}!`);
            return;
        }
    }

}
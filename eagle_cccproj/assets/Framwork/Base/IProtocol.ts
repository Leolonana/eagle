
/** 协议返回状态值 */
export enum EStadus {
    UNKOWN = -1,
    ERROR = 100,
    OK = 200
}

/** 协议返回体接口 */
export interface IRet {
    /** 状态码 */
    stadus: number;

    /** 错误信息 */
    msg?: string;

    /** 数据体 */
    data: any;
}

/** 协议请求体接口 */
export interface IReq {
    /** 路径 */
    url: string;

    /** 参数 */
    paramaters: any;
}

export interface IProtocolListener {

    onReceiveProtocol(param);

}
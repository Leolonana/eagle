import { BaseProtocol } from "../../Framwork/Base/BaseProtocol";

export class Protocol extends BaseProtocol {

    constructor() {
        super();
    }

    private static _instance: Protocol;
    public static get instance(): Protocol {
        if (!this._instance)
            this._instance = new Protocol();
        return this._instance;
    }
    

    public onGameLoaded() {
        this.openProtocol("eagle://gameLoaded")
    }

    public onGameExit() {
        this.openProtocol("eagle://gameExit")
    }

}
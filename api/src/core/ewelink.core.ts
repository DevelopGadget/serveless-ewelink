import ResponseData from "../models/response_data.model";
import { StateEnum } from "./core_enums.core";
import EweLinkApi, { LoginInfo } from 'ewelink-api';

class EweLink {
    private static instance: EweLink;
    private EweLinkApi: EweLinkApi;
    private EweLinkApiLogin: LoginInfo;

    public static getInstance(): EweLink {
        if (!EweLink.instance) {
            EweLink.instance = new EweLink();
        }
        return EweLink.instance;
    }

    async ToggleDevice(deviceId: string, state: StateEnum): Promise<ResponseData> {
        return new Promise(async (resolve, reject) => {
            resolve({IsError: false, Message: EweLink.instance.EweLinkApiLogin, StatusCode: 200 });
        });
    }

    async InitEweLink() {
        this.EweLinkApi = new EweLinkApi({
            email: process.env.EmailEweLink,
            password: process.env.PasswordEweLink
        });
        //this.EweLinkApiLogin =  await this.EweLinkApi.login();
    }

}

export default EweLink.getInstance();
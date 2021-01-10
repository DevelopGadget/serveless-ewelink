const EweLinkApiImport = require('ewelink-api');

async function Initialize() {
    this.EweLinkApi = new EweLinkApiImport({
        email: process.env.EmailEweLink,
        password: process.env.PasswordEweLink
    });
}


function ToggleDevice(deviceId, state) {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await this.EweLinkApi.setWSDevicePowerState(deviceId, state);
            if(result?.status !== 'ok') reject({ IsError: true, Message: result, StatusCode: 406 });
            resolve({ IsError: false, Message: result, StatusCode: 200 });
        } catch (error) {
            reject({ IsError: true, Message: error, StatusCode: 400 });
        }

    });
}


module.exports = { Initialize, ToggleDevice };
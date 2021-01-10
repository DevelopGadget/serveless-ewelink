const EweLinkApiImport = require('ewelink-api');

async function API() {

    if(typeof API.EweLinkApi === 'undefined') {
        API.EweLinkApi = new EweLinkApiImport({
            email: process.env.EmailEweLink,
            password: process.env.PasswordEweLink
        });
    }

    if(typeof API.EweLinkApiLogin === 'undefined') {
        API.EweLinkApiLogin = await API.EweLinkApi.getCredentials();
    }

    if(typeof API.SocketEweLink === 'undefined') {
        API.SocketEweLink = await API.EweLinkApi.openWebSocket(async data => {});
    }



}

module.exports.API = API;
async function ToggleDevice(req, res) {
    try {
        const EweLinkCore =  require('../core/ewelink.core').API;
        const timeStamp = (new Date()).getTime() / 1000;
        const sequence = Math.floor(timeStamp * 1000);

        let params = {
            at: EweLinkCore.EweLinkApiLogin.at,
            apiKey: EweLinkCore.EweLinkApiLogin.user.apikey,
            deviceId: req.body.deviceId,
            params: { switch: req.body.state },
        };

        const payload = {
            action: 'update',
            deviceid: `${req.body.deviceId}`,
            apikey: EweLinkCore.EweLinkApiLogin.user.apikey,
            userAgent: 'app',
            params,
            sequence,
        };

        await EweLinkCore.SocketEweLink.send(JSON.stringify(payload));
        return res.send({ IsError: false, Message: payload, StatusCode: 200 });
    } catch (error) {
        return res.send({ IsError: true, Message: error, StatusCode: 400 });
    }
}

module.exports = { ToggleDevice };
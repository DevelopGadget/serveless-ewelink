const EwLinkCore = require('../core/ewelink.core');

async function ToggleDevice(req, res) {
    try {
        const request = await EwLinkCore.ToggleDevice(req.body.deviceId, req.body.state);
        return res.status(request.StatusCode).send(request);
    } catch (error) {
        return res.status(error.StatusCode).send(error);
    }
}

module.exports = { ToggleDevice };
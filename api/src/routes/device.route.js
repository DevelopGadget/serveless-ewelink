const DeviceController = require('../controllers/device.controller');

function ConfigRouter(router) {
  router.post('/api/device/toggle',  DeviceController.ToggleDevice);
}

module.exports = (router) => ConfigRouter(router);

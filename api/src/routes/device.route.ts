import { Router } from 'api/src/types/express';
import DeviceController from '../controllers/device.controller';

class Device {

  constructor(private ROUTER: Router) {
    this.ConfigRouter();
  }

  private ConfigRouter() {
    this.ROUTER.post('/device/toggle',  DeviceController.ToggleDevice);
  }
}

export default Device;

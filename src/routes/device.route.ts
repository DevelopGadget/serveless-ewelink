import { Router } from 'express';
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

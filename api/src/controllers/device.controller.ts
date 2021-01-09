
import { Response, Request } from 'api/src/types/express';
import ResponseData from '../models/response_data.model';
import EwLinkCore from '../core/ewelink.core';

class Device {
    private static instance: Device;

    public static getInstance(): Device {
        if (!Device.instance) {
            Device.instance = new Device();
        }
        return Device.instance;
    }

    async ToggleDevice(req: Request, res: Response): Promise<Response<ResponseData>> {
        try {
            const request = await EwLinkCore.ToggleDevice(req.body.deviceId, req.body.state);
            return res.status(request.StatusCode).send(request);
        } catch (error) {
            return res.status(error?.StatusCode ?? 400).send(error);
        }
    }


}

export default Device.getInstance();
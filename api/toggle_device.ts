import { NowRequest, NowResponse } from '@vercel/node';
import EweLink from 'ewelink-api';

export default async (request: NowRequest, response: NowResponse) => {

  const connection = new EweLink({
    email: request.body.email,
    password: request.body.password,
  });

  const status = await connection.toggleDevice(request.body.deviceid);

  return response.send(status);

}
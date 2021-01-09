import App from './index';
import EweLinkCore from './src/core/ewelink.core';

class Server {
  public async InitServer() {
    await EweLinkCore.InitEweLink();
    App.RunServer();
  }
}

new Server().InitServer();
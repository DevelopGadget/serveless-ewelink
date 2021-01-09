import App from './index';
import EweLinkCore from './src/core/ewelink.core';

class Server {
  public async InitServer() {
    await EweLinkCore.InitEweLink();
    const app = new App();
    app.RunServer();
  }
}

new Server().InitServer();

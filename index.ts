import express, { json, urlencoded, NextFunction, Response, Request } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import cache from 'nocache';
import DeviceRoutes from './src/routes/device.route';

class Index {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.AppConfig();
  }

  private AppConfig() {
    this.app.set('port', process.env.PORT || 4200);
    this.app.use(morgan('dev'));
    this.app.use(json());
    this.app.use(helmet());
    this.app.use(cache());
    this.app.use(compression());
    this.app.use(this.defaultHeader);
    this.app.use(urlencoded({ extended: false }));
    this.app.get('/api/', (req, res) => {
        res.send({ message: '=)' });
    });
    this.ConfigRouters();
  }

  private ConfigRouters() {
    const routes = new DeviceRoutes(this.app);
  }

  private defaultHeader(req: Request, res: Response, next: NextFunction) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Accept', 'application/json');
    next();
  }

  public RunServer() {
    this.app.listen(process.env.PORT || 4200, async () => {
        console.log("test");
    });
  }
}

export default new Index();

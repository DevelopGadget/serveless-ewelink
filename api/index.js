const express = require('express');
const app = express();
const EweLinkCore = require('./src/core/ewelink.core');
const morgan = require('morgan');
const helmet = require('helmet');
const cache = require('nocache');
const compression = require('compression');

function defaultHeader(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Accept', 'application/json');
  next();
}

async function AppConfig() {
  await EweLinkCore.Initialize();
}

app.set('port', process.env.PORT || 4200);
app.use(morgan('dev'));
app.use(express.json());
app.use(helmet());
app.use(cache());
app.use(compression());
app.use(defaultHeader);
app.use(express.urlencoded({ extended: false }));

require('./src/routes/device.route')(app);


AppConfig();

module.exports = app;
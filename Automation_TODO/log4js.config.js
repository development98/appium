import log4js from 'log4js';

export default function configureLogging() {
  log4js.configure({
    appenders: {
      console: { type: 'console' },
      file: { type: 'file', filename: 'logs/wdio.log' }
    },
    categories: {
      default: { appenders: ['console', 'file'], level: 'info' }
    }
  });

  return log4js.getLogger();
}

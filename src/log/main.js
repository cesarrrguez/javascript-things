import winston from 'winston';

const { createLogger, transports, format } = winston;

const logger = createLogger({
  transports: [
    new transports.Console({
      level: 'debug',
      format: format.combine(format.colorize(), format.simple()),
    }),
    new transports.File({
      filename: 'src/log/file.log',
      level: 'warn',
      format: format.json(),
    }),
  ],
});

logger.debug('This is a debug log');
logger.info('This is an info log');
logger.warn('This is a warning log');
logger.error('This is an error log');

import { LoggerOptions, format, transports } from 'winston';

const configs: LoggerOptions = {
    level: `warn`,
    exitOnError: false,
    format: format.combine(
        format.timestamp({ format: `YYYY-MM-DD HH:mm:ss` }),
        format.splat(),
        format.printf(
            (info) => `${info.timestamp} ${info.level}: [${info.message}]`
        )
    ),
    transports: [
        new transports.File({
            filename: `ErrorLogs.log`,
            handleExceptions: true,
        }),
    ],
};

export default configs;

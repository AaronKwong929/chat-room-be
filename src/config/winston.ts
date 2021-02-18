import { format, LoggerOptions, transports } from 'winston';

const config: LoggerOptions = {
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
        new transports.File({ filename: 'ErrorLogs.log', level: `error` }),
    ],
};

export default config;

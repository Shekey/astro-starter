import { type ILogObj, Logger } from 'tslog';

type Source = 'HyGraphClient';

const Colors: Record<Source, string> = {
  HyGraphClient: '\x1b[34m'
};

const log: Logger<ILogObj> = new Logger({
  minLevel: 3
});

const logMessage = (source: Source, message: string) => {
  const random = Math.random().toString(36).substr(2, 5);
  const sourceFormatted = source.padEnd(14, ' ');
  console.log(`${random} ${Colors[source]} ${sourceFormatted} \x1b[32m ${message}\x1b[0m`);
};

const logError = (source: Source, message: string) => {
  const random = Math.random().toString(36).substr(2, 5);
  const sourceFormatted = source.padEnd(14, ' ');
  console.log(`${random} ${Colors[source]} ${sourceFormatted} \x1b[31m ${message}\x1b[0m`);
};

const logDuration = <T>(source: Source, funcName: string, promise: Promise<T>) => {
  const random = Math.random().toString(36).substr(2, 5);
  const sourceFormatted = source.padEnd(14, ' ');
  const funcNameFormatted = funcName.padEnd(25, ' ');
  const start = Date.now();
  return promise
    .then((response) => {
      const difference = Date.now() - start;
      const timeColor =
        difference < 5
          ? '\x1b[34m'
          : difference < 50
            ? '\x1b[0m'
            : difference < 100
              ? '\x1b[33m'
              : '\x1b[31m';
      console.log(
        `${random} ${
          Colors[source]
        } ${sourceFormatted} \x1b[32m ${funcNameFormatted} ${timeColor} ${difference + 'ms'}\x1b[0m`
      );
      return response;
    })
    .catch((error) => {
      console.log(
        `${random} ${Colors[source]} ${sourceFormatted} \x1b[31m ${funcNameFormatted} ${error.message}\x1b[0m`
      );
      throw error;
    });
};

export const LogService = {
  logError,
  logMessage,
  logDuration,
  log
};

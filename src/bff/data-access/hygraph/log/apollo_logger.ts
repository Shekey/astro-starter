import { onError } from '@apollo/client/link/error';
import { LogService } from '@service/Log/logService';

export const errorLoggerLink = onError(({ networkError, graphQLErrors, operation }) => {
  if (graphQLErrors) {
    graphQLErrors.map((params) => {
      return LogService.logError(
        'HyGraphClient',
        `${operation.operationName.padEnd(26, ' ')} ${params.message}`
      );
    });
  }
  if (networkError) {
    LogService.logError('HyGraphClient', `[Network Error]: ${networkError.message}`);
  }
});

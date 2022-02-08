import { LOCAL_STORAGE } from 'constants/index';
import { snakeCase } from 'lodash';

/**
 * @param { Promise } promise
 * @param { Object= } errorExt - Additional Information you can pass to the err object
 * @return { Promise }
 */
export const to = <T, U = Error>(
  promise: Promise<T>,
  // eslint-disable-next-line @typescript-eslint/ban-types
  errorExt?: object,
): Promise<[U, undefined] | [null, T]> => {
  return promise
    .then<[null, T]>((data: T) => [null, data])
    .catch<[U, undefined]>((err: U) => {
      if (errorExt) {
        Object.assign(err, errorExt);
      }

      return [err, undefined];
    });
};

export const getGameState = (title: string): string => {
  return `${LOCAL_STORAGE.GAME_STATE}_${snakeCase(title)}`;
};

export const getStatistics = (title: string): string => {
  return `${LOCAL_STORAGE.STATISTICS}_${snakeCase(title)}`;
};

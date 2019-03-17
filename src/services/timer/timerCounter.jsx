/**
 * @param delayInMilliseconds
 * @returns {Promise}
 */
export const timerCounter = (delayInMilliseconds) => {
  return new Promise((resolve) => {
    setInterval(() => {
      resolve();
    }, delayInMilliseconds);
  });
};

/**
 * Transport seconds to HMSMs (hours, minutes, seconds, milliseconds)
 * @param currentTimeInSeconds
 * @returns {{h: *, m: *, s: *, ms: string}}
 */
export const secondsToHms = (currentTimeInSeconds) => {
  let h = Math.floor(currentTimeInSeconds / 3600);
  let m = Math.floor((currentTimeInSeconds % 3600) / 60);
  let s = Math.floor(currentTimeInSeconds % 3600 % 60);
  let ms = (currentTimeInSeconds % 1)
    .toFixed(2)
    .split('.').pop();

  /**
  * Concat '0' to value if less than 10 (for presentation)
  */
  const dates = ((arrayDates) => arrayDates.map(e => e <= 9 ? '0' + e : e))([h, m, s]);
  return {
    h: dates[0],
    m: dates[1],
    s: dates[2],
    ms: ms,
  }
};
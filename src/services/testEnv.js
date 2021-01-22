// While running test there will be access to env variables.
// If there is such access, then we can check whether it's test
// and make some adjustments.
//
export const isTestEnv = (() => {
  try {
    return process.env.NODE_ENV === 'test';
  } catch (e) {
    return false;
  }
})();

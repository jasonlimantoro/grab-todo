const noop = () => {};

export const tryCatch = async (fn, { success = noop, fail = noop } = {}) => {
  try {
    const resp = await fn();
    success(resp);
  } catch (e) {
    console.error(e);
    fail(e);
  }
};

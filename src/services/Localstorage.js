export default {
  setKey(key, value) {
    const data = typeof value === "object" ? JSON.stringify(value) : value;
    return localStorage.setItem(key, data);
  },

  getKey(key) {
    return localStorage.getItem(key);
  }
};

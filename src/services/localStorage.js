export const readInLocalStorage = (param) => JSON.parse(localStorage.getItem(param));

export const saveInLocalStorage = (param, value) => localStorage
  .setItem(param, JSON.stringify(value));

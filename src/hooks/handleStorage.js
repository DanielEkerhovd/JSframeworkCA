export function addLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getLocalStorage(key) {
  const storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : null;
}

export function removeLocalStorage(key) {
  localStorage.removeItem(key);
}

export function clearLocalStorage() {
  localStorage.clear();
}

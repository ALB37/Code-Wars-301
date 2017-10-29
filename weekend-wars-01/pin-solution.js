function validatePIN (pin) { //eslint-disable-line
  return /^\d{4}$|^\d{6}$/.test(pin);
}

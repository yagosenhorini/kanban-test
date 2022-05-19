export const emailValidator = (email: string) => {
  const isNumber = parseFloat(email);
  if (!email || !Number.isNaN(isNumber)) {
    throw Error('Invalid Email, please fill with a valid email');
  }
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
};

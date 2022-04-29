export const emailValidator = (email: string) => {
  const isNumber = parseFloat(email);
  if (!email || !Number.isNaN(isNumber)) {
    throw Error('Please check your parameter');
  }
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
};

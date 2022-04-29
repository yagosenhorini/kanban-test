import { emailValidator } from '@Utils/emailValidator';

describe('email validator', () => {
  it('should validate a valid email', () => {
    const email = 'yagosenhorini@gmail.com';
    expect(emailValidator(email)).toBe(true);
  });

  it('should not validate a number', () => {
    const email = '123';
    expect(() => {
      emailValidator(email);
    }).toThrowError();
  });

  it('should return false if the value is not an email', () => {
    const email = 'yagosenhorini';
    expect(emailValidator(email)).toBe(false);
  });
});

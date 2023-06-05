import { validatePhoneNumbers } from '../index';

describe('Phone format validation function tests', () => {
   it('validation of valid phone number +7 (987) 654-32-10 to be true', () => {
      const phoneNumber = '+7 (987) 654-32-10';
      const result = validatePhoneNumbers(phoneNumber);
      expect(result).toBe(true);
   }),
   it('validation of valid phone number +7 (4212) 53-53-53 to be true', () => {
      const phoneNumber = '+7 (4212) 53-53-53';
      const result = validatePhoneNumbers(phoneNumber);
      expect(result).toBe(true);
   }),
   it('validation of phone number +370 (652) 98-100 to be false', () => {
      const phoneNumber = '+370 (652) 98-100';
      const result = validatePhoneNumbers(phoneNumber);
      expect(result).toBe(false);
   }),
   it('validation of phone number without + sign to be false', () => {
      const phoneNumber = '7 (4212) 53-53-53';
      const result = validatePhoneNumbers(phoneNumber);
      expect(result).toBe(false);
   }),
   it('validation of phone number with incorrect country code to be false', () => {
      const phoneNumber = '+8 (4212) 53-53-53';
      const result = validatePhoneNumbers(phoneNumber);
      expect(result).toBe(false);
   }),
   it('validation of phone number with missing opening parenthesis to be false', () => {
      const phoneNumber = '+8 4212) 53-53-53';
      const result = validatePhoneNumbers(phoneNumber);
      expect(result).toBe(false);
   });
});
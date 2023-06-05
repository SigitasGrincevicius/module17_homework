import { validatePhoneNumbers } from '../index';

describe('Phone format validation function tests', () => {
   it('validation of phone number +7 (987) 654-32-10 to be true', () => {
      const phoneNumber = '+7 (987) 654-32-10';
      const result = validatePhoneNumbers(phoneNumber);
      expect(result).toBe(true);
   }),
   it('validation of phone number +7 (4212) 53-53-53 to be true', () => {
      const phoneNumber = '+7 (4212) 53-53-53';
      const result = validatePhoneNumbers(phoneNumber);
      expect(result).toBe(true);
   }),
   it('validation of phone number +370 (652) 98-100 to be false', () => {
      const phoneNumber = '+370 (652) 98-100';
      const result = validatePhoneNumbers(phoneNumber);
      expect(result).toBe(false);
   });
});
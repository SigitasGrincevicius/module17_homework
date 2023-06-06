import { multiply } from '../index';

describe('Multiplication function tests', () => {
   it('multiply 1 * 0 to be equal 0', () => {
      const result = multiply(1, 0);
      expect(result).toBe(0);
   });
   // With x you can skip test and suites
   it('multiply 1 * 5 to be equal 5', () => {
      const result = multiply(1, 5);
      expect(result).toBe(5);
   });
});
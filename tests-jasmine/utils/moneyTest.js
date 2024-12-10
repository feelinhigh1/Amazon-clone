import {formatCurrency} from '../../scripts/utils/money.js';

describe('Test Suite : formatCurency', () => {
  it('converts cents into dollar', () => {
    expect(formatCurrency(2095)).toEqual('20.95');
  })
  it('works with 0', () => {
    expect(formatCurrency(0)).toEqual('0.00');
  })
  it('rounds upto the nearest cent', () => {
    expect(formatCurrency(500.5)).toEqual('5.01');
  }) 
})

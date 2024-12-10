import {formatCurrency} from '../scripts/utils/money.js';

console.log('Test Suite : formatCurency')


console.log('converts cents into dollar');
if (formatCurrency(2095) === '20.95') {
  console.log('passed');
}
else {
  console.log('failed');
}


console.log('works with 0');
if (formatCurrency(0) === '0.00') {
  console.log('passed');
}
else {
  console.log('failed');
}



console.log('rounds upto the nearest cent');
if (formatCurrency(500.5) === '5.01') {
  console.log('passed');
}
else {
  console.log('failed');
}



console.log('rounds upto the nearest cent');
if (formatCurrency(500.4) === '5.00') {
  console.log('passed');
}
else {
  console.log('failed');
}


function digitalRoot(n) {
  while (n >= 10) {
    let str = String(n);
    let numbers = str.split('');
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += Number(numbers[i]); 
    }
    n = sum;
  }
  
  return n;
}
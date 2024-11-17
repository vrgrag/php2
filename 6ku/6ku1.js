function expandedForm(num) {
  const numStr = String(num);
  let result = [];

  for (let i = 0; i < numStr.length; i++) {
    const digit = numStr[i];
    if (digit !== '0') {
      result.push(digit + '0'.repeat(numStr.length - i - 1));
    }
  }

  return result.join(' + ');
}
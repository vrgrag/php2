function expandedForm(num) {
    const [firstrpart, second] = String(num).split('.');
    let res = [];
    for (let i = 0; i < firstrpart.length; i++) {
      if (firstrpart[i] != '0') {
        res.push( firstrpart[i] + '0'.repeat(firstrpart.length - i - 1));
      }
    }
      for (let i = 0; i < second.length; i++) {
        if (second[i] != '0') {
          res.push(second[i] + '/' + '1' + '0'.repeat(i + 1));
        }
      }
    return res.join(' + ');
  }
function rot13(str) {
  const strArr = str.split('');
  const newStr = [];

  for (let i in strArr) {
    const charNum = str.charCodeAt(i);
    if (charNum >= 65 && charNum <= 90) {
      let newChar = charNum + 13;
      // If charCode is greater than 90, loop it back around
      if (newChar > 90) {
        const diff = newChar - 90;
        newChar = 64 + diff;
      }
      newStr.push(String.fromCharCode(newChar));
    } else {
      newStr.push(strArr[i]);
    }
  }
  return newStr.join('');
}


rot13("SERR PBQR PNZC");
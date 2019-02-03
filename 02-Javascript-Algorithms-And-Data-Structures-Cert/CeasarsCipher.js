function rot13(str) {
  const strArr = str.split('');

  const newStr = strArr.map((letter) => {
    const charNum = letter.charCodeAt(0);
    if (charNum >= 65 && charNum <= 90) {
      let newChar = charNum + 13;
      // If charCode is greater than 90, loop it back around
      if (newChar > 90) {
        const diff = newChar - 90;
        newChar = 64 + diff;
      }
      return String.fromCharCode(newChar);
    } else {
      return letter;
    }
  });

  return newStr.join('');
}


rot13("SERR PBQR PNZC");
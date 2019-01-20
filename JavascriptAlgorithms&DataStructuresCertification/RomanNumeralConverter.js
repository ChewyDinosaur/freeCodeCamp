function convertToRoman(num) {
  const romanNumeral = [];
  const numerals = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
  }
  for (let i of Object.keys(numerals)) {
      while (num >= numerals[i]) {
          num -= numerals[i];
          romanNumeral.push(i);
      }
  }
  return romanNumeral.join('');
}

convertToRoman(36);
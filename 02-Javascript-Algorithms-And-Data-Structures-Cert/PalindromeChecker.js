function palindrome(str) {
  const stripped = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return stripped === stripped.split('').reverse().join('');
}

palindrome("eye");
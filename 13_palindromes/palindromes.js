const palindromes = function (str) {
  const clean = str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');

  // compare to reversed version
  return clean === clean.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;

// returns the number of uppercase letters, lowercase, numbers and special characters
//that are in the string 
function solve(s){
    const lowerCaseCount = (s.match(/[a-z]/g) || []).length;
    const upperCaseCount = (s.match(/[A-Z]/g) || []).length;
    const numbersCount = (s.match(/[0-9]/g) || []).length;
    const specialCharsCount = s.length - lowerCaseCount - upperCaseCount - numbersCount;
    return [upperCaseCount, lowerCaseCount, numbersCount, specialCharsCount];
  }

  function trim(str, size) {
    const x = str.split('').slice(0, -size).join('');
    //const y = x.slice(0, -size);
    //const z = y.join('')
    return x + "...";
  }
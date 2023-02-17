// returns the number of uppercase letters, lowercase, numbers and special characters
//that are in the string 
function solve(s){
    const lowerCaseCount = (s.match(/[a-z]/g) || []).length;
    const upperCaseCount = (s.match(/[A-Z]/g) || []).length;
    const numbersCount = (s.match(/[0-9]/g) || []).length;
    const specialCharsCount = s.length - lowerCaseCount - upperCaseCount - numbersCount;
    return [upperCaseCount, lowerCaseCount, numbersCount, specialCharsCount];
  }

//Cut the string to a required number with different specifications 
const trim = (str, size) => str.length <= size ? str : str.slice(0, size - (size <= 3 ? 0 : 3)) + '...';

// Check AB

// Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. 
// function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. 
// Jika tidak ditemukan sama sekali, kembalikan nilai false.

function checkAB(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      for (let j = i + 1; j < str.length; j++) {
        if (str[j] === "b" && j - i >= 3) {
          return true;
        }
      }
    }
    if (str[i] === "b") {
      for (let j = i + 1; j < str.length; j++) {
        if (str[j] === "a" && j - i >= 3) {
          return true;
        }
      }
    }
  }
  return false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
// Palindrome

// Diberikan sebuah function palindrome(kata) yang menerima satu parameter. 
// Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. 
// Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.

function palindrome(kata) {
  let panjang = kata.length;
  let kiri = kata.slice(0, Math.floor(panjang/2));
  let kanan = kata.slice(Math.ceil(panjang/2), panjang).split('').reverse().join('');

  if (kiri == kanan) return true;
  return false;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
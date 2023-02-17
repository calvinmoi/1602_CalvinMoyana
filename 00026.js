// Mengurutkan Abjad

// Diberikan sebuah function urutkanAbjad(str) yang menerima satu parameter berupa string. 
// Function tersebut akan mengembalikan string baru yang telah diubah urutan abjadnya dari a hingga z. 
// Contohnya, halo akan menjadi ahlo. Kamu tidak perlu memikirkan apabila ada simbol ataupun angka didalam string tersebut.

function urutkanAbjad(str) {
  let urutkanString = "";
  const charOffset = "a".charCodeAt(0); 

  const jumlahChar = new Array(26).fill(0);

  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    jumlahChar[char - charOffset]++;
  }

  for (let i = 0; i < 26; i++) {
    const jmlChar = jumlahChar[i];
    const char = String.fromCharCode(i + charOffset);

    if (jmlChar === 0) {
      continue;
    }

    for (let j = 0; j < jmlChar; j++) {
      urutkanString += char;
    }
  }

  return urutkanString;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
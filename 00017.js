// Target Terdekat

// Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. 
// Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. 
// Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.

function targetTerdekat(arr) {
    let x = arr.indexOf('x');
    let o = arr.indexOf('o');
    let jarak = 0;
  
    if (x === -1) {
      return 0;
    }
  
    if (o < x) {
      jarak = x - o;
      return jarak;
    }
  
    for (let i = o; i < arr.length; i++) {
      if (arr[i] === 'x') {
        jarak = i - o;
        break;
      }
    }
  
    for (let i = o; i >= 0; i--) {
      if (arr[i] === 'x') {
        let j = o - i;
        if (j < jarak || jarak === 0) {
          jarak = j;
        }
        break;
      }
    }
  
    return jarak;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
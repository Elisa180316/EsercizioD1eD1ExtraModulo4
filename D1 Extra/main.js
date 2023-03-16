//1. Partendo da una stringa (passata come parametro), ritorna il carattere più usato nella stringa stessa.//

function mostUsedCharacter(str) {
  let charCount = {};
  let maxChar = '';
  let maxCount = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  for (let char in charCount) {
    if (charCount[char] > maxCount) {
      maxChar = char;
      maxCount = charCount[char];
    }
  }
  
  return maxChar;
}

let str = "carrozzeria";
let mostUsed = mostUsedCharacter(str);
console.log("The most used character in '" + str + "' is '" + mostUsed + "'");

//2. Controlla che due stringhe passate come parametri siano gli anagrammi l’una dell’altra. Ignora punteggiatura e spazi e ricordate di rendere la stringa tutta in minuscolo. Se le due parole sono anagrammi, ritorna `true`, altrimenti ritorna `false`.

function areAnagrams(str1, str2) {

    // Ignoro punteggiatura e spazi e rendo la stringa tutta in minuscolo
    str1 = str1.replace(/[^\w]/g, '').toLowerCase();
    str2 = str2.replace(/[^\w]/g, '').toLowerCase();
    
    // controllo se le righe hanno la stessa lunghezza
    if (str1.length !== str2.length) {
      return false;
    }
    
    // Ordina le stringhe e le compara
    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');
    
    return sortedStr1 === sortedStr2;
  }

let str1 = "Sentito";
let str2 = "Insetto";
let result = areAnagrams(str1, str2);
console.log("'" + str1 + "' e '" + str2 + "' sono anagrammi: " + result);

//3. Partendo da una lista di possibili anagrammi e da una parola (entrambi passati come parametri), ritorna un nuovo array contenente tutti gli anagrammi corretti della parola data.

function getAnagrams(word, list) {
     // Ignoro punteggiatura e spazi e rendo la stringa tutta in minuscolo
    word = word.replace(/[^\w]/g, '').toLowerCase();
    
    let charCount = {};
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
    
    // controllo ogni parola della lista
    let anagrams = [];
    for (let i = 0; i < list.length; i++) {
      let candidate = list[i];
       // Ignoro punteggiatura e spazi e rendo la stringa tutta in minuscolo
      candidate = candidate.replace(/[^\w]/g, '').toLowerCase();
      
      
      let candidateCharCount = {};
      for (let j = 0; j < candidate.length; j++) {
        let char = candidate[j];
        if (candidateCharCount[char]) {
          candidateCharCount[char]++;
        } else {
          candidateCharCount[char] = 1;
        }
      }
      
      
      let match = true;
      for (let char in charCount) {
        if (charCount[char] !== candidateCharCount[char]) {
          match = false;
          break;
        }
      }
      
      
      if (match) {
        anagrams.push(list[i]);
      }
    }
    
    return anagrams;
  }
  
  let word = "cartine";
  let list = ["carenti", "incerta", "espatrio"];
  let anagrams = getAnagrams(word, list);
  console.log("Anagramma di '" + word + "': " + anagrams);
  
  //4. Partendo da una stringa passata come parametro, ritorna `true` se la stringa è palindroma o `false` se non lo è.//

  function isPalindrome(str) {
    // remove punctuation and spaces and convert to lowercase
    str = str.replace(/[^\w]/g, '').toLowerCase();
    
    // compare first and last characters, then second and second-to-last, and so on
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false;
      }
    }
    
    return true;
  }
  
  
  console.log(isPalindrome("Ossesso", "Anna"));
  console.log(isPalindrome("Amica", "Frigorifero"));

  //5. Partendo da un numero intero (dai parametri) ritorna un numero che contenga le stesse cifre, ma in ordine contrario. Es. 189 ⇒ 981

  function reversedNum(num) {
    return (
      parseFloat(
        num
          .toString()
          .split('')
          .reverse()
          .join('')
      ) * Math.sign(num)
    )                 
  }

  console.log(reversedNum(284));

  //6. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “scala” creata con il carattere “#” e avente X scalini.//

  function step(x){
    
        for (let i = 1; i <= x; i++) {
          let staircase = "";
          for (let j = 1; j <= x - i; j++) {
            staircase += " ";
          }
          for (let j = 1; j <= i; j++) {
            staircase += "#";
          }
          console.log(staircase);
        }
      }
      
      console.log(step(5));

      //7. Crea una funzione che, data una stringa come parametro, ritorni la stessa stringa, ma al contrario. Es. “Ciao” ****⇒ “oaiC”//

      function reverse(s){
        return s.split("").reverse().join("");
        //split() separerà ogni carattere di una stringa e lo convertirà in un array.reverse() prenderà quell’array e invertirà gli elementi al suo interno. join() si unirà ai caratteri che sono stati invertiti dalla funzione reverse().//
    }
    
    var rev = reverse("Ciao")
    console.log(rev)

  

    //8. Crea una funzione che accetti un array e un numero Y come parametro. Dividi l’array in sotto-array aventi lunghezza Y//

    function divideArrayIntoSubArrays(array, Y) {
      let result = [];
      for (let i = 0; i < array.length; i += Y) {
        result.push(array.slice(i, i + Y));//Push Aggiungi un nuovo elemento a un array e slice:restituisce gli elementi selezionati in un array, come un nuovo array.
      }
      return result;
    }
    let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let subArrays = divideArrayIntoSubArrays(myArray, 3);
    console.log(subArrays); // [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]

    //9. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “piramide” create con il carattere “#” e avente X strati.

    function printPyramid(X) {
      for (let i = 1; i <= X; i++) {
        let row = '';
        for (let j = 1; j <= X - i; j++) {
          row += ' ';
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
          row += '#';
        }
        console.log(row);
      }
    }
    printPyramid(3);
//10. Scrivi una funzione che accetti un intero N e ritorni una matrice a spirale NxN:

function generateSpiralMatrix(N) {
  let matrix = new Array(N).fill().map(() => new Array(N).fill(0));
  let row = 0, col = 0, direction = 'right', num = 1;
  
  while (num <= N * N) {
    matrix[row][col] = num++;
    
    if (direction === 'right') {
      if (col === N - 1 || matrix[row][col + 1] !== 0) {
        direction = 'down';
        row++;
      } else {
        col++;
      }
    } else if (direction === 'down') {
      if (row === N - 1 || matrix[row + 1][col] !== 0) {
        direction = 'left';
        col--;
      } else {
        row++;
      }
    } else if (direction === 'left') {
      if (col === 0 || matrix[row][col - 1] !== 0) {
        direction = 'up';
        row--;
      } else {
        col--;
      }
    } else if (direction === 'up') {
      if (row === 0 || matrix[row - 1][col] !== 0) {
        direction = 'right';
        col++;
      } else {
        row--;
      }
    }
  }
  
  return matrix;
}
console.log(generateSpiralMatrix(2)); // [[1, 2], [4, 3]]
console.log(generateSpiralMatrix(3)); // [[1, 2, 3], [8, 9, 4], [7, 6, 5]]
console.log(generateSpiralMatrix(4)); // [[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]

        
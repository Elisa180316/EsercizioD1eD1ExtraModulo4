
// Crea una funzione che calcoli e ritorni la somma di due numeri interi. Se i due valori sono uguali, ritorna il triplo della somma.//


function sumOrTriple(num1, num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "Errore: I numeri sono decimali";
      }
    let sum = num1 + num2;
    if (num1 === num2) {
        return 3 * sum;
    } else {
        return sum;
    }
}
console.log(sumOrTriple(3, 6));
console.log(sumOrTriple(3, 3));
console.log(sumOrTriple(3.4, 3.6));

//2. Crea una funzione che controlli due numeri interi. Ritorna `true` se uno dei due è 50 o se la somma dei due è 50.//

function control(num3, num4) {
    if (num3 === 50 || num4 === 50 & num3 + num4 === 50) {
        return true
    } else {
        return false;
    }
}

console.log(control(50, 30));
console.log(control(20, 30));
console.log(control(25 + 25));
console.log(control(25 + 10));

//3. Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. Passa la stringa e la posizione come parametri e ritorna la stringa modificata.//

function remove(str, pos) {
    if (pos >= str.length || pos < 0) {
        return str;
    } else {
        return str.slice(0, pos) + str.slice(pos + 1);
    }
}
console.log(remove("ciao a tutti", 2));

//4. Crea una funzione che ritorni il valore più alto tra tre numeri interi.//

function biggest(num5, num6, num7) {
    let max = num5; // num5 come valore maggiore
    if (num6 > max) {
        max = num6; // cambia il maggiore se il secondo è più alto di num5
    }
    if (num7 > max) {
        max = num7; // cambia il maggiore se il terzo è più alto di num5
    }
    return max; // ritorna il valore più alto
}

console.log(biggest(5, 96, 45));

//5. Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. Ritorna `true` se rispecchiano queste condizioni, altrimenti ritorna `false`.//

function compr(num8, num9) {
    if ((num8 >= 40 && num8 <= 60 && num9 >= 40 && num9 <= 60) ||
        (num8 >= 70 && num8 <= 100 && num9 >= 70 && num9 <= 100)) {
        return true;
    } else {
        return false;
    }
}

console.log(compr(45, 58));
console.log(compr(75, 98));
console.log(compr(30, 67));
console.log(compr(65, 150));

//6. Crea una funzione che crei e ritorni una nuova stringa formata ripetendo un numero dato di volte una stringa data. Sia la stringa che il numero devono essere passate come parametri.//

function repeat(str1, num) {
    let newstr = "";
    for (let i = 0; i < num; i++) {
        newstr += str1;
    }
    return newstr;
}

console.log(repeat("ciao", 5));

//7. Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con “Los” o “New”, altrimenti ritorni `false`.//

function name(city) {
    if (city.startsWith("Los") || city.startsWith("New")) {
        return city
    } else {
        return false
    }
}
console.log(name("Los Angeles"));
console.log(name("New York"));
console.log(name("Londra"));

//8. Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array con tre elementi. L’array deve essere passato come parametro.//

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let sum1 = sumArray(arr1);
let sum2 = sumArray(arr2);
console.log(sum1);
console.log(sum2);

//9. Crea una funzione che controlli se un array di due elementi contiene il numero 1 o il numero 3. Se li contiene, ritorna `true`, altrimenti ritorna `false`.//

function controlTwo(arr) {
    if (arr.includes(1) || arr.includes(3)) {
        return true
    } else {
        return false
    }
}

let arr = [3, 6]
console.log(controlTwo(arr));

//10. Crea una funzione che controlli che un array di due elementi NON contenga i numeri 1 o 3. Se NON li contiene, ritorna `true`, altrimenti ritorna `false`.//

function controlNo(arr3) {
    if (!arr3.includes(1) || !arr3.includes(3)) {
        return true
    } else {
        return false
    }
}

let arr3 = [7, 6]
console.log(controlNo(arr3));//NON FUNZIONA//

//11. Crea una funzione per trovare la stringa più lunga in un array di stringhe. Passa l’array come parametro e ritorna la stringa più lunga.

let sent = 'Io mi chiamo Elisa Fambrini';
let words = sent.split(' ');

var maxSent = words.sort(function (a, b) {
    return b.length - a.length;
});

console.log(maxSent[0]);


//12. Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro. Angolo acuto: meno di 90° ⇒ ritorna “acuto”

function angle(g) {
    if (g < 90) {
        return "Acuto";
    } else if (g === 90) {
        return "Retto";
    } else if (g > 90 && g < 180) {
        return "Ottuso";
    } else if (g === 180) {
        return "Piatto";
    } else {
        return "Input invalido!";
    }
}
console.log(angle(45)); // Acuto
console.log(angle(90)); // Retto
console.log(angle(120)); // Ottuso
console.log(angle(180)); // Piatto
console.log(angle(200)); // Non valido

//13. Crea una funzione che trovi e ritorni **l’indice** di del numero più alto in un array passato come parametro.//

function findHighestIndex(arr4) {
    let highestIndex = 0;
    for (let i = 1; i < arr4.length; i++) {
        if (arr4[i] > arr4[highestIndex]) {
            highestIndex = i;
        }
    }
    return highestIndex;
}
let numbers = [1, 3, 5, 2, 4];
console.log(findHighestIndex(numbers));

//14. Crea una funzione per trovare e ritornare il numero PARI più alto in un array di numeri passato come parametro.//

function findHighestEven(arr5){
    let evens = arr5.filter(num => num % 2 === 0);
    if (evens.length === 0) {
      return "Non ci sono numeri pari";
    } else {
      return Math.max(...evens);
    }
  }

  let numbers2 = [1, 3, 5, 2, 4, 6, 8];
  console.log(findHighestEven(numbers2)); 

  let numbers3 = [1, 3, 5, 7];
console.log(findHighestEven(numbers3)); 

//15. Crea una funzione per controllare che due numeri (passati come parametri) siano uno positivo e uno negativo. Ritorna `true` se la condizione è applicata, `false` se non lo è.//

function NegPos(num11, num12) {
    if ((num11 > 0 && num12 < 0) || (num11 < 0 && num12 > 0)) {
      return true;
    } else {
      return false;
    }
  }
  

console.log(NegPos(22, -50));
console.log(NegPos(-32, -5));

//16. Crea una funzione per creare e ritornare una nuova stringa che abbia i primi tre caratteri in minuscolo e gli altri in maiuscolo. Se la stringa è più corta di tre caratteri, tutta la stringa deve essere in maiuscolo. La stringa originale deve essere passata come parametro.//

function upString(str) {
    if (str.length < 3) {
      return str.toUpperCase();
    } else {
      return str.substr(0, 3).toLowerCase() + str.substr(3).toUpperCase();
    }
  }
  
console.log(upString("stasera"));
console.log(upString("in"));

// 17. Crea una funzione che calcoli la somma di due numeri passati come parametri. Se la loro somma è compresa tra 50 e 80, ritorna `65`, altrimenti ritorna `80`.//

function giveSum(num13, num14){
    let sum = num13+num14;
    if(sum >= 50 && sum <=80) {
        return 65;
    } else {
        return 80;
    }
}
  
console.log(giveSum(25, 28));
console.log(giveSum(5, 2));

//18. Crea una funzione per convertire un numero (passato come parametro) in una stringa basandoti su questi criteri:
function numberToString(num15) {
    let result = "";
  
    if (num15 % 3 === 0) {
      result += "Diego";
    }
  
    if (num15 % 5 === 0) {
      result += "Riccardo";
    }
  
    if (num15 % 7 === 0) {
      result += "Stefano";
    }
  
    
    if (result === "") {
      return num15.toString();
    } else {
      return result;
    }
  }

  console.log(numberToString(36));
  console.log(numberToString(25));
  console.log(numberToString(49));
  console.log(numberToString(16));
  console.log(numberToString(15));

  //19. Crea una funzione che crei un acronimo a partire da una frase. Es. “Fabbrica Italiana Automobili Torino” deve ritornare “FIAT”.//

  function acronym(str2) {
    const words = str2.split(" ");
    let acronym = "";
  
    for (let i = 0; i < words.length; i++) {
      acronym += words[i][0].toUpperCase();
    }
  
    return acronym;
  }
  

  console.log(acronym("Automobile Club Italia"));
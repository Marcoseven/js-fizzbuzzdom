/* 
Scrivi un programma che esegua un ciclo da 1 a 100 e a ogni iterazione appenda un elemento html al container con uno stile differente a seconda del valore dell'indice
per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5. 
*/

// variabili
let list = document.querySelector(".list");
const multiple_Three = 3;
const multiple_Five = 5;
const multiple_Fifteen = 15;

// ciclo for con if
for (let i = 1; i <= 100; i++) {
	console.log(i);
	if (i % multiple_Fifteen === 0) {
		list.insertAdjacentHTML("beforeend", `<div class="box_15">fizzbuzz</div>`);
	} else if (i % multiple_Five === 0) {
		list.insertAdjacentHTML("beforeend", `<div class="box_5">buzz</div>`);
	} else if (i % multiple_Three === 0) {
		list.insertAdjacentHTML("beforeend", `<div class="box_3">fizz</div>`);
	} else {
		list.insertAdjacentHTML("beforeend", `<div class="box">${i}</div>`);
	}
}
console.log("Fine");

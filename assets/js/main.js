// //dichiarata
// var name;
// //dichiarata
// //dato contenuto
// name = prompt('Quale è il tuo nome?');
// //dato contenuto
//
// //dichiarata
// var surname;
// //dichiarata
// //dato contenuto
// surname = prompt("Qual'è il tuo cognome?");
// //dichiarata
// var color;
// //dichiarata
// //dato contenuto
// color = prompt('Quale è il tuo colore preferito?');
//
// //SELEZIONO NEL document l'elemento ID nelHTML inserisci = valore richiesto in prompt ovvero name
// document.getElementById('pswdgen').innerHTML = name + surname + color + 19;

// Versione più ordinata
// dichiariamo le variabili
var name, surname, color;
//Assegnata una funzione alla variabile (definito contenuto del var)
name = prompt('Quale è il tuo nome?');
surname = prompt("Qual'è il tuo cognome?");
color = prompt('Quale è il tuo colore preferito?');
//seleziono del documento l'id che deve mostrare il risultato in output
document.getElementById('pswdgen').innerHTML = name + surname + color + '19';

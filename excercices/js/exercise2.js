// var nb1 = prompt("");
// var nb2 = 7;
// nb1 = parseInt(nb1);
// var nb3 = nb1 % nb2;
// var resultat = nb1 % nb2 + nb3;
// nb3 += nb2;
// console.log(resultat);
// document.write(resultat);
// alert(resultat);
// var num1 = 2;
// var num2 = 5;
// if ((num1 + num2)==7) {
//     console.log("le résultat est correct");
// }
// if (!(num1 + num2)!=7) {
//     console.log("le résultat n'est pas correct");
// }
// var monCompte = 1000;
// var temps = 0;
// while(monCompte < 2000) {

//     monCompte += 50;
//     temps++;
// }
// document.write("<h3>Sous sur mon compte : " + monCompte + "</h3>");
// document.write("<h3>Jusqu'à 2000€, il me faut : " + temps + " mois</h3>");

var fruits =["Apple", "Banana"];
console.log('Tableau fruits initial : ' + fruits);
//Ajouter à la fin du tableau
var newLength = fruits.push('Orange', 'Citron');


console.log('Tableau fruits ajout des deux éléments : ' + fruits);
console.log(typeof fruits);
console.log(typeof newLength);
console.log(newLength);

var lastElement = fruits.pop();

console.log('Tableau fruits après avoir supprimé le dernier élement : ' + fruits);
console.log('La taille finale du tableau : ' + fruits.length);
console.log(typeof lastElement);
console.log('La valeur du dernier élement supprimé : ' + lastElement);

var first = fruits.shift(); 
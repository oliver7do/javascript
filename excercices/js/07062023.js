// function affichagePrenoms(prenomsDev) {
//     for (var i = 0; i < prenomsDev.length; i++){

//         document.write(prenomsDev[i]);
//          }
// }




// // Outra variante
// var developpeurs = ["Alexis", "Alin", "Cynthia", "Faïssal", "Jérémy", "Karima", "Michel", "Narcis", "Nawal", "Oliver", "Rahim", "Wassila", ];
 
// function affichagePrenoms(namDev) {
//     for (var i = 0; i < namDev.length; i++) {
//         document.write(" " + namDev[i]);
//     }
// }
// affichagePrenoms(developpeurs);

// function additionDesChiffres(pranumber, prastring, pratableau) {
//     var resultat;
//     return resultat;
// }


// 08-06-2033
// function additiondeschiffres(paramnum, paramstring, paramtableau) {


//     for (var i = 0; i <= paramnum; i++) {
//         paramArray.push(i);
//     }        
    
//     var resultat = [paramstring, paramtableau];
//     return resultat;


// }

// var num = 15;
// var chainedecaractere = "le résultat de notre fonction : ";
// var tab =[];

// var valeurRetour = additiondeschiffres(num, chainedecaractere, tab);

// document.write(valeurretour);

// 09-06-2033 primeiro

// var nombre1 = 5;
// var nomber2 = 3;
// var vide;
// console.log("----------Avant--------")
// console.log("nombre1 :" + nombre1); 
// console.log("nombre2 :" + nomber2);
// vide = nombre1;
// nombre1 = nomber2;
// nomber2 = vide;
// // Tapez votre code ici (sans rien modifier d'autre!)
// console.log("----------Avant--------")
// console.log("nombre1 :" + nombre1); //Doit afficher 3
// console.log("nombre2 :" + nomber2); //Doit afficher 5


// 09-06-2033 segundo
var num = prompt();
while (num <= 3 || num >= 120 || isNaN(num)) {
    num = prompt();   
}
var majoriteFR = 18;
function affichAge();
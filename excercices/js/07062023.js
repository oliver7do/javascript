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



function additiondeschiffres(paramnum, paramstring, paramtableau) {


    for (var i = 0; i <= paramnum; i++) {
        paramArray.push(i);
    }        
    
    var resultat = [paramstring, paramtableau];
    return resultat;


}

var num = 15;
var chainedecaractere = "le résultat de notre fonction : ";
var tab =[];

var valeurRetour = additiondeschiffres(num, chainedecaractere, tab);

document.write(valeurretour);




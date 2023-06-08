// var Prenom = "Oliver"; // string

// Prenom = "Oliver";

// var monNumero = 87; // numerique / number

// var monNum = "250";

// // var nom = izadi; // syntaxe false

// var booleanFalse = false; // boolean

// var booleanTrue = true; // boolean

// var varNull = null; // null

// console.log(monNumero);
// console.log(Prenom);
// alert("Je suis Oliver");
// window.alert("Super, tu es arrivé sur mon site !");
// document.write("A la pause vous aurez des Haribos Pik !");
// window.prompt("Question: on est quel jour ?", "jour de la semaine");
// var jour = prompt();
// var monPrenom = prompt();
// document.write(monPrenom);

// var unBooleen = false; // -- true
// console.log(unBooleen);
// var unBooleen = "true";
// console.log(unBooleen);
// console.log(typeof unBooleen);

// const PAYS = "France";
// PAYS = "Italie";
// document.write(PAYS);

// var unChiffre = "12";
// console.log(unChiffre);
// console.log(typeof unChiffre);

// // STRING => NUMBER
// unChiffre = parseInt(unChiffre);
// console.log(unChiffre);
// console.log(typeof unChiffre);
// unChiffre = parseFloat(unChiffre);

// NUMBER => STRING
// var nb_en_lettres = 258;
// console.log(nb_en_lettres);
// console.log(typeof nb_en_lettres);

// var nb_en_lettres = nb_en_lettres.toString();
// console.log(nb_en_lettres);
// console.log(typeof nb_en_lettres);

// var monPrenom = prompt();
// document.write(monPrenom);
// console.log(monPrenom);
// alert(monPrenom);

// var annee = 2017; // à quoi sert une var, différents types de var
// var futur = 3;
// var calcul = annee + futur;
// console.log(calcul);
// document.write(calcul + "<br>");

// var DebutPhrase = "Aujourd'hui ";
// var NbStagiaires = 12;
// var SuitePhrase = " stagiaires";
// var FinPhrase = "sont présents."; // pas d'espace exprès

// // -- Nous souhaitons afficher la phrase en un seul morceau avec la concaténation => à vos claviers !
// document.write(DebutPhrase + NbStagiaires + SuitePhrase + " " + FinPhrase);

// var nb1 = 9
// nb1 = nb1 - 5

// var nb1 = 10;
// if (nb1 > 50) { // si "if" true :
//     console.log("nb1 est bien inférieur a 50");
// } else if (nb1 == 50) { // si "if" n`est pas true et que "else if" est true :
//     console.log("Je sui dans else if");
// } else { // sinon, si "if" n'est pas true et que "else if" n'est pas true non plus :
//     console.log("Je suis dans else");
// } // dans tous les cas js va executer l'(es) opération(s) suivante(s)
// console.log("Je suis sortie de la condition");
 

//----------------------------------------------------------------------

// Développez un programme en js :

// 1- Saisir deux valeurs à partir de deux champs de formulaire
// 	-une valeur en string et d'autre en numérique
// 2- Vérifier le type des deux valeurs (si elles sont respectivement bien string et numérique)
// 3- Déclarer(implanter) une fonction qui prend ces deux valeurs en paramètre et elle concatène les deux valeurs en question afin de nous afficher la phrase suivante :
// 	"Je m'appelle ... et j'ai ... ans"
    
// // la syntaxe suivante effectue deux opérations distinctes en même temps:
// // 1. elle exécute la fonction prédefinie de js (prompt) qui nous permet l'affichage d'une boîte de dialogue avec un champs de formulaire afin de saisir des valeurs string ou numérique
// // 2. en déclarant une variable, nous pouvons stocker la valeur de retour de la fonction "prompt" saisie à partir du champs de formulaire
// // conclusion: toutes les valeurs saisies seront stockées dans notre variable

// var prenom = prompt("Saisir votre prénom :");
// var age = prompt("Saisir votre âge :");

// // console.log(prenom,age);

// //2- vérification des valeurs
// if (isNaN(prenom) && !isNaN(age)) {
//     affichagePrenomAge(prenom, age);
// }

// function affichagePrenomAge(val1, val2) {
//     var result = "Je m'appelle " + val1 + " et j'ai " + val2 + " ans.";
//     document.write(result);
// }

//----------------------------------------------------------------------------



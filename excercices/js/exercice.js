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

var nb1 = 10; 
if (nb1 > 50) { // si "if" true :
    console.log("nb1 est bien inférieur a 50");
} else if (nb1 == 50) { // si "if" n`est pas true et que "else if" est true :
    console.log("Je sui dans else if");
} else { // sinon, si "if" n'est pas true et que "else if" n'est pas true non plus :
    console.log("Je suis dans else");
} // dans tous les cas js va executer l'(es) opération(s) suivante(s)
console.log("Je suis sortie de la condition"); 
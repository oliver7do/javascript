// var nb1 = prompt("");
// var nb2 = 20;
// document.write(nb1);
// var nb1 = (nb1 / nb2);

// function masIva(precio, tva){
//       tva = tva || 21
//       var coniva = (precio + precio*tva/100);
//       return coniva;
//     }
//     var precio = Number(prompt("Introduce un precio"));
//     var tva = Number(prompt("Introduce el tva"));
//     if(iva > 0){
//       var resultado = masIva(precio, iva);
//     }
//     else{
//       var resultado = masIva(precio);
//     }
//     document.write(" " + precio);
//     document.write(" " + resultado);

// var prix = prix;

var tva = 20;
var prix = Number(prompt("Mettre le prix"));
console.log(typeof prix);
var prixTotal = + prix * 20 / 100;
// var prixTotal = + prix + 20;
console.log("le prix total: " + prixTotal);
document.write("le prix total: " + prixTotal);


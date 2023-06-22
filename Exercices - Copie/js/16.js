// alert('test');

var disMoi = "";
alert("dismoi A: " + disMoi);
var i = 1;
alert("i A: " + i);

while (
  disMoi !== "oui" &&
  disMoi !== "non" &&
  disMoi !== "Oui" &&
  disMoi !== "Non" &&
  disMoi !== "OUI" &&
  disMoi !== "NON"
) {
  disMoi = prompt("Allez!! On joue à ni oui ni non?");

  console.log("dismoi B: " + disMoi);
  document.write(
    '"' +
      disMoi +
      "\" n'est pas une réponse, pour la " +
      i +
      "° fois, veux-tu jouer oui ou non? <br>"
  );

  console.log("i B: " + i);
  i++;

  console.log("i C: " + i);
}

console.log("i D: " + i);
i--;

console.log("i E: " + i); //parce qu'il y a une incrémentation en trop
document.write(
  "<p style='background-color:cyan; text-align:center;'>PERDU ;-) ! Tu as tenu " +
    i +
    " tours.</p>"
);

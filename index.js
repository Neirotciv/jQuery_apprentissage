document.querySelector("h1");
// Equivalent
$("h1");
console.log($("h1").css("color"));

document.querySelectorAll("button");
// Equivalent
$("button");

// Ajouter une propriété css
$("h1").css("color", "green");
console.log($("h1").css("color"));

// Ajouter une classe
$("h1").addClass("big-title margin-50");

// Supprimer une classe
$("h1").removeClass("big-title");
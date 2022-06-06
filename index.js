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

// Modifier le texte et html des boutons, enfant du wrapper
$(".button-wrapper > button").text("Don't click me")
// $("button").html("<em>In italic</em>")

// Attribute, href, class...
$("a").attr("href", "http://www.tezos.com");

// Event listener
$("h1").click(() => {
    $("h1").css("color", "blue");
    $("h1").addClass("big-title");
})

$(".button-wrapper > button").click(() => {
    $("h1").css("color", "yellow");
});

$("input").keypress((event) => {
    $("#input-writing").text(event.key);
});

$("input").on("mouseover", () => {
    $("input").css("backgroundColor", "red");
})

// Ajouter à l'intérieur et à la suite d'autres éléments
$(".wrapper").append("<p>Je suis dans le wrapper</p>");
// Dans un élément au début
$(".button-wrapper").prepend("<p>Au début</p>");
// Ajouter après
$("h1").after("<h3>Subtitle</h3>")
// Ajouter avant
$("h1").before("bonjour");

// Animation
$("#animate-button").click(() => {
    $(".animate-wrapper > h3").animate({ fontSize: "50px" }, 1500).fadeToggle();
})
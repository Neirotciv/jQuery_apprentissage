# jQuery_apprentissage

### Documentation
https://api.jquery.com/

### CDN
https://cdnjs.com/libraries/jquery

---

### Sélectionner un élément
```javascript
document.querySelector("h1");
// jQuery
$("h1");

document.querySelectorAll("h1");
// jQuery
$("h1");
```

### Propriété css
```javascript
// Set color
$("h1").css("color", "green");
// Get color, 1 paramètre
$("h1").css("color");
```

### Manipuler du texte
```javascript
$("h1").text("Mon nouveau texte");
// innerHTML
$("h1").html("<em>Titre en italique</em> ");
```

### Modifier des attributs
```javascript
// Set attribute
$("a").attr("href", "http://www.tezos.com");
// Get attribute
```

### Ajouter, supprimer des éléments
```javascript
// Dans un élément à la fin
$("h1").append();
// Dans un élément au début
$(".button-wrapper").prepend("<p>Au début</p>");
// Après un élément
$("h1").after("<h3>Subtitle</h3>");
// Avant
$("h1").before();
```

### Animation
https://api.jquery.com/category/effects/
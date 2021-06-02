let p;
window.onload = function () // Appeler quand la fenetre est entierement load
{
  p = new Player();

  tick();

  document.addEventListener('keydown', Mouvement);


  document.addEventListener('click', function test() {
    var x = event.clientX; // Get the horizontal coordinate
    var y = event.clientY; // Get the vertical coordinate
    var coor = "X coords: " + x + ", Y coords: " + y;
    console.log(coor);
  });

}


const tick = () => // appeler tout les 0.33 secondes environ
  {

    let elements = document.querySelectorAll(".Bombe");

    window.requestAnimationFrame(tick); // tick global
    setInterval(function () {
      SpawnBombe();
    }, 2000);



    if (elements.length > 0) {
      elements.forEach(bombe => {
        let newpos = bombe.offsetTop + 2; // 2 etant la vitesse
        bombe.style.top = newpos + "px"; // boucle for pour faire tomber les bombes vers le bas


        if (bombe.offsetTop > (window.innerHeight + bombe.offsetHeight)) { // delete la bombe quand elle est sous la map
          bombe.remove();
        }


        // Source : Stackoverflow
        let a = bombe.getBoundingClientRect(); // collision de la bombe
        let p = document.getElementById("Player").getBoundingClientRect(); // collision du joueur 
        // collision joueur <--> bombe
        var overlap = !(a.right < p.left ||
          a.left > p.right ||
          a.bottom < p.top ||
          a.top > p.bottom);
        if (overlap) {
          alert("PERDU !!! toucher une bombe");
        }




      });
    }


    if (p.boardlvl == 4) {
      if (range(p.element.style.left, 430, 10)) {
        alert("TA GAGNER!");
      }
      if (range(p.element.style.left, 940, 10)) {
        alert("TA GAGNER!");
      }
    }

  }


const SpawnBombe = () => {
  let elements = document.querySelectorAll(".Bombe");

  if (elements.length <= 1) {
    for (let index = 0; index < 4; index++) {
      // cree la div img
      var img = document.createElement('img');
      // set l'image
      img.src = "../img/Bombe.png";
      // set le id de l'img
      img.setAttribute('class', 'Bombe');
      img.setAttribute('id', 'Bombe' + elements.length);
      var randomY = Math.floor(Math.random() * window.innerWidth);
      img.style.left = randomY + "px";
      // mais la div img dans le body
      document.body.appendChild(img);


    }
  }
};

function Mouvement(e) {

  switch (e.key) {
    case "a": // gauche
      p.gauche();
      break;
    case "d": // droite
      p.droite();
      break;
    case "w": // haut
      p.haut();
      break;
  }


}
class Player {
    constructor() {
        // cree la div img
        var img = document.createElement('img');
        // set l'image
        img.src = "../img/8Bit_Mario.png"
        // set le id de l'img
        img.setAttribute('id', 'Player');
        // mais la div img dans le body
        document.body.appendChild(img);

        this.element = document.getElementById("Player");
        this.speed = 3;
        this.boardlvl = 0; // celon se nombre, choisir le bon ladderposition pour monter ou descendre et les limites
        this.lvl1 = 630;
        this.lvl2 = 500;
        this.lvl3 = 380;
        this.lvl4 = 290;

        this.ladderpositionlvl0 = [ // cree un array d'object pour chaque position d'echelle
            {
                "x": 238,
                "y": 780
            },
            {
                "x": 656,
                "y": 780
            },
            {
                "x": 1110,
                "y": 780
            }
        ];
        this.ladderpositionlvl1 = [ // cree un array d'object pour chaque position d'echelle
            {
                "x": 275,
                "y": 630
            },
            {
                "x": 529,
                "y": 630
            },
            {
                "x": 829,
                "y": 630
            },
            {
                "x": 1065,
                "y": 630
            }
        ];

        this.ladderpositionlvl2 = [{
                "x": 331,
                "y": 500
            },
            {
                "x": 637,
                "y": 500
            },
            {
                "x": 1019,
                "y": 500
            }


        ];
        this.ladderpositionlvl3 = [{
                "x": 330,
                "y": 440
            },
            {
                "x": 660,
                "y": 440
            },
            {
                "x": 968,
                "y": 440
            }


        ];

        this.Boardlimit0 = [ // cree un array d'object pour chaque etage pour la limite
            {
                "x": 184,
                "y": 780
            },
            {
                "x": 1150,
                "y": 780
            }
        ];

        this.Boardlimit1 = [ // cree un array d'object pour chaque etage pour la limite
            {
                "x": 217,
                "y": 690
            },
            {
                "x": 1120,
                "y": 690
            }
        ];
        this.Boardlimit2 = [ // cree un array d'object pour chaque etage pour la limite
            {
                "x": 275,
                "y": 420
            },
            {
                "x": 1055,
                "y": 420
            }
        ];
        this.Boardlimit3 = [ // cree un array d'object pour chaque etage pour la limite
            {
                "x": 340,
                "y": 315
            },
            {
                "x": 1070,
                "y": 315
            }
        ];

        this.Boardlimit4 = [ // cree un array d'object pour chaque etage pour la limite
            {
                "x": 370,
                "y": 315
            },
            {
                "x": 1025,
                "y": 315
            }
        ];



    }


    gauche() {
        switch (this.boardlvl) { // check le boardlvl
            case 0: // si c'est au board 0
                if (this.Boardlimit0[0].x <= this.element.offsetLeft) // checker si on est proche de la limite de gauche
                {
                    let newpos = this.element.offsetLeft - this.speed;
                    this.element.style.left = newpos + "px";
                }
                break;
            case 1:
                if (this.Boardlimit1[0].x <= this.element.offsetLeft) // checker si on est proche de la limite de gauche
                {
                    let newpos = this.element.offsetLeft - this.speed;
                    this.element.style.left = newpos + "px";
                }

                break;
            case 2:
                if (this.Boardlimit2[0].x <= this.element.offsetLeft) // checker si on est proche de la limite de gauche
                {
                    let newpos = this.element.offsetLeft - this.speed;
                    this.element.style.left = newpos + "px";
                }

                break;
            case 3:

                if (this.Boardlimit3[0].x <= this.element.offsetLeft) // checker si on est proche de la limite de gauche
                {
                    let newpos = this.element.offsetLeft - this.speed;
                    this.element.style.left = newpos + "px";
                }

                break;
            case 4:

                if (this.Boardlimit4[0].x <= this.element.offsetLeft) // checker si on est proche de la limite de gauche
                {
                    let newpos = this.element.offsetLeft - this.speed;
                    this.element.style.left = newpos + "px";
                }

                break;
        }

    }
    droite() {
        switch (this.boardlvl) {
            case 0:
                if (this.Boardlimit0[1].x >= this.element.offsetLeft) {
                    let newpos = this.element.offsetLeft + this.speed;
                    this.element.style.left = newpos + "px";
                }
                break;
            case 1:
                if (this.Boardlimit1[1].x >= this.element.offsetLeft) {
                    let newpos = this.element.offsetLeft + this.speed;
                    this.element.style.left = newpos + "px";
                }
                break;
            case 2:
                if (this.Boardlimit2[1].x >= this.element.offsetLeft) {
                    let newpos = this.element.offsetLeft + this.speed;
                    this.element.style.left = newpos + "px";
                }
                break;
            case 3:
                if (this.Boardlimit3[1].x >= this.element.offsetLeft) {
                    let newpos = this.element.offsetLeft + this.speed;
                    this.element.style.left = newpos + "px";
                }
                break;
            case 4:
                if (this.Boardlimit4[1].x >= this.element.offsetLeft) {
                    let newpos = this.element.offsetLeft + this.speed;
                    this.element.style.left = newpos + "px";
                }
                break;

        }
    }
    haut() {
        console.log(this.boardlvl);
        switch (this.boardlvl) {
            case 0:
                for (let i = 0; i < this.ladderpositionlvl0.length; i++) {
                    if (range(this.element.style.left, this.ladderpositionlvl0[i].x, 50)) {
                        if (!range(this.element.style.top, this.lvl1, 5)) {
                            let newpos = this.element.offsetTop - this.speed;
                            this.element.style.top = newpos + "px";
                        } else {
                            this.boardlvl = 1;
                        }

                    }
                }
                break;

            case 1:
                for (let i = 0; i < this.ladderpositionlvl1.length; i++) {
                    if (range(this.element.style.left, this.ladderpositionlvl1[i].x, 30)) {
                        if (!range(this.element.style.top, this.lvl2, 5)) {
                            let newpos = this.element.offsetTop - this.speed;
                            this.element.style.top = newpos + "px";
                        } else {
                            this.boardlvl = 2;
                        }

                    }
                }
                break;
            case 2:

                for (let i = 0; i < this.ladderpositionlvl2.length; i++) {

                    if (range(this.element.style.left, this.ladderpositionlvl2[i].x, 30)) {

                        if (!range(this.element.style.top, this.lvl3, 1)) {
                            let newpos = this.element.offsetTop - this.speed;
                            this.element.style.top = newpos + "px";
                        } else {
                            this.boardlvl = 3;
                        }

                    }
                }
                break;
            case 3:

                for (let i = 0; i < this.ladderpositionlvl3.length; i++) {

                    if (range(this.element.style.left, this.ladderpositionlvl3[i].x, 30)) {

                        if (!range(this.element.style.top, this.lvl4, 1)) {
                            let newpos = this.element.offsetTop - this.speed;
                            this.element.style.top = newpos + "px";
                        } else {
                            this.boardlvl = 4;
                        }

                    }
                }
                break;

        }
    }

}


function range(positionactuelle, positionvoulu, range) // position du joueur, position de l'echelle, le range voulu du style 5px ou 10px......
{
    let distance = Math.abs(parseInt(positionvoulu) - parseInt(positionactuelle)); // tranforme tout en int et calcule la distance entre les 2 point
    if (distance <= parseInt(range)) // si la distance est inferieur ou egale au range
    {
        return true;
    } else {
        return false;
    }
}
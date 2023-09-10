let score = JSON.parse(localStorage.getItem('score'));

        if (!score) {

            score = {

                victoire: 0,
                defaite: 0,
                egalite: 0


            };
        }

        updatescore();



        function playgame(objetchoisi) {
            let resultat = '';
            let mouvementDeIa = choixIa();



            if (objetchoisi === 'ciseaux') {
                if (mouvementDeIa === 'pierre') {
                    resultat = 'perdue';
                } else if (mouvementDeIa === 'papier') {
                    resultat = 'gagnez';
                }
                else if (mouvementDeIa === 'ciseaux') {
                    resultat = 'egalite';
                    //ciseaux ---------------------------------------------
                }

            } if (objetchoisi === 'papier') {
                if (mouvementDeIa === 'pierre') {
                    resultat = 'gagnez';
                } else if (mouvementDeIa === 'papier') {
                    resultat = 'egalite';
                }
                else if (mouvementDeIa === 'ciseaux') {
                    resultat = 'perdue';
                    //papier ---------------------------------------------
                }


            } else if (objetchoisi === 'pierre') {
                if (mouvementDeIa === 'pierre') {
                    resultat = 'egalite';
                } else if (mouvementDeIa === 'papier') {
                    resultat = 'perdue';
                }
                else if (mouvementDeIa === 'ciseaux') {
                    resultat = 'gagnez';

                }
                //pierre ---------------------------------------------
            }

            if (resultat === 'gagnez') {

                score.victoire += 1
            }
            else if (resultat === 'perdue') {

                score.defaite += 1
            }
            else if (resultat === 'egalite') {

                score.egalite += 1
            }


            localStorage.setItem('score', JSON.stringify(score));

            updatescore();

            document.querySelector(".js-result").innerHTML
                = resultat;

            document.querySelector(".js-moves").innerHTML
                = `Vous <img src="images/${objetchoisi}-emoji.png" class="move-icon"> 
        <img src="images/${mouvementDeIa}-emoji.png" class="move-icon"> IA`;

            //  alert(`tu as choisi le ${objetchoisi} et l'IA a choisi ${mouvementDeIa}. ${resultat}//
            //  victoire: ${score.victoire}  defaite: ${score.defaite} egalite: ${score.egalite}  `); // 
        }

        function updatescore() {
            document.querySelector(".js-score").innerHTML
                = `victoire: ${score.victoire}  defaite: ${score.defaite} egalite: ${score.egalite}`;
        }

        function choixIa() {
            let mouvementDeIa = '';
            const randomnumbers = Math.random();


            if (randomnumbers >= 0 && randomnumbers < 1 / 3) {
                mouvementDeIa = 'pierre';
            } else if (randomnumbers >= 1 / 3 && randomnumbers < 2 / 3) {
                mouvementDeIa = 'papier';
            }
            else if (randomnumbers >= 2 / 3 && randomnumbers < 1) {
                mouvementDeIa = 'ciseaux';

            }

            return mouvementDeIa;
        }
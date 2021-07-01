

try {
    /////Requête à l'url /////
    fetch('http://localhost:3000/api/teddies')

        /////Promesse qui se résoud si accès aux données /////
        .then((response) => response.json())

        ///// Autre promesse qui se resoud si accès aux données /////
        .then((tableauPeluches) => {
            for (var peluches in tableauPeluches) {
                var template = ' <div class="container">\
    <a href="./ProductPage.html?id='+ tableauPeluches[peluches]._id + '" >\
        <img class="BearImg" src="'+ tableauPeluches[peluches].imageUrl + '" alt="Teddy_1">\
        <div class="BearTitle">'+ tableauPeluches[peluches].name + '</div>\
        <div class="BearPrice">'+ parseInt(tableauPeluches[peluches].price / 100).toFixed(2) + ' €</div>\
        </div>\
    </a>\
    </div>';

                document.getElementsByClassName("FlexItems")[0].innerHTML += template

            }
            // Affichage de quantite à coté du panier ----------------------------
            Qty = CalculerQty()
            if (Qty !== 0) {
                document.getElementById('OrderQuantity').innerHTML = `&nbsp(${Qty})`
            }
        })

        //////Gestion de l'erreur//////
        .catch(erreur => console.log("Nous rencontrons une erreur : " + erreur));
} catch (error) {
    console.log("Une erreur s'est produite" + error)
}

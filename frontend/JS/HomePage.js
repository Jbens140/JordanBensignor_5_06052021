



var request = new XMLHttpRequest();
request.onreadystatechange = function () {

    // Affichage des des peluches + des prix ---------------------
    
    if (request.readyState === 4) {
        var tableauPeluches = JSON.parse(request.responseText);
        for (var peluches in tableauPeluches){
            var template = ' <div class="container">\
<a href="./ProductPage.html?id='+ tableauPeluches[peluches]._id +'" >\
    <img class="BearImg" src="'+ tableauPeluches[peluches].imageUrl +'" alt="Teddy_1">\
    <div class="BearTitle">'+ tableauPeluches[peluches].name +'</div>\
    <div class="BearPrice">'+ parseInt(tableauPeluches[peluches].price/100).toFixed(2) +' €</div>\
    </div>\
</a>\
</div>';

            document.getElementsByClassName("FlexItems")[0].innerHTML += template

        }
    }
    


// Affichage de quantite à coté du panier ----------------------------
    Qty = 0
    for (const [key, value] of Object.entries(localStorage)) {
        if (key !== 'PersonalInfos' && key !== 'orderID') {

        val = JSON.parse(value)
        Qty += parseInt(val.quantite)
        }
    }
    if (Qty !== 0) {
        document.getElementById('OrderQuantity').innerHTML = `&nbsp(${Qty})`
    }


};
request.open('GET', 'http://localhost:3000/api/teddies');
request.send();




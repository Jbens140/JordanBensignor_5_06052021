



var request = new XMLHttpRequest();
request.onreadystatechange = function () {

    // console.log('*************', request)
    if (request.readyState === 4) {
        var tableauPeluches = JSON.parse(request.responseText);
        // console.log(tableauPeluches);
        for (var peluches in tableauPeluches){
            // console.log(tableauPeluches[peluches])
            var template = ' <div class="container">\
<a href="./ProductPage.html?id='+ tableauPeluches[peluches]._id +'" >\
    <img class="BearImg" src="'+ tableauPeluches[peluches].imageUrl +'" alt="Teddy_1">\
    <div class="BearTitle">'+ tableauPeluches[peluches].name +'</div>\
    <div class="BearPrice">'+ parseInt(tableauPeluches[peluches].price/100).toFixed(2) +' €</div>\
    <div class="BearColors">\
        <div class="ColorCircle"></div>\
    </div>\
</a>\
</div>';

            document.getElementsByClassName("FlexItems")[0].innerHTML += template

        }
    }
    


// quantite a cote de panier 
    Qty = 0
    for (const [key, value] of Object.entries(localStorage)) {
        val = JSON.parse(value)
        Qty += parseInt(val.quantite)
    }
    if (Qty !== 0) {
        document.getElementById('OrderQuantity').innerHTML = `&nbsp(${Qty})`
    }


};
request.open('GET', 'http://localhost:3000/api/teddies');
request.send();

// ecrire quantité à droite de panier 
    // console.log(localStorage)
    // localStorage.clear()





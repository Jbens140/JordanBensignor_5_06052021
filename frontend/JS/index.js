console.log('coucou');




var request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (request.readyState === 4) {
        var tableauPeluches = JSON.parse(request.responseText);
        console.log(tableauPeluches);
        for (var peluches in tableauPeluches){
            console.log(tableauPeluches[peluches])
            var template = ' <div class="container">\
<a href="">\
    <img class="BearImg" src="'+ tableauPeluches[peluches].imageUrl +'" alt="Teddy_1">\
    <div class="BearTitle">'+ tableauPeluches[peluches].name +'</div>\
    <div class="BearPrice">'+ tableauPeluches[peluches].price +'</div>\
    <div class="BearColors">\
        <div class="ColorCircle"></div>\
    </div>\
</a>\
</div>';

            document.getElementsByClassName("FlexItems")[0].innerHTML += template

        }
    }
};
request.open('GET', 'http://localhost:3000/api/teddies');
request.send();
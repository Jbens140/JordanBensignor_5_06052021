// console.log(this)
var request = new XMLHttpRequest();
request.onreadystatechange = function () {

    if (request.readyState === 4) {
        var Peluche = JSON.parse(request.responseText);
        // console.log('****************', Peluche);

        var template = `<div class="FlexProduct">\
        <img class="ContainerProduct" src="${Peluche.imageUrl}" alt="${Peluche.name}">\
        <div class="ProductDescription">\
           <div class="BearNameProduct">${Peluche.name}</div>\
           <div class="BearPriceProduct">${Peluche.price} €</div>\
           <select name="Choix de la couleur" id="colorChoice">Please select...</select>\
           <button class="AddToCart" id="AddToCart">Ajouter au panier</button>\
        </div>`

        document.getElementById("productByID").innerHTML = template



        // ******** liste de select pour les couleurs ********
        let colorOptions = `<option value="Choisissez votre couleur...">Choisissez votre couleur...</option>`
        for (let i = 0; i < Peluche.colors.length; i++) {
            colorOptions += `<option value="${Peluche.colors[i]}">${Peluche.colors[i]}</option>`
        }
        document.getElementById("colorChoice").innerHTML = colorOptions
     
           // *********
           document.getElementById("AddToCart").addEventListener("click", function() {
               let objet = {
                nom: Peluche.name,
                quantite: document.getElementById(`Quantity`).value,
                image: Peluche.imageUrl,
                couleurs: document.getElementById(`colorChoice`).value,
                id: Peluche._id,
                prix: Peluche.price
               };
               localStorage.setItem(objet.id + objet.couleurs, JSON.stringify(objet));

          });
    }
};


// ************************************* reformate le parametre ID de l'url ***************************************
let getProductID = function (param) {
    // console.log(param)
    let parameters = param.split("?")
    parameters.shift()
    // console.log(parameters)
    let id = parameters[0].substr(3, parameters[0].length)
    // console.log('*********', id)
    return id
}
//*****************************************************************************************************************





// ************************************* fetch peluche par ID *****************************************************
let productID = getProductID(this.location.search)
request.open('GET', `http://localhost:3000/api/teddies/${productID}`);
request.send();



console.log('**********' ,localStorage)
console.log('*********************', JSON.parse(localStorage.panier))
// localStorage.clear()



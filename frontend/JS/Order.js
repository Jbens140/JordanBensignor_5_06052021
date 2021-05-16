console.log(localStorage)

let text = ''
let index = 0
for (const [key, value] of Object.entries(localStorage)) {
    Value = JSON.parse(value)
    Key = key

    text =
        `<div class="OrderDescription">\
 <img class="productImage" src="${Value.image}" alt="${Value.nom}">\
 <span class="SelectPosition"><select idProduit='${Key}' id="Quantity-${index}" class="Quantity">\
 <option value="1">1</option>\
 <option value="2">2</option>\
 <option value="3">3</option>\
 <option value="4">4</option>\
 <option value="5">5</option>\
 <option value="6">6</option>\
 <option value="7">7</option>\
 <option value="8">8</option>\
 <option value="9">9</option>\
 <option value="10">10</option>\
</select>\ ${Value.nom} - ${Value.couleurs} - PU : ${Value.prix} €</span>\
</div>`

    // insere apres la DIV id=FinalOrder
    document.getElementById('FinalOrder').insertAdjacentHTML('beforeend', text)


    // positionne la select liste sur la quantite stockée sur le localStorage
    var quantity = document.getElementById(`Quantity-${index}`);
    quantity.options[Value.quantite - 1].setAttribute('selected', '')

    index++
}






let selectQuantityList = document.querySelectorAll(`.Quantity`)

selectQuantityList.forEach(item =>

    item.addEventListener('change', function () {
        let idProduit = item.getAttribute('idProduit')
        let localSt = JSON.parse(localStorage[idProduit])

        localSt.quantite = item.value
        localStorage.setItem(idProduit, JSON.stringify(localSt));

        totalPrice = 0
        for (const [key, value] of Object.entries(localStorage)) {
            Value = JSON.parse(value)
            Key = key
            totalPrice += parseInt(Value.quantite * Value.prix)
        }

        document.getElementById('totalPriceOrder').innerHTML = `<div class="totalPrice">Total de votre commande : ${parseInt(totalPrice).toFixed(2)} € <a href='#orderForm' id='confirmationOrder'>Confirmez votre commande</a></div></div>`

        Qty = 0
        for (const [key, value] of Object.entries(localStorage)) {
            val = JSON.parse(value)
            Qty += parseInt(val.quantite)
        }
        if (Qty !== 0) {
            document.getElementById('OrderQuantity').innerHTML = `&nbsp(${Qty})`
        }
    })
)


Qty = 0
for (const [key, value] of Object.entries(localStorage)) {
    val = JSON.parse(value)
    Qty += parseInt(val.quantite)
}
if (Qty !== 0) {
    document.getElementById('OrderQuantity').innerHTML = `&nbsp(${Qty})`
}

totalPrice = 0
for (const [key, value] of Object.entries(localStorage)) {
    Value = JSON.parse(value)
    Key = key
    totalPrice += parseInt(Value.quantite * Value.prix)
}

document.getElementById('totalPriceOrder').innerHTML = `<div class="totalPrice">Total de votre commande : ${parseInt(totalPrice).toFixed(2)} € <a href='#orderForm' id='confirmationOrder'>Confirmez votre commande</a></div>`

// Store dans le localstorage au moment du click sur le button confimez du form 

document.getElementById('confirmOrderButton').addEventListener('click', function () {

    // console.log('*************************', document.getElementById('orderForm'))

    let infos = document.querySelectorAll('.personalInfos')

    let personalinfosObject = {
        nom: "",
        prenom: "",
        sexe: "",
        anniversaire: "",
        mail: "",
        telephone: "",
        adresse: "",
        complement: "",
        zipcode: "",
        ville: "",
        pays: "",
        gift: "",
    };

    //    infos.forEach(item =>
    //    value= item.value

    //     )//   
    console.log(infos)
    console.log(infos[0].title)

    for (let i = 0; i < infos.length; i++) {
        let item = infos[i]
        if (item.title === "nom" ||
            item.title === "prenom" ||
            item.title === "mail" ||
            item.title === "telephone" ||
            item.title === "adresse" ||
            item.title === "zipcode" ||
            item.title === "ville" ||
            item.title === "Pays") {
            if (item.value === "") {
                console.log(item.title + " : ERREUR EMPTY")
            } else if (item.value.replace(/ /g, "") === "") {
                console.log("ERREUR espace non autorisé ")

            } else {
                console.log(item.title + " : " + item.value.trim())
            }


if(item.title === "mail"){
    let check =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let result = check.test(item.value)
    console.log("************", result)
    if(result === false){
        console.log("email non valide : "+ item.value)
    }
}
if(item.title === "telephone"){
    let check =  /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
    let result = check.test(item.value)
    console.log("************", result)
    if(result === false){
        console.log("telephone non valide : "+ item.value)
    }
}


        }
    }




})











// localStorage.clear()
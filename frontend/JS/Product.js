
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
try {
    /////Requête à l'url /////
    let productID = getProductID(this.location.search)
    fetch(`http://localhost:3000/api/teddies/${productID}`)

        /////Promesse qui se résoud si accès aux données /////
        .then((response) => response.json())

        ///// Autre promesse qui se resoud si accès aux données /////
        .then((Peluche) => {
            let template = `<div class="FlexProduct">\
            <img class="ContainerProduct" src="${Peluche.imageUrl}" alt="${Peluche.name}">\
            <div class="ProductDescription">\
               <div class="BearNameProduct">${Peluche.name}</div>\
               <div class="BearPriceProduct">${parseInt(Peluche.price / 100).toFixed(2)} €</div>\
               <select name="Choix de la couleur" id="colorChoice" >Please select...</select>\
               <select disabled id="Quantity" class="Quantity">\
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
            </select>\
               <button disabled  id="AddToCart">Ajouter au panier</button>\
            </div>`

            document.getElementById("productByID").innerHTML = template



            // ******** liste de select pour les couleurs ********
            let colorOptions = `<option selected value="Choisissez votre couleur..."  >Choisissez votre couleur...</option>`
            for (let i = 0; i < Peluche.colors.length; i++) {
                colorOptions += `<option value="${Peluche.colors[i]}">${Peluche.colors[i]}</option>`
            }
            document.getElementById("colorChoice").innerHTML = colorOptions

            // *********
            document.getElementById("AddToCart").addEventListener("click", function () {
                let objet = {
                    nom: Peluche.name,
                    quantite: document.getElementById(`Quantity`).value,
                    image: Peluche.imageUrl,
                    couleurs: document.getElementById(`colorChoice`).value,
                    id: Peluche._id,
                    prix: parseInt(Peluche.price / 100).toFixed(2)
                };
                localStorage.setItem(objet.id + objet.couleurs.replace(/ /g, ''), JSON.stringify(objet));


            });


            // Get the modal
            let modal = document.getElementById("myModal");

            // Get the button that opens the modal
            let btn = document.getElementById("AddToCart");

            // Get the <span> element that closes the modal
            let span = document.getElementsByClassName("close")[0];

            // When the user clicks on the button, open the modal
            btn.onclick = function () {
                modal.style.display = "block";
            }

            // When the user clicks on <span> (x), close the modal
            span.onclick = function () {
                modal.style.display = "none";
            }

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }

            // console.log("**************",document.getElementById(`colorChoice`))

            // Activer et descativer le button AddToCard et Quantity
            document.getElementById('colorChoice').addEventListener('change', function () {
                let e = document.getElementById("colorChoice");
                let strUser = e.options[e.selectedIndex].value

                if (strUser === 'Choisissez votre couleur...') {
                    document.getElementById('Quantity').disabled = true
                    document.getElementById('AddToCart').disabled = true
                    document.getElementById('AddToCart').classList.remove('AddToCart1')
                    document.getElementById('AddToCart').classList.add('AddToCart2')
                } else {
                    document.getElementById('Quantity').disabled = false
                    document.getElementById('AddToCart').disabled = false
                    document.getElementById('AddToCart').classList.remove('AddToCart2')
                    document.getElementById('AddToCart').classList.add('AddToCart1')
                }
                // console.log('You selected: ', this.value);
            });
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
            document.getElementById('AddToCart').addEventListener('click', function () {
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
            })

        })

        //////Gestion de l'erreur//////
        .catch(erreur => console.log("Nous rencontrons une erreur : " + erreur));
} catch (error) {
    console.log("Une erreur s'est produite" + error)
}


//*****************************************************************************************************************



// console.log('**********' ,localStorage)
// console.log('*********************', JSON.parse(localStorage.panier))
// localStorage.clear() 





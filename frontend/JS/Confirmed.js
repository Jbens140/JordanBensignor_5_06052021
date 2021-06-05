console.log(localStorage)

let personalInfos = JSON.parse(localStorage.PersonalInfos)
let orderId = JSON.parse(localStorage.orderID)
// orderConfirmed
let message = document.getElementById('orderConfirmed')

message.innerHTML = `<div>
<p>Merci ${personalInfos.prenom} ${personalInfos.nom} !</p>
<p>Votre commande numéro <strong>#${orderId}</strong> est en cours de préparation </p>
<p>Elle sera livrée chez vous sous 3 à 5 jours.</p><br>
<p>À bientôt !</p>

<p><i>L'équipe Orinoco </i></p>

</div>`

for (const [key, value] of Object.entries(localStorage)) {
    if (key !== 'PersonalInfos' && key !== 'orderID') {
        localStorage.removeItem(key,value)
    }
}
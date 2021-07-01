function CalculerQty(){
    Qty = 0
    for (const [key, value] of Object.entries(localStorage)) {
        if (key !== 'PersonalInfos' && key !== 'orderID') {

            val = JSON.parse(value)
            Qty += parseInt(val.quantite)
        }
    }
    return Qty;
}

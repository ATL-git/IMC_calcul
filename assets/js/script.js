
function imc() {
    let resultFixe = null
    let etat = null
    const taille = parseFloat(document.querySelector(`#taille`).value)
    const poids = parseFloat(document.querySelector(`#poids`).value)
    if (isNaN(poids) || isNaN(taille) || taille<=0 || poids <= 0 ) {
        resultFixe = "veuillez entrer toutes les valeurs"
    } else {
        const result = poids / (taille * taille)
        resultFixe = "Votre IMC est de : " + result.toFixed(2)
        etat = result.toFixed(2)
        if (etat > 40 ) {
            etat = "vous etes en obésité massive"
        }else if (etat > 29.9 ) {
            etat = "vous etes en obesité"
        }else if (etat>24.9) {
          etat = "vous etes en surpoids"
        }else if (etat >18.5) {
            etat = "vous avez un poids normal"
        }else if (etat<18.5){
            etat = "vous etes trop maigre"
        }
    }
        const etatContainer = document.querySelector(`#etat`)
        const resultContainer = document.querySelector(`#result`)
        resultContainer.innerHTML =  resultFixe
        etatContainer.innerHTML = etat
    

   


}



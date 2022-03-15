// Méthode fetch
async function citations() {
    //
    try {
        let quote = await fetch('https://thatsthespir.it/api')
        let reponse = await quote.json();
        //console.log(reponse);

        //Je récupère les éléments du fichier json
        let cit = await reponse.quote;
        let auteur = await reponse.author;
        let image = await reponse.photo;

        //je print les éléments récupérer dans le dom
        document.getElementById("quote").innerHTML = cit;
        document.getElementById("auteur").innerHTML = auteur;
        document.querySelector("img").src = image;
    } catch (error) {
        console.log("Erreur!!")
    }
    
}

citations()

///////////////////////////////////////////////////////////////////
//Méthode XMLMHttpRequest

//document.getElementById("btn").addEventListener("click", () => {
//    let quote = document.getElementById("quote");

//    //création d'une requête xml
//    let xhr = new XMLHttpRequest; 

//    //ouvrir une connexion vers l'api
//    xhr.open("get", 'https://thatsthespir.it/api', true)

//    //lancer l'api
//    xhr.onload = function () {
//        if (this.status === 200) 
//      {
//            let response = JSON.parse(this.responseText);
//            console.log(response)
//        }
//    }

//   xhr.send()
//})

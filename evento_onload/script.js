window.onload = function() { /*Espera todo o HTML ser carregado para ser executado*/

    console.log("Carregou o DOM");
    var title2 = document.querySelector("#title");
    console.log(title2);

}

console.log("Carregou o JS")

var title = document.querySelector("#title"); /*Como o html não tinha sido executado, não armaenou nada*/
console.log(title);
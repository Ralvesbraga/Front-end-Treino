let titulo = document.getElementById("titulo");
titulo.textContent = "Mudei o titulo";

let user = document.getElementById("user");

user.value = "nome alterado"

/*let p = document.getElementById('paragrafo');*/

/*p.textContent = 'Mudando <b>texto</b>';*/ /*Muda o texto, mas sem a tag html*/

/*p.innerHTML = 'Mudando <b>texto</b>'; /*Muda o texto usando as tags html */

const lista = document.getElementById("listaTarefas");
let novaTarefa = "<li>Aplicar à vagas de emprego</li>";

lista.innerHTML += novaTarefa

let p = document.getElementsByClassName("paragrafo"); /*Retorna um html colection, usa no mundo do html*/
p[0].innerHTML += " <b>adicionando mais uma frase</b>";

document.querySelectorAll(".paragrafo"); /*retorna uma nodelist, usa no mundo do css*/


let teste = querySelectorAll("#secao p")
alert(teste.textContent)



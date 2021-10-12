function kattintas() {
    document.getElementById("beviteliMezo").innerHTML = "";

    let mezo = document.getElementById("beviteliMezo").value;
    let lista = document.createElement("ul");
    let li = document.createElement("li");
    li.innerHTML = mezo;
    lista.appendChild(li);
    document.getElementById("lista").appendChild(lista);

}

function init() {
    document.getElementById("listakeszitoGomb").addEventListener("click", kattintas);
}
document.addEventListener("DOMContentLoaded", init);
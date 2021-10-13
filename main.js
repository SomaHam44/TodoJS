
function kattintas() {
    
    

    let mezo = document.getElementById("beviteliMezo").value;
    let lista = document.createElement("ul");
    let li = document.createElement("li");
    lista.appendChild(li);
    let jeloloNegyzet = document.createElement("input");
    jeloloNegyzet.setAttribute("type", "checkbox");
    li.appendChild(jeloloNegyzet);
    let x = document.createElement("span");
    li.innerHTML = jeloloNegyzet + mezo +  " " + x.innerHTML;
    x.innerHTML = "X";
    li.appendChild(x);
    x.addEventListener("click", () => {li.innerHTML = " "});
    document.getElementById("lista").appendChild(lista);
    
    


}

function init() {
    document.getElementById("listakeszitoGomb").addEventListener("click", kattintas);
    document.getElementById("listakeszitoGomb").addEventListener("click", ()=>
    {document.getElementById("beviteliMezo").value = " ";});
    
}
document.addEventListener("DOMContentLoaded", init);
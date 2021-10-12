
function cellaKattintas(e) {
    //e: MouseEvent
    //https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
    //e.target -> a táblázat cellája
    e.target.classList.toggle("kiemelt");

}
function general() {

    document.getElementById("tablazat").innerHTML = "";

    let sorok = document.getElementById("sorok").value;
    let oszlopok = document.getElementById("oszlopok").value;
    if (sorok < 1 || oszlopok < 1) {
        alert("Soroknak és oszlopoknak pozitívnak kell lennie");
        return;
    }
    let table = document.createElement("table");
    for (let i = 0; i < sorok; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < oszlopok; j++) {
            let td = document.createElement("td");
            td.innerHTML = (i + 1) * (j + 1);
            td.addEventListener("click",cellaKattintas);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.getElementById("tablazat").appendChild(table);
}
function init() {
    document.getElementById("generaloGomb").addEventListener("click", general);
    document.getElementById("sorok").addEventListener("input", general);
    document.getElementById("oszlopok").addEventListener("input", general);
}

document.addEventListener("DOMContentLoaded", init);
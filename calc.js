var n1 = document.querySelector("#n1");
var n2 = document.querySelector("#n2");
var r = document.querySelector("#r");
var r2 = document.querySelector("#r2");

function somar () {
    r.innerHTML = Number(n1.value) - (n1.value / 10) + Number(n2.value);
}
function subtrair () {
    r.innerHTML = Number(n1.value) - (n1.value / 10) - Number(n2.value);
}
function multiplicar () {
    r.innerHTML = (Number(n1.value) - (n1.value / 10)) * Number(n2.value);
}
function dividir () {
    if (Number (n2.value) === 0){
        r.innerHTML = "Erro: divisão por 0";
    } else {
        r.innerHTML = (Number(n1.value) - (n1.value / 10)) / Number(n2.value);
    }
}
function lucro () {
    r2.innerHTML = Number(r.value) * 0.15;
}
function desconto () {
    r = r * 0.03 + r;
    r2.innerHTML = Number(r.value);
}
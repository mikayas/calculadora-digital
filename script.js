var painel = document.getElementById("painel-fronte");
var painel_a = document.getElementById("painel-aviso");
var painel_b = document.getElementById("painel-banco");

function on() {
    painel.innerHTML = "";
    painel_b.innerHTML = "";
    painel_a.style.visibility = "hidden";
    painel_b.style.visibility = "hidden";
}

function inserir(char) {
    var resul = painel.innerHTML;
    if(resul.length <= 15) {
        document.getElementById("painel-fronte").innerHTML = resul + char;
        painel_a.style.visibility = "hidden";
    }
    else {
        painel_a.innerHTML = "limite atingido";
        painel_a.style.visibility = "visible";
    }
}

function virgula(char) {
    var resul = painel.innerHTML;
    if((resul.split('.').length - 1) < 1 && resul.length <= 14) {
        document.getElementById("painel-fronte").innerHTML = resul + char;
        painel_a.style.visibility = "hidden";
        if(painel.innerHTML.indexOf(".") == 0) {
            painel.innerHTML = "0."
        }
    }
    else {
        if(resul.length > 14) {
            painel_a.innerHTML = "limite atingido";
        }
        else {
            painel_a.innerHTML = "já adicionado";
        }
        painel_a.style.visibility = "visible";
    }
}

function apagar() {
    var resul = painel.innerHTML;
    document.getElementById("painel-fronte").innerHTML = resul.slice(0, -1);
    painel_a.style.visibility = "hidden";
}

function voltar() {
    var pf = painel.innerHTML;
    var pb = painel_b.innerHTML;
    if(pf !== "" && pb !== "") {
        painel.innerHTML = pb;
        painel_b.innerHTML = pf; 
    }
}

function operador(char) {
    var resul = painel.innerHTML;
    if(
        resul.slice(-1) !== "+" && 
        resul.slice(-1) !== "-" &&
        resul.slice(-1) !== "*" && 
        resul.slice(-1) !== "/" &&
        resul.slice(-1) !== "" && 
        resul.slice(-1) !== "."
    ){
        document.getElementById("painel-fronte").innerHTML = resul + char;
    }
}

function calcular() {
    var resul = document.getElementById("painel-fronte").innerHTML;
    if(
        resul !== "" &&
        resul.slice(-1) !== "+" && 
        resul.slice(-1) !== "-" &&
        resul.slice(-1) !== "*" && 
        resul.slice(-1) !== "/" &&
        resul.slice(-1) !== "."
    ) {
        painel_b.innerHTML = painel.innerHTML;
        painel_b.style.visibility = "visible";
        painel.innerHTML = eval(resul);
    }
}

function geral() {
    var resul = painel.innerHTML;
    if(resul.length <= 7) {
        painel.style.fontSize = "50px";
    }
    else if(resul.length <= 11) {
        painel.style.fontSize = "30px";
    }
    else if(resul.length <= 14) {
        painel.style.fontSize = "25px";
    }
}
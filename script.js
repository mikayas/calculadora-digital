const outputMain = document.getElementById("output-main");
const outputWarning = document.getElementById("output-warning");
const outputHistoric = document.getElementById("output-historic");

var fullLengthOutputMain = 20;
var halfLengthOutputMain = 11;
var fullSizeOutputMain = "2.5rem";
var halfSizeOutputMain = "1.5rem";


function clearAll() {
    outputMain.innerHTML = "";
    outputWarning.innerHTML = "";
    outputHistoric.innerHTML = "";
}

function calculate() {
    if(
        outputMain.innerHTML.slice(-1) == "+" ||
        outputMain.innerHTML.slice(-1) == "-" ||
        outputMain.innerHTML.slice(-1) == "*" ||
        outputMain.innerHTML.slice(-1) == "/" ||
        outputMain.innerHTML.slice(-1) == "."  
    ){
        outputMain.innerHTML = outputMain.innerHTML.slice(0, -1);
    }
    outputHistoric.innerHTML = outputMain.innerHTML;
    outputMain.innerHTML = eval(outputMain.innerHTML);
}

function altPanels() {
    const valueOutputMain = outputMain.innerHTML;
    const valueOutputHistoric = outputHistoric.innerHTML;
    
    outputMain.innerHTML = valueOutputHistoric;
    outputHistoric.innerHTML = valueOutputMain;
}

function deleteChar() {
    outputMain.innerHTML = outputMain.innerHTML.slice(0, -1);
}

function inputValuesInPanels() {
    outputMain.style.fontSize = fullSizeOutputMain;
    if(outputMain.innerHTML.length > halfLengthOutputMain){
        outputMain.style.fontSize = halfSizeOutputMain;   
    }
    if(outputMain.innerHTML.length < fullLengthOutputMain) {
        outputMain.style.color = "var(--ColorDefault1)";
        outputWarning.innerHTML = "";
    }else if(outputMain.innerHTML.length == fullLengthOutputMain) {
        outputWarning.style.color = "var(--ColorSecondary2)";
        outputMain.style.color = "var(--ColorSecondary2)";
    }
    else {
        outputWarning.innerHTML = "max limit";
        outputMain.innerHTML = outputMain.innerHTML.slice(0, -1);
    }
}

function addInOutputMain(char) {
    if(
        (outputMain.innerHTML == "0") 
        ||
        (outputMain.innerHTML.slice(-2) == "+0" ||
        outputMain.innerHTML.slice(-2) == "-0" ||
        outputMain.innerHTML.slice(-2) == "*0" ||
        outputMain.innerHTML.slice(-2) == "/0") 
    ){
        outputMain.innerHTML = outputMain.innerHTML.slice(0, -1);
    }
    outputMain.innerHTML = outputMain.innerHTML + char;
}

function addSymbolInOutputMain(char) {
    if(outputMain.innerHTML.length > 0) {
        if(
            outputMain.innerHTML.slice(-1) == "+" ||
            outputMain.innerHTML.slice(-1) == "-" ||
            outputMain.innerHTML.slice(-1) == "*" ||
            outputMain.innerHTML.slice(-1) == "/" ||
            outputMain.innerHTML.slice(-1) == "."  
        ){
            outputMain.innerHTML = outputMain.innerHTML.slice(0, -1);
        }
        outputMain.innerHTML = outputMain.innerHTML + char;
    }
}

function addPointInOutputMain(char) {
    if(outputMain.innerHTML.length > 0) {
        if(
            outputMain.innerHTML.slice(-1) != "+" &&
            outputMain.innerHTML.slice(-1) != "-" &&
            outputMain.innerHTML.slice(-1) != "*" &&
            outputMain.innerHTML.slice(-1) !== "/" &&
            outputMain.innerHTML.slice(-1) != "."  
        ){
            outputMain.innerHTML = outputMain.innerHTML + char;
        }
        
    }
}
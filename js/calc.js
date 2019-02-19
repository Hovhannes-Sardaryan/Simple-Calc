const row2 = document.getElementById("row2");
const opr = document.getElementById("operatorRow");
const result = document.getElementById("resultRow");


document.onkeydown = function(key){
    let g = key.keyCode;
    if(g>95 && g<106 || g==110 || g==190 || g>47 && g<58 && key.key!="%"){ addnumber(key.key)}
    if(g==106 || g==107 || g==109 || g==111 || key.key==="%"){ addOperator(key.key)}; 
    if(g==13){enter()}
    if(g==46){deleteDisplay()}
    if(g==8){cleaner()} 
}

function addnumber(a) {
    let text = result.textContent;
    let reg = /\./g;

    if(text == "0"){text = ""};
    if(text.match(reg) && a==="."){a=""}
    text += a;
    result.innerHTML = text;
    sizes()
}
function addOperator(oprName) {
    opr.innerHTML += oprName;
    if(opr.textContent.length>1){
       opr.innerHTML = "";     opr.innerHTML += oprName;
    }else{
        row2.innerHTML = result.textContent;    result.innerHTML = "";  
    };
    row2.style.fontSize = "24px"

}
function enter() {   
    let a = row2.textContent;
    let b = opr.textContent;
    let c = result.textContent;
    let calculator = {
        add: () => +a + +c,
        multiply: () => a * c,
        divide: () => a / c,
        subtract: () => a - c,
        percent: () => a * c / 100,
        }
      if(b == "+"){c = calculator.add()};
      if(b == "*"){c = calculator.multiply()};
      if(b == "/"){c = calculator.divide()};
      if(b === "-"){c = calculator.subtract()};
      if(b == "%"){c = calculator.percent()};
      if(typeof(c)==Error){
        result.innerHTML="Infinity"
    }else{ row2.innerHTML = "";
        opr.innerHTML = "";     return result.innerHTML = c; 
    };
    sizes()
}
function deleteDisplay() {
    row2.innerHTML = "";
    opr.innerHTML = ""; 
    opr.style.fontSize = "30px";
    result.innerHTML = "0";
}
function sizes(){
    if(result.textContent.length>20){
        opr.style.fontSize = "18px";
    }
}
function cleaner() {
    let arr = result.textContent.split("");
    arr.splice(-1);
    result.innerHTML = arr.join("");
}
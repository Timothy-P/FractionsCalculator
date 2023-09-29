var Alpha = "1"
function InputLoad() {
    document.calculator.ans.value = localStorage.getItem("InputLocal");
    document.getElementById("history").innerHTML = localStorage.getItem("HistoryLocal")
};
function InputBeforeUnload() {
    localStorage.setItem("InputLocal", document.calculator.ans.value);
    localStorage.setItem("HistoryLocal", document.getElementById("history").innerHTML)
};
function A() {
    var B = document.calculator.ans.value;
    let display = document.calculator.ans;
    let expression = display.value;
    let result;
    try {
        expression = expression.replace(/sin\(/g, 'sin(' + Math.PI / 180 + '*');
        expression = expression.replace(/cos\(/g, 'cos(' + Math.PI / 180 + '*');
        expression = expression.replace(/tan\(/g, 'tan(' + Math.PI / 180 + '*');
        result = math.evaluate(expression);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
    var C = document.calculator.ans.value;
    const para = document.createElement("p");
    const node = document.createTextNode(B + "=" + C);
    para.appendChild(node);
    const element = document.getElementById("history");
    element.appendChild(para);
};
function B() {
    let element = document.getElementById("history");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
};
window.addEventListener("beforeunload", InputBeforeUnload)
window.addEventListener("load", InputLoad)
function parathe() {
    if (Alpha == "1") {
        document.calculator.ans.value += "("
        Alpha = "2"
    }
    else {
        document.calculator.ans.value += ")"
        Alpha = "1"
    }
}
function DEL() {
    calculator.ans.value = calculator.ans.value.slice(0, -1);
}
/*function EOF() {
    var EOFV = window.open("", "MsgWindow", "width=200,height=200");
    EOFV.document.write(calculator.ans.value);
}*/
function Tribute() {
    alert("Thank u/thulefanden for fixing the history issues because I couldn\'t understand it for the longest time. (Thank you r/HTML community!!!)");
    document.getElementById("goodman").innerHTML = "This is a page deticated to a teacher that I previously had. <br> This project is far from finished and it'll probably be what I'm working on for a while."
}
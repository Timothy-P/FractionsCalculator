var Alpha = "1"
function InputLoad() {
    if (localStorage.getItem("InputLocal") != "") {
        document.InputForm.Numbers.value = localStorage.getItem("InputLocal")
    };
};
function InputBeforeUnload() {
    localStorage.setItem("InputLocal", document.getElementById("ans"));
};
function A() {
    var B = document.calculator.ans.value;
    document.calculator.ans.value=eval(document.calculator.ans.value);
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
window.addEventListener("beforeunload", InputBeforeUnload())
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
function calculate() {
    let display = document.calculator.ans;
    let expression = display.value;
    let result;

    try {
        // Convert trigonometric function inputs from degrees to radians
        expression = expression.replace(/sin\(/g, 'sin(' + Math.PI / 180 + '*');
        expression = expression.replace(/cos\(/g, 'cos(' + Math.PI / 180 + '*');
        expression = expression.replace(/tan\(/g, 'tan(' + Math.PI / 180 + '*');

        result = math.evaluate(expression);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}
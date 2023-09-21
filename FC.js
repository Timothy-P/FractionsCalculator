var Font = "Assistant"
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
function FontSwitch() {
    if (Font == "Assistant") {
        
    }
}
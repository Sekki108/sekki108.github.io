

/*function showAlert() {
    alert("Hello, world!");
}

document.getElementById("biggerButton").addEventListener("click", showAlert);

*/

function increaseTextSize(){
    var textArea = document.getElementById("largeTextArea");
    textArea.style.fontSize = '1.5em';

}


function setFancy(){
    var textArea = document.getElementById("largeTextArea");
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";

}

function setBoring(){
    var textArea = document.getElementById("largeTextArea");
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
}

function setUpper(){
    var suffix = "-Moo";
    var textArea = document.getElementById("largeTextArea");
    textArea.style.textTransform ="uppercase";
    textArea.value = textArea.value.split(".").join('') + suffix;
}
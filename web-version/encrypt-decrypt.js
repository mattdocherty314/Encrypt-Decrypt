function pageLoad() {
    let runButton = document.getElementById("run");
    runButton.addEventListener("click", main)
}

function main() {
    let typeSelectElement = document.getElementById("type");
    let choseTo = typeSelectElement.value;
    if (choseTo === "Encrypt") {
        encrypt();
    } else if (choseTo === "Decrypt") {
        decrypt();
    }
}

function encrypt() {

}

function decrypt() {

}

window.addEventListener("load", pageLoad);


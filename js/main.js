let modalBtn = document.getElementById("modalBtn");
let modalBtnRandom = document.getElementById("modalBtnRandom");
let modal = document.getElementById("modalMessage")
let modalBody = document.querySelector(".modal-body");
let modalBackground = document.querySelector(".modal-content");

function modalmessage(text, color , timeout, size) {
    modalBody.innerText = text
    modalBackground.classList = `modal-content modal-${size}`
    modalBackground.style.backgroundColor = color
    $("#modalMessage").modal('show');
    setTimeout(function () {
        // You can change "hide to show if u want to show the modal"
        $("#modalMessage").modal('hide');
        // You can change 750ms to any other time
    }, timeout);

}

modalBtn.addEventListener("click",function () {  
    let inputText = document.getElementById("inputText").value;
    let inputDuration = document.getElementById("inputDuration").value;
    let inputColor = document.getElementById("inputColor").value;
    let inputSize = document.getElementById("inputSize").value;
    
    if (inputText == "" || inputDuration == "" || inputColor == "") {
        modalmessage("Fill the inputs", "Red", 750, "sm")
    } else {
        if (inputSize == 1) {
            inputSize = "sm"
        } else {
            inputSize = "lg"
        }
    
        console.log(inputColor,inputDuration,inputSize,inputText)
        modalmessage(inputText,inputColor,inputDuration,inputSize)
    }

})

modalBtnRandom.addEventListener("click",function () { 
    // Small size is "sm" Large Size is "lg"
    modalmessage("Hi There", "Green", 750, "sm")
})
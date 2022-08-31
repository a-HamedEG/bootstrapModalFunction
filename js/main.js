let modalBtn = document.getElementById("modalBtn");
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
// Small size is "sm" Large Size is "lg"
    modalmessage("Hi There","red",750,"sm")
})
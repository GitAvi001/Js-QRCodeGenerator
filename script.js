const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");
let preEnteredValue;

generateBtn.addEventListener("click", () => {

    //Removing any leading whitespaces if exist in the pasted test or URL
    let qrValue = qrInput.value.trim();

    //preventing the duplicated QR code generations
    if(!qrValue || preValue === qrValue) return;

    preEnteredValue = qrValue;

    generateBtn.innerText = "Generating QR Code...";

    //Encoding the entered URL to the QR code img
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    
    qrImg.addEventListener("load", () => {

        // This line adds the "active" class to the wrapper element,
        // presumably to display the QR code image.

        wrapper.classList.add("active");

        generateBtn.innerText = "Generate QR Code";

    });

    qrInput.addEventListener("keyup", () => {
        if(!qrInput.value.trim()) {
            wrapper.classList.remove("active");
            preValue = "";
        }
    });
});


function generateQR() {
    let qrText = document.getElementById("text").value;
    let qrContainer = document.getElementById("qrcode");
    qrContainer.innerHTML = "";

    if (qrText.trim() !== "") {
        new QRCode(qrContainer, {
            text: qrText,
            width: 200,
            height: 200
        });
    } else {
        alert("Please enter valid text or URL");
    }
}
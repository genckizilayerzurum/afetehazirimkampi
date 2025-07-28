
function generateCertificate() {
    const name = document.getElementById('nameInput').value;
    const canvas = document.getElementById('certificateCanvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        ctx.font = "bold 60px Arial";
        ctx.fillStyle = "#e73331";
        ctx.textAlign = "center";
        ctx.fillText(name, canvas.width / 2, canvas.height / 2 + 20);
        const downloadLink = document.getElementById('downloadLink');
        downloadLink.href = canvas.toDataURL("image/png");
        downloadLink.style.display = 'inline';
    };
    img.src = "katilim_belgesi.png";
}

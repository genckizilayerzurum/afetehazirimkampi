
function generateCertificate() {
    const name = document.getElementById('fullName').value;
    if (!name) {
        alert("Lütfen ad soyad giriniz.");
        return;
    }

    const canvas = document.getElementById('certificateCanvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = 'certificate_base.jpg';

    img.onload = function () {
        ctx.drawImage(img, 0, 0);
        ctx.font = '40px Arial';
        ctx.fillStyle = 'red';
        ctx.textAlign = 'center';
        ctx.fillText(name, canvas.width / 2, 370);

        const link = document.getElementById('downloadLink');
        link.href = canvas.toDataURL('image/jpeg');
        link.style.display = 'inline';
        link.innerText = 'Belgeyi İndir';
    };
}

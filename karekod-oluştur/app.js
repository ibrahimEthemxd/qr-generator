document.addEventListener("DOMContentLoaded", function () {
    //Sayfa tamamen yüklendiğinde çalışacak kodlar
    const generateBtn = document.getElementById("generate-btn");
    const saveBtn = document.getElementById("save-btn");
    const qrCodeContainer = document.getElementById("qr-code");

    let qrCodeInstance = null;

    //Oluştur Butona tıkladığında qr kod oluşacak.
    generateBtn.addEventListener("click", function () {
        //Kullanıcını girdiği metin veya URL
        let qrText = document.getElementById("qr-text").value;

        //QR kod örneğini temizle
        if (qrCodeInstance) {
            qrCodeInstance.clear(); //Önceki qr kodu temizle
            qrCodeInstance = null; // QR koda boş ata
            qrCodeContainer.innerHTML = ""; // QR kod konteynırını temizle
        }

        //Kullanıcının girdiği metin veya url boş değilse
        if (qrText) {
            //QR kod oluşturalacak
            qrCodeInstance = new QRCode(qrCodeContainer, {
                text: qrText,
                width: 128,
                height: 128,
            });

            //QR kodun animasyonlu görünmesini sağlar
            qrCodeContainer.style.opacity = "1";
            qrCodeContainer.style.transform = "scale(1)";


        }
        const clear = document.querySelector(".clear");
        clear.addEventListener("click", clean)
    })
    clean = () => {
        document.getElementById("qr-text").value = "";
    }

    //Kaydet Butona tıkladığında QR kodu resim olarak kaydedecek
    saveBtn.addEventListener("click", function () {
        if (qrCodeInstance) {
            // QR kod oluşturulmuşsa çalışacak kodlar
            const qrImageData = qrCodeInstance._el
                .querySelector("img")
                .getAttribute("src");
            const link = document.createElement("a");
            link.href = qrImageData;
            link.download = "qr-code.png";
            link.click();
        }
    })
})

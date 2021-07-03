function hasNanoAddress(content = "") {

    function isNanoAddress(address) {
        return /^(xrb_|nano_)[13][13-9a-km-uw-z]{59}$/.test(address)
    }

    if (!content || typeof content !== 'string') return false;

    if (content.startsWith("nano:")) {
        if (content.length >= 70) {
            const address = content.substring(5, 70)
            if (isNanoAddress(address)) return address
        }
    } else if (content.startsWith("nano_")) {
        const address = content.substring(0, 70)
        if (isNanoAddress(address)) return address
    }

    return false
}

function showCameraSwitch() {
    document.getElementById("cameraSwitch").style.display = "block"
}

function showCameraError(err) {
    document.getElementById("cameraError").innerText = err
    document.getElementById("cameraError").style.display = "block"
}

function scanQR() {
    function onScanSuccess(decodedText, decodedResult) {
        // Handle on success condition with the decoded text or result.
        console.log(`Scan result: ${decodedText}`, decodedResult);
        let nanoAddress = hasNanoAddress(decodedText)
        if (nanoAddress) {
            $('#QRModal').modal('hide');
            $('#addNanoAddress').val(nanoAddress)
            //scanner.clear();
            scanner.stop().then((ignore) => {
                // QR Code scanning is stopped.
                document.querySelector(".qr-modal").style.display = "none"
            }).catch((err) => {
                // Stop failed, handle it.
            });
        } else {
            alert("Invalid Address! " + decodedText)
        }
    }

    function onScanError(errorMessage) {
        console.error(errorMessage)
        // handle on error condition, with error message
    }

    document.querySelector(".qr-modal").style.display = "block"

    const scanner = new Html5Qrcode("qr-reader");
    const config = { fps: 6, qrbox: 250 }


    scanner.start({ facingMode: "environment" }, config, onScanSuccess, onScanError)
        .catch((err) => {
            alert(err)
        })

}

document.getElementById("open_camera").addEventListener("click", scanQR, false)
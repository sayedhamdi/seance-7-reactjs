import QRCode from "qrcode"


QRCode.toDataURL("https://opuslab.tn").then(data=>console.log(data))
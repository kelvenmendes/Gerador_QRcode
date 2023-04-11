function GerarQRcode () {
    var inputUsuario = document.querySelector("textarea").value;

    var googleChartApi = "https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl="
    var conteudoQrcode = googleChartApi + encodeURIComponent(inputUsuario)
    document.querySelector("#QRcodeImage").src = conteudoQrcode
}
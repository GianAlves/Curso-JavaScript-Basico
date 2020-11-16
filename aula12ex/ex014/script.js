function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora > 0 && hora < 12) {
        //BOM DIA!
        Image.src = 'manha.png'
        document.body.style.background = '#eed08b'
    } else if (hora > 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'tarde.png'
        document.body.style.background = '#ee8d5d'
    } else {
        //BOA NOITE!
        img.src = 'noite.png'
        document.body.style.background = '#9f8376'
    }
}
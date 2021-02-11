function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
       // console.log('Bom dia!')
        img.src = 'manha.png'
        document.body.style.background = '#43A8CE'
    } else {
        if (hora >= 12 && hora <= 18) {
            //console.log('Boa tarde!')
            img.src = 'tarde.png'
            document.body.style.background = '#919AAE'
        } else {
            //console.log('Boa noite!')
            img.src = 'noite.png'
            document.body.style.background = '#2B3358'
        }
    }
}

function conta() {
    var ini = document.getElementById('inicio')
    var fi = document.getElementById('fim')
    var pas = document.getElementById('passo')
    var res = document.getElementById('res')
    if(ini.value.length == 0 || fi.value.length == 0 || pas.value.length == 0) {
        //alert('[ERRO] Consulte os dados novamente.')
        res.innerHTML = 'Impossivel contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fi.value)
        var p = Number(pas.value)
        if (p <= 0) {
            alert('Passo invalido! Considerando PASSO 1')   
            p = 1        
        }
        if (i < f) {
            // Contagem Crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            // Contagem Regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
                
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}

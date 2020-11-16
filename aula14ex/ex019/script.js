function contar() {
    let pv = document.getElementById('pvalor')
    let sv = document.getElementById('svalor')
    let res = document.getElementById('res')
    let i = Number(pv.value)
    let f = Number(sv.value)
    res.innerHTML = ``
    if (i <= f) {
        while (i < f) {
            i++
            res.innerHTML += `${i} `
        }        
    } else {
        while (i > f) {
            i--
            res.innerHTML += `${i} `
        }
    }
}
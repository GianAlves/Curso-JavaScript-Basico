function fibonacci() {
    var res = document.getElementById('res')
    var fi = document.getElementById('fibo')
    var s1 = 0
    var s2 = 1
    var s3 = 0
    res.innerHTML = `${s1} `
    res.innerHTML += `${s2} `
    var f = Number(fi.value)
    for (let c = 1; c <= f; c++) {
        s3 = s1 + s2
        res.innerHTML += `${s3} `
        s1 = s2
        s2 = s3        
    }
}
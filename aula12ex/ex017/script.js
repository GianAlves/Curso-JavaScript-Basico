var n = document.getElementById('nome') // Pega o nome
var a = document.getElementById('altura') // Pega a altura
var p = document.getElementById('peso') // Pega o peso
var res = document.getElementById('res') // Resultadon = eu
function IMC() {
    if (a.value.length == 0 || p.value.length == 0 || n.value.length == 0) { // Restrições
        res.innerHTML = `${n.value} [ERRO] consulte os dados novamente` // Mensagem de erro
    } else {
        //var fsex = document.getElementsByName('sex')
        //var genero = ''
        var imc = Number(p.value) / (Number(a.value) * Number(a.value)) // Calculo
        if (imc < 17) {
            res.innerHTML = `${n.value} você está muito abaixo do Peso, Seu IMC é: ${imc.toFixed(2).replace('.' , ',')}.`
        } else if(imc >= 17 && imc < 18.5){
            res.innerHTML = `${n.value} você está abaixo do Peso, Seu IMC é: ${imc.toFixed(2).replace('.' , ',')}.`
        } else if (imc >= 18.5 && imc < 25) {
            res.innerHTML = `${n.value} você está com peso ideal, Seu IMC é: ${imc.toFixed(2).replace('.' , ',')}.`        
        } else if (imc >= 25 && imc < 30) {
            res.innerHTML = `${n.value} você está com sobrepeso, Seu IMC é: ${imc.toFixed(2).replace('.' , ',')}.`
        } else if (imc >= 30 && imc < 35) {
            res.innerHTML = `${n.value} você está com obesidade, Seu IMC é: ${imc.toFixed(2).replace('.' , ',')}.`
        } else if (imc >= 35 && imc < 40) {
            res.innerHTML = `${n.value} você está com obesidade severa, Seu IMC é: ${imc.toFixed(2).replace('.' , ',')}.`
        } else {
            res.innerHTML = `${n.value} você está com obesidade Morbita, Seu IMC é: ${imc.toFixed(2).replace('.' , ',')}.`
        } 
    }   
}

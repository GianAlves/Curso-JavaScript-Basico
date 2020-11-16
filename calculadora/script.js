function preencher(valor) {
    /*var a = document.getElementById('visor').value     
    if (a.indexOf('+')>0){
        alert('erro')
    }  else {*/
    document.getElementById('visor').value += valor
    /*} 
    valor = 0*/
}

function apagar() {
    calc.input.value = ''
    visor.focus() // Deixar o foco no campo...
}
function fimcalc() {
    if (calc.input.value == 0) {
        alert('Digite os valores para calcular.')
    } else{
    calc.input.value = eval(calc.input.value)
    }
}
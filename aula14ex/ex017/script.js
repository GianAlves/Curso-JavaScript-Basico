function tabuada() {
    var num = document.getElementById('numero') //pega o numero digitado
    var tab = document.getElementById('seltab') 
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!') // erro caso não for digitado nenhum numero
    } else{
        var n = Number(num.value) //comvertendo variavel para number
        var c = 1
        tab.innerHTML = '' // Zerar Select para nova tabuada
        while (c <= 10) { // Contador vai até 10 
            var item = document.createElement('option') // Criar uma tag option no HTML
            item.text = `${n} X ${c} = ${n*c}` // Calculo da tabuada crescente
            item.value = `tab${c}` // Valor da linha da tabuada
            tab.appendChild(item) // Adicionar o item
            c++ // incrementar a variavel c com mais 1
        }
    }

}
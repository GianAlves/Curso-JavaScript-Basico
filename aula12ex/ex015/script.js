function varificar() {  //Função para Verificar o ano de nascimento.
    var data = new Date()   //Pegar a data.
    var ano = data.getFullYear()    //Pegar o ano atual.
    var fano = document.getElementById('txtano')    //Pegar o formulario "Ano".
    var res = document.querySelector('div#res')     //Pegar o resultado.
    if (fano.value.length == 0 || Number(fano.value) > ano) {   //Se o valor do formulario ano for igual a 0 ou maior que o ano atual.
        window.alert('[ERRO] Verifique os dados e tente novamente!')    //Mostrar erro na tela.
    } else {
        var fsex = document.getElementsByName('radsex')     //Pegar o Name dos dois campos.
        var idade = ano - Number(fano.value)    // Variavel recebe o calculo do ano atual menos o numero da variavel fano.
        var genero = ""     //Variavel vai começar vazia.
        var img = document.createElement('img')  // Criar uma tag img no html.
        img.setAttribute('id', 'foto')  //Defini um Id para img.
        if (fsex[0].checked) {  //Se for marcado primeiro campo...
            genero = 'Homem'    //Será homem. 
            if (idade >= 0 && idade < 10) {     //Se a idade for entre 0 e 10 será criança.
                //Criança
                img.setAttribute('src', 'bebe_homem.png')
            }  else if (idade <21) {    //Se for entre 10 e 21 será jovem.
                //Jovem              
                img.setAttribute('src', 'jovem_homem.png')
            }  else if (idade <50) {    //Se for entre 21 e 50 será adulto.
                //Adulto
                img.setAttribute('src', 'adulto_homem.png')
            }  else {   //Se for maior que 50 será idoso.
                //Idoso
                img.setAttribute('src', 'idoso_homem.png')
            }    
        }  else if (fsex[1].checked) {  //Se não, se for o segundo campo marcado...
            genero = 'Mulher'   //Será mulher.
            if (idade >= 0 && idade < 10) { //Se a idade for entre 0 e 10 será criança.
                //Criança
                img.setAttribute('src', 'bebe_mulher.png')
            }  else if (idade <21) {    //Se for entre 10 e 21 será jovem.
                //Jovem     
                img.setAttribute('src', 'jovem_mulher.png')         
            }  else if (idade <50) {     //Se for entre 21 e 50 será adulta.
                //Adulto
                img.setAttribute('src', 'adulta_mulher.png')
            }  else {   //Se for maior que 50 será idosa.
                //Idoso
                img.setAttribute('src', 'idosa_mulher.png')
            }             
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.` //Resultado
        res.appendChild(img)
    }
}
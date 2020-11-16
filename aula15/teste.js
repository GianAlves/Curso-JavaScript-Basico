let posicao = ['', 'goleiro', 'lateral direito', 'zagueiro direito', 'zagueiro esquerdo', 'primeiro volante', 'lateral esquerdo',  'meia direita', 'segundo volante', 'centroavante', 'meia central', 'meia esquerda']
/*
for (let numero in posicao) {
    if (numero == 0) {
        console.log(`Não existe jogador com camisa 0`)
    } else {
        console.log(`O jogador que é ${posicao[numero]} tem número ${numero}`)
    }
}    

for (let numero = 0; numero < posicao.length; numero++) {
    console.log(`O jogador da posicao ${posicao} tem número ${posicao[numero]}`)
}*/

let pos = posicao.indexOf('centroavante')

if (pos == -1){
    console.log('Essa posição não existe.')
} else {
    console.log(`O numero da camisa do ${posicao[pos]} é ${pos}`)
}
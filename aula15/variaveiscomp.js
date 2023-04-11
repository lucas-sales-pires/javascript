let num = document.querySelector('input#Numeros')
let lista = document.querySelector('select#lis')
let res = document.querySelector('div#res')
let valores=[]

function isNumero(n){            // Define uma função chamada "isNumero" com um parâmetro "n"
    if(Number(n) >= 1 && Number(n) <= 100){  // Verifica se o valor de "n" é um número entre 1 e 100 (inclusive)
        return true              // Se o valor de "n" estiver dentro do intervalo desejado, a função retorna "true"
    } else {                     // Se o valor de "n" estiver fora do intervalo desejado, a função executa o seguinte bloco de código
        return false             // Retorna "false" se o valor de "n" não estiver dentro do intervalo desejado
    }
}

function inLista(n, l){                  // Define uma função chamada "inLista" com dois parâmetros: "n" e "l"
    if (l.indexOf(Number(n)) != -1){    // Verifica se o número "n" está presente na lista "l" usando o método "indexOf()"
                                        // O método "indexOf()" retorna o índice do elemento na lista ou -1 se o elemento não estiver presente.
                                        // Se "indexOf()" não retorna -1, significa que o elemento está presente na lista e a condição é verdadeira
        return true                     // Se "n" está presente em "l", a função retorna "true"
    } else {                            // Caso contrário, a função executa o seguinte bloco de código
        return false                    // Se "n" não está presente em "l", a função retorna "false"
    }
}

function adicionar(){
    if(isNumero(num.value) && ! inLista(num.value,valores)) {
        valores.push(Number(num.value))          // Verifica se o valor inserido é um número válido e se ele ainda não está presente na lista de "valores"
                                                // Se o valor for válido e não estiver presente, o valor é adicionado ao array "valores" usando o método "push()"
        let item = document.createElement('option')   // Cria um elemento HTML "option" para exibir a mensagem de confirmação
        item.text=`Valor ${num.value} adicionado.`    // Define o texto do elemento "option" para mostrar que o valor foi adicionado
        lista.appendChild(item)                     // Adiciona o elemento "option" à lista HTML "lista"
        res.innerHTML = ''                           // Limpa a mensagem de resultados na tela
    } else {                                        // Caso contrário, a função executa o seguinte bloco de código
     window.alert('Valor inválido ou em uso.')       // Exibe um alerta de erro informando que o valor é inválido ou já está presente na lista
    }
    num.value = ''                                  // Limpa o campo de entrada de valores
    num.focus()                                     // Coloca o foco novamente no campo de entrada de valores
}

function finalizar(){
    if(valores.length == 0){                        // Verifica se há algum valor presente na lista "valores"
        window.alert('Adicione valores antes de finalizar !')   // Se não houver valores, exibe um alerta de erro
    }else{
        let tot = valores.length                      // Armazena o número total de valores presentes na lista "valores" na variável "tot"
        let maior = valores[0]                        // Inicializa a variável "maior" com o primeiro valor presente na lista "valores"
        let menor = valores[0]                        // Inicializa a variável "menor" com o primeiro valor presente na lista "valores"
        let soma = 0                                  // Inicializa a variável "soma" com o valor 0
        let media = 0                                 // Inicializa a variável "media" com o valor 0
        for(let pos in valores){                      // Cria um loop "for..in" que itera sobre todos os valores presentes na lista "valores"
            soma += valores[pos]                       // Adiciona cada valor presente na lista "valores" à variável "soma"
            if(valores[pos]>maior)                       // Verifica se o valor atual é maior do que o valor armazenado na variável "maior"
                maior = valores[pos]                      // Se sim, atualiza a variável "maior" com o valor atual
            if(valores[pos] < menor)                      // Verifica se o valor atual é menor do que o valor armazenado na variável "menor"
                menor = valores[pos]                      // Se sim, atualiza a variável "menor" com o valor atual
        }
        media = soma/tot                              // Calcula a média dos valores presentes na lista "valores" e armazena o resultado na variável "media"
        res.innerHTML=''                              // Limpa a mensagem de resultados na tela
        res.innerHTML += `<p>Ao todo,temos ${tot} números cadastrados</p>`  // Adiciona à mensagem de resultados na tela o número total de valores presentes na lista "valores"
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`        // Adiciona à mensagem de resultados na tela o maior valor presente na lista "valores"
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`        // Adiciona à mensagem de resultados na tela o menor valor presente na lista "valores"
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`      // Adiciona à mensagem de resultados na tela a soma de todos os valores presentes na lista "valores"
        res.innerHTML += `<p>A média dos valores é ${media}`                   // Adiciona à mensagem de resultados na tela a média dos valores presentes na lista "valores"
    }
}

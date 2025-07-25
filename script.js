let numero = document.querySelector('input#num')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n ,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}
function adicionar(){
    if(isNumero(numero.value) && !inLista(numero.value, valores)){
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista!')
    }
    numero.value = ''
    numero.focus()

}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar!')
    } else {
        let total = valores.length
        let maior = Math.max(...valores)
        let menor = Math.min(...valores)
        let soma = 0
        let media = 0

        for(let i =0; i < valores.length; i++){
            soma += valores[i];
        }

        for(let i = 0; i < valores.length; i++){
            media += (valores[i]/total)
        }

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>Maior número é ${maior} e o menor número é ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os valores e ${soma}.</p>`
        res.innerHTML += `<p>A media de todos os valores e ${media}.</p>`
        
    }

}
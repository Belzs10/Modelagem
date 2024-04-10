//dom
const nome = document.querySelector('#distancia')
const uni1 = document.querySelector('#consumo')
const uni2 = document.querySelector('#preco')
const btn = document.querySelector('#btn')
const resultado = document.querySelector('#resultado')

//evento
btn.addEventListener('click' , () => {
   
    
    n1 = Number(distancia.value)
    n2 = Number(consumo.value)
    n3 = Number(preco.value)

    total = (distancia/consumo)*preco

    resultado.textContent = 'O custo total da viagem será de R$'+ total

})
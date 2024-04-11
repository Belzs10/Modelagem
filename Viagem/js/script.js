//dom
const nome = document.querySelector('#distancia')
const uni1 = document.querySelector('#consumo')
const uni2 = document.querySelector('#preco')
const btn = document.querySelector('#btn')
const resultado = document.querySelector('#resultado')

//funções
btn.addEventListener('click' , () => {
   
    
    n1 = Number(distancia.value)
    n2 = Number(preco.value)
    n3 = Number(consumo.value)
    
   
    fim = (n1/n3) * n2
 
    resultado.textContent = `Total de gastos para realizar a viagem: ${fim.toFixed(2)}`   
    
 
 })
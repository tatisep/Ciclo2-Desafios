window.onload= function(){
    let listaProduto = document.querySelectorAll('#produtos li')
    let paiCesta = document.querySelector('#cestaDoCliente')
    let produtosNaCesta = []
    let soma = 0
    let totalPreco = document.querySelector('#mostraTotalCompra')

    for(let produto of listaProduto){
        produto.addEventListener('click',function(){
            //bloquear repetição
            if(produtosNaCesta.indexOf(produto.dataset.codigo) == -1){
                // criar item na cesta
                let itemCesta = document.createElement('li')
                itemCesta.innerHTML = produto.innerHTML
                paiCesta.appendChild(itemCesta)
                produtosNaCesta.push(produto.dataset.codigo)
                // somar o total
                let preco = Number(produto.dataset.preco)
                soma += preco
                totalPreco.value = (soma /100).toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


            } else {
                alert(`Esse item ${produto.innerHTML} já esta na sua lista`)
            }
        })
    }
}
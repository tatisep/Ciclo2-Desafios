window.onload = function(){
    let botaoBuscar = document.querySelector('#botao-buscar')

    botaoBuscar.addEventListener('click', async function(){
        //criar o fetch de outro site
        let cep = document.querySelector('#ct-cep')
        let url = `https://viacep.com.br/ws/${cep.value}/json/`
        try{
        let dadosFetch = await fetch(url)
        let dadosJson = await dadosFetch.json()
        //separar as informações
        for(let dados in dadosJson){
            if(document.querySelector(`#${dados}`)){
                //escrever nas caixas
                document.querySelector(`#${dados}`).value = dadosJson[dados]
            }
        }
        } catch(error){
            alert(`Essa busca é inválida. Erro: ${error}`)
        }
    })
}
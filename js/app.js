function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nome = gameClicado.querySelector('.dashboard__item__name');
    if (imagem.classList == 'dashboard__item__img dashboard__item__img--rented'){
        var resultado = confirm("Deseja devolver o jogo: " + (nome.textContent) + " ?");
        if (resultado == true) {
            imagem.classList = 'dashboard__item__img' ;
        
            botao.classList = 'dashboard__item__button' ;
        
            botao.textContent = 'Alugar' ;
            alert("O jogo " + (nome.textContent) + " foi devolvido!");  
        }
        else{
            alert("Você desistiu de devolver o jogo " + itemSelecionado);
        }
    }else{
        var resultado = confirm("Deseja alugar o jogo: " + (nome.textContent) + " ?");
        if (resultado == true) {
            imagem.classList = 'dashboard__item__img dashboard__item__img--rented' ;

            botao.classList = 'dashboard__item__button dashboard__item__button--return' ;
            
            botao.textContent = 'Devolver' ;
            alert("O jogo " + (nome.textContent) + " foi alugado!");  
                
        }
        else{
            alert("Você desistiu de alugar o jogo " + (nome.textContent) + " do nosso catalogo!");
            
        }
        imagem.classList = 'dashboard__item__img dashboard__item__img--rented' ;

        botao.classList = 'dashboard__item__button dashboard__item__button--return' ;
        
        botao.textContent = 'Devolver' ;
    }
}
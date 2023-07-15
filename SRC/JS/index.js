/* O que precisamos fazer ? - quando passar o mouse em cima do personagem na lista temos que adicionar a borda azul de eleçao na imagem pequena do personagem e mostrar a imagem m o nome e o texto do personagem que esta selecionado

OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem , devemos seleciona-lo
       passo 1 - pegar o spesonagem no JS pra poder verificar quando o usuario passar o mouse em cima de um deles 
       passo 2 - adicionar a classe selecionado no personagem que o usuario passar o cursor do mouse 
       passo 3 - verivicar se ja existia um personagem selecionado, se sim , devemos remover dele 
       
OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem,  o nome e a drscrição do personagem grande 
       passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
       passo 2 - alterar a imagem do personagem grande 
       passo 3 alterar o nome do personagem grande
       passo 4 - alterar a descrição do personagem grande*/

 //OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem , devemos seleciona-lo
 //passo 1 - pegar o spesonagem no JS pra poder verificar quando o usuario passar o mouse em cima de um deles
       
       const personagens = document.querySelectorAll('.personagem');
       
       
 // passo 2 - adicionar a classe selecionado no personagem que o usuario passar o cursor do mouse 

       personagens.forEach(personagem => {
       personagem.addEventListener('mouseenter' ,() => {

              if(window.innerWidth , 450){
                     window.scrollTo({top: 0, behaviour: 'smooth'});
              }
       
// passo 3 - verivicar se ja existia um personagem selecionado, se sim , devemos remover dele 
       const personagemSelecionado = document.querySelector('.selecionado');
       personagemSelecionado.classList.remove('selecionado')

       personagem.classList.add('selecionado');

//OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem,  o nome e a drscrição do personagem grande 
//passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
      
       const imagemPersonagemGrande = document.querySelector('.personagem-grande');

       // passo 2 - alterar a imagem do personagem grande
       
       const idPersonagem = personagem.attributes.id.value;
       
       imagemPersonagemGrande.src = `./SRC/imagens/imagens/card-${idPersonagem}.png`;
       
       // passo 3 - alterar nome do personagem
       
       const nomePersonagem = document.getElementById('nome-personagem');

              nomePersonagem.innerText = personagem.getAttribute('data-name');
       //passo 4 - alterar a descrição do personagem grande*/
       
       const descricaoPersonagem = document.getElementById('descricao-do-personagem') ;
              
              descricaoPersonagem.innerText = personagem.getAttribute('data-description');
       
              
       
       })
       
       
      })
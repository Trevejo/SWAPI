// personagem aleatorio

$("#buscaPersonagensAleatorios").click(buscarPersonagemAleatorio);

function buscarPersonagemAleatorio(){
    $.get("http://swapi.dev/api/people/" + Math.floor(Math.random(1, 83)* 10),
     preencherLabelPersonagemAleatorio);
}

function preencherLabelPersonagemAleatorio(data){
    $("#personagemAleatorio").text(data.name);
}

// pesquisa por nome de personagem

$("#buscaFilme").click(buscarFilmeDoPersonagem);

function buscarFilmeDoPersonagem(){
    var nome = $("#nomePersonagem").val();
    $.get("https://swapi.dev/api/people/?search=" + nome, populaTabela);
}

function populaTabela(data){
    var resultado = data.results[0];
    $("#nomeDoPersonagemLabel").text(resultado.name);
    for (i = 0; i < resultado.films.length; i++){
        $.get(resultado.films[i], criaLinha);
    }
}

function criaLinha(data){
    console.log(data.title)
}
// search for a random character

$("#searchRandomCharacter").click(searchRandomCharacter);

function searchRandomCharacter(){
    $.get("http://swapi.dev/api/people/" + Math.floor(Math.random(1, 83)* 10),
     fillLabelRandomCharacter);
}

function fillLabelRandomCharacter(data){
    $("#randomCharacter").text(data.name);
}

// search for character's name

$("#searchMovie").click(searchCharacterMovie);

function searchCharacterMovie(){
    var name = $("#characterName").val();
    $.get("https://swapi.dev/api/people/?search=" + name, fillTable);
}

function fillTable(data){
    var result = data.results[0];
    $("#characterNameLabel").text(result.name);
    for (i = 0; i < result.films.length; i++){
        $.get(result.films[i], createLine);
    }
}

function createLine(data){
    console.log(data.title)
}
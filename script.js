let input = document.querySelector(".searchBox input");
let btn = document.querySelector("#searchBtn");
let wrd = document.querySelector(".text h2 span");
let type = document.querySelector("#type span");
let meaning = document.querySelector("#meaning span");
let example = document.querySelector("#example span");
let synonym = document.querySelector("#synonyms span");
let antonym = document.querySelector("#antonyms span");
let readMore = document.querySelector("#readMore");


function checkWord(word){
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

    fetch(url).then(i=>i.json()).then(data => {

        console.log(data);
        // if(data.status == "(failed)"){
        //     wrd.innerHTML = `sorry`;
        // }

        wrd.innerHTML = `${data[0].word == undefined  ? "Not found" :data[0].word}`;
        type.innerHTML = `${data[0].meanings[0].partOfSpeech == undefined ? "Not found":data[0].meanings[0].partOfSpeech}`;
        meaning.innerHTML = `${data[0].meanings[0].definitions[0].definition == undefined ? "Not found":data[0].meanings[0].definitions[0].definition}`;
        synonym.innerHTML = `${data[0].meanings[0].synonyms == undefined ||data[0].meanings[0].synonyms == ""? "Not found":data[0].meanings[0].synonyms}`;
        antonym.innerHTML = `${data[0].meanings[0].antonyms == undefined ||data[0].meanings[0].antonyms== "" ? "Not found":data[0].meanings[0].antonyms}`;
        example.innerHTML = `${data[0].meanings[0].definitions[0].example == undefined ? "Not found":data[0].meanings[0].definitions[0].example}`;
        readMore.innerHTML = `<a href=${data[0].sourceUrls[0]    } target="_blank">Read More</a>`;

    })
}

f1.addEventListener("submit",function(e){
    e.preventDefault();
    let searchValue = input.value;
    if(searchValue == ""){
        alert("Please Enter your word");
    }
    else{
        checkWord(searchValue)
    }
})
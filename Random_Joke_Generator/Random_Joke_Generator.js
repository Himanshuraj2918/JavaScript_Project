const jokePara = document.getElementById("joke")
const btn = document.getElementById("btn")
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

let getjoke = () => {
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        jokePara.innerHTML = data.joke
    });
}

btn.addEventListener("click",function(){
    getjoke()
})

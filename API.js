const btnRepos = document.getElementById("btnRepos")
const divResult = document.getElementById("divResult")

btnRepos.addEventListener("click", getUser)

async function getUser(){
    let input = $("#input").val()
    const url = "https://api.github.com/users/" + input;
    console.log(input)
    const response = await fetch(url)
    const result = await response.json()
    console.log(result)

    console.log(result.name)
    divResult.appendChild(document.createTextNode(result.name))
    divResult.appendChild(document.createElement("br"))
    divResult.appendChild(document.createTextNode(result.login))
    divResult.appendChild(document.createElement("br"))
    divResult.appendChild(document.createTextNode(result.location))
    divResult.appendChild(document.createElement("br"))

    
    const anchor = document.createElement("a")
    anchor.href = result.url
    divResult.appendChild(anchor)
    divResult.appendChild(document.createTextNode(result.url))
    

}
$("#search").on("click", function getUser(){
    console.log("working?")
 })
 getUser();

$("#search").on("click", getUser)
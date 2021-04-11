var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.2.1.min.js';
const btnRepos = document.getElementById("btnRepos")
const divResult = document.getElementById("divResult")
const imgResult = document.getElementById("imgResult")
const nameResult = document.getElementById("nameResult")
const usernameResult = document.getElementById("usernameResult")
const bioResult = document.getElementById("bioResult")
const companyResult = document.getElementById("companyResult")
const hireResult = document.getElementById("hireResult")
const portfolioResult = document.getElementById("portfolioResult")
const githubResult = document.getElementById("githubResult")


btnRepos.addEventListener("click", getUser)

async function getUser(){
    let input = $("#input").val()
    const url = "https://api.github.com/users/" + input;
    console.log(input)
    const response = await fetch(url)
    const result = await response.json()
    console.log(result)

    imgResult.src=result.avatar_url
    nameResult.appendChild(document.createTextNode(result.name))
    usernameResult.appendChild(document.createTextNode(result.login))
    divResult.appendChild(document.createElement("br"))
    bioResult.appendChild(document.createTextNode(result.bio))
    companyResult.appendChild(document.createTextNode(result.company))
    hireResult.appendChild(document.createTextNode(result.hireable))
    portfolioResult.appendChild(document.createTextNode(result.blog))
    divResult.appendChild(document.createElement("br"))
    githubResult.appendChild(document.createTextNode(result.url))

    divResult.style.display="block"
    

}
$("#btnRepos").on("click", function getUser(){
    $("#cardcontainer").empty()
    console.log("working?")
 })
 getUser();

$("#btnRepos").on("click", getUser)
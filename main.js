var body = document.querySelector('.mainBody')
const aboutLink = document.querySelector('#about')
const projectsLink = document.querySelector('#projects')
const resumeLink = document.querySelector('#resume')

function buttonShow() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}
function buttonTrans(x) {
    x.classList.toggle("change");
}

function displayProjects() {
    let newBody = document.createElement('div')
    newBody.classList.add('mainBody')
    newBody.innerHTML = '<p>Projects</p>'
    body.parentNode.replaceChild(newBody, body)
    body = document.querySelector('.mainBody')
}
function displayAbout() {
    let newBody = document.createElement('div')
    newBody.classList.add('mainBody')
    newBody.innerHTML = `<div class="aboutContent">
    <div class="contentColumn">
        <h1>Matthew Speidel</h1>
        <img class="headshot" src="ms_hs.JPG" />
        <h2>Heck of a guy. Codes and stuff. This is obviously a placeholder.</h2>
    </div>
</div>`
    body.parentNode.replaceChild(newBody, body)
    body = document.querySelector('.mainBody')
}
function displayResume() {
    let newBody = document.createElement('div')
    newBody.classList.add('mainBody')
    newBody.innerHTML = '<p>Resume</p>'
    body.parentNode.replaceChild(newBody, body)
    body = document.querySelector('.mainBody')
}

aboutLink.addEventListener('click', function () {
    displayAbout()
}
)
projectsLink.addEventListener('click', function () {
    displayProjects()
}
)
resumeLink.addEventListener('click', function () {
    displayResume()
}
)
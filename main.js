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
    newBody.innerHTML = `<div class="aboutHeader">
    <div class="contentColumn">
        <h1>Matthew Speidel</h1>
        <img class="headshot" src="ms_hs.JPG" />
        <h2>Hi, I'm a software developer based in the Raleigh-Durham, North Carolina area.</h2>
    </div>
</div>
<div class="about2col">
    <div class="aboutme">
        <h2>About Me</h2>
        <br>
        <p>As a lifelong techie and researcher, I dream of working on solutions for the projects of the future we have yet to imagine.</p>
        <br>
        <p>I've recently graduated <a href="https://www.momentumlearn.com">Momentum Learning's</a> 12-week immersive program in Durham, NC and am looking for great opportunities.</p>
        <br>
        <p>My technical skills include Python, Django, javascript, node.js, HTML, CSS, working with REST APIs, and Git. I'm a passionate, dedicated problem-solver and love this career.</p>
    </div>
    <div class="contactme">
        <h2>Contact Me</h2>
        <br>
        <a href="https://www.linkedin.com/in/matthew-speidel/">
            <img id="li-big" src="LI-Logo.png"></a>
        <br>
        <a href="https://github.com/mattspeidel">
            <img id="gh-big" src="GitHub_Logo.png"></a>
        <br>
        <a class="nounder" href="mailto:mattspeidel@gmail.com">
            <img id="gmail" src="gmail.png"> Email</a>
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
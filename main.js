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
    newBody.innerHTML = `<div class="projectsHeader">
    <div>
        <h1>Projects</h1>
        <h2>Some projects I've worked on.</h2>
    </div>
</div>
<div class="projects3col">
    <div class="projectpane">
        <h2>AHAbot</h2>
        <br>
        <a href="https://github.com/mattspeidel/aha-bot-brain">
            <img src="ahabot.png"></a>
        <p>AHAbot is an interactive, natural language chatbot within Slack that provides a unified, familiar interface for disruptive home control. It interacts directly with each user's personal instance of <a href="https://www.home-assistant.io/hassio/">Home Assistant</a> running on their Raspberry Pi and allows you to control many supported devices as well as receive status from all your supported smart devices.</p>
        <br>
        <p>It is built in Node.js using Node Slack SDK, Natural.js, and axios. The registration site is built in Django. </p>
        <br>
        <p>This was my final project at <a href="https://www.momentumlearn.com">Momentum Learning</a> for the 12-week immersive program. My team included <a href="https://github.com/dbarnes87">David Barnes</a>, <a href="https://github.com/christopherwburke">Chris Burke</a>, and <a href="https://github.com/ZekeHart">Zeke Hart</a>.</p>
        <br>
        <a href="https://github.com/mattspeidel/aha-bot-brain">See it on <img id="gh-small" src="GitHub-Mark-32px.png"></a>
    </div>
    <div class="projectpane">
        <h2>SnipManager</h2>
        <br>
        <a href="https://github.com/mattspeidel/snipmanager">
            <img src="snip.png"></a>
        <p>SnipManager is a web app that lets you upload, edit, search for, and copy code snippets.</p>
        <br>
        <p>This was built with Django and implements Django REST Framework. It uses a lot of javascript on the front end to provide fast results and display. The front end also includes prism.js and code mirror to provide syntax highlighting.</p>
        <br>
        <p>This project was a group project at <a href="https://www.momentumlearn.com">Momentum Learning</a>. The team included myself, <a href="https://github.com/ZekeHart">Zeke Hart</a>, and <a href="https://github.com/dzordich">David Zordich</a>.</p>
        <br>
        <br>
        <br>
        <br>
        <a href="https://github.com/mattspeidel/snipmanager">See it on <img id="gh-small" src="GitHub-Mark-32px.png"></a>
        </div>
    <div class="projectpane">
        <h2>MusicSite</h2>
        <br>
        <a href="https://github.com/mattspeidel/itunes-search">
            <img src="itunes.png"></a>
        <p>This is a website that provides for the ability to search iTunes' music library and return a listing of song clips you can listen to. It can be filtered by Artist, Song Title, or Album Title.</p>
        <br>
        <p>It was built using javascript tapping into the iTunes API. The CSS styling accomodates both mobile and desktop layouts.</p>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <a href="https://github.com/mattspeidel/itunes-search">See it on <img id="gh-small" src="GitHub-Mark-32px.png"></a>
        </div>
</div>`
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
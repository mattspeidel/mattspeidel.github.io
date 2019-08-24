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
    </div>
    <div class="projectpane">
        <h2>SnipManager</h2>
        <br>
        <a href="https://github.com/mattspeidel/snipmanager">
            <img src="snip.png"></a>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor sit amet eros sed volutpat. Duis aliquet ac est finibus fermentum. Donec scelerisque nibh a ligula fringilla semper. Etiam elit augue, venenatis non gravida in, rutrum id odio. In porttitor odio ac risus ornare aliquam. Pellentesque fermentum interdum velit vitae sollicitudin. Nullam lacinia ante nec arcu malesuada, quis sodales lacus luctus. Mauris faucibus urna nec luctus tincidunt. Proin maximus imperdiet velit, hendrerit dictum nisi cursus a. Cras et odio diam. Phasellus ut bibendum nunc, eget tempus enim. Vestibulum feugiat luctus dignissim. Donec auctor porttitor egestas.</p>
    </div>
    <div class="projectpane">
        <h2>Itunes Sample Search</h2>
        <br>
        <a href="https://github.com/mattspeidel/itunes-search">
            <img src="itunes.png"></a>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor sit amet eros sed volutpat. Duis aliquet ac est finibus fermentum. Donec scelerisque nibh a ligula fringilla semper. Etiam elit augue, venenatis non gravida in, rutrum id odio. In porttitor odio ac risus ornare aliquam. Pellentesque fermentum interdum velit vitae sollicitudin. Nullam lacinia ante nec arcu malesuada, quis sodales lacus luctus. Mauris faucibus urna nec luctus tincidunt. Proin maximus imperdiet velit, hendrerit dictum nisi cursus a. Cras et odio diam. Phasellus ut bibendum nunc, eget tempus enim. Vestibulum feugiat luctus dignissim. Donec auctor porttitor egestas.</p>
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
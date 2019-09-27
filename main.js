var body = document.querySelector('.mainBody')
const aboutLink = document.querySelector('#about')
const projectsLink = document.querySelector('#projects')
const resumeLink = document.querySelector('#resume')
const mattLink = document.querySelector('#name')

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
        <a class="bottomline" href="https://github.com/mattspeidel/aha-bot-brain">See it on <img id="gh-small" src="GitHub-Mark-32px.png"></a>
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
        <a class="bottomline" href="https://github.com/mattspeidel/snipmanager">See it on <img id="gh-small" src="GitHub-Mark-32px.png"></a>
        </div>
    <div class="projectpane">
        <h2>MusicSite</h2>
        <br>
        <a href="https://github.com/mattspeidel/itunes-search">
            <img src="itunes.png"></a>
        <p>This is a website that provides for the ability to search iTunes' music library and return a listing of song clips you can listen to. It can be filtered by Artist, Song Title, or Album Title.</p>
        <br>
        <p>It was built using javascript tapping into the iTunes API. The CSS styling accomodates both mobile and desktop layouts.</p>
        <a class="bottomline" href="https://github.com/mattspeidel/itunes-search">See it on <img id="gh-small" src="GitHub-Mark-32px.png"></a>
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
        <p>My technical skills include Python, Django, javascript, node.js, vue.js, HTML, CSS, working with REST APIs, SQL, and Git. I'm a passionate, dedicated problem-solver and love this career.</p>
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
    newBody.innerHTML = `<div class="resumeheader">
    <div>
        <h1>Résumé</h1>
        <h2>Please review my résumé below or visit my <a href="https://www.linkedin.com/in/matthew-speidel/"">LinkedIn.</a></h2>
    </div>
</div>
<div class="resume2col">
    <div class="resumeleft">
        <h2>WORK EXPERIENCE</h2>
        <h3>Full Stack Software Developer</h3>
        <h3>Momentum Learning (May 2019 > Present)</h3>
        <p>Dedicated 12 weeks to learning Full-Stack Engineering practices for building and maintaining websites and web applications in an immersive coding program. </p>
        <p>Completed daily and weekly technical projects solo, in pair programming and in group setting to learn and gain knowledge around current development tools, techniques and best practices.</p>
        <br>
        <h3>Premises/Wire Technician</h3>
        <h3>AT&T (October 2016 > December 2017)</h3>
        <p>Conducted client installations and repairs of internet, VOIP, and television services in both residential and business environments.</p>
        <p>Utilized diagnostic equipment and tools to troubleshoot telecom facilities as well as aerial and buried communication lines.</p>
        <p>Exceeded performance metrics in all areas, including quality, efficiency, and safety while receiving customer service accolades.</p>
        <br>
        <h3>Center Consultant</h3>
        <h3>FedEx Office (August 2012 > October 2016)</h3>
        <p>Quickly assumed a direct role in all aspects of the business including printing, shipping, and retail merchandising.</p>
        <p>Directly assisted in helping the store reach the highest success levels, earning the #5 position in our store tier nationwide and President's Club status.</p>
        <br>
        <h3>Store Manager/Assistant Store Manager</h3>
        <h3>Gamestop (November 2004 > November 2011)</h3>
        <p>Captained the sales team to consistently excellent ranking regionally, first place in district three years straight, including top performance in reserves, sales comp and trade comps.</p>
        <p>Maintained operational excellence including scheduling, recruitment, and loss prevention.</p>
        <p>Developed sales into strong repeat customers.</p>
        <br>
        <h2>EDUCATION</h2>
        <h3>Momentum Learning (May 2019 > Present)</h3>
        <p>Dedicated 12 weeks to learning Full-Stack Engineering practices for building and maintaining websites and web applications in an immersive coding program. </p>
        <p>Completed daily and weekly technical projects solo, in pair programming and in group setting to learn and gain knowledge around current development tools, techniques and best practices.</p>
        <br>
        <h3>Newbury High School</h3>
        <p>High School Diploma</p>
    </div>
    <div class="resumeright">
        <div class="rrbox">
            <div class="rrtext">
                <h1>MATTHEW</h1>
                <h1>SPEIDEL</h1>
            </div>
        </div>
        <br>
        <h3>1213 Links Drive</h3>
        <h3>Morrisville, NC 27560</h3>
        <h3 id="desktopemail">mattspeidel@gmail.com</h3>
        <a id="mobileemail" href="mailto:mattspeidel@gmail.com">Email</a>
        <br>
        <h2>SKILLS</h2>
        <br>
        <h3>Python</h3>
        <br>
        <h3>JavaScript</h3>
        <br>
        <h3>Django</h3>
        <br>
        <h3>HTML</h3>
        <br>
        <h3>CSS</h3>
        <br>
        <h3>node.js</h3>
        <br>
        <h3>vue.js</h3>
        <br>
        <h3>Git</h3>
        <br>
        <h3>Rest API</h3>
        <br>
        <h3>SQL</h3>
        <br>
        <h3>Agile</h3>
    </div>
</div>`
    body.parentNode.replaceChild(newBody, body)
    body = document.querySelector('.mainBody')
}

aboutLink.addEventListener('click', function () {
    displayAbout()
}
)
mattLink.addEventListener('click', function () {
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
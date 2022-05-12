const burger = document.querySelectorAll(`.burger`)
const social = document.querySelector(`.socials`)
const menu = document.getElementById(`menu`)
const lineH= document.querySelector(`.line-h`)
const burgerLineOne = document.querySelector(`.burger`)
const burgerLineThree = document.querySelector(`.burger:nth-child(3)`)
const mainC = document.querySelector(`.main-content`)
const anchor = document.querySelector(`.anchor`)
const pages = document.querySelectorAll(`.pages-links`)
const desktopAbout= document.querySelector(`.add-desktop`)


// const home = document.getElementById(`home`)
// home.classList.add(`display-menu-none`)

const dynamic_content={
    "potfolio":`    
    <main class="potfolio">
        <div class="container">
            <div class="personal-shoot">
                <h2>Portrait</h2>
                <div class="personalshoot-pics">
                    <img src="./assets/images/personal-shoot-girl.jpg" "alt="">
                    <img src="./assets/images/personal-shoot-girl-1.jpg" alt="">
                    <img src="./assets/images/personal-shoot-girl-2.jpg" alt="">
                    <img src="./assets/images/personal-shoot-girl-3.jpg" alt="">
                    <img src="./assets/images/personal-shoot-guy.jpg" class="long first" alt="">
                    <img src="./assets/images/personal-shoot-guy-1.jpg" class="long first" alt="">
                    <img src="./assets/images/personal-shoot-guy-2.jpg" class="long" alt="">
                    <img src="./assets/images/personal-shoot-guy-closeUp.jpg" class="long" alt="">
                </div>
            </div>
            <div class="events">
                <h2>Event Photography</h2>
                <div class="event-pics">
                            <img src="./assets/images/event-prep-wide-1.jpg" alt="">
                            <img src="./assets/images/event-prep-wide.jpg" alt="">
                            <img src="./assets/images/event-closeup-wide.jpg" alt="">
                            <img src="./assets/images/event-wide.jpg" alt="">
                            <img src="./assets/images/event-wide-1.jpg" alt="">
                            <img src="./assets/images/event-censore-long.jpg" alt="">
                            <img src="./assets/images/event-long.jpg" alt="">
                            <img src="./assets/images/event-wide-2.jpg" alt=""> 
                            <img src="./assets/images/event-wide-3.jpg" alt="">
                </div>
            </div>
        </div>
    </main>`,
    // <-------separate-------->
    "about":`
        <div class="about">
    
    <span class="about-heading">
    <h1>About me</h1></span>

    <div class="about-content">
    <div class="camera">
        <img src="/assets/images/maf-camera.jpg" alt="">
    </div>
<div class="about-text">
<p>
    I am Mafungwase Nxumalo, a photographer based in durban. I shoot weddings, events and portraits .
    I believe that everything we see and surrounds us is practically a memory but my job as a photographer it is to
    preserve
    those memories in a beautiful and artistic way. There is more to photography than knowing how to "just" take a great
    photo but also the ability to capture photos in a way that will tell a thousand stories when you look at them.
</p><br>

<p>Photography is my passion but i still learn as i grow. My clients are my pride and joy. It is always my pleasure to
    work
    with and provide them with great service not only through my work but through my personality as well. It is
    important
    for me to always build a professional trusting relationships with my clients.
    Allow me to tell your story through my lense.</p>
</div>
    <div class="professional">
        <img src="/assets/images/maf-professional.jpg" alt="">
    </div>
</div>
</div>`
    ,
    // <-------separate-------->
    "home":`
    <section class="photos main-content">
        <div class="grid-two-col">
            <img src="./assets/images/wedding-ring-pride.jpg" class="ring fit"
                alt="Groom putting a ring on the bride's ring-finger">
            <img src="./assets/images/wedding-ring-groom.jpg" class="ring fit"
                alt="pride putting a ring on the groom's ring-finger">
        </div>
        <div class="grid-one-col">
            <img class="main-pics" src="./assets/images/main.jpg" alt="Groom and bride">
            <img class="main-pics" src="./assets/images/wedding-dance.jpg" alt="Bride and groom dancing">
            <img class="main-pics" src="./assets/images/wedding-swing.jpg"
                alt="Bride on a swing with the groom by her side">
            <img class="main-pics" src="./assets/images/wedding-bride.jpg"
                alt="Bride on wearing a white dress walling acroos the asle">
        </div>

    </section>`,
}

let content = dynamic_content.home
console.log(dynamic_content["test"])
console.log(`hi`);

let x =(window.matchMedia("(max-width: 767px)"))
if(x.matches){
    social.classList.add(`display-none`)
}else{
    desktopAbout.innerHTML = dynamic_content.about
}




for(const line of burger){
    pages.forEach((page)=>{
        page.addEventListener(`click`,goToPage)
    })

    let enabler = 0
    line.addEventListener(`click`,()=>{
        if(enabler == 0){
            social.classList.add(`display-none`)
            menu.classList.add(`menu-open`)
            lineH.classList.add(`display-none`)
            
            mainC.classList.add(`display-menu-none`)
            anchor.classList.add(`display-menu-none`)
            

            burgerLineOne.classList.add(`line-1`)
            burgerLineThree.classList.add(`line-3`)

            
            //allow to toggle between states 
            enabler = enabler +1
        }
        else{
            menu.classList.remove(`menu-open`)
            lineH.classList.remove(`display-none`)

            mainC.classList.remove(`display-menu-none`)
            anchor.classList.remove(`display-menu-none`)
            

            burgerLineOne.classList.remove(`line-1`)
            burgerLineThree.classList.remove(`line-3`)
            enabler = 0
        }
    }
    )
}

function goToPage(page){

            const clicked = page.currentTarget.id
            
            if( page.currentTarget.id == "about"){
                anchor.innerHTML = dynamic_content["about"]
                document.querySelector(`.hero`).classList.add(`display-menu-none`)
                document.querySelector(`.hero-text`).classList.add(`display-menu-none`)
            }if( page.currentTarget.id == "contact"){
                console.log(clicked)
            }if( page.currentTarget.id == "potfolio"){
                
                anchor.innerHTML = dynamic_content["potfolio"]
                document.querySelector(`.hero`).classList.add(`display-menu-none`)
                document.querySelector(`.hero-text`).classList.add(`display-menu-none`)
            }if( page.currentTarget.id == "home"){

                anchor.innerHTML = dynamic_content["home"]
                document.querySelector(`.hero`).classList.remove(`display-menu-none`)
                document.querySelector(`.hero-text`).classList.remove(`display-menu-none`)
            }if( page.currentTarget.id == "book_shoot"){
                console.log(clicked) 
                
            }
                        

                    menu.classList.remove(`menu-open`)
                    lineH.classList.remove(`display-none`)

                    mainC.classList.remove(`display-menu-none`)
                    anchor.classList.remove(`display-menu-none`)
                    

                    burgerLineOne.classList.remove(`line-1`)
                    burgerLineThree.classList.remove(`line-3`)
                    enabler = 0
        }

function loader(){
    anchor.innerHTML = content
}

window.onload(loader())

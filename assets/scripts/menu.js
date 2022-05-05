const burger = document.querySelectorAll(`.burger`)
const social = document.querySelector(`.socials`)
const menu = document.getElementById(`menu`)
const lineH= document.querySelector(`.line-h`)
const burgerLineOne = document.querySelector(`.burger`)
const burgerLineThree = document.querySelector(`.burger:nth-child(3)`)
const mainC = document.body



social.classList.add(`display-none`)



for(const line of burger){
    let enabler = 0
    line.addEventListener(`click`,()=>{
        if(enabler == 0){
            social.classList.add(`display-none`)
            menu.classList.add(`menu-open`)
            lineH.classList.add(`display-none`)
            
            
            burgerLineOne.classList.add(`line-1`)
            burgerLineThree.classList.add(`line-3`)

            
            //allow to toggle between states 
            enabler = enabler +1
        }
        else{
            menu.classList.remove(`menu-open`)
            lineH.classList.remove(`display-none`)

            burgerLineOne.classList.remove(`line-1`)
            burgerLineThree.classList.remove(`line-3`)
            enabler = 0
        }
    }
    )
}

const anchor = document.querySelector(`.anchor`)
window.onload(
    anchor.innerHTML = `
    <section class="photos main-content">
        <div class="grid-two-col">
            <img src="./assets/images/wedding-ring-pride.jpg" class="ring"
                alt="Groom putting a ring on the bride's ring-finger">
            <img src="./assets/images/wedding-ring-groom.jpg" class="ring"
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
    </section>`
)
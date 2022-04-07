const burger = document.querySelectorAll(`.burger`)
const social = document.querySelector(`.left`)
const menu = document.getElementById(`menu`)
const lineH= document.querySelector(`.line-h`)
const burgerLineOne = document.querySelector(`.burger`)
const burgerLineThree = document.querySelector(`.burger:nth-child(3)`)
const test = document.querySelector(`.main-pic`)

test.style.backgroundImage=`url("../images/main-long.jpg")`


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
            social.classList.remove(`display-none`)
            menu.classList.remove(`menu-open`)
            lineH.classList.remove(`display-none`)

            burgerLineOne.classList.remove(`line-1`)
            burgerLineThree.classList.remove(`line-3`)
            enabler = 0
        }
    }
    )
}


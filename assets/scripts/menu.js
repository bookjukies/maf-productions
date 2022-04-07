const burger = document.querySelectorAll(`.burger`)
const social = document.querySelector(`.left`)
const menu = document.getElementById(`menu`)



for(const line of burger){
    let enabler = 0
    line.addEventListener(`click`,()=>{
        if(enabler == 0){
            social.classList.add(`display-none`)
            menu.classList.add(`menu-open`)  
            enabler = enabler +1
        }
        else{
            social.classList.remove(`display-none`)
            menu.classList.remove(`menu-open`)
            enabler = 0
        }
    }
    )
}


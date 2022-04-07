const burger = document.querySelectorAll(`.burger`)
const social = document.querySelector(`.left`)
const menu = document.getElementById(`menu`)



for(const line of burger){
    line.addEventListener(`click`,()=>{
        social.style.display="none"

        menu.classList.add(`menu-open`)

    }
    )
}


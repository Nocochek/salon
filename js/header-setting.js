const burger = document.querySelector('#burger')
const settingMenu = document.querySelector('.intro-setting')
const closeBtn = document.querySelector('#closeBtn')


burger.addEventListener('click',()=>{
    settingMenu.classList.toggle('active')
})
closeBtn.addEventListener('click',()=>{
    settingMenu.classList.toggle('active')
})

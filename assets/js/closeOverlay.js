import { cleanCategory } from "./products/EditCategory.js"


document.querySelectorAll('.overlay .close').forEach((close)=>{
    close.addEventListener('click', (e)=>{
        e.currentTarget.parentElement.parentElement.style.display = 'none'
        var x = true
        cleanCategory(e, x)
    })
})

    

//OPENING MENU
function openingMenu(e, component){
    e.stopPropagation()
    component.parentElement.classList.add('active')
}

//PREVENTING MENU FROM CLOSING
function preventClose(e){
    e.stopPropagation()
}

//CLOSING MENU
function closingMenu(e, li){
    li.querySelector(".components").classList.remove('active')
}

//REMOVING COMPONENTS
function removingComponents(e){
    
    var parent = e.target.parentElement
    try{
        parent.parentElement.removeChild(parent) 
    }
    catch{

    }
} 

//ADDING COMPONENTS
function addingComponents(e, closeMenu = false){

    var parent = closeMenu ? e.parentElement : e.target.parentElement
    var input = parent.querySelector('input')
    var menu = parent.parentElement.querySelector('.componentsField')
    if(input != ''){
        var component =  document.createRange().createContextualFragment(`<span class='componentSingle margin'> ${input.value}  <i class='bx bx-x'></i></span>`)
        var i = component.firstChild.querySelector('i')
        menu.appendChild(component.firstChild)
        input.value = ''
        menu.querySelectorAll('.componentSingle i').forEach((i)=>{
            i.addEventListener('click', (e)=>{
                removingComponents(e)
            })
        })

        
        /*  */
    }
    
}

//SAVING COMPONENTS
function savingComponents(e, component, newProduct = false){
    var parent = component.parentElement
    var menu_items = parent.querySelectorAll('.componentsField span')
    var newComponents = ''
    menu_items.forEach((item)=>{
        newComponents += item.innerText.replaceAll(' ', '') + ', '
    })
    newComponents = newComponents.split(',');
    newComponents.length = newComponents.length -1
    newComponents = newComponents.join(',')

    if(newComponents.length != 0){

        if(newProduct == false){
            parent.parentElement.querySelector('.componentsToggle').innerText = newComponents
            parent.parentElement.classList.remove('active')
        }else{
            return newComponents
        }

    }  
}

function all(){
    
    document.querySelectorAll(".componentsToggle").forEach((component)=>{
        component.addEventListener('click', (e)=>{
            openingMenu(e, component)
        })
    })

    document.querySelectorAll('.componentsMenu').forEach((menu)=>{
        menu.addEventListener('click', (e)=>{
            preventClose(e)
        })
    })

    document.querySelectorAll('.produtosContainer ul li').forEach((li)=>{
        li.addEventListener('click', (e)=>{
            closingMenu(e, li)

            var input = li.querySelector('.components .componentsMenu .addNewComponent input')
            if(input.value.length > 0){
                var element = li.querySelector('.components .componentsMenu .addNewComponent span')
                console.log(element)
                var closeMenu = true
                addingComponents(element, closeMenu)
            }
            
            var component = li.querySelector('.components .componentsMenu .componentSave')
            savingComponents(e, component)
        })
    })

    document.querySelectorAll('.componentSingle i').forEach((i)=>{
        i.addEventListener('click', (e)=>{
            removingComponents(e)
        })
    })

    document.querySelectorAll('.addNewComponent span').forEach((span)=>{
        span.addEventListener('click', (e)=>{
            addingComponents(e)
        })
    })
    
    document.querySelectorAll('.componentSave').forEach((component)=>{
        component.addEventListener('click', function(e){
            savingComponents(e, component)
        })
    })

}

all()
export {openingMenu, savingComponents, all}
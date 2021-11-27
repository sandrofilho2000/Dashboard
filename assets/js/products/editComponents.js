$(function(){

    //OPENING MENU
    function openingMenu(e, component){
        e.stopPropagation()
        component.parentElement.classList.add('active')
    }
    document.querySelectorAll(".componentsToggle").forEach((component)=>{
        component.addEventListener('click', (e)=>{
            openingMenu(e, component)
        })
    })

    //PREVENTING MENU FROM CLOSING
    function preventClose(e){
        e.stopPropagation()
    }
    document.querySelectorAll('.componentsMenu').forEach((menu)=>{
        menu.addEventListener('click', (e)=>{
            preventClose(e)
        })
    })

    //CLOSING MENU
    function closingMenu(e, li){
        li.querySelector(".components").classList.remove('active')
    }
    document.querySelectorAll('.produtosContainer ul li').forEach((li)=>{
        li.addEventListener('click', (e)=>{
            closingMenu(e, li)
        })
    })

    //REMOVING COMPONENTS
    function removingComponents(e){
        
        var parent = e.target.parentElement
        parent.parentElement.removeChild(parent) 
    } 
    document.querySelectorAll('.componentSingle i').forEach((i)=>{
        i.addEventListener('click', (e)=>{
            removingComponents(e)
        })
    })

    //ADDING COMPONENTS
    function addingComponents(e){
        var parent = e.target.parentElement
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
    document.querySelectorAll('.addNewComponent span').forEach((span)=>{
        span.addEventListener('click', (e)=>{
            addingComponents(e)
        })
    })

    //SAVING COMPONENTS
    function savingComponents(e, component){
        var parent = component.parentElement
        var menu_items = parent.querySelectorAll('.componentsField span')
        var newComponents = ''
        menu_items.forEach((item)=>{
            newComponents += item.innerText.replaceAll(' ', '') + ', '
        })
        newComponents = newComponents.split(',');
        newComponents.length = newComponents.length -1
        newComponents = newComponents.join(',')
        parent.parentElement.querySelector('.componentsToggle').innerText = newComponents
        parent.parentElement.classList.remove('active')
    }

    document.querySelectorAll('.componentSave').forEach((component)=>{
        component.addEventListener('click', function(e){
            savingComponents(e, component)
        })
    })

    

    
    

})
import { save } from "../savingLoad.js"
import { addCategory } from "./addCategory.js"
import { openWarning } from "./deleteItem.js"


//CLEANING OVERLAY INPUT FIELDS
function cleanCategory(e, x = false){
    if(x==false){
        var overlayContent = e.currentTarget.parentElement.parentElement.parentElement
    }else{
        var overlayContent = e.currentTarget.parentElement
    }

    overlayContent.querySelector("[name=productName]").value = ''
    overlayContent.querySelector(".img img").setAttribute('src', 'assets/images/imgPlaceholder.png')
    overlayContent.querySelector("textarea").value = '';
    overlayContent.parentElement.style.display = 'none'
}

//SAVE THE NEW CATEGORY
function saveCategory(e){
    var target = e
    var overlay = document.querySelector('.overlayAddEdit')
    var nome = overlay.querySelector("[name=productName]").value 
    var pic = overlay.querySelector(".img img").getAttribute('src')
    var descricao = overlay.querySelector("textarea").value 

    target.querySelector('h3').innerHTML = nome.trim()
    target.querySelector('img').setAttribute('src', pic)
    target.querySelector('.categoryDescricao').innerHTML = descricao.innerHTML 

    save()
}

//VERIFY INPUT FIELD BEFORE SAVE
function verifyFields(e, target){
    e.preventDefault()
    var new_overlay = document.querySelector('.overlayAddEdit')
    var new_nome = new_overlay.querySelector("[name=productName]").value.trim()
    var new_pic = new_overlay.querySelector(".img img").getAttribute('src')
    if (new_pic == 'assets/images/imgPlaceholder.png'){
        new_pic = ''
    }
    var new_descricao = new_overlay.querySelector("textarea").value.trim()

    if(new_nome.length == 0 || new_pic.length == 0 ||  new_descricao.length == 0){
        var pendentes = ''
        if(new_nome.length == 0){
            pendentes += '\nNome'
        }
        if(new_pic.length == 0){
            pendentes += '\nFoto'
        }
        if(new_descricao.length == 0){
            pendentes += '\nDescrição'
        }
        
        alert('Por favor, preencha os seguintes campos' + pendentes)  
        return false 
    }
    else{
        return true
    } 
}

//OPEN CATEGORY OVERLAY
function openCategory(e, newCategory=false){

    var overlay = document.querySelector('.overlayAddEdit')
    overlay.style.display = 'flex'

    var target = e.currentTarget
    

    $(function(){
        $("#newCategoryEdit").unbind().change((event)=>{
            var file = event.currentTarget.files
            file = URL.createObjectURL(file[0])
            document.querySelector(".overlayAddEdit .img img").setAttribute('src', file)
        })
    })
    

    if(newCategory==false){
        var nome = target.querySelector('h3').innerHTML.trim()
        var pic = target.querySelector('img').getAttribute('src')
        var descricao = target.querySelector('.categoryDescricao').innerHTML.trim()
        overlay.querySelector("[name=productName]").value = nome
        overlay.querySelector(".img img").setAttribute('src', pic)
        overlay.querySelector("textarea").value = descricao

        $(function(){
            $(".overlayAddEdit [name=yes]").unbind().click (function(e){
                if(verifyFields(e,target)==true){
                    target.querySelector('h3').innerHTML = overlay.querySelector("[name=productName]").value.trim()
                    target.querySelector('img').setAttribute('src', overlay.querySelector(".img img").getAttribute('src'))
                    target.querySelector('.categoryDescricao').innerHTML = overlay.querySelector("textarea").value.trim() 
                    save()
                    cleanCategory(e)
                }
            })
        })
        

    }else if(newCategory==true){
        
        $(function(){
            $(".overlayAddEdit [name=yes]").unbind().click (function(e){
                addCategory(e, target)
            })
        })
        
    }

    document.querySelector('[name=not]').addEventListener('click', function(e){

        e.preventDefault()
        e.stopPropagation()
        var category = true
        openWarning(e, category, category, target)


    })
}



document.querySelectorAll("div.card:not(.cardPlus)").forEach((card)=>{
    card.addEventListener('dblclick', (e)=>{
        openCategory(e)
    })
})


document.querySelectorAll("div.card:not(.cardPlus)").forEach((card)=>{
    card.addEventListener('click', (e)=>{
        card.querySelector('.hoverInfo').classList.add("active")
        setTimeout(() => {
            card.querySelector('.hoverInfo').classList.remove("active")
        }, 1800);
    })
})

export { openCategory, cleanCategory, verifyFields }
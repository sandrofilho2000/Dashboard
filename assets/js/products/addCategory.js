import { openCategory, verifyFields, cleanCategory } from "./EditCategory.js"
import { save } from "../savingLoad.js"
import { allSortableCards } from "./sortableCards.js";
import { openWarning, closeWarning } from './deleteItem.js'

function addCategory(e, target){
    e.preventDefault()
    if(verifyFields(e,target)==true){

        var new_overlay = document.querySelector('.overlayAddEdit')
        var new_nome = new_overlay.querySelector("[name=productName]").value.trim()
        var new_pic = new_overlay.querySelector(".img img").getAttribute('src')
        var new_descricao = new_overlay.querySelector("textarea").value.trim()

        var newCard = 
            `<div class="card draggableCard">
            <p hidden="" class="categoryDescricao">${new_descricao}</p>
            <h3>
                ${new_nome}
            </h3>
            <img src="${new_pic}" alt="">
            <div class="hoverInfo">
                <p>Clique Duas Vezes Para Editar</p>
            </div>
        </div>`

        var newCategory = document.createRange().createContextualFragment(newCard)
        document.querySelector('.cardBox').insertBefore(newCategory.firstChild, document.querySelector(".cardPlus").previousSibling);
        save()
        cleanCategory(e)

        document.querySelectorAll("div.card:not(.cardPlus)").forEach((card)=>{
            card.addEventListener('dblclick', (e)=>{
                openCategory(e)
            })
            card.addEventListener('click', (e)=>{
                card.querySelector('.hoverInfo').classList.add("active")
                setTimeout(() => {
                    card.querySelector('.hoverInfo').classList.remove("active")
                }, 1800);
            })
            allSortableCards()
        })

        document.querySelector('[name=not]').addEventListener('click', function(e){

            e.preventDefault()
            e.stopPropagation()
            var category = true
            openWarning(e, category, category, target)
    
        })

        
    } 
}

document.querySelector('.cardPlus').addEventListener('dblclick', function(e){
    var newCategory = true

    openCategory(e, newCategory)

})

export { addCategory }
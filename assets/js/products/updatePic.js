import { save } from '../savingLoad.js'

function updatePic(e, newProduct=false){
    if(newProduct==false){
        var file = e.currentTarget.files
        file = URL.createObjectURL(file[0])
        e.currentTarget.parentElement.querySelector('img').setAttribute('src', file)
    }else{
        var file = e.files
        file = URL.createObjectURL(file[0])
        return file
    }  
}

document.querySelectorAll(".updateProductPic input").forEach((input)=>{
    input.addEventListener('change', function(e){
        updatePic(e)
    })
})

var img = document.querySelector("#productNewImg")
var name = document.querySelector("#productNewName")
var preco = document.querySelector("#productNewValue")
var ingredientes = document.querySelector(".newComponents.componentsToggle")
const items = [img.value, name.value, preco.value, ingredientes.innerHTML]

function verificaButton(img, name, preco, ingredientes){
    if(img, name, preco, ingredientes != '' ){
    }else{
    }
}



export { updatePic }

import { openingMenu, savingComponents, allEdit} from './editComponents.js';
import { allDelete } from './deleteItem.js';
import { allSortable } from './sortableList.js';
import { save } from '../savingLoad.js'

//UPDATE PIC
function updatePic(e, newProduct=false, updateNew=false){
    if(newProduct==false){
        if(updateNew==true){
            var file = e.getAttribute('src')
            console.log(file)
            e.parentElement.querySelector('img').setAttribute('src', file)
        }else{
            var file = e.currentTarget.files
            file = URL.createObjectURL(file[0])
            e.currentTarget.parentElement.querySelector('img').setAttribute('src', file)
        }
        

    }else{
        var file = e.files
        file = URL.createObjectURL(file[0])
        return file
    }  
}

//OPEN INPUT FIELDS
function openInputs(e){
    var objDiv = document.querySelector(".produtosContainer");
    objDiv.scrollTop = objDiv.scrollHeight - 70;
    document.querySelector('.newProductLi').classList.add('active')
}

//CLEAN FIELDS{
function cleanFields(){
    document.querySelector('.newProductLi img').setAttribute('src', 'assets/images/imgPlaceholder.png')
    document.querySelector('#productNewName').value = ''
    document.querySelector('#productNewValue').value = ''
    document.querySelector('.newProductLi .componentsField').innerHTML = ''
    document.querySelector('.newProductLi .componentsToggle').innerHTML = 'CLIQUE'
}

document.querySelector(".addProduct").addEventListener('click', (e)=>{
    openInputs(e)
})

document.querySelector('.newComponents').addEventListener('click', (e)=>{
    openingMenu(e, e.target)
    document.querySelector('.salvarNewProduct').style.display = 'none'
})

document.querySelector('.newProductLi').addEventListener('click', (e)=>{
    document.querySelector('.salvarNewProduct').style.display = 'block'
})

document.querySelector('.newProductLi .componentSave').addEventListener('click', (e)=>{
    document.querySelector('.salvarNewProduct').style.display = 'block'
})

document.querySelector("#productNewImg").addEventListener('change', function(e){
    updatePic(e)
})


document.querySelector(".salvarNewProduct").addEventListener('click', (e)=>{
    var img = document.querySelector("#productNewImg").value
    var nome = document.querySelector('#productNewName').value
    var preco = document.querySelector("#productNewValue").value
    var ingredientes = document.querySelector(".newComponents.componentsToggle").innerHTML
    
    if(ingredientes == 'CLIQUE'){
        ingredientes = ''
    }

    if(img.length != 0 && nome.length != 0 && preco.length != 0 && ingredientes.length != 0){

        var components = '.newProductLi .components .componentsMenu .componentSave '
        var imgUrl = document.querySelector("#productNewImg")
        var newProduct = true
        
        var newLi = `<li draggable='false'>
        <div class="dragDeleteContainer">
            <div class="dragDelete">
                <div class="drag">
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
        
                <p class="deleteProduct">
                    +
                </p>
            </div>
            
        </div>
        <div class="nameImg"> 
            <div class="divContainer"> 
                <label class="updateProductPic">
                    <input hidden="" type="file" name="" id="updateProductPic">
                    <img src="${updatePic(imgUrl, newProduct)}" alt=""> 
                </label>
                
                <input type="text" value="${nome}">
            </div>
        </div>
        <div class="price">
            <div class="divContainer">
                <span>R$</span><input type="number" value="${preco}">
            </div>
        </div>
        <div class="components">
            <p class="componentsToggle">
                ${savingComponents(e, document.querySelector(components), newProduct)}
            </p>
            <div class="componentsMenu">
                <div class="topMenu">
                    <p>Ingredientes</p>
                </div>
                <div class="componentsField">

                </div>
        
                <div class="addNewComponent">
                    <input type="text" name="" id=""> <span>+</span>
                </div>
        
                <div class="componentSave">
                    <p>SALVAR</p>
                </div>
            </div>
        </div>
        </li>
        `

        var newProductAdd = document.createRange().createContextualFragment(newLi)
        var file = newProductAdd.firstChild.querySelector('#updateProductPic').addEventListener('change', (e)=>{
        
            updatePic(e)
        })
        
        document.querySelector('.produtosContainer ul').insertBefore(newProductAdd.firstChild, document.querySelector(".newProductLi").previousSibling);

        
        allEdit()
        allDelete()
        allSortable()
        save()
        cleanFields()


        
        

    }else{
        var msg = ''
        if(img.length == 0){
            msg += '\n Imagem'
        }
        if(nome.length == 0){
            msg += '\n Nome'
        }
        if(preco.length == 0){
            msg += '\n Preço'
        }
        if(ingredientes.length == 0){
            msg += '\n Ingredientes'
        }

        alert(`Por favor, preencha os seguintes campos: \n ${msg}`)
    }
})


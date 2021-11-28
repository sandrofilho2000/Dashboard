//DELETE PRODUCT
function deleteItem(e, product){
    product.parentElement.removeChild(product)
}

//CLOSE WARNING
function closeWarning(e, timeOut=false, self = ''){

    var time = setTimeout(() => { 
        document.querySelector('.warning').classList.remove("active")
        setTimeout(() => { 
            document.querySelector('.warning').classList.remove("delete")
        }, 300);
    }, 1000);

    if(timeOut == false){
        document.querySelector('.warning').classList.remove("active")
        document.querySelector('.warning').classList.remove("delete")
    }

    if(timeOut == true ){
        time
    }
}

//OPEN WARNING
function openWarning(e, deleteBtn){
    e.stopPropagation()
    var product = deleteBtn.parentElement.parentElement.parentElement
    document.querySelector('.warning').classList.add("active")

    var self = deleteBtn.parentElement.parentElement.parentElement

    var nome = self.querySelector('.nameImg .divContainer input[type=text]').value
    var img  = self.querySelector('.nameImg .divContainer img').getAttribute('src')
    
    document.querySelector('.warning .item h5').innerHTML = nome
    document.querySelector('.warning .item img').setAttribute('src', img)

    document.querySelector('span.yes').addEventListener('click', function(e){
        deleteItem(e, self)
        var timeOut = true
        document.querySelector('.warning').classList.add("delete")
        closeWarning(e, timeOut)
    })
}

function allDelete(){

    document.querySelector('span.not').addEventListener('click', function(){
        closeWarning()
    })

    document.querySelectorAll('.deleteProduct').forEach((deleteBtn)=>{
        deleteBtn.addEventListener('click', (e)=>{
            openWarning(e, deleteBtn)
        })
    })

    window.addEventListener('click', function(){
        closeWarning()
    })

    document.querySelector('.warning').addEventListener('click', (e)=>{
        e.stopPropagation()
    })
}

allDelete()








export { allDelete }
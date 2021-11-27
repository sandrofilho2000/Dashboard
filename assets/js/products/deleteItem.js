$(function(){

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
            console.log('not time!')
            document.querySelector('.warning').classList.remove("active")
            document.querySelector('.warning').classList.remove("delete")
        }

        if(timeOut == true ){
            time
            console.log('time!')
        }
    }

    document.querySelector('span.not').addEventListener('click', closeWarning)

    function openWarning(e, deleteBtn){
        e.stopPropagation()
        var product = deleteBtn.parentElement.parentElement.parentElement
        document.querySelector('.warning').classList.add("active")
        var self = deleteBtn.parentElement.parentElement.parentElement

        document.querySelector('span.yes').addEventListener('click', function(e){
            deleteItem(e, self)
            var timeOut = true
            document.querySelector('.warning').classList.add("delete")
            closeWarning(e, timeOut)
        })
    }

    document.querySelectorAll('.deleteProduct').forEach((deleteBtn)=>{
        deleteBtn.addEventListener('click', (e)=>{
            openWarning(e, deleteBtn)
        })
    })

    document.querySelector('.warning').addEventListener('click', (e)=>{
        e.stopPropagation()
    })
    
    window.addEventListener('click', closeWarning)

})
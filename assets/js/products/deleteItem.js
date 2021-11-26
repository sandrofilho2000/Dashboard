$(function(){
    function closeWarning(e, timeOut=false){

        var time = setTimeout(() => { 
            document.querySelector('.warning').classList.remove("active")
            setTimeout(() => { 
                document.querySelector('.warning').classList.remove("delete")
            }, 300);
        }, 1000);

        if(!timeOut){
            document.querySelector('.warning').classList.remove("active")
            document.querySelector('.warning').classList.remove("delete")
            clearTimeout(time)
        }

        
        if(timeOut == true ){
            time
        }
    }

    document.querySelectorAll('.deleteProduct').forEach((deleteBtn)=>{
        deleteBtn.addEventListener('click', (e)=>{
            e.stopPropagation()
            document.querySelector('.warning').classList.add("active")
        })
    })

    document.querySelector('.warning').addEventListener('click', (e)=>{
        e.stopPropagation()
    })
    
    window.addEventListener('click', closeWarning)
    document.querySelector('span.not').addEventListener('click', closeWarning)


    document.querySelector('span.yes').addEventListener('click', (e)=>{
        document.querySelector('.warning').classList.add("delete")
        closeWarning(e, timeOut=true)
       
    })
})
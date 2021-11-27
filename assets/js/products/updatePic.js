$(function(){
    function updatePic(e){
        
    }
    document.querySelectorAll(".updateProductPic input").forEach((input)=>{
        input.addEventListener('change', function(e){
            var file = event.currentTarget.files
            file = URL.createObjectURL(file[0])
            console.log(file)
            e.currentTarget.parentElement.querySelector('img').setAttribute('src', file)
        })
    })

});
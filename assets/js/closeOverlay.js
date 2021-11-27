$(function(){
    document.querySelectorAll('.overlay').forEach((overlay)=>{
        overlay.addEventListener('click', (e)=>{
            e.currentTarget.style.display = 'none'
        })
    })

    document.querySelectorAll('.overlayContent').forEach((overlayContent)=>{
        overlayContent.addEventListener('click', (e)=>{
            e.stopPropagation()
        })
    })
})
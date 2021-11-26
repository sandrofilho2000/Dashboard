$(function(){
    document.querySelectorAll("div.card").forEach((card)=>{
        card.addEventListener('click', (e)=>{
            document.querySelector('.overlayAddEdit').style.display = 'flex'
        })
    })
})
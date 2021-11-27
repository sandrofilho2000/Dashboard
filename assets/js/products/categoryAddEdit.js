$(function(){
    document.querySelectorAll("div.card").forEach((card)=>{
        card.addEventListener('dblclick', (e)=>{
            document.querySelector('.overlayAddEdit').style.display = 'flex'
            card.querySelector('.hoverInfo').classList.remove("active")
        })
    })


    document.querySelectorAll("div.card").forEach((card)=>{
        card.addEventListener('click', (e)=>{
            card.querySelector('.hoverInfo').classList.add("active")
            setTimeout(() => {
                card.querySelector('.hoverInfo').classList.remove("active")
            }, 1800);
        })
    })
})
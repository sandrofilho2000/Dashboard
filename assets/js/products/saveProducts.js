$(function(){
    document.querySelectorAll('td .tdContainer input').forEach((input)=>{
        input.addEventListener('blur', (e)=>{
            let parent = e.currentTarget.parentElement.parentElement.parentElement
            let nome = parent.querySelector('.nameImg .tdContainer input').value
            console.log(`SALVANDO ${nome.toUpperCase()}...`)
            setTimeout(()=>{
                console.log('PRODUTOS SALVOS')
            }, 1000)
        })
    })
})
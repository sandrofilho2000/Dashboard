$(function(){
    document.querySelector(".addProduct").addEventListener('click', ()=>{
        var objDiv = document.querySelector(".produtosContainer");
        objDiv.scrollTop = objDiv.scrollHeight - 70;
        document.querySelector('.newProductLi').classList.add('active')
    })
})
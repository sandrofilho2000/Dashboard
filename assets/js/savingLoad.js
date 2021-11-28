function save(){
    setTimeout(() => {
        document.querySelector('.loadingSave').classList.add('active')
    }, 200);
    
    setTimeout(() => {
        document.querySelector('.loadingSave').classList.add('done')
    }, 2000);
    
    setTimeout(() => {
        document.querySelector('.loadingSave').classList.remove('active')
    }, 4000);
    
    setTimeout(() => {
        document.querySelector('.loadingSave').classList.remove('done')
    }, 4500);
}

export { save }



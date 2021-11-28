var items = document.querySelector(".produtosContainer ul");
new Sortable (items, {
    animation: 350,
    draggable: "[draggable]",
    removeCloneOnHide: true, 
    handle: '.drag'
})

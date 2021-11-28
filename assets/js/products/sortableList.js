import { save } from '../savingLoad.js'

//SORT ELEMENTS BY DRAGGIN'EM
function allSortable(){
    var items = document.querySelector(".produtosContainer ul");
    var sortable = Sortable.create(items, {
        animation: 350,
        draggable: "[draggable]",
        removeCloneOnHide: true, 
        handle: '.drag',
        onEnd: function (/**Event*/evt) {
            save()
        },
    });

}

allSortable();

export { allSortable }





import { save } from '../savingLoad.js'

//SORT ELEMENTS BY DRAGGIN'EM
function allSortableCards(){
    var items = document.querySelector(".cardBox");
    var sortable = Sortable.create(items, {
        animation: 350,
        delay: 500,
        draggable: ".draggableCard",
        removeCloneOnHide: true, 
        onEnd: function (/**Event*/evt) {
            save()
        },
    });

}

allSortableCards();

export { allSortableCards }
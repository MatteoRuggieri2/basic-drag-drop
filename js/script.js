// Seleziono tutte le colonne e tutti i task
const columns = document.querySelectorAll(".column");
const tasks = document.querySelectorAll(".task");

// EVENTI DRAG E DROP
// (https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API#concepts_and_usage)
/*

Per task:
- dragstart  |    L'utente inizia a draggare l'elemento
- dragend  |      L'utente termina il drag dell'elemento

Per colonne:
- dragover  |     L'elemento trascinato viene trascinato su un bersaglio di rilascio valido, ogni poche centinaia di millisecondi.
- dragenter  |    L'elemento trascinato entra in un target di rilascio valido
- dragleave  |    L'elemento trascinato lascia una destinazione di rilascio valida.
- drop  |         L'elemento viene rilasciato su un bersaglio di rilascio valido

*/

// Aggiungo per ogni task un eventListener all'inizio e alla fine del drag
tasks.forEach(task => {
    task.addEventListener("dragstart", dragStart);
    task.addEventListener("dragend", dragEnd);
})

columns.forEach(column => {
    column.addEventListener("dragover", dragOver);
    column.addEventListener("dragenter", dragEnter);
    column.addEventListener("dragleave", dragLeave);
    column.addEventListener("drop", dragDrop);
})



// FUNCTIONS
function dragStart() {
    console.log("dragStart");
    
}

function dragEnd() {
    console.log("dragEnd");
    
}

function dragOver(e) {
    e.preventDefault();  // L'evento dragover di default ci blocca "dragdrop", per evitarlo quindi usiamo preventDefault
    console.log("dragOver");
    
}

function dragEnter() {
    console.log("dragEnter");
    
}

function dragLeave() {
    console.log("dragLeave");
    
}

function dragDrop() {
    console.log("dragDrop");
    
}
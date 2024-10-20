// Seleziono tutte le colonne e tutti i task
const columns = document.querySelectorAll(".column");
const tasks = document.querySelectorAll(".task");
let dragItem = null;

const data = [
    {
        id: 0,
        name: "In coda",
        tasks: [
            {id: 0, name: "Rispondere alle email"},
            {id: 1, name: "Allenare le gambe"},
            {id: 2, name: "Ricaricare credito telefono"},
            {id: 3, name: "Prenotare visita dentista"}
        ]
    },
    {
        id: 1,
        name: "Aperto",
        tasks: []
    },
    {
        id: 2,
        name: "In revisione",
        tasks: []
    },
    {
        id: 3,
        name: "Completato",
        tasks: []
    },
]

/* <section class="column">
    <h2 class="column-title">Iniziati</h2>
    <div class="task" draggable="true">Terminare l'esercizio di base del drag e drop</div>
</section> */

// CREAZIONE DINAMICA COLONNA E TASK
const columnsContainer = document.querySelector("#columns-container");

data.forEach(column => {

    const newColumn = document.createElement("section"); // Colonna
    newColumn.classList.add("column");
    newColumn.setAttribute("data-id", column.id);
    const columnTitle = document.createElement("h2");
    columnTitle.classList.add("column-title");
    columnTitle.textContent = column.name;
    newColumn.append(columnTitle);

    column.tasks.forEach(task => {

        const newTask = document.createElement("div"); // Task
        newTask.classList.add("task");
        newTask.setAttribute("draggable", true);
        newTask.setAttribute("data-id", task.id);
        newTask.textContent = task.name;
        newColumn.append(newTask);
    })
    
    columnsContainer.append(newColumn);
})







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

    /* Appena afferro l'elemento lo nascondo aggiungendo la classe css "d-none".
    Il tutto però è talmente rapido da non permettermi di draggarlo, per
    questo motivo devo aggiungere un deelay minimo */
    setTimeout(() => this.classList.add("d-none"), 0)

    // Salvo l'elemento correntemente draggato
    dragItem = this;
    
}

function dragEnd() {
    console.log("dragEnd");
    dragItem.classList.remove("d-none"); // Quando finisce il drag lo rendo di nuovo visibile, togliendo d-none
    dragItem = null;
    
}

function dragOver(e) {
    e.preventDefault();  // L'evento dragover, di default, ci blocca "dragdrop", per evitarlo quindi usiamo preventDefault
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

    // Appendo alla colonna il task correntemente draggato (dragItem)
    this.append(dragItem);
    
}
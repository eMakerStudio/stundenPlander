const einheiten = document.querySelectorAll(".einheit");
const all_ue = document.querySelectorAll(".status");
let draggableUE = null;

einheiten.forEach((einheit) => {
    einheit.addEventListener("dragstart", dragStart);
    einheit.addEventListener("dragend", dragEnd);
});

function dragStart(){
    draggableUE = this;
    console.log("dragStart");
}   

function dragEnd(){
    draggableUE = null;
    console.log("dragEnd");
}

all_ue.forEach((status) => {
    status.addEventListener("dragover", dragOver);
    status.addEventListener("dragenter", dragEnter);
    status.addEventListener("dragleave", dragLeave);
    status.addEventListener("drop", dragDrop);

});

function dragOver(e){
    e.preventDefault();
    console.log("dragOver");
}

function dragEnter(){
    console.log("dragEnter");
}

function dragLeave(){
    console.log("dragLeave");
}

function dragDrop(){
    this.appendChild(draggableUE);
    console.log("drop");
}


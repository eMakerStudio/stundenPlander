const einheiten = document.querySelectorAll(".einheit");

einheiten.forEach(einheit => {
    einheit.addEventListener("dragstart", dragStart);
});

function dragStart(){
    console.log("dragStart");
}
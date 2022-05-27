const list = document.getElementById("list")
const removeAll = document.getElementById("remove-all")
const add = document.getElementById("add");
const text = document.getElementById("text")



// Adds the item, if there is something in input
function addItem() {
  if (!text.value.length) {
    alert("there is no input in the box");
    return false;
  }
  list.innerHTML += `<li><span onclick="remove(event)">${text.value}</span></li>`
  text.value=''
}

// Remove All Button
removeAll.addEventListener("click", ()=>{
  list.innerHTML = ""
})

//Enter Key for adding Item
text.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addItem()
  }
});

// Button for adding Item
add.addEventListener("click", ()=>{
  addItem()
})



function remove(e) {
  var element = e.target;
  element.remove();
}
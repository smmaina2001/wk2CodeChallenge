document.addEventListener("DOMContentLoaded", function () {
    const itemInput = document.getElementById("itemInput");
    const addButton = document.getElementById("addButton");
    const clearButton = document.getElementById("clearButton");
    const itemList = document.getElementById("itemList");
  
    let items = JSON.parse(localStorage.getItem("shoppingList")) || [];
  
    function renderList() {
      itemList.innerHTML = ""; // Clear the list
      for (let i = 0; i < items.length; i++) {
        const li = document.createElement("li"); // create list
        if (items[i].purchased) {
          li.textContent = items[i].text;
          li.style.textDecoration = "line-through";
        }
  
        li.addEventListener(
          "click",
          (function (index) {
            return function () {
              items[index].purchased = !items[index].purchased;
              saveList();
              renderList();
            };
          })(i)
        );
  
        li.addEventListener(
          "dblclick",
          (function (index) {
            return function () {
              const newItem = prompt("Edit item:", items[index].text);
              if (newItem) {
                items[index].text = newItem;
                saveList();
                renderList();
              }
            };
          })(i)
        );
        itemList.appendChild(li);
      }
    }
  
    function saveList() {
      localStorage.setItem("shoppingList", JSON.stringify(items));
    }
    addButton.addEventListener("click", function () {
      const itemText = itemInput.value.trim();
      if (itemText) {
        items.push({ text: itemText, purchased: false });
        itemInput.value = "";
        saveList();
        renderList();
      }
    });
  
    clearButton.addEventListener("click", function () {
      items = [];
      saveList();
      renderList();
    });
  
    renderList();
  });
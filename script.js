 const itemInput = document.getElementById('item-input');
 const addBtn = document.getElementById('add-btn');
  const clearBtn = document.getElementById('clear-btn');
  const shoppingList = document.getElementById('shopping-list');
  let items = JSON.parse(localStorage.getItem('shoppingList')) || [];

        function renderList() {
            shoppingList.innerHTML = '';
            items.forEach((item, index) => {
                const li = document.createElement('li');
                li.className = 'list-item';
                if (item.purchased) li.classList.add('purchased');
                li.innerHTML = `
                    <span>${item.name}</span>
                    <div>
                        <button class="edit-btn">Edit</button>
                        <button class="purchase-btn">${item.purchased ? 'Unpurchase' : 'Purchase'}</button>
                        <button class="delete-btn">Delete</button>
                    </div>
                `;
                shoppingList.appendChild(li);

                li.querySelector('.edit-btn').addEventListener('click', () => editItem(index));
                li.querySelector('.purchase-btn').addEventListener('click', () => togglePurchase(index));
                li.querySelector('.delete-btn').addEventListener('click', () => deleteItem(index));
            });
            saveToLocalStorage();
        }

        function addItem() {
            const itemName = itemInput.value.trim();
            if (itemName) {
                items.push({ name: itemName, purchased: false });
                itemInput.value = '';
                renderList();
            }
        }

        function editItem(index) {
            const li = shoppingList.children[index];
            const span = li.querySelector('span');
            const editInput = document.createElement('input');
            editInput.type = 'text';
            editInput.className = 'edit-input';
            editInput.value = items[index].name;
            li.insertBefore(editInput, span);
            li.removeChild(span);

            function saveEdit() {
                items[index].name = editInput.value;
                renderList();
            }

            editInput.addEventListener('blur', saveEdit);
            editInput.addEventListener('keyup', (e) => {
                if (e.key === 'Enter') saveEdit();
            });
            editInput.focus();
        }

        function togglePurchase(index) {
            items[index].purchased = !items[index].purchased;
            renderList();
        }

        function deleteItem(index) {
            items.splice(index, 1);
            renderList();
        }

        function clearList() {
            items = [];
            renderList();
        }

        function saveToLocalStorage() {
            localStorage.setItem('shoppingList', JSON.stringify(items));
        }

        addBtn.addEventListener('click', addItem);
        clearBtn.addEventListener('click', clearList);
        itemInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') addItem();
        });

        renderList();
    

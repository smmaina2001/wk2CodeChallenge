document.addEventListener('DOMcontentLoaded'),() => (
    let SHOPPING LIST = JSON.parse (localstorage.getItem('SHOPPING LIST')) [];

const iteminput = document.getElementById ('item-input');
const add Button = document.getElementById ('add-button');
const SHOPPING LISTcontainer = document.getElementById('SHOPPING LIST');
const clear Button = document.getElementById('clear button');
function renderlist() {
    SHOPPINGLISTcontainer.innerHTML = '';
    SHOPPINGLIST.forEach(item,index) => {
        const li = document.createElement(li);
        li.content = item,text;.classList.toggle('purchase',item-purchased);
      
        const ActionsDiv = document.createElement('div');
        ActionsDiv.classList.add('item-actions');

        const toggle button = document.createElement('button');
        toggleButton.textcontent = itempurchased 'unmark' : 'mark';
        toggleButton.addEventListener 'click',() => togglepurchased (index);
        ActionsDiv.appendChild(toggleButton );
        

        const edit button = document.createElement ('button');
        edit.Buttontextcontent = 'edit';
        edit.Button.addEventListener('click',() => edititem(index) );
        ActionsDiv.appendChild(editButton)

        
       const deleteButton = document.createElement('button');
       deleteButton.text = 'delete';
       deleteButton.addEventListener('click', ()=>deleteItem(index));
       ActionsDiv.appendChild(deleteButton);

    
        li.appendChild(ActionsDiv);
        SHOPPINGLISTcontainer.appendChild(li);
         }


     });
let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);

// Delete event 
itemList.addEventListener('click', removeItem);

// Add item
function addItem(e) {
    e.preventDefault();

    // Get input value
    let newItem = document.getElementById('item').value;

    // Create new li element
    let li = document.createElement('li');
    
    //Add class
    li.className = 'list-group-item';

    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create delete button (X Button) element
    let xButton = document.createElement('button');

    // Add classes to X Button
    xButton.className = 'deleteButton';

    // Append text node
    xButton.appendChild(document.createTextNode('X'));

    // Append X button to li
    li.appendChild(xButton);

    // Append li to list
    itemList.appendChild(li);
}

// Remove item
function removeItem(e) {
    if(e.target.classList.contains('deleteButton')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
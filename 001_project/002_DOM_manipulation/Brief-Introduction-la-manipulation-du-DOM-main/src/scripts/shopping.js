function addItemList(){
    let itemToAdd = document.getElementById('articleToAdd').value
    console.log(itemToAdd)

    if(itemToAdd){
        let newItem = document.createElement('li');
        newItem.innerHTML = ' - ' + itemToAdd + '  <button class="deletebutton">X</button>';

        document.getElementById('shoppingList').append(newItem);
        newItem.classList.add("font-sketch");
        newItem.classList.add("text-xl");
        newItem.classList.add("py-2");
        
        let deleteButton = newItem.querySelector('.deletebutton');
        deleteButton.addEventListener('click', function() {
            newItem.remove();
        });

        document.getElementById('articleToAdd').value = '';
        return;
    }
    else{
        return alert('rien a rajouter')
    }

}
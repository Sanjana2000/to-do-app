const addToDoForm = document.getElementById('addToDoForm');
const newToDoText = document.getElementById('newToDoText');
const toDoList = document.getElementById('toDoList');

function onReady() {
  let toDos = [];
 let id= 0;
  function createNewToDo() {
    if (!newToDoText.value) {
      return;
    }
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id:id

    });
     id++;
    newToDoText.value = '';
    renderTheUI();


  }
 function deleteToDo (id){

   toDos = toDos.filter(toDo => toDo.id !==id);
   renderTheUI();
 }
  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');

      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      const deleteButton = document.createElement('button');

    deleteButton.addEventListener('click', () => deleteToDo(toDo.id));
    newLi.textContent = toDo.title;
     deleteButton.textContent = "Delete";
      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);
    });

  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();


  });


}

window.onload = function() {
  onReady();
};

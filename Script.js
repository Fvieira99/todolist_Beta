let addTaskBtn = document.getElementById('plusIcon');
let toDoList = document.getElementById('toDoList');
// let doneList = document.getElementById('doneList');
let addTaskInput = document.getElementById('addTaskInput');


addTaskBtn.onclick = function(){
  if(addTaskInput.value === ""){
    alert('Add Task')
  }
  else{
  let newTask = document.createElement("li")
  newTask.innerHTML += `<span>${addTaskInput.value}</span>`
  newTask.classList.add("itemList")
  toDoList.appendChild(newTask)

  // let inputText = documemnt.createElement("span")
  // inputText.innerText = `${addTaskInput.value}`
  // inputText.classList.add("taskSpan")
  // newTask.appendChild(newTaskText)

  // toDoList.innerHTML += `<li id ="itemList">${newTask}<i id= "checkBtn" class='bx bx-check-circle' ></i><i id="trashBtn" class='bx bxs-trash' ></i></li>`;
  
  let checkBtn = document.createElement("i")
  checkBtn.className = 'bx bxs-check-circle'
  checkBtn.id = 'checkBtn'
  newTask.appendChild(checkBtn)

 
  let trashBtn = document.createElement("i")
  trashBtn.className = 'bx bxs-trash'
  trashBtn.id = 'trashBtn'
  newTask.appendChild(trashBtn)
  
  addTaskInput.value = ""
}

}


 toDoList.onclick = function(e){
   console.log(e.target)
   let icon = e.target;
   if(icon.className == 'bx bxs-trash'){
    let listItem = icon.parentElement;
    listItem.classList.toggle('transition') 
   // Criando evento para o fim da transição de remoção do Li  
    listItem.addEventListener('transitionend', function(){
      
      listItem.remove()}
    
    ) 
    

    
    
    }

   if(icon.className == 'bx bxs-check-circle'){
     icon.parentElement.classList.toggle('active')
   }  
}


// toDoList.onclick = function(e){
//   let checkBtn = e.target;
///   if(checkBtn.className == 'bx bx-check-circle'){
//     checkBtn.parentElement.classList.toggle('active')
//   }
// }






// let checkBtn = document.getElementById('checkBtn')
// let itemList = document.getElementById('itemList').innerHTML

// checkBtn.onclick = function(){
//   doneList.innerHTML += 
// }


let addBtn = document.getElementById("addBtn");
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

showTasks();

addBtn.addEventListener("click",function(){
    
    let taskText = taskInput.value;

    if(taskText ===""){
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML =
        taskText +
        '<button class="deleteBtn">Delete</button>';
    
    
    taskList.appendChild(li);

    taskInput.value ="";

    saveData();

});

taskList.addEventListener("click", function(e){

    if(e.target.classList.contains("deleteBtn")){
        
        e.target.parentElement.remove();

        saveData();
    }

}); 

function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
}

function showTasks(){
    taskList.innerHTML=localStorage.getItem("data");
}

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

function createListItem(taskTest) {
    const li = document.createElement("li");
    li.textContent = taskTest;
    li.addEventListener("click", toggleTaskCompletion);
    return li;
}

console.log(createListItem("testing"));


function addTask(){
    const taskItem = taskInput.value.trim();

    //console.log(taskItem);

    if (taskItem != ""){
        const newListItem = createListItem(taskItem);
        taskList.append(newListItem);
        taskInput.value = "";
    }
}

function toggleTaskCompletion(event) {
    event.target.classList.toggle("completed");
}

addTaskBtn.addEventListener("click", addTask);

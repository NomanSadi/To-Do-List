
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("task-container");

function addList(){
    if (inputBox.value === ''){
        alert("Give Your Task a Name! You Wrote Nothing!")
    }

    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = '';
    saveData()
}

listContainer.addEventListener("click", function(task){
    if (task.target.tagName === "LI"){
        task.target.classList.toggle("checked");
        saveData()
    }

    else if (task.target.tagName === "SPAN"){
        task.target.parentElement.remove();
        saveData()
    }
    }, false);

    function saveData() {
        localStorage.setItem("data", listContainer.innerHTML);
    }

    function showTask(){
        listContainer.innerHTML = localStorage.getItem("data");
    }

    showTask()
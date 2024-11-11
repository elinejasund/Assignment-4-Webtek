let addbar = document.getElementById("taskadd")
let taskList = document.getElementById("taskslist")
let button = document.getElementById("button")
let tasks = []
let i = 0;
let count = document.getElementById("count")
let tasksDone = 0



button.addEventListener("click", addTask)

taskList.addEventListener("change", checked)

window.addEventListener("load", function(){
    addbar.focus()
})

function checked(ev){
    let endret = ev.target
    li = endret.parentElement
    li.classList.toggle("checked")
    if (li.classList.contains("checked")) {
        li.setAttribute('style', 'text-decoration: line-through');
        tasksDone += 1
        count.innerText = (tasksDone + "/" + (i + 1))

    } else{
        li.setAttribute('style', 'text-decoration: none');
        tasksDone -= 1
        count.innerText = (tasksDone + "/" + (i + 1))
    }
}


function addTask(){
    
    if (tasks.length == 0) {
        tasks.unshift('<li><input type="checkbox" class ="todo" id ="todo' + 0 + '">' + addbar.value + '</input></li>')
    }

    else{
        i += 1
        tasks.unshift('<li><input type="checkbox" class ="todo" id ="todo' + i + '">' + addbar.value + '</input></li>')
    }

    taskList.innerHTML = null
    tasksDone = 0
    addbar.value = ""

    for (let i = 0; i < tasks.length; i++) {
        taskList.innerHTML += tasks[i]
    }
    count.innerText = (tasksDone + "/" + (i + 1))

}






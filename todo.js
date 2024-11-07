let addbar = document.getElementById("taskadd")
let taskList = document.getElementById("tasks")
let button = document.getElementById("button")

window.addEventListener("load", function(){
    addbar.focus()
})

button.addEventListener("click", addTask)

let list = []
function addTask(){
    list.unshift('<li><input type="checkbox" id ="todo">'+ addbar.value + '</inpput></li>')
    console.log(list)

    taskList.innerHTML = null
    for (let i = 0; i < list.length; i++) {
        taskList.innerHTML += list[i]
    }
}



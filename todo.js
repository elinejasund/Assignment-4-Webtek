let addbar = document.getElementById("taskadd")
let list = document.getElementById("tasks")
let button = document.getElementById("button")

window.addEventListener("load", function(){
    addbar.focus()
})

button.addEventListener("click", addTask)

function addTask(){
    list.innerHTML += '<li>' + '<input type="checkbox" id ="todo">'+ addbar.value + '</inpput></li>'
}

//Tester branch
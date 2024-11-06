/* Task  1.2 */
for (let i = 1; i < 21; i++){
    console.log(i)
}

/* Task  1.3 */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0){
      console.log("eple")
    }
    else if (numbers[i] % 5 === 0){
      console.log("kake")
    }
    else{
      console.log(numbers[i])
    }
  }

/* Task  1.4 */

let headline = document.getElementById("title");
headline.innerText = "Hello, JavaScript"

/* Task  1.5 */
let changeBox = document.getElementById("magic")
let disp = document.getElementById("display")
let visi = document.getElementById("visibility")
let res = document.getElementById("reset")

disp.addEventListener("click", changeDisplay)
visi.addEventListener("click", changeVisibility)
res.addEventListener("click", reset)



function changeDisplay (){
  changeBox.style.display = "none"
  console.log("Display changed")
}

function changeVisibility () {
  changeBox.style.visibility = "hidden";
  changeBox.style.display = "block";
  console.log("Visibility changed")
}

function reset () {
  changeBox.style.display = "block";
  changeBox.style.visibility = "visible";
  console.log("Reset")
}

/* Task 1.6 */
const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Python',
    'Java',
    'AJAX',
    'JSON',
    'React',
    'Angular',
    'Bootstrap',
    'Node.js'
];

let liste = document.getElementById("tech")

for (let elements = 0; elements < technologies.length; elements++){
  liste.innerHTML += "<li>" + technologies[elements] + "</li>"
}

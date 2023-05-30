
// let ul = document.querySelector(".ul")
// let btn = document.querySelector(".add-btn")

// btn.addEventListener("click" , MyFun)

function MyFun(){
    let todo = document.querySelector(".input-text")
    let b = todo.value
    let a = document.querySelector(".list")
    let c = document.createElement("p")
    c.className= "todo-list"
    let d  = document.createElement("button")
    d.innerText = "delete"
    c.innerHTML = b
    a.appendChild(c);
    c.appendChild(d)
    d.className = "delete"
    d.addEventListener("click" , function(){
        a.removeChild(c)
    })

}
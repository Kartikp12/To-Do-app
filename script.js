function myfun(){
    
    let todo = document.querySelector(".task")
    let value = todo.value;
    if(value==""){
        alert("enter a valid task ");
    }
    else{
    let result = document.querySelector(".result")
    let a = document.createElement("p");
    a.className = "task"
    let butt = document.createElement("button")
    butt.textContent = "remove";
    a.innerHTML = value;
    result.appendChild(a);
    a.appendChild(butt)
    butt.className = "delete"
    butt.addEventListener("click" , function(){
        result.removeChild(a)
    })

}}

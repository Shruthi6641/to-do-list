let input=document.getElementById("to-do")
let listContainer=document.getElementById("list-container")

function addTask(){
    if(input.value==""){
        alert("Please enter the task")

    }
    else{
        let li=document.createElement("li")
        li.innerHTML=input.value
        listContainer.appendChild(li)
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)

    }
    input.value="";
    saveData()
}

input.addEventListener("keydown",(e)=>{
    if (e.key==="Enter"){
        addTask()
    }

})

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}

listContainer.addEventListener("click",function(e){
    e.target.tagName=="SPAN"
    e.target.parentElement.remove()

})

function showData(){
    listContainer.innerHTML=localStorage.getItem("data")
}
showData()
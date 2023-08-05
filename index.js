const title = document.getElementById("title");
const description = document.getElementById("description");
const form = document.querySelector("form");
const container = document.querySelector(".container");

const task = localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];  // array of object //intitially empty
showAllTasks();
function showAllTasks(){
    task.forEach((value, index)=>{
        const div = document.createElement("div");
        div.setAttribute("class","task");
        const innerDiv= document.createElement("div");
        div.append(innerDiv);
        const p = document.createElement("p");
        p.innerText = value.title;
        innerDiv.append(p);
        const span = document.createElement("span");
        span.innerText = value.description;
        innerDiv.append(span);

        const btn =document.createElement("button");
        btn.setAttribute("class", "delete");
        btn.innerText="-";
        btn.addEventListener("click",()=>{
           removeTasks();
           task.splice(index, 1);
           localStorage.setItem("tasks", JSON.stringify(task));
           showAllTasks();
        });
        div.append(btn);
        container.append(div);
        // if we want we could create a seperate function to create all these elements and call that function again and again within this loop
    });
}

// phle wali task array ko empty krne ke liye
function removeTasks(){
    task.forEach(()=>{
const div = document.querySelector(".task");
div.remove();
    });
}
form.addEventListener("submit", (e)=>{
    e.preventDefault();  // form submit ab bhi ho skta hai br reload nhi hoga
    console.log("hello");
removeTasks();
    task.push({
title: title.value,
description : description.value
});
localStorage.setItem("tasks", JSON.stringify(task));
showAllTasks(); // har baar task wali loop bilkul satrting se chalegi aur phle wale bhi rhenge toh issue create hoga
})
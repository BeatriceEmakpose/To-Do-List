function addTask() {
    const input=document.getElementById("taskInput");
    const taskText= input.value.trim();

    if (taskText==="") return;

    const li=document.createElement("li");
    li.className="list-group-item";

    li.innerHTML= `<span
    onclick="this.parentElement.classList.toggle('done')">${taskText}</span>
              <button class='remove-btn' onclick='removeTask(this)'>x</button>`;
     document.getElementById ("taskList"). appendChild(li);
     input.value="";
}
     
     function removeTask(button) {
        const li=button.parentElement;
        li.remove();
     }


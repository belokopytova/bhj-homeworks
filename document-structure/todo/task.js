const taskForm = document.getElementById("tasks__form");
const taskInput = document.getElementById("task__input");
const taskList = document.getElementById("tasks__list");

taskForm.addEventListener("submit", event => {

    if (taskInput.value.trim()) {
        let newDivElement = document.createElement('div');
            newDivElement.className = "task"
            newDivElement.innerHTML = `<div class="task__title">${taskInput.value}</div>
                                        <a href="#" class="task__remove">&times;</a>`
        taskList.append(newDivElement)
    }
    taskInput.value = ''
    event.preventDefault() 
})

document.addEventListener("click", element => {

    if (element.target.className === ("task__remove")) {
        element.target.parentElement.remove()
    }
})
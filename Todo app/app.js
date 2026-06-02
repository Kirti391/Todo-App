let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {

    if (inp.value.trim() === "") {
        alert("Please enter a task");
        return;
    }

    let item = document.createElement("li");

    let taskText = document.createElement("span");
    taskText.innerText = inp.value;

    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("edit");

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");

    item.appendChild(taskText);
    item.appendChild(editBtn);
    item.appendChild(delBtn);

    ul.appendChild(item);

    inp.value = "";
});


ul.addEventListener("click", function (event) {

    // DELETE TASK
    if (event.target.classList.contains("delete")) {

        let listItem = event.target.parentElement;

        console.log("Task deleted");

        listItem.remove();
    }

    // EDIT TASK
    if (event.target.classList.contains("edit")) {

        let listItem = event.target.parentElement;

        let taskSpan = listItem.querySelector("span");

        let updatedTask = prompt(
            "Edit your task:",
            taskSpan.innerText
        );

        if (
            updatedTask !== null &&
            updatedTask.trim() !== ""
        ) {
            taskSpan.innerText = updatedTask;
        }
    }
});

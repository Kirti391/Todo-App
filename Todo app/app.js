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

    // MARK DONE BUTTON
    let doneBtn = document.createElement("button");
    doneBtn.innerText = "Done";
    doneBtn.classList.add("done");

    // EDIT BUTTON
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("edit");

    // DELETE BUTTON
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");

    item.appendChild(taskText);
    item.appendChild(doneBtn);
    item.appendChild(editBtn);
    item.appendChild(delBtn);

    ul.appendChild(item);

    inp.value = "";
});

/* EVENT DELEGATION */

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

    // MARK DONE
    if (event.target.classList.contains("done")) {

        let listItem = event.target.parentElement;

        let taskSpan = listItem.querySelector("span");

        taskSpan.style.textDecoration = "line-through";
        taskSpan.style.color = "gray";

        event.target.innerText = "Completed";
        event.target.disabled = true;
    }
});

const task = document.getElementById("task");
const taskList = document.getElementById("task-list");

task.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const taskText = task.value.trim();
    if (taskText === "") {
      return;
    } else {
      taskList.innerHTML += `<li class=".task-item">${taskText}</li>`;
    }
  }
});

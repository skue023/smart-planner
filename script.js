const input = document.getElementById("input");
const taskList = document.getElementById("task-list");
const tasks = [];

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const taskText = input.value.trim();
    if (taskText === "") {
      return;
    } else {
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;
      taskItem.classList.add("task-item");
      taskList.appendChild(taskItem);
      tasks.push(taskText);
    }
  }
});

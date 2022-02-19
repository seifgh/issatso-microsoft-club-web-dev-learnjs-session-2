let tasks = [
  {
    value: "A simple todo task",
    isCompleted: false,
  },
  {
    value: "A simple todo task",
    isCompleted: false,
  },
  {
    value: "A simple todo task",
    isCompleted: false,
  },
  {
    value: "A simple todo task",
    isCompleted: true,
  },
];

// select Dom elements
const addTaskForm = document.querySelector("#add-task-form");
const addTaskInput = addTaskForm.querySelector("input");
const tasksCounter = document.querySelector("#tasks-counter");
const tasksUl = document.querySelector("#tasks");

function createTaskElement(task, index) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = task.value;
  li.appendChild(span);

  if (task.isCompleted) {
    li.classList.add("completed");
  } else {
    const button = document.createElement("button");
    button.onclick = () => completeTask(index);
    button.classList.add("btn");
    button.textContent = "Complete";
    li.appendChild(button);
  }
  return li;
}

function updateTasks() {
  tasksUl.innerHTML = "";
  const tasksElements = tasks.map(createTaskElement);
  // const tasksElements = [];

  // for (let i = 0; i < tasks.length; i++) {
  //   tasksElements.push(createTaskElement(tasks[i], i));
  // }
  tasksUl.append(...tasksElements);
}

function updateTasksCounter() {
  const completedTasksLength = tasks.filter((task) => task.isCompleted).length;
  tasksCounter.textContent = `${completedTasksLength}/${tasks.length}`;
}

function updateHtml() {
  updateTasks();
  updateTasksCounter();
}

function completeTask(taskIndex) {
  tasks[taskIndex].isCompleted = true;
  updateHtml();
}

function addNewTask(e) {
  e.preventDefault();
  tasks.unshift({
    value: addTaskInput.value,
    isCompleted: false,
  });
  addTaskInput.value = "";
  updateHtml();
}

addTaskForm.onsubmit = addNewTask;
updateHtml();

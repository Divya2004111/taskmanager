function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  const li = document.createElement('li');
  li.textContent = taskInput.value;
  taskList.appendChild(li);
  taskInput.value = '';

  const delBtn = document.createElement('button');
  delBtn.textContent = "❌";
  delBtn.onclick = () => li.remove();
  li.appendChild(delBtn);
  
  taskList.appendChild(li);
  taskInput.value = '';
}



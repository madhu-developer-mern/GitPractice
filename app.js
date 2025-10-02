const addBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Add todo
addBtn.addEventListener('click', () => {
    const task = todoInput.value.trim();
    if(task !== "") {
        const li = document.createElement('li');

        // Add task text
        li.textContent = task;

        // Toggle completion on click
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        // Add delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent triggering toggle
            li.remove();
        });

        li.appendChild(deleteBtn);
        todoList.appendChild(li);
        todoInput.value = '';
    }
});

// Optional: Press Enter key to add todo
todoInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        addBtn.click();
    }
});

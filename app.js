const addBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Add todo
addBtn.addEventListener('click', () => {
    const task = todoInput.value.trim();
    if(task !== "") {
        const li = document.createElement('li');
        li.innerHTML = `
            ${task} 
            <button onclick="deleteTask(this)">Delete</button>
        `;
        todoList.appendChild(li);
        todoInput.value = '';
    }
});

// Delete todo
function deleteTask(btn) {
    btn.parentElement.remove();
}

// Optional: Press Enter key to add todo
todoInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        addBtn.click();
    }
});

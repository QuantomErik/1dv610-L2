class TodoList {
    #todos = []
    #currentEditIndex = null // Current task being edited

    constructor() {
        this.#loadTasks()
    }


    addTask(task) {
        this.#todos.push(task)
        this.#saveTasks()
        this.displayTodos()
    }

    getTasks() {
        return this.#todos
    }

    deleteTask(index) {
        this.#todos.splice(index, 1)
        this.#saveTasks()
        this.displayTodos()
    }

    editTask(index, updatedTask) {
        this.#todos[index] = updatedTask
        this.#saveTasks()
    }

    #saveTasks() {
        localStorage.setItem('todos', JSON.stringify(this.#todos))
    }

    #loadTasks() {
        this.#todos = JSON.parse(localStorage.getItem('todos')) || []
    }

    displayTodos() {
        const todoList = document.getElementById('todoList')
        todoList.innerHTML = ''
        this.#todos.forEach((todo, index) => {
            const li = document.createElement('li')
            li.textContent = todo

            const editButton = document.createElement('button')
            editButton.textContent = 'Edit'
            editButton.classList.add('edit-btn')
            editButton.addEventListener('click', () => this.editTodoItem(index))

            const deleteButton = document.createElement('button')
            deleteButton.textContent = 'Delete'
            deleteButton.classList.add('delete-btn')
            deleteButton.addEventListener('click', () => this.deleteTask(index))
            /* deleteButton.addEventListener('click', function() {
                todoList.deleteTask(index);
            }); */

            li.appendChild(editButton)
            li.appendChild(deleteButton)
            todoList.appendChild(li)

        })
    }

    editTodoItem(index) {
        document.getElementById('editSection').style.display = 'block'
        document.getElementById('editTodoInput').value = this.#todos[index]
        this.#currentEditIndex = index
    }

    saveEditedTask() {
        const editedTodo = document.getElementById('editTodoInput').value
        if (editedTodo) {
            this.editTask(this.#currentEditIndex, editedTodo)
            document.getElementById('editSection').style.display = 'none'
            this.displayTodos()
        }
    }

}

export const initTodoList = () => {
    const todoList = new TodoList()
    todoList.displayTodos()

    document.getElementById('addTodoButton').addEventListener('click', function () {
        const todoInput = document.getElementById('todoInput').value
        if (todoInput) {
            todoList.addTask(todoInput)
            document.getElementById('todoInput').value = ''
            todoList.displayTodos()
        }
    })

    document.getElementById('saveEditButton').addEventListener('click', function() {
        todoList.saveEditedTask()
    })

    /* document.getElementById('delete-btn').addEventListener('click', function() {
        todoList.deleteTask()
    }) */
}
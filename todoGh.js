const form = document.querySelector('#todo-list')
const input = document.querySelector('#list')
const taskList = document.querySelector('#task-list')



taskList.addEventListener('click', function(e) {
        if (e.target.tagName === 'LI') {
                e.target.classList.toggle('completed')
        } else if (e.target.tagName==='BUTTON') {
                e.target.parentElement.remove()
        }
        
})


form.addEventListener('submit', function(e) {
        e.preventDefault()
        const newTask = document.createElement('li')
        const removeBtn = document.createElement('button')
        removeBtn.innerText = 'X'
        newTask.innerText = input.value 
        newTask.append(removeBtn)
        input.value = ""
        taskList.append(newTask)
})
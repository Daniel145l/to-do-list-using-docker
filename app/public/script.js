document.addEventListener('DOMContentLoaded', function() { 
    const taskForm = document.getElementById('form');
    const taskInput = document.getElementById('input-title');
    const taskList = document.getElementById('list');
    const pogressCount = document.getElementById('progress');

    const fetchTasks = async () => {
        const res = await fetch('/api/tasks');
        const tasks = await res.json();

        console.log(tasks.length);

        /*to do*/
        // const checked = tasks.filter(task => task.getAttribute('checked')).length;

        // let progress = checked / tasks.length * 100;

        // pogressCount.textContent = progress + '%';

        taskList.innerHTML = '';

        tasks.forEach(task => {
            const li = document.createElement('li');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = task.id;

            const label = document.createElement('label');
            label.setAttribute('for', task.id);
            label.textContent = task.title;

            li.appendChild(checkbox);
            li.appendChild(label);

            console.log(task);
            
            const deleteTask = document.createElement('button');
            deleteTask.textContent = 'Delete';
            deleteTask.addEventListener('click', async () => {
                console.log('Delete', task.id);
                await fetch(`/api/tasks/${task.id}`, {
                    method: 'DELETE'
                });
                fetchTasks();
            });

            li.appendChild(deleteTask);
            taskList.appendChild(li);
        });
    };

    taskForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const newTask = {
            title: taskInput.value
        };

        await fetch('/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTask)
        });

        taskInput.value = '';
        fetchTasks();
    });

    fetchTasks();
});
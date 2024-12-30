const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

const DATA_DIR = '/data';
const DATA_FILE = path.join(DATA_DIR, 'task.json');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR);
}
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify([]));
}

app.get('/api/tasks', (req, res) => {
  if (fs.existsSync(DATA_FILE)) {
    let tasks = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));

    tasks = tasks.map(task => {
        if (!task.id) {
          task.id = Date.now().toString();
        }
        return task;
      });
  
      fs.writeFileSync(DATA_FILE, JSON.stringify(tasks));

    res.json(tasks);
  } else {
    res.json([]);
  }
});

app.post('/api/tasks', (req, res) => {
    const newTask = { ...req.body, id: Date.now().toString() };
    let tasks = [];
  
    if (fs.existsSync(DATA_FILE)) {
        tasks = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    }
  
    tasks.push(newTask);
    fs.writeFileSync(DATA_FILE, JSON.stringify(tasks));
    res.status(201).json(newTask);
});

app.delete('/api/tasks/:id', (req, res) => {
    const taskId = req.params.id;
    let tasks = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));

    tasks = tasks.filter(task => task.id !== taskId);

    fs.writeFileSync(DATA_FILE, JSON.stringify(tasks));
    res.status(200).json({ message: 'Task deleted' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

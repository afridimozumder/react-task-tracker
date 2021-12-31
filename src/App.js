import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Apointment',
        day: 'Fab 15th 2 PM',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Fab 6th 10 am',
        reminder: true,
    },
    {
        id: 3,
        text: 'Shopping',
        day: 'Feb 3rd 7 PM',
        reminder: false,
    },
])

// Delete Tasks

const deleteTask = (id) => {
  setTasks(tasks.filter((task)=>task.id !== id))
}

// Tpggle Reminder
const toggleReminder = (id) =>{
  setTasks(tasks.map((task)=>
    task.id === id ? {...task, reminder:!task.reminder} 
    : task))
}

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? 
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> 
      : ('No Tasks To Show')}
    </div>
  );
}

Header.defaultProps = {
  title: 'Task Tracker',
}

export default App;

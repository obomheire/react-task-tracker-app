import Task from './Task'
const Tasks = ({tasks, onDelete, onToggle}) => {

    return (
        <>
         {tasks.map(task =>(
         <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
         ))}
        </>
    )
}

export default Tasks

/*import { useState } from "react"
const Tasks = () => {


    
    const [tasks, setState] = useState([
        {
            id: 1,
            text: 'Doctors Appoitment',
            day: 'Feb 2th at 2: 30pm',
            reminder: true
        },
        {
            id: 2,
            text: 'Meeting at School',
            day: 'Feb 6th at 1: 30pm',
            reminder: true
        },
        {
            id: 3,
            text: 'Food Shopping',
            day: 'Feb 5th at 2: 30pm',
            reminder: false
        }
    ])
    return (
        <>
         {tasks.map(task =>(
         <h3 key={task.id}>{task.text}</h3>
         ))}
        </>
    )
}

export default Tasks
*/

/*
const tasks = [
    {
        id: 1,
        text: 'Doctors Appoitment',
        day: 'Feb 2th at 2: 30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1: 30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2: 30pm',
        reminder: false
    }
]
const Tasks = () => {
    return (
        <>
         {tasks.map(task =>(
         <h3 key={task.id}>{task.text}</h3>
         ))}
        </>
    )
}

export default Tasks
*/
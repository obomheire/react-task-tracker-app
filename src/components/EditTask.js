import { useState } from "react";
import { useLocation, useNavigate} from "react-router-dom";

const EditTask = ({onUpdate}) => {

  const navigate = useNavigate()
  const location = useLocation()
  const { task } = location.state
  // const {id, text, reminder, day} = task
  // console.log(task)
  
  const [id, setId] = useState(task.id)
    const [text, setText] = useState(task.text)
    const [day, setDay] = useState(task.day)
    const [reminder, setReminder] = useState(task.reminder)

    const onSubmit = (e) =>{
        e.preventDefault()

        if(!text) {
            alert('Plese ass a Task')
            return
        }

        onUpdate({id, text, day, reminder})
        navigate('/')

        // setId('')
        // setText('')
        // setDay('')
        // setReminder(false)
    }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} />
      </div>

      <div className="form-control">
        <label>Day & Time</label>
        <input type="text" placeholder="Add Day & Time"  value={day} onChange={(e) => setDay(e.target.value)} />
      </div>

      <div className="form-control-check">
        <label>Set Reminder</label>
        <input type="checkbox" checked={reminder}  value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
      </div>

      <input type="submit" value='Update Task' className='btn btn-block'/>
    </form>
  );
};

export default EditTask;

import React, { useRef } from 'react';

function InputTask(props) {
  let nameRef = useRef();
  let timeRef = useRef();

  const addTask = () => {
    let task = {
      name:nameRef.current.value,
      time: timeRef.current.value,
      id:Date.now()
    }
    props.addNewTask(task);
  }

  return (
    <React.Fragment>
      <div className="container- my-3">
        <h2>Task Manager</h2>
        <div className="col-lg-5">
          <label>Task Name:</label>
          <input ref={nameRef} type="text" className="form-control mb-3" />
          <label>Task Time:</label>
          <input ref={timeRef} type="time" className="form-control" />
          <button onClick={addTask} className="btn btn-success mt-2 me-2" >Add New</button>
          <button onClick={props.resetAllTasks} className="btn btn-danger mt-2">Reset</button>
        </div>
      </div>
    </React.Fragment>

  )
}

export default InputTask
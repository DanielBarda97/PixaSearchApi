import React from 'react';

function ListTask(props) {
  // React.Fragment -> תגית שלא רואים בדום בדפדפן
  return (
    <React.Fragment>
      <h2>List of tasks you added:</h2>
      <div className="row">
        {props.tasks_ar.map(item => {
          return (
            <div key={item.id} className="col-lg-7 border p-2">
              <button onClick={
                () => {
                  props.delTaskById(item.id)
                }
              } className="btn btn-danger rounded-circle float-end">X</button>
              <h3>{item.name} - {item.time}</h3>
            </div>
          )
        })}
      </div>
    </React.Fragment>
  )
}

export default ListTask
import React, { useState } from 'react';
import {sortBy} from "lodash";
import InputTask from './inputTasks';
import ListTask from './listTasks';

function AppTasks(props){
  let [tasks_ar,setTasksAr] = useState([
    {name:"go work",time:"09:00",id:1},
    {name:"go home",time:"15:50",id:2},
  ])

  const addNewTask = (_newTask) => {
    // גם מוסיף את המשימה החדש ומסדר לפי השעה
    let temp_ar = [...tasks_ar,_newTask];
    temp_ar = sortBy(temp_ar,"time");

    setTasksAr(temp_ar);
    // setTasksAr([...tasks_ar,_newTask])
  }

  const resetAllTasks = () => {
    setTasksAr([]);
  }

  const delTaskById = (_delId) => {
    // משתמשים בפילטר כדי להוריד את האייטם
    // שיש לו את האיי די שאנחנו רוצים למחוק
    // ובעצם טיפ איי אר שווה לכל מערך הטאסק מלבד
    // הפריט שרצינו למחוק
    let temp_ar = tasks_ar.filter(item => item.id != _delId);
    setTasksAr(temp_ar);
  }

  

  return(
    <div className="container">
      <InputTask resetAllTasks={resetAllTasks} addNewTask={addNewTask} />
      <ListTask delTaskById={delTaskById} tasks_ar={tasks_ar} />
    </div> 
  )
}

export default AppTasks;
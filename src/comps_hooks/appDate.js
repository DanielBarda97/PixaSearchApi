import React, { useState } from 'react';
import DateInput from './dateInput';
import DateShow from './dateShow';

function AppDate(props){
  let [date, setDate] = useState("2022-01-01");

  return(
    <div className="container">
      <DateShow date={date} />
      <DateInput setDate={setDate} />
    </div> 
  )
}

export default AppDate
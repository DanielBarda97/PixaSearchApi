import React, { useEffect, useState } from 'react';

function DateShow(props){
  let [days,setDays] = useState(999)
  // משמש גם כ 
  // COMPONENT DIDMOUNT AND COMPENET DID UPDATE
  // תלוי אם המערך ריק או ששמנו מאפיין שם שמגדיר מתי הוא מפעיל
  // את עצמו שוב
  useEffect(() => {
    console.log("did mount")
    calcDays(props.date)
    // יקרא לפונקציה בפעם הראשונה וגם כל פעם 
    // שהמאפיין במערך משתנה במקרה שלנו הפרופס דייט
  },[props.date])

  const calcDays = (_newDate) => {
    // Date.parse -> הופך תאריך שמעבירים לזמן יוניקס
    let time = Date.parse(_newDate) - Date.now();
    let newDays = time / (1000 * 60 * 60 * 24);
    setDays(Math.floor(newDays))
    // this.setState({ days: Math.floor(newDays) })
  }

  

  return(
    <div className="text-center">
    <h2>Countdown to: {props.date}</h2>
    <h3>Days: {days}</h3>
  </div>
  )
}

export default DateShow
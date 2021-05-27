import React, { useRef } from 'react';

function DateInput(props) {
  // like React.creatRef in regular react
  let inputRef = useRef();

  const onChangeDate = () => {
    let input = inputRef.current.value;
    props.setDate(input);
  }

  return (
    <div className="col-lg-4 mx-auto  d-flex">
      <input ref={inputRef} type="date" className="form-control" />
      <button onClick={onChangeDate} className="btn btn-info">Change</button>
    </div>
  )
}

export default DateInput
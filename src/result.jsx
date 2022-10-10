import React from 'react';

const ShowResult = (props) => {
  return (
    <div className="show">
      <input type="text" onClick={props.handleClick} value={props.value} />
    </div>
  )
};
export default ShowResult;
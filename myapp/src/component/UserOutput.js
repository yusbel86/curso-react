import React from 'react';


const userOutput = (props) => {
  return (
    <div>
      <p>Username: {props.userName}</p>

      <p>I hope I'll be overwritten!</p>
    </div>
  );
}

export default userOutput;
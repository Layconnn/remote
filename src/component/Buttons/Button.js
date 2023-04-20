import React from 'react';

const Buttons = (props) => {

  return (
    <>
          <button className="channel-buttons" onClick={props.onClick} >{props.channel}</button>
    </>
  )
}

export default Buttons

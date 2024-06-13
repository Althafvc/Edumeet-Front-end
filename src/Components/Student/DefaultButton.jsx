import React from 'react';

const DefaultButton = ({ clicked, value, classname, children }) => {
  return (
    <button type="submit" onClick={clicked} className={classname}>
      {children || value}
    </button>
  );
}

export default DefaultButton;

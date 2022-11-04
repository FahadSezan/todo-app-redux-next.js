import React from 'react';

function CheckButton({ handleCheck }) {
  return (
    <div className="form-check">
      <input
        className="form-check-input p-3 border-0 shadow-none"
        type="checkbox"
        value=""
        id="defaultCheck1"
        onClick={handleCheck}
      />
    </div>
  );
}

export default CheckButton;

import React from "react";
import "./Controls.css";

const Controls = ({ onIncrement, onDecrement }) => {
  return (
    <div className="Counter__controls">
      <button type="button" onClick={onDecrement}>
        Decreace
      </button>
      <button type="button" onClick={onIncrement}>
        Increace
      </button>
    </div>
  );
};

export default Controls;

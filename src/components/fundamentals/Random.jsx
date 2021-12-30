import React from "react";

export default (props) => {
  const { min, max } = props;
  const random = parseInt(Math.random() * (props.max - props.min)) + props.min;

  return (
    <div id="random-number-challenge">
      <p>Min Value: { min }</p>
      <p>Max Value: { max }</p>
      <p>
        <strong>Random Choice</strong>: {random}
      </p>
    </div>
  );
};

import React from "react";

// ==========ここから編集する==========
const Counter = ({ count, increment, decrement }) => (
  <>
    <div>{count}</div>
    <button onClick={() => increment(3)}>+</button>
    <button onClick={() => decrement(1)}>-</button>
  </>
);
// ==========ここまで編集する==========

export default Counter;

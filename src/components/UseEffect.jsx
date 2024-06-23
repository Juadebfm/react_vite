// import React, { useEffect, useState } from "react";

// const UseEffect = () => {
//   const [count, setCount] = useState(0);
//   const [flag, setFlag] = useState(false);

//   useEffect(() => {
//     console.log("useEffect runs");
//   }, [count, flag]);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <p>Flag: {flag ? "True" : "False"}</p>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//         className="rounded-full bg-red-500 text-white"
//       >
//         Increment Count
//       </button>
//       <button
//         onClick={() => {
//           setFlag(!flag);
//         }}
//         className="rounded-full bg-red-500 text-white"
//       >
//         Toggle Flag
//       </button>
//     </div>
//   );
// };

// export default UseEffect;

// 1. useEffect runs as an after effect of a action - reload, button click etc
// 2. useEffect runs regardless, now the output of functionality or values inside the use effect is dependent on if these functionalities and values are truthy or falsey
// 3. It is common practice to use the dependency values as they are. Please do not negate them.
// 4. That your page loads twice means that the useEffect has only ran effectively once.

import React, { useReducer, useEffect } from "react";

// Step 1: Define the initial state
const initialState = {
  count: 0,
  flag: false,
};

// Step 2: Create the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "toggleFlag":
      return { ...state, flag: !state.flag };
    default:
      return state;
  }
};

const UseEffect = () => {
  // Step 3: Use useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log("useEffect runs");
  }, [!state.count, state.flag]);

  return (
    <div>
      <p>Count: {state.count}</p>
      <p>Flag: {state.flag ? "True" : "False"}</p>
      <button
        onClick={() => dispatch({ type: "increment" })}
        className="rounded-full bg-red-500 text-white"
      >
        Increment Count
      </button>
      <button
        onClick={() => dispatch({ type: "toggleFlag" })}
        className="rounded-full bg-red-500 text-white"
      >
        Toggle Flag
      </button>
    </div>
  );
};

export default UseEffect;

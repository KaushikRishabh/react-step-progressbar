import React, { useEffect, useState } from "react";
import "./Progressbar.css";

const Progressbar = () => {
  const [steps, setSteps] = useState([
    {
      id: 1,
      name: "Step 1"
    },
    {
      id: 2,
      name: "Step 2"
    },
    {
      id: 3,
      name: "Step 3"
    }
  ]);
  return (
    <div>
      {/* <div className="container">
        <ul className="progressbar">
          <li className="active">Step 1</li>
          <li className="active">Step 2</li>
          <li>Step 3</li>
        </ul>
      </div> */}
      <div className="container">
        <ul className="progressbar">
          {steps.map((step, index) => {
            return (
              <li className="active" key={index}>
                {" "}
                {step.name}
              </li>
            );
          })}
          <li className="active" key={4}>
            {" "}
            Step 4
          </li>
        </ul>
      </div>
    </div>
  );
};

// {steps.map((step, index) => {
//   return (
//     <li className="active" key={index}>
//       {" "}
//       {step.name}
//     </li>
//   );
// })}
// <li className="active" key={4}>
//   {" "}
//   Step5
// </li>

export default Progressbar;

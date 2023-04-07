import React, { useEffect, useState } from "react";

const ChildContact = (props) => {
  console.log("child render");

  const [res, setRes] = useState(props.first);

  useEffect(() => {
    console.log("Hello Child");
    setRes(props.first);
  }, []);
  return (
    <>
      <div>
        <h1>ChildComponent</h1>

        <h3>Contact Child 1</h3>
        <h3>Contact Child {res}</h3>
        <h3>Contact Child {props.first}</h3>
        <button
          onClick={() => {
            setRes(res + 1);
          }}
        >
          Child Button
        </button>
      </div>
    </>
  );
};

export default ChildContact;

import React, { useEffect, useState } from "react";
import ChildContact from "./ChildContact";
import Crud from "./Crud.js";
import Chatgpt from "./Chatgpt.js";

const Contact = () => {
  const [check, setCheck] = useState(1);

  console.log("Parent render");

  useEffect(() => {
    console.log("Hello Parent");
  });

  return (
    <>
      <h1>Contact Us</h1>
      {/* <button
        onClick={() => {
          setCheck(check + 1);
        }}
      >
        {check}
      </button>
      <div>
        <ChildContact first={check} />
      </div> */}

      <Crud />
      {/* <Chatgpt /> */}
    </>
  );
};

export default Contact;

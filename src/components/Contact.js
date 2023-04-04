import ContactChild from "./contactChild";
import React, { useState } from "react";

console.log("Parent cons");
const Contact = () => {
  const [check, setCheck] = useState(1);

  console.log("Parent render");

  return (
    <>
      <h1>Contact Us</h1>
      <button
        onClick={() => {
          setCheck(check + 1);
        }}
      >
        {check}
      </button>
      <div>
        <ContactChild first={check} />
      </div>
    </>
  );
};

export default Contact;

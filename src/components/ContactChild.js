import React, { useState } from "react";

console.log("child cons");
const ContactChild = (props) => {
  console.log("child render");
  console.log(props);
  const [res, setRes] = useState(props.first);

  return (
    <>
      <h3>Contact Child 1</h3>
      <h3>Contact Child 2</h3>
      <h3>Contact Child {res}</h3>
    </>
  );
};

export default ContactChild;

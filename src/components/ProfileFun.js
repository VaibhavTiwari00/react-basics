import { useEffect, useState } from "react";

const ProfileFun = (props) => {
  const [propValue, setPropValue] = useState(props.count);
  console.log("check");

  useEffect(() => {
    console.log("use Effect");
    const timer = setInterval(() => {
      console.log("setinterval");
    }, 1000);
    return () => {
      console.log("use effect return");
      clearInterval(timer);
    };
  });
  return (
    <div>
      <h5>Profile Function based component </h5>
      <h6 style={{ fontSize: "30px" }}>Props: {props.count}</h6>
      <button
        onClick={() => {
          setPropValue(propValue + 1);
        }}
      >
        {propValue}
      </button>
    </div>
  );
};

export default ProfileFun;

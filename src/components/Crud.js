import React, { useState } from "react";

const Crud = () => {
  const [inpValue, setInpValue] = useState("");
  const [arr, setArr] = useState([]);

  const del = (index) => {
    setArr(arr.filter((item, id) => id !== index));
  };

  const edit = (index) => {
    console.log(index);
  };
  return (
    <div>
      <input
        type="text"
        id="inputCrud"
        value={inpValue}
        onChange={(e) => {
          setInpValue(e.target.value);
        }}
      />

      <button
        onClick={() => {
          setArr((arr) => [...arr, inpValue]);
          console.log("hello add");
          setInpValue("");
        }}
      >
        save
      </button>
      <div>
        {arr.map((ele, ind) => {
          return (
            <div
              style={{
                display: "flex",
                width: "50%",
                justifyContent: "space-between",
                borderBottom: "1px solid black",
                padding: "10px",
              }}
              key={ind}
            >
              <p>! {ele}</p>{" "}
              <div>
                <button
                  onClick={() => {
                    del(ind);
                  }}
                >
                  Del
                </button>
                &nbsp;
                <button
                  onClick={() => {
                    edit(ind);
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Crud;

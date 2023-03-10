import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {
    className: "greeting",
    id: "title",
    style: {
      color: "red",
    },
  },
  "Helloo"
);
const heading2 = React.createElement(
  "h2",
  {
    className: "greeting",
    id: "title2",
    style: {
      color: "red",
    },
  },
  "Hello h2"
);
const div = React.createElement(
  "div",
  {
    className: "container",
    id: "titleDiv",
  },
  [heading, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(div);

// obj = {
//   fn1: function () {
//     console.log(this.title);
//   },
//   fn2: () => {
//     console.log(this.title);
//   },
//   title: "vaibhav",
// };
// obj.fn1();
// obj.fn2();

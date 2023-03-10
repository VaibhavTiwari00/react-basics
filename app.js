import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {
    className: "greeting",
    id: "title",
    key: "title",
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
    key: "title2",
  },
  "Hello h2"
);
const heading3 = (
  <h3 key="title3" className="greeting">
    Hello3
  </h3>
);

const div = React.createElement(
  "div",
  {
    className: "container",
    id: "titleDiv",
  },
  [heading, heading2, heading3]
);
const Headercomponent = () => {
  return (
    <div>
      {div}
      <h4 key="title4" className="greeting">
        Hello4
      </h4>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Headercomponent />);

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

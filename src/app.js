import React from "react";
import ReactDOM from "react-dom/client";
import BodyLayout from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Shimmer from "./components/Shimmer.js";

const AppLayout = () => {
  return (
    <>
      <Header />
      <BodyLayout />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

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

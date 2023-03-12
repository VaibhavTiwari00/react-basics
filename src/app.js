import React from "react";
import ReactDOM from "react-dom/client";
import BodyLayout from "./components/body";
import Header from "./components/header";
import Footer from "./components/footer";


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

import React from "react";
import Profileclass from "./Profileclass";
import ProfileFun from "./ProfileFun";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 5,
      count2: 6,
    };
    console.log("constructor About ");
  }
  componentDidMount() {
    console.log("componentDidMount About");
  }
  render() {
    console.log("render about");
    return (
      <>
        <h3>About US</h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "5%",
          }}
        >
          {/* <Profileclass count={this.state.count1} content={"first"} /> */}
          {/* <Profileclass count={this.state.count2} content={"2nd"} /> */}
          <ProfileFun count={1} />
        </div>
      </>
    );
  }
}

export default About;

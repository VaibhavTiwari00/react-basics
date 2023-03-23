import React from "react";

class Profileclass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.count,
    };
    console.log(`constructor profile ${this.props.content}`);
  }
  componentDidMount() {
    console.log(`componentdidmount profile ${this.props.content}`);
    this.timer = setInterval(() => {
      console.log("profile class stetimeout");
    }, 1000);
  }
  componentDidUpdate() {
    console.log(`component did update`);
  }
  componentWillUnmount() {
    console.log(`componentWillUnmount`);
    clearInterval(this.timer);
  }
  render() {
    console.log(`render profile ${this.props.content}`);
    return (
      <div>
        <h5>I'm class based component = {this.state.count}</h5>
        <button
          onClick={() => {
            this.setState({
              count: ++this.state.count,
            });
          }}
        >
          Use Me
        </button>
      </div>
    );
  }
}
export default Profileclass;

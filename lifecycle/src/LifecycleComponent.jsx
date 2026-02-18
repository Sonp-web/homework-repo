import React from "react";
class LifecycleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
  }
  async componentDidMount() {
    try {
      const responce = await fetch(
        "https://todo-redev.herokuapp.com/api/todos?isCompleted=true",
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjEyM0BnbWFpbC5jb20iLCJpZCI6MjIwMSwiaWF0IjoxNzcxNDM0NDI1fQ.B46W-DKss246oDkixErTRJGKvbwrKvpwPVMoynoFa5Y",
            accept: "application/json",
          },
        },
      );
      const data = await responce.json();
      console.log(data);
    } catch (e) {
      console.log(e.message);
    }
  }
  shouldComponentUpdate(nextProp, nextState) {
    return this.state.count % 2 != 0;
  }
  componentDidUpdate() {
    console.log(this.state.count);
  }
  componentWillUnmount() {
    console.log("delete");
  }
  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <>
        <button onClick={this.increment}>{this.state.count}</button>
      </>
    );
  }
}
export default LifecycleComponent;

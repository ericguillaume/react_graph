import React from "react";

class AppStateTest extends React.Component {
  constructor() {
    super();

    this.state = {
      data: []
    };

    this.setStateHandler = this.setStateHandler.bind(this); // bind donne authorisation d'etre executer qd data change
  }
  setStateHandler() {
    var item = "setState...";
    var myArray = this.state.data.slice();
    myArray.push(item);
    this.setState({ data: myArray });
  }
  render() {
    return (
      <div>
        <button onClick={this.setStateHandler}>SET STATE</button>
        <h4>State Array: {this.state.data}</h4>
      </div>
    );
  }
}
export default AppStateTest;

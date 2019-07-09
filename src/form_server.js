import React, { Component } from "react"; // react has to be important to compile JSx

// rerender avec un diff sur state
export default class FormServer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      greeting: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); // bind sur la data, de quelle change, change
  }

  // quand input textfield change
  handleChange(event) {
    // only add changes to state, this way it can do its diff and decide to update rendering
    this.setState({ name: event.target.value });
  }

  // quand form submitted
  handleSubmit(event) {
    event.preventDefault(); // auto completion
    // which port is used for fetch
    fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
      .then(response => response.json())
      .then(state => this.setState(state)); // ajoute que ce qu'il faut de la map:   greeting => value
  }

  render() {
    // direct sous header <img src={logo} className="App-logo" alt="logo" />;
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Enter your name: </label>
            <input
              id="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <button type="submit">Submit</button>
          </form>
          <p>{this.state.greeting}</p>
        </header>
      </div>
    );
  }
}

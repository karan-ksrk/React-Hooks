import { Component } from "react";
import { Row } from "react-bootstrap";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Karan",
      surname: "Singh",
      width: window.innerWidth,
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSurnameChange = this.handleSurnameChange.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    document.title = this.state.name + " " + this.state.surname;
    window.addEventListener("resize", this.handleResize);
  }
  componentDidUpdate() {
    document.title = this.state.name + " " + this.state.surname;
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }
  handleSurnameChange(e) {
    this.setState({
      surname: e.target.value,
    });
  }
  handleResize() {
    this.setState({
      width: window.innerWidth,
    });
  }

  render() {
    return (
      <section className="App">
        <Row label="Name">
          <input value={this.state.name} onChange={this.handleNameChange} />
        </Row>
        <Row label="Surname">
          <input
            value={this.state.surname}
            onChange={this.handleSurnameChange}
          />
        </Row>
        <Row label="Width">{this.state.width}</Row>
      </section>
    );
  }
}

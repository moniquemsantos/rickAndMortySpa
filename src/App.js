import "./App.css";
import SearchBox from "./components/SearchBox";
import "./components/Characters";
import Characters from "./components/Characters";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: Characters,
      searchfield: "",
    };
  }
  render() {
    return (
      <div>
        <h1>Rick and Morty</h1>
        <SearchBox />
        <Characters />
      </div>
    );
  }
}

export default App;

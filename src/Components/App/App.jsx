import react from "react";
import Header from "../Header/Header";
import ResultContainers from "../ResultContainer/ResultContainer";
import SearchBox from "../SearchBox/SearchBox";
import './App.css';

const name = require('@rstacruz/startup-name-generator');

class App extends react.Component {
  state = {
    headerText: "Name It!",
    headerExpanded: true,
    suggestedNames: [],
  };

  handleInputChange = (inputText) => {
    name(inputText);
    this.setState({
      headerExpanded: !inputText, suggestedNames: inputText ? name(inputText) : [],
    })
  };

  render() {

    return (
      <div>
        <Header headerExpanded={this.state.headerExpanded}
          headTitle={this.state.headerText} />
        <SearchBox onInputChange={this.handleInputChange} />
        <ResultContainers suggestedNames={this.state.suggestedNames} />
      </div>
    )
  }
}

/*function App() {
  return <h1>This is Functional Components.</h1>

}
*/
export default App;

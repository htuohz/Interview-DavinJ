import React from "react";
import Error from "./Error";
import Emojies from "./Emojies";
// import Emoji from "./Emoji";

class App extends React.Component {
  state = {
    isOpen: false,
  };

  handleSwitch = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  render() {
    const { isOpen } = this.state;
    return (
      <>
        <h1>Global Search</h1>
        <button onClick={this.handleSwitch}>switch to the error</button>
        {isOpen && <Error />}
        {/* {!isOpen && <Emoji />} */}
        {<Emojies />}
      </>
    );
  }
}

export default App;

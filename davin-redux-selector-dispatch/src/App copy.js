import React from "react";
import { connect } from "react-redux";
import { changeUserName, changeStatus } from "./actions";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChangeUserName = () => {
    const { changeUserName } = this.props;
    changeUserName({ username: "test" });
  };

  handleChnageStatus = () => {
    const { changeStatus } = this.props;
    changeStatus({ status: "online" });
  };

  render() {
    return (
      <>
        <h1>app {this.props.username}</h1>
        <h2>{this.props.status}</h2>
        <button onClick={this.handleChangeUserName}>change username</button>
        <button onClick={this.handleChnageStatus}>change status</button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    user: { username, status },
  } = state;
  return {
    username,
    status,
  };
};

const mapActionsToProps = {
  changeUserName,
  changeStatus,
};

export default connect(mapStateToProps, mapActionsToProps)(App);

import React from "react";
import { connect } from "react-redux";
import { changeUserName, changeStatus, loadRepos } from "./actions";
import "./App.css";

class App extends React.Component {
  componentDidMount() {
    const { loadRepos } = this.props;
    loadRepos();
  }

  render() {
    const { loading, repos } = this.props;

    return (
      <>
        <h1>Github Repos</h1>
        {loading && <h1>...Loading</h1>}
        {!loading && (
          <ul>
            {this.props.repos.map((repo, index) => (
              <li key={index}>{repo.name}</li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    user: { username, status },
    repos: { loading, repos },
  } = state;
  return {
    username,
    status,
    loading,
    repos,
  };
};

const mapActionsToProps = {
  changeUserName,
  changeStatus,
  loadRepos,
};

export default connect(mapStateToProps, mapActionsToProps)(App);

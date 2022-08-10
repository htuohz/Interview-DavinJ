import React from "react";
import { connect } from "react-redux";
import { changeUserName, changeStatus, loadEmojies } from "./actions";
import "./App.css";

class Emoji extends React.Component {
  componentDidMount() {
    const { loadEmojies } = this.props;
    loadEmojies();
  }

  render() {
    const { loading, emojies } = this.props;

    return (
      <>
        <h1>Github Repos</h1>
        {loading && <h1>...Loading</h1>}
        {!loading && (
          <ul>
            {emojies.map((emojie, index) => (
              <li key={index}>{JSON.stringify(emojie)}</li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    emojies: { loading, emojies },
  } = state;
  return {
    loading,
    emojies,
  };
};

const mapActionsToProps = {
  changeUserName,
  changeStatus,
  loadEmojies,
};

export default connect(mapStateToProps, mapActionsToProps)(Emoji);

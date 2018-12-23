import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions/actionCreator";
import Main from "./Main";

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  };
}

function mapDispatchToProps(dipatch) {
  return bindActionCreators(actionCreators, dipatch);
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

export default App;

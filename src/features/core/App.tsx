import * as React from "react";
import { connect } from "react-redux";

import { init } from "./reducer";

export interface AppProps {
  init: () => void;
}

export class App extends React.Component<AppProps> {
  componentDidMount() {
    this.props.init();
  }

  render() {
    return <div>Olá mundo </div>;
  }
}

export default connect(
  null,
  { init }
)(App);

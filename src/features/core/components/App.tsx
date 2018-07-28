import * as React from "react";
import { connect } from "react-redux";

import { StoreState } from "@src/store";

import { init } from "../redux/actions";
import { getAnualCDI } from "../redux/selectors";

import InvestimentForm from "@features/investiment/components/InvestimentForm";

export interface AppProps {
  init: () => void;
  anualCdi: number;
}

export class App extends React.Component<AppProps> {
  componentDidMount() {
    this.props.init();
  }

  render() {
    return (
      <div>
        <p>cdi anual de {(this.props.anualCdi * 100).toFixed(2)}%</p>
        <InvestimentForm />
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState) => ({
  anualCdi: getAnualCDI(state)
});

export default connect(
  mapStateToProps,
  { init }
)(App);

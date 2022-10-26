import React, { Component } from "react";
import { connect } from "react-redux";
import * as CarroAction from "./components/store/actions/carro";
import { bindActionCreators } from "redux";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.carros.map((i, k) => (
          <div key={k}>
            {i.modelo}
            <button onClick={() => this.props.limparModeloCarro()}>
              Limpar Carro
            </button>
          </div>
        ))}
        <hr />
        <br />
        <ul>
          {this.props.estados.map((i,k) => (
            <li key={k}>{i}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  carros: state.carro.carros,
  estados: state.estado.estados,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CarroAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

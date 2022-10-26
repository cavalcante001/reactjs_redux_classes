import React, { Component } from 'react';
import { connect } from "react-redux";
import * as CarroAction from './components/store/actions/carro';
import { bindActionCreators } from "redux";

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      this.props.carros.map((i, k) => (
        <div key={k}>
          {i.modelo} 
          <button onClick={() => this.props.limparModeloCarro()}>Limpar Carro</button>
        </div>
      ))
    );
  }
}

const mapStateToProps = state => ({
  carros: state.carro.carros,
});

const mapDispatchToProps = dispatch => (bindActionCreators(CarroAction, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(App);

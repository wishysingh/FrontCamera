import React, { Component } from 'react';
import './App.css';
import NavBar from './component/NavBar';
import Buttons from './component/Buttons';
import VideoPlay from './component/VideoPlay';
import { clickButton } from './action';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return{
      buttonState: state.searchingState.buttonState
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      onClickButton: (atPresent) => dispatch(clickButton(atPresent))
  }
}


class App extends Component {
  render() {
    console.log('@@', this.props);
    return (
      <div>
        <NavBar/>
        <VideoPlay playVideo={this.props.buttonState}/>
        <Buttons click={this.props.onClickButton} value={this.props.buttonState}></Buttons> 
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

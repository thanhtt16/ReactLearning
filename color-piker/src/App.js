import React, {Component} from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import Reset from './components/Reset';
import SizeSetting from './components/SizeSetting';
import Result from './components/Result';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      fontSize: 15
    };
    this.onSetColor = this
      .onSetColor
      .bind(this);
    this.onSetSize = this
      .onSetSize
      .bind(this);
    this.onResetState = this
      .onResetState
      .bind(this);
  }
  onSetColor(params) {
    this.setState({color: params})
  }
  onSetSize(params) {
    if (this.state.fontSize + params >= 8 && this.state.fontSize + params <= 36) {
      this.setState({
        fontSize: this.state.fontSize + params
      })
    }
  }
  onResetState() {
    console.log("object");
    this.setState({color: 'red', fontSize: 15})
  }
  render() {
    return (
      <div className="container mt-50">
        <div className="row">
          <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor}/>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <SizeSetting fontSize={this.state.fontSize} onChangeSize={this.onSetSize}/>
            <Reset onResetState={this.onResetState}/>
          </div>
          <Result color={this.state.color} fontSize={this.state.fontSize}/>
        </div>
      </div>
    );
  }
}

export default App;

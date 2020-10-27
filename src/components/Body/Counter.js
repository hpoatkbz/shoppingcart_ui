
import React, {  Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0
        };
      }
    
      handleIncerement() {
        this.setState({
          count: this.state.count + 1
        });
      }
    
      handleDecrement() {
        this.setState({
          count: this.state.count - 1
        });
      }
    render() {
      return (
        <div>
            <div className="row mx-1">
            <button className="btn btn-light font-weight-bold border border-2" onClick={() => this.handleDecrement()}> <ion-icon name="remove-outline"/></button>
            <button type="button" className="btn btn-light ">{this.state.count}</button>
            <button className="btn btn-light font-weight-bold border border-2" onClick={() => this.handleIncerement()}> + </button>
            </div>
        </div>
      );
    }
  }
export default Counter;

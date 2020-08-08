import React from 'react';
class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    increment() {
      this.setState({
        count: this.state.count + 1
      });
    };
    
    decrement() {
      this.setState({
        count: this.state.count - 1
      });
    };
  
    render() {
      return (
    <div>
      <button className='increase' onClick={(e) => this.increment(e)}>Increase</button>
      <button className='decrease' onClick={(e) => this.decrement(e)}>Decrease</button>
      <h3>Current Count: {this.state.count}</h3>
    </div>
      );
    }
  };
  
  export default Counter;
  
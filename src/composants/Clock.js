import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hour: new Date().toLocaleTimeString(),
      date: new Date().toDateString()
    };
  }

  componentDidMount () {
    this.timer = setInterval(this.tick, 1000);
  }

  componentWillMount () {
    clearInterval(this.timer);
  }

  
  tick = () => {
    this.setState({hour: new Date().toLocaleTimeString()});
  }
  

  render () {
    return (
      <p className="date-time">
        {this.state.hour} <br/> 
        {this.state.date}
      </p>
    )
  }
};


export default Clock;
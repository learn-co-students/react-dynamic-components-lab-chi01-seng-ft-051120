import React, { Component } from 'react';
import App from './App';

export default class ColorBox extends Component {

  state = {
    todos: [

    ]
  }

  changeOpacity = () => {
    if (this.props.opacity >= 0.2) {
      return <ColorBox opacity={this.props.opacity - 0.1} />
    } else {
      return null
    }
  }

  render() {
    return (
          <div className="color-box" style={{opacity: this.props.opacity}}>
            {this.changeOpacity()}
          </div>
    )
  }
}

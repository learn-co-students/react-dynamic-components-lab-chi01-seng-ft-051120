import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const opacityValue = this.props.opacity
    return (
      <div className="color-box" style={{opacity: opacityValue}}>
        {opacityValue < .2 ? null : <ColorBox opacity={opacityValue - .1}/>}
      </div>
    )
  }

}


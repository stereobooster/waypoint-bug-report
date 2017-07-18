import React, { Component } from 'react'
import Waypoint from 'react-waypoint';

class Card extends Component {
  render() {
    return (<div className="Card">{ this.props.number }</div>)
  }
}

const CardWaypoint = (props) => (
  <Waypoint onEnter={ props.onEnter.bind(null, props.number) } bottomOffset="70%" topOffset="10%">
    <div><Card {...props} /></div>
  </Waypoint>
)

export default CardWaypoint


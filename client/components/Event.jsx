import React, { Component, PropTypes } from 'react';

// Task component - represents a single todo item
export default class Event extends Component {
  render() {
    return (
      <li>{this.props.event.type}</li>
    );
  }
}

Event.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  event: PropTypes.object.isRequired,
};

import React, { Component, PropTypes } from 'react';
import moment from "moment"

export default class EventListing extends Component {
  constructor(props) {
    super(props);

    this.formatDate = this.formatDate.bind(this);
    this.formatTime = this.formatTime.bind(this);
  }


	formatDate(dateObj) {
		return moment(dateObj).format('L');
	}

	formatTime(dateObj) {
		return moment(dateObj).format('LT');
	}


  render() {
    let time;
    let { date } = this.props.event;
    const { employerName } = this.props.event;
    const { registrationStatus } = this.props.event;
    const { registrants } = this.props.event;
    time = this.formatTime(date);
    date = this.formatDate(date);
    
    return (
      <tr>
        <td>{employerName}</td>
        <td>{date} – {time}</td>
        <td>{registrationStatus}</td>
        <td>{registrants}</td>
      </tr>
    );
  }
}

EventListing.propTypes = {
  event: PropTypes.object.isRequired,
};

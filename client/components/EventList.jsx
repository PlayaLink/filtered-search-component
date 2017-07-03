import React, { Component, PropTypes } from 'react';


import EventListing from "./EventListing.jsx"

export default class EventList extends Component {
  render() {
    return (
      <section className="event-list">
        <h4>Results: <span className="badge">{this.props.events.length}</span></h4>
        <table className="table table-striped table-hover ">
          <thead>
            <tr>
              <th>Event Sponsor</th>
              <th>Event Date and Time</th>
              <th>Event Status</th>
              <th>Registrants</th>
            </tr>
          </thead>
          <tbody>

            {this.props.events.map( function(event) {
              return <EventListing event={event} />
            })}

          </tbody>
        </table>
      </section>
    );
  }
}

EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
      _id: PropTypes.number,
      description: PropTypes.string,
      type: PropTypes.string,
      employerName: PropTypes.string,
      industry: PropTypes.string,
      targetJobPosition: PropTypes.string,
      date: PropTypes.string,
      registrationStatus: PropTypes.string,
      registrants: PropTypes.number,
      city: PropTypes.string,
      state: PropTypes.string,
      hasCatering: PropTypes.boolean,
      hasReception: PropTypes.boolean,
      receptionLocation: PropTypes.string,
      accountManager: PropTypes.string,
  }))
}

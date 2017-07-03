import React, { Component, PropTypes } from 'react';


import Header from "./Header.jsx"
import Filters from "./Filters.jsx"
import EventList from "./EventList.jsx"



export default class EventSearchPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      filters: [
        {
          filterType: "type",
          filterValue: "All"
        },
        {
          filterType: "employerName",
          filterValue: "All"
        },
        {
          filterType: "filterhHasCatering",
          filterValue: "All"
        },
        {
          filterType: "registrationStatus",
          filterValue: "All"
        },
        {
          filterType: "industry",
          filterValue: "All"
        }
      ],
      events: []
    }

    this.applyFilters = this.applyFilters.bind(this);
    this.updateFilters = this.updateFilters.bind(this);

  }

  applyFilters(eventList, filters){
    debugger;
    const filteredEvents = [];
    filters
  }

  updateFilters(fieldName, value){
    let newState = [];
    this.state.filters.map( (filter) => {
      if(filter.filterType === fieldName){
        filter.filterValue = value;
        newState.push(filter);
      }
      newState.push(filter);
    });
    this.setState(newState);
    console.log("Current State:", this.state);
  }

  render() {
    debugger;
    let events = this.props.events;
    let filters = this.state.filters;
    events = this.applyFilters(events, filters);
    console.log(events);
    return (
      <div>
        <Header />
        <Filters updateFilters={this.updateFilters} filters={this.props.filters}/>
        <EventList events={this.props.events} />
      </div>

    );
  }
}

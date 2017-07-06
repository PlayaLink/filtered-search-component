import React, { Component, PropTypes } from 'react';


import Header from "./Header.jsx"
import Filters from "./Filters.jsx"
import EventList from "./EventList.jsx"



export default class EventSearchPage extends Component {
  constructor(props){
    super(props);

    this.state = {
        filters:  [
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

  getKeys(filters){
    const keys = [];
    filters.map( (filter) => {
      const key = {};
      key[filter.filterType] = filter.filterValue;
      keys.push(key);
    });
    return keys;
  }

  findObjects(collection, source) {
    var keys = Object.keys(source);          // get all properties of source
    return collection.filter(function (c) {  // filter collection
        return keys.every(function (k) {     // check every key
            return c[k] === source[k];       // compare value of collection and source
        });
    });
  }

  applyFilters(eventList) {
      var filteredEvents = [];
      for (i = 0; i < eventList.length; i++) {
          var matches;
          matches = this.state.filters.every( (filter) => {
              if(filter.filterValue === "All"){
                  return true;
              } else if (eventList[i][filter.filterType] === filter.filterValue) {
                  return true;
              } else {
                  return false;
              }
          });
          if (matches) {
              filteredEvents.push(eventList[i]);
          }
      }
      return filteredEvents;
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
    let events = this.props.events;
    const filteredEvents = this.applyFilters(events);
    console.log("Filtered events: ", filteredEvents);
    return (
      <div>
        <Header />
        <Filters updateFilters={this.updateFilters} filters={this.props.filters}/>
        <EventList events={this.props.events} />
      </div>

    );
  }
}

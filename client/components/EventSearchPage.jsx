import React, { Component, PropTypes } from 'react';


import Header from "./Header.jsx"
import Filters from "./Filters.jsx"
import EventList from "./EventList.jsx"



export default class EventSearchPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      filters: [{fieldType: "type",
                  filterValue: "All"},
                  employerName: "All", industry: "All", hasCatering: "All", registrationStatus: "All"]





      },
      events: []
    }
  }

  applyFilters(events, filters){
    events.filter(function(event){
      for(let i = 0; i < filters.length; i++){
        if(event.hasOwnProperty(filters[i].fieldType) && event.filters[i].fieldType === filters[i].filterValue){
          return true;
        }
        return false;
      }
    }
    return filteredEvents;
  }

  updateFilters(fieldName, value){
    this.setState( { [fieldName]: value} )
  }

  render() {
    let events = this.props.events;
    let filter = this.state.
    return (
      <div>
        <Header />
        <Filters updateFilters={ () = > this.updateFilters} filters={this.props.filters}/>
        <EventList events={this.props.events} />
      </div>

    );
  }
}

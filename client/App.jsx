import React, { Component } from 'react';

import eventList from './events.js';
import filters from "./filters.js";
import EventSearchPage from './components/EventSearchPage.jsx';

// App component - represents the whole app
export default class App extends Component {

  getEvents() {
    return eventList;
  }

  getFilters() {
    return filters;
  }

  render() {
    return (
      <EventSearchPage
        events={this.getEvents()}
        filters={this.getFilters()}
      />
    );
  }
}

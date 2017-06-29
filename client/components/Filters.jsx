import React, { Component, PropTypes } from 'react';


import FilterDropdown from './FilterDropdown.jsx';


export default class Filters extends Component {
  constructor(props){
    super(props);


  }
  render() {
    const { filters } = this.props;
    return (
      <section className="filters">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <div className="well">
              <form className="form-horizontal">
                <fieldset>
                  <legend>
                    What kind of event are you looking for?
                  </legend>
                    {filters.map( (filter) => {
                      return <FilterDropdown fieldName={filter.fieldName} options={filter.options} />
                    })}
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

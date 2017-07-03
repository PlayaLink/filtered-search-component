import React, { Component, PropTypes } from 'react';

export default class FilterDropdown extends Component {
  constructor(props){
    super(props);

    this.state = {
      selectValue: "All"
    };

    this.camelCaseToWords = this.camelCaseToWords.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  camelCaseToWords (str) {
    return str.match(/^[a-z]+|[A-Z][a-z]*/g).map(function(x){
        return x[0].toUpperCase() + x.substr(1).toLowerCase();
    }).join(' ');
  }

  handleSelectChange(e){
    let newFilterValue = e.target.value
    this.setState({selectValue : newFilterValue});
    this.props.updateFilters(this.props.fieldName, newFilterValue);
  }

  handleFiterUpdate(){

  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.fieldName} className="col-lg-2 control-label">
          {this.camelCaseToWords(this.props.fieldName)}
        </label>
        <div className="col-lg-10">
          <select value={this.state.selectValue} ref="newFilter" onChange={this.handleSelectChange} id={this.props.fieldName} name={this.props.fieldName} className="form-control">
            <option defaultValue value="all">All</option>
            {this.props.options.map( (option) => {
              return <option key={option} value={option}>{option}</option>
            })}
          </select>
        </div>
      </div>
    );
  }
}

FilterDropdown.propTypes = {
  fieldName: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

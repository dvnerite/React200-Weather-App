import React, { Component } from 'react';


import {
  getWeather,
  SearchCity

} from './SearchInfoActions';

class SearchInfo extends Component {
    constructor(props) {
      super(props);

      this.handleGetWeather = this.handleGetWeather.bind(this);
      this.handleCityName = this.handleCityName.bind(this);
      this.handleClick=this.handleClick.bind(this);

    }
    
    handleCityName(event) {
      const { dispatch } = this.props;
      const { value } = event.target;
        // console.log(value);
      dispatch(SearchCity(value));
  }

  handleGetWeather(event){
      event.preventDefault();
      const { dispatch, cityName } = this.props;
      // console.log("handleGetWeather");
      console.log(this.props);
      dispatch(getWeather(cityName));
  }

  handleClick(event){
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch (getWeather(value));

    event.preventDefault();
    console.log("handleClick button was clicked ")

  }

  render() {
    const { cityName } = this.props;
    return (   

      <div>
        <div className='row'>
          <div className ='d-flex'>
            <div className='p-2'>
              <button className='btn btn-primary' value='san diego' onClick={this.handleClick}>San Diego</button>
            </div>
            <div className='p-2'>
              <button className='btn btn-primary' value='kansas city' onClick={this.handleClick}>Kansas City</button>
            </div>
            <div className='p-2'>
              <button className='btn btn-primary' value='new york' onClick={this.handleClick}>New York</button>
            </div>
        </div>
      </div>

      <div id='searchbar'>
      <form className="form ">
      <div className='row'>
          <div>
              <input
              className="search-bar"
              type="text"
              placeholder="Search"
              aria-label="Search"
              value = { cityName }
              onChange={ this.handleCityName }
          />
          
              <button className="search-btn-success" 
              type="submit" 
              onClick={this.handleGetWeather}>
              Search
              </button>
          </div>
      </div>
      </form>
      </div>
      </div>

    );
  }
}
export default SearchInfo;








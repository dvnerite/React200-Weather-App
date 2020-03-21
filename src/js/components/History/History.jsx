import React, { Component } from 'react';

class History extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const { history } = this.props;
    return (
      <div>
      <div className="card border-info w-75">
        <div className="card-header text-white bg-info">Search History</div>
           <div className="card-body">
             <ul className='list-group'>
             {
                      history.map(SearchItem => (
                        <li className='list-group-item' key={SearchItem.time}>
                          {SearchItem.searchedCity},
                          {SearchItem.date},
                          {SearchItem.time}
                        </li>
                      ))
                    }
             </ul>
          
           </div>
        </div>
      </div>
    );
  }
}
export default History;
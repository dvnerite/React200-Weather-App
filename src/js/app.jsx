import React, { Component } from 'react';
import SearchInfo from './components/SearchInfo'
import ViewInfo from './components/ViewInfo'
import History from './components/History'

class App extends Component {
  render() {
    return (
      <div className='container'>
          
          <div className='container'>
          <h1 className="display-4 text-center">World Wide Weather</h1>
        </div>
    <hr/>

        <div id='search-section'>
          <SearchInfo/>
        </div>
    <br/>
    
    <form>

        <div>

          <div className='col-12 col-md-6 mb-4' id='boxes' >
            <ViewInfo/>
          </div>
        
          <div className='col-12 col-md-6 mb-4' id='boxes'>
            <History/>
          </div>

        </div>
  </form>

      </div>

    );
  }
}

export default App;
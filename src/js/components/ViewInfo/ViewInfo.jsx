import React from 'react';

class ViewInfo extends React.Component{
    constructor(props){
        super(props);
        this.handlecoord = this.handlecoord.bind(this);
        this.getIcon = this.getIcon.bind(this)
    }

    
  getIcon(icon) {
    if (icon) {
      return (
        <img src={`http://openweathermap.org/img/w/${icon}.png`}></img>
      )
    } else {
      return null
    }
  }

    handlecoord (lat,lon) {
        return (`${lat},${lon}`)
        
    }

    render(){
        const {cityName, lat, lon, temp, pressure, humidity, lowtemp, hightemp, wind, icon } = this.props
        return(
            <div>
                <div className='card border-info w-75'>
                <div className='card-header text-white bg-info'>City Information</div>
                <div className='card-body'>
                <h3 className="card-title text-center text-secondary">{cityName}</h3>
                <div className='text-left'>{this.getIcon(icon)}</div>
                <h4 className='text-center' >Lat/Long: {this.handlecoord(lat , lon)}</h4>

                <hr></hr>
                <div className='row'>
                    <div className='col'>
                        <h5 className='text-center'> Temperature F</h5>
                        <p className='text-center'> { temp }</p>
                    </div>
                    <div className='col'>
                        <h5 className='text-center'>Pressure</h5>
                        <p className='text-center'>{ pressure }</p>
                    </div>
                    <div className='col'>
                        <h5 className='text-center'>Humidity</h5>
                        <p className='text-center'>{ humidity }</p>
                    </div>
                </div>

                <div className='row'>
                    <div className='col'>
                        <h5 className='text-center'>Lowest Temp(F)</h5>
                        <p className='text-center'>{ lowtemp }</p>
                    </div>
                    <div className='col'>
                        <h5 className='text-center'> Highest Temp (F)</h5>
                        <p className='text-center'>{ hightemp}</p>
                    </div>
                    <div className='col'>
                        <h5 className='text-center'>Wind Speed (MPH)</h5>
                        <p className='text-center'>{ wind }</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        );
    }
}

export default ViewInfo;
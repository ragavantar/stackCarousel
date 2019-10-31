import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  state = { 
    posV : 0, //left
    posH : 0  //top
   }

   componentDidMount(){
    // if ('DeviceOrientationEvent' in window) {
    //   window.addEventListener('deviceorientation', this.deviceOrientationHandler);
    // } else {
    //   alert('Device Orientation API not supported.');
    // }
   }

   
   deviceOrientationHandler = (eventData) => {

    var tiltLR = eventData.gamma;
    var tiltFB = eventData.beta;
    var dir = eventData.alpha;
    
    tiltLR= Math.round(tiltLR);
    tiltFB= Math.round(tiltFB);
    dir= Math.round(dir);

    let {posH} = this.state;

    if(tiltLR > 0){
      //right
      posH++;
      this.setState({posH})
    }
    else{
      //left
      posH--;
      this.setState({posH})
    }
    console.log(tiltLR)
  }

  render() { 
    const {posH} = this.state;
    console.log(posH, this.state)
    return ( 
      <div>
        <h1>Left: {posH}</h1>
      <div className='boundry'>
        <div id='ball' style={{left: posH}}/>
      </div>
      </div>
     );
  }
}
 
export default App;

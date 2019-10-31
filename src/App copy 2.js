import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  state = { 
    data: [
      "https://avatarfiles.alphacoders.com/154/154335.jpg",
      "https://wallpapersite.com/images/wallpapers/iron-man-1440x2560-avengers-4-hd-16394.jpg",
      "https://images.wallpapersden.com/image/download/batman-minimalism-dc-comics_62285_950x1534.jpg",
      "https://wallpapercave.com/wp/wp2936339.jpg",
      "http://images6.fanpop.com/image/photos/40700000/Wonder-Woman-wonder-woman-2017-40716735-300-315.jpg"
    ],
    pos: [0, 1, 2, 3, 4],
    active: 2
   }

   getStyle = (ind)=>{
      let len = this.state.data.length;
      const {active} = this.state;

      if(ind<active){
      return {
        zIndex : (active - ind) * -1,
        left: `${(active - ind) * -20}px`,
        transform: `scale(${1-(active-ind)*0.1})`,
        // animation: `fade ${len-ind}s`
      }
    }


      if(ind==active){
        return {
          zIndex : 0,
          left: 0,
          // transform: `scale(${1 - (ind*0.1)})`,
        }
      }


      if(ind>active){
        return {
          zIndex : (ind - active) * -1,
          left: `${(ind-active) * 20}px`,
          transform: `scale(${1-(ind-active)*0.1})`,
          // animation: `fade ${len-ind}s`
        }
      }


  }


  //  next = ()=>{
  //     let {pos} = this.state;
  //     let e = pos.shift();
  //     pos.push(e);
  //     this.setState({pos})
  //  }

  //  next = ()=>{
  //    let {data} = this.state;
  //    let o = [...data]
  //    let e = o.shift();
  //    o.push(e);
  //    this.setState({data: o})
  //  }

   next = (d)=>{
     let {active} = this.state;
    if(d>0){
      //right
      active++;
      this.setState({active})
    }else{
      //left
      active--;
      this.setState({active})

    }
    
   }

   getSlide = (e, i)=>{
    const {data, active} = this.state;

    if(i<active){
      return <div className='slide' style={this.getStyle(i)}>
                <img src={e}  />
             </div>
    }
    else if(i == active){
      return <div className='slide' style={this.getStyle(i)}>
                <img src={e}  />
             </div>
    }
    else{
      return <div className='slide' style={this.getStyle(i)}>
                <img src={e}  />
             </div>
    }

  }

  render() { 
    const {data, pos, active} = this.state
    // console.log(pos, data)
    return ( 
      <div>
      <div className='slides'>
        {
          data.map((e, i)=>
             <div className='slide' style={this.getStyle(i)}>
                <img src={e}  />
             </div>
          )
        }

      </div>


<div onClick={()=>this.next(-1)}>Left</div>
<div onClick={()=>this.next(1)}>Right</div>

</div>
     );
  }
}
 
export default App;

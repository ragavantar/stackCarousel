import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  state = { 
    data: [
      "https://avatarfiles.alphacoders.com/154/154335.jpg",
      "https://wallpapersite.com/images/wallpapers/iron-man-1440x2560-avengers-4-hd-16394.jpg",
      "https://images.wallpapersden.com/image/download/batman-minimalism-dc-comics_62285_950x1534.jpg",
      "https://wallpapercave.com/wp/wp2936339.jpg"
    ],
    pos: [0, 1, 2, 3]
   }

   getStyle = (ind)=>{
      let len = this.state.data.length;
      return {
        zIndex : len - ind,
        transform: `translateX(${ind * 20}px) scale(${1 - (ind*0.1)})`,
        // animation: `fade ${len-ind}s`
      }
   }

  //  next = ()=>{
  //     let {pos} = this.state;
  //     let e = pos.shift();
  //     pos.push(e);
  //     this.setState({pos})
  //  }

   next = ()=>{
     let {data} = this.state;
     let o = [...data]
     let e = o.shift();
     o.push(e);
     this.setState({data: o})
   }

  render() { 
    const {data, pos} = this.state
    // console.log(pos, data)
    return ( 
      <div onClick={this.next} className='slides'>
        {
          data.map((e, i)=>
            <div className='slide' id={pos[i]} style={this.getStyle(pos[i])}>
              <img src={e}  />
            </div>
          )
        }



      </div>
     );
  }
}
 
export default App;

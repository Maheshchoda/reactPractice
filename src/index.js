import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// require './src/index.css';
class App extends Component {
  render() {
    return (<div>
      <h1>Github Profile information</h1>
        {
          this.props.data.map((profile) => {
            return (
              <div className='profile' >
               <h3>Profile Name: {profile.profilename}</h3>
               <img src={profile.img} height="300" width="300"/>
              </div>
            );
          })
        }
    </div>);
  }
}

ReactDOM.render(
  <App data = {[
    { profilename: 'Afzal', img: 'https://www.w3schools.com/howto/img_avatar.png' },
    { profilename: 'Umang', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqCM25IBWmfkxQ3Kg_q8_SxQlBIckh-alD0sf2GDwgjN0XUm9u' },
    { profilename: 'Siddarth Padwal', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuNp10wwJCXCaikV2Ka2G-7DoMe9ckQqFpF9Ujm_G1RIOBrDKe' },
    { profilename: 'Saurabh W', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXVgR7uzO4AKGFSoKjrNdUkNuqLdNb6G4bwkPD0wYz03Gu8sYy' },
    { profilename: 'Yash Damani', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhFEXGsj2SMxYbxQSMv6lo_vNti3Xb5ozWgxNKuliqV3GDdL7P' },
  ]}/>,
  document.getElementById('msg'));

import React, { Component }  from 'react';
import './App.css';
import { Player } from 'video-react';

export default class App extends Component {
  disableContextMenu = (e) => {
    e.preventDefault();
  }

  render(){
    return (
      <div className="App">
        VideoPlayer
        <div onContextMenu={this.disableContextMenu} id='video'>
          <Player>
            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
          </Player>
        </div>
      </div>
    );
  }
}

import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1 style={{color : '#63C1A0'}}> Real-time Chat Application </h1>
      <h2>Created with React, Express, Node and Socket.IO </h2>
      
    </div>
    {
      users
        ? (
          <div>
            <h1 style={{color : '#63C1A0'}}> Individuals Engaged in Conversation </h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;
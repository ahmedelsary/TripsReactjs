import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Welcome to trips manger</h1>
        <p>Use this manger to mange your trips, by:</p>
        
        <ul>
        <li>Add a new trip</li>
        <li>Update a trip</li>
        <li>Delete a trip</li>
        <li>Show all trips </li>       
        </ul>
       
        </div>
    );
  }
}

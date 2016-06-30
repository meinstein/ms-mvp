import React from 'react'
import io from 'socket.io-client'

import Header from './parts/Header.js'

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.socket = io('http://localhost:3000');
    this.socket.on('connect', this.connect.bind(this));
    this.socket.on('disconnect', this.disconnect.bind(this));
  }

  connect() {
    console.log('Connected: ' + this.socket.id);
  }

  disconnect() {

  }

  render() {

    return (
      <div>
        <Header title="Wiki-Links" />
      </div>
    )
  }
}

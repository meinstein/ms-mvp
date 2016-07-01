import React from 'react'
import io from 'socket.io-client'
import axios from 'axios'

import Nav from './Nav'
import LinkInput from './LinkInput'
import Table from './Table'

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      connectionCount: null,
      entries: []
    }

  }

  componentWillMount() {
    this.socket = io('http://localhost:3000');
    this.socket.on('connectionCount', this.getConnectionCount.bind(this))
  }

  componentDidMount() {
    this.getEntries();
  }

  getEntries() {
    axios.get('/api/entries')
    .then(function (resp) {
      this.setState({
        entries: resp.data.results
      })
    }.bind(this))
    .catch(function (resp) {
      console.log(resp);
    });
  }

  getConnectionCount(socketCount) {
    this.setState({
      connectionCount: socketCount.socketCount
    })
  }

  render() {

    return (
      <div>
        <Nav connectionCount={this.state.connectionCount} title="Wiki-Links" />
        <LinkInput />
        <Table entries={this.state.entries} />
      </div>
    )
  }
}

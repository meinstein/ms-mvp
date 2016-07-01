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
      entries: [],
      name: null,
      article: null
    }

  }

  componentWillMount() {
    this.socket = io('http://localhost:3000');
    this.socket.on('connectionCount', this.getConnectionCount.bind(this))
  }

  getConnectionCount(socketCount) {
    this.setState({
      connectionCount: socketCount.socketCount
    })
  }

  componentDidMount() {
    this.getEntries();
  }

  handleNewArticle(formData) {
    console.log(formData)
    this.setState({
      name: formData.name,
      article: formData.article
    })
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

  postEntry() {
    axios.post('/api/entries', {
        name: this.state.name,
        article: this.state.article
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (response) {
        console.log(response);
      });
  }


  render() {

    return (
      <div>
        <Nav connectionCount={this.state.connectionCount} title="Wiki-Links" />
        <LinkInput handleNewArticle={this.handleNewArticle.bind(this)}/>
        <Table entries={this.state.entries} />
      </div>
    )
  }
}

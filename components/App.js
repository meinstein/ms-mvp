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
      validateLink: true,
      linkCount: null,
      externalLinkCount: 0,
      articleTitle: null
    }
  }

  componentWillMount() {
    this.socket = io('http://localhost:3000');
    this.socket.on('connectionCount', this.getConnectionCount.bind(this))
    this.socket.on('dbUpdate', this.getEntries.bind(this))
  }

  getConnectionCount(socketCount) {
    this.setState({
      connectionCount: socketCount.socketCount
    })
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

  postEntry(formData) {
    axios.post('/api/entries', {
        name: formData.name,
        article: formData.article
      })
      .then(function (response) {
        console.log(response)
        this.setState({
          validateLink: true,
          linkCount: response.data.linkCount,
          externalLinkCount: response.data.externalLinkCount,
          articleTitle: response.data.title
        })
        console.log(response.data.linkCount)
      }.bind(this))
      .catch(function (response) {
        this.setState({
          validateLink: false,
          linkCount: null,
          externalLinkCount: 0,
          articleTitle: null
        })
      }.bind(this));
  }


  render() {

    return (
      <div>
        <Nav connectionCount={this.state.connectionCount} title="Wiki-Links" />
        <LinkInput articleTitle={this.state.articleTitle}
                   linkCount={this.state.linkCount}
                   externalLinkCount={this.state.externalLinkCount}
                   validateLink={this.state.validateLink}
                   handleNewArticle={this.postEntry.bind(this)} />
        <Table entries={this.state.entries} />
      </div>
    )
  }
}

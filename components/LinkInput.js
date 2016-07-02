import React from 'react';
import ReactDOM from 'react-dom';

export default class LinkInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      linkPrefix: 'http://wikipedia.org/wiki/',
      name: '',
      article: ''
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleLinkChange = this.handleLinkChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(event) {

    event.preventDefault();

    var formData = {
      name: this.state.name,
      article: this.state.article
    }

    this.props.handleNewArticle(formData);

  }

  handleNameChange(event) {
    this.setState({name: event.target.value})
  }

  handleLinkChange(event) {
    this.setState({article: event.target.value})
  }

  render() {

    let errorMsg = this.props.validateLink ? 'hide' : 'show';
    let errorLabel = `${errorMsg} control-label`;

    let errorHighlight = this.props.validateLink ? '' : 'has-error';
    let errorInput = `${errorHighlight} form-group`;

    let successMsg = this.props.linkCount ? 'show' : 'hide';
    let successLabel = `${successMsg} control-label text-primary`;

    return (
      <div className="container">
        <div className="row link-input">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                ref="name"
                onChange={this.handleNameChange}
                className="form-control"
                placeholder="Enter your name"
                required />
            </div>
            <div className={errorInput}>
              <label ref="error" className={errorLabel}>
                     {this.props.articleTitle} does not exist.
              </label>
              <label ref="success" className={successLabel}>
                     {this.props.articleTitle} contains {this.props.linkCount} wiki links
                     and {this.props.externalLinkCount} external links.
              </label>
                  <input
                    type="text"
                    ref="link"
                    onChange={this.handleLinkChange}
                    className="form-control"
                    placeholder="Enter an article title"
                    required />
              </div>
            <button
              type="submit"
              className="btn btn-primary" >
              Count Links
            </button>
          </form>
        </div>
      </div>
    );
  }

}

import React from 'react';
import ReactDOM from 'react-dom';

export default class LinkInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      linkPrefix: 'http://wikipedia.org/',
      name: null,
      article: null
    }

  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleNewArticle({
      name: ReactDOM.findDOMNode(this.refs.name).value,
      article: ReactDOM.findDOMNode(this.refs.article).value
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row link-input">
          <form>
            <div className="form-group">
              <input
                type="text"
                ref="name"
                className="form-control"
                placeholder="Enter your name"
                required />
            </div>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-addon">{this.state.linkPrefix}</div>
                  <input
                    type="text"
                    ref="article"
                    className="form-control"
                    id="exampleInputAmount"
                    placeholder="Enter an article"
                    required />
                </div>
              </div>
            <button
              onclick={this.handleSubmit}
              type="submit" className="btn btn-primary">Count Links
            </button>
          </form>
        </div>
      </div>
    );
  }

}

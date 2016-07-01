import React from 'react'

class LinkInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      linkPrefix: 'http://wikipedia.org/'
    }

  }

  render() {
    return (
      <div className="container">
        <div className="row link-input">
          <form className="form-inline">
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-addon">{this.state.linkPrefix}</div>
                <input type="text" className="form-control" id="exampleInputAmount" placeholder="link" />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Count Links!</button>
          </form>
        </div>
      </div>
    );
  }

}


LinkInput.propTypes = {

}

LinkInput.defaultProps = {

};

export default LinkInput;

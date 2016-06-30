import React from 'react'

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="row">
        <div className="col-md-8">
          <h1>{this.props.title}</h1>
        </div>
        <div className="col-md-4">
          <h1>{this.props.connectionCount}</h1>
        </div>
      </header>
    );
  }

}


Header.propTypes = {
  title: React.PropTypes.string,
  connectionCount: React.PropTypes.number
}

Header.defaultProps = {
 title: 'WikiLinks',
 connectionCount: 0


};

export default Header;

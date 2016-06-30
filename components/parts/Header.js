import React from 'react'

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
          <div className="navbar-brand">
          {this.props.title}
          </div>
            <div className="navbar-brand pull-right">
              <span className="badge">
                {this.props.connectionCount}
              </span>
            </div>
          </div>
        </div>
      </nav>
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

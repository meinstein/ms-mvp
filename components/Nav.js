import React from 'react'

class Nav extends React.Component {

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
          </div>
          <div className="navbar-brand pull-right">
            <span className="badge">{this.props.connectionCount}</span>
          </div>
        </div>
      </nav>
    );
  }

}


Nav.propTypes = {
  title: React.PropTypes.string,
  connectionCount: React.PropTypes.number
}

Nav.defaultProps = {
 title: 'WikiLinks',
 connectionCount: 0
};

export default Nav;

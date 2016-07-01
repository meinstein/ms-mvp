import React from "react";

export default class TableEntries extends React.Component {

  render() {

    return (
      <tr>
        <th scope="row">{this.props.entry.name}</th>
        <td>{this.props.entry.page}</td>
        <td>{this.props.entry.date}</td>
        <td>{this.props.entry.count}</td>
      </tr>
     );
  }
}

import React from "react";

export default class TableEntries extends React.Component {

  render() {

    return (
      <tr>
        <th scope="row">{this.props.number + 1}</th>
        <td>{this.props.entry.name}</td>
        <td>{this.props.entry.page}</td>
        <td>{this.props.entry.date}</td>
        <td>{this.props.entry.count}</td>
        <td>{this.props.entry.external}</td>
      </tr>
     );
  }
}

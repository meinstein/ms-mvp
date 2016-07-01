import React from 'react'

import TableEntries from './TableEntries'

export default class Table extends React.Component {

  constructor(props) {
    super(props);

  }

  formatTableData() {
      return this.props.entries.map((entry, i) => {
          return <TableEntries key={i} entry={entry} />
      })
  }

  render() {

    let tableData = this.formatTableData();

    return (
      <div className="container">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Page</th>
              <th>Date</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
          {tableData}
          </tbody>
        </table>
      </div>
    );
  }

}

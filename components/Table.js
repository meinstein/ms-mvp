import React from 'react'

import TableEntries from './TableEntries'

export default class Table extends React.Component {

  constructor(props) {
    super(props);

  }

  formatTableData() {
      return this.props.entries.map((entry, i) => {
          return <TableEntries key={i} number={i} entry={entry} />
      })
  }

  render() {

    let tableData = this.formatTableData();

    return (
      <div className="container">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Article</th>
              <th>Date Submitted</th>
              <th>Link Count</th>
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

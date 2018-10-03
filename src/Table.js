import React, { Component } from 'react';
import moment from 'moment';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
              <th>Timestamp</th>
              <th>Lat</th>
              <th>Lon</th>
              <th>Temperature</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
  const rows = props.data.map((row, index) => {
    return (
      <tr key={index}><td>{moment(row.timestamp).format()}</td><td>{row.coordinates[0]}</td><td>{row.coordinates[1]}</td><td>{row.temperature}</td></tr>
    )
  })
  return <tbody>{rows}</tbody>
}

class Table extends Component {
  render() {
    const { data } = this.props;
    return (
      <table className="twelve columns">
        <TableHeader />
        <TableBody data={data} />
      </table>
    )
  }
}

export default Table;

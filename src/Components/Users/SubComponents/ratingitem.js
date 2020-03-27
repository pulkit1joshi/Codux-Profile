import React, { Component } from "react";

export default class RatingItem extends Component {
  componentWillMount() {
    console.log(this.props);
  }

  render() {
    return (
      <React.Fragment>
        <tr>
          <td>
            {" "}
            
            <strong>{this.props.num}</strong>.
          </td>
          <td class="list-group-item">
            {" "}
            {this.props.item.contestName}
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

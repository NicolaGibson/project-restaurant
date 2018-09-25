import React from "react";

class Locations extends React.Component {
  render() {
    return (
      <ul>
        {this.props.Locations.map(location => {
          return (
            <li key={location.id}>
              <li>{location.address}</li>
              <li>{location.email}</li>
              <li>{location.telephone}</li>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Locations;

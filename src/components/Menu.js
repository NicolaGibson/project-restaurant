import React from "react";

class Menu extends React.Component {
  render() {
    return (
      <ul>
        {this.props.menuItems.map(item => {
          return (
            <li key={item.id}>
              {item.name} {item.price}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Menu;

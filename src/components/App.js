import React from "react";
import Menu from "./Menu.js";

const menuItems = [
  {
    id: 1,
    name: "Cheese Burger",
    price: "£8"
  },
  {
    id: 2,
    name: "Double Cheese Burger",
    price: "£10"
  },
  {
    id: 3,
    name: "Bacon Cheese Burger",
    price: "£9"
  },
  {
    id: 4,
    name: "Chicken Burger",
    price: "£8"
  },
  {
    id: 5,
    name: "Vegan Burger",
    price: "£7.5"
  }
];

const locations = [
  {
    id: "London",
    address: "2 Bakers Yard, London",
    email: "dmitri@constructorburgers.com",
    telephone: "020 8455 2345"
  },
  {
    id: "New York",
    address: "Second Avenue, 5th Street, New York",
    email: "ollie@constructorburgers.com",
    telephone: "020 8455 1111"
  },
  {
    id: "Cairo",
    address: "No2, Great Pyramid, Cairo, Egypt",
    email: "jim@constructorburgers.com",
    telephone: "020 8455 2345"
  },
  {
    id: "Antarctica",
    address: "The Big Igloo, Sidewalk, Antartica",
    email: "sheila@constructorburgers.com",
    telephone: "020 8455 2345"
  }
];

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="title">
          <h1>Constructor Baps</h1>
          <img src="https://files.slack.com/files-pri/T85AGSEH3-FCZQWMMJ4/photo1.jpg" />
        </div>
        <div className="map-container">
          <h2>Menu</h2>
          <Menu menuItems={menuItems} />
        </div>
        <div className="locations-container">
          <h2>Locations</h2>
          <ul>
            {locations.map(location => {
              return (
                <li key={location.id}>
                  {location.address} {location.email} {location.telephone}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;

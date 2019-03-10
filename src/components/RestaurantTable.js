import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";

class RestaurantTable extends Component {

  render() {
    const columns = [
      {
       name: "name",
       label: "Name",
      },
      {
       name: "address",
       label: "Address",
      },
      {
       name: "area",
       label: "Area",
      },
      {
       name: "price",
       label: "Price",
      },
    ];
    const data = [
      {
        name: "10pin Bowling Lounge",
        address: "330 N State Street",
        area: "Chicago / Illinois",
        price: 4,
        image_url: "https://www.opentable.com/img/restimages/7267.jpg"
      },
      {
        name: "Chicago Chop House",
        address: "60 W Ontario St",
        area: "Chicago / Illinois",
        price: 4,
        image_url: "https://www.opentable.com/img/restimages/147604.jpg"
      },
      {
        name: "Osteria Langhe",
        address: "2824 West Armitage Avenue",
        area: "Chicago / Illinois",
        price: 2,
        image_url: "https://www.opentable.com/img/restimages/149062.jpg"
      },
      {
        name: "The Capital Grille - Chicago - Downtown",
        address: "633 North Saint Clair",
        area: "Chicago / Illinois",
        price: 4,
        image_url: "https://www.opentable.com/img/restimages/2053.jpg"
      },
    ];
    const options = {
      filterType: 'checkbox',
      selectableRows: false,
    };

    return (
      <MUIDataTable
        title={"Restaurant List"}
        data={data}
        columns={columns}
        options={options}
      />
    )
  }
}

export default RestaurantTable;

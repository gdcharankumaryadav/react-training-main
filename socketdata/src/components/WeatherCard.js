import React from "react";
import moment from "moment";
import { Button } from "semantic-ui-react";
import { Table } from "semantic-ui-react";

const Weathercard = (props) => {
  const reload = () => {
    window.location.reload();
  };
  return (
    <div >
      <div className="header">
      City : {props.weatherData.location.name}
      </div>
     
     <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Temprature </Table.HeaderCell>
            <Table.HeaderCell>Humidity</Table.HeaderCell>
            <Table.HeaderCell>Sunrise</Table.HeaderCell>
            <Table.HeaderCell>Sunset</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {props.weatherData.forecast.forecastday.map((value, index) => {
            return (
              <Table.Row key={index}>
                <Table.Cell>{value.date}</Table.Cell>
                <Table.Cell>{value.day.avgtemp_c}</Table.Cell>
                <Table.Cell>{value.day.avghumidity}</Table.Cell>
                <Table.Cell>{value.astro.sunrise}</Table.Cell>
                <Table.Cell>{value.astro.sunset}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Weathercard;

import "./App.css";
import React, { useEffect, useState } from "react";
import Weather from "./Components/Weather";

const App = () => {
  const [lat, setLat] = useState({});
  const [long, setLong] = useState({});
  const [data, setData] = useState([]);

  const getlatlong = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat({ lat: parseFloat(position.coords.latitude) });
      setLong({ long: parseFloat(position.coords.longitude) });
    });
  };
  const fetchData = async () => {
    const response = await (
      await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=9d4d18fa7906478e889142227210910&q=${lat.lat},${long.long}&days=7&aqi=yes&alerts=no`
      )
    ).json();
    setData(response);
  };

  useEffect(() => {
    getlatlong();
    fetchData();
  }, [lat, long]);
  console.log(data);

  return (
    <div className="App">
      {typeof data.location != "undefined" ? (
        <div>
          <br></br>
          <br></br>
          <div>
            <h3 className="welcome">Weather Report</h3>{" "}
            <br></br>
          </div>
          <Weather weatherData={data} />

          <div></div>
        </div>
      ) : (
        <>
          <div>Loading</div>
        </>
      )}
    </div>
  );
};

export default App;

import React from "react";
import { useState, useRef, useEffect } from "react";

const Airquality = () => {
  const [messages, setMessages] = useState([]);
  const webSocket = useRef(null);

  useEffect(() => {
    webSocket.current = new WebSocket("wss://city-ws.herokuapp.com/");
    webSocket.current.onmessage = (message) => {
      const result = JSON.parse(message.data);
      setMessages(result);
    };
    return () => webSocket.current.close();
  }, []);
  return (
    <div className="justify-content-center mt-5">
      <h2 className="text-center">Air Quality data</h2>
      <table className="table table-bordered airquality">
        <thead>
          <tr>
            <th className="text-center">City</th>
            <th className="text-center">Aqi Rate</th>
            <th className="text-center">Category</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((citydata, i) => {
            let aqi = citydata.aqi;
            return (
              <tr
                key={i}
                className={
                  aqi < 100
                    ? "good"
                    : aqi > 100 && aqi < 150
                    ? "average"
                    : aqi > 150 && aqi < 200
                    ? "bad"
                    : "verybad"
                }
              >
                <td>{citydata.city}</td>
                <td>{citydata.aqi}</td>
                <td className="text-capitalize">
                  {aqi < 100
                    ? "good"
                    : aqi > 100 && aqi < 150
                    ? "average"
                    : aqi > 150 && aqi < 200
                    ? "bad"
                    : "verybad"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Airquality;

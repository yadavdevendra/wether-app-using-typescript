import { Card, Icon } from "@shopify/polaris";
import icon from "./resources/icon_01d.png";
const Weather = (props: any) => (
  <div className="weather_data">
    <div>
      <Card.Section>
        <img src={icon} alt="altimge" />
        <h1>{props.data.city_name} </h1>
        <h3> {props.data.weather_status} </h3>
        <p> {props.data.weather_desc} </p>
      </Card.Section>

      <Card.Section>
        <p> Temp :{props.data.temp}°</p>
        <p>Humidity :{props.data.humidity}%</p>
        <p>Wind : {props.data.wind}km/s</p>
      </Card.Section>
    </div>
  </div>
);

export default Weather;

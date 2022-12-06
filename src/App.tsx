import { useState } from 'react';
import './App.css';
import axios from "axios";
import '@shopify/polaris/build/esm/styles.css';
import Form from "./components/Form";
import Weather from "./components/Weather";
import { AppProvider } from '@shopify/polaris';


const API_KEY = "f16a2077023792cc79d0b4140967d82a";

function App() {
  const [data ,setData] = useState<string []|any>({
    term: "",
    city_name: "City Name",
    temp: "15",
    humidity: "24",
    wind: "2.5",
    weather_status: "Drizzle",
    weather_desc: "Light intensity drizzle",
    weather_icon: ""
  })
  const handleChange = (e:any )=> {
    setData({
      term: e.target.value
    });
  };

  const handleClick = (e:any) => {
    axios
      .post(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          data.term +
          "&units=metric&appid=" +
          API_KEY
      )
      .then(res => {
        console.log("data",res.data)
        setData({ 
          city_name: res.data.name,
          temp: res.data.main.temp,
          humidty: res.data.main.humidity,
          wind: res.data.wind.speed,
          weather_status: res.data.weather[0].main,
          weather_desc: res.data.weather[0].description,
          weather_icon: res.data.weather[0].icon
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <AppProvider
      i18n={{
        Polaris: {
          ResourceList: {
            sortingLabel: 'Sort by',
            defaultItemSingular: 'item',
            defaultItemPlural: 'items',
            showing: 'Showing {itemsCount} {resource}',
            Item: {
              viewItem: 'View details for {itemName}',
            },
          },
          Common: {
            checkbox: 'checkbox',
          },
        },
      }}
      >
      <div className="container">
        <h1 className="header">Simple Weather App</h1>
        <Form onChange={handleChange} onClick={handleClick} />
        <Weather data={data} />
   
      </div>
      </AppProvider>
    </div>
  );
}

export default App;

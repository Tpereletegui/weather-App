import React from 'react';
import './App.css';
//Importar los componentes que voy a renderizar
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
//importo el hook { useState } que usaré dentro de la función App
import { useState } from 'react'; 

export default function App() {
  //defino mi state cities y su función seteadore (setState) = setCities
  //el valor inicial de cities será un array vacío ([]) // acordate, el primer elemento de state, es lo que declaro dentro de usestate
  const [cities, setCities] = useState([]);
  
  //defino mi variable apiKey
  const apiKey = "193f4639b4fa46fd1aa21d04a5a9a4ce";
  //defino la función onSearch
   function onSearch(city) {
     fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      
      .then((response) => {  
        console.log("esto es response",response)
        if(response.main !== undefined){ // si alguna propiedad en base al nombre que llamo, no tiene elementos
          // entonces seria undefined, funcionaria tmb con response.name
          const ciudad = {
            min: Math.round(response.main.temp_min),
            max: Math.round(response.main.temp_max),
            img: response.weather[0].icon,
            id: response.id,
            /* wind: response.wind.speed,
            temp: response.main.temp, */
            name: response.name,
            /* weather: response.weather[0].main,    // funciona si lo comento, porque no uso estas propiedades
            clouds: response.clouds.all,
            latitud: response.coord.lat,
            longitud: response.coord.lon */
          };
          setCities(arregloviejo => [...arregloviejo, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      
      }
      )};
    //defino la función onClose
    function onClose(id) {
      setCities(oldCities => oldCities.filter(c => c.id != id));
    }

  return (
    //renderizo los componentes
    <div className="App">
      <div className="navbar">
        <Nav onSearch={onSearch}/>
        </div>
        <div>
        <Cards cities={cities} onClose={onClose} />
        </div>
    </div>
  );
}
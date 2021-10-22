import React, { useState } from "react";
import './searchbar.css';
import {Button, ButtonGroup, TextField} from "@mui/material";
import {HomeIcon} from "@mui/icons-material";
import { mdiCloudSearch } from '@mdi/js';
import {Icon} from "@mdi/react";
import icon from "../favicon-32x32.png";

export default function SearchBar({onSearch}) {
  //defino estado local para ir guardando lo que escriba el 
  //usuario en la barra de búsqueda
  const [city, setCity] = useState("");
  //defino una función que afectará a mi estado
  //para pasarle el onChange del input
  /* const handleInputChange = (e) => {
    e.preventDefault();
    setCity(e.target.value)
  } */
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      //cuando haga el submit ejecutaré la función onSearch 
      //con mi estado city es decir, lo que sea que haya escrito
      //el usuario.
      onSearch(city);
      setCity("");
      
    }}  className="form">
        <icon />
      
        <TextField style={{ backgroundColor: '#FFFFFF', height: '40px', marginTop: 40, borderRadius: 5}} size="small" id="filled-basic" label="City..." variant="standard" value={city} onChange={ e=> setCity(e.target.value)}  />

      <Button
      type="submit"
      style={{
        marginLeft: 10,
        fontSize: 14
      }} size="large" variant="contained"  style={{marginTop: 40, backgroundColor: '#00ADB5', marginLeft: 5}} >
      <Icon path={mdiCloudSearch} size="24px"/>
      </Button>
    </form>
  );
};
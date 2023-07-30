import { Link, NavLink, Route, Routes } from 'react-router-dom'
import "./App.css";
import  { useState } from "react";
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CountryDetails from './pages/CountryDetailsPage';
import axios from 'axios';

function App() {

 
 /*const getAllCountries = (async ()=>{
  const response = await axios.get(`${urlAPI}/countries`)
  return response.data
 }) */

 /*const getOneCountry = (async (alpha3Code)=>{
  const response = await axios.get(`${urlAPI}/countries/${alpha3Code}`)
  return response.data
 }) */

  return (
    <div className="App">
      <Navbar />
      <h1>LAB | React WikiCountries</h1>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/:countryId" element={<CountryDetails/>} />

        <Route path='*' element={<h1>404 not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;

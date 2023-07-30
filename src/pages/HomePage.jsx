import axios from "axios";
import { useState, useEffect } from "react";
import { Link} from 'react-router-dom'

function HomePage() {
    const [countries, setCountries] = useState([])
    const urlAPI = "https://ih-countries-api.herokuapp.com"

    useEffect(() => {
            const getAllCountries = async ()=>{
            const response = await axios.get(`${urlAPI}/countries`)
            console.log(response.data)
            setCountries(response.data)
            }
            getAllCountries()
    },[])



    return (
    <>
    <h1>WikiCountries: Your Guide to the World</h1>
    <div>
        {countries.map(country => {
            return (
        <div key={country._id}>
            <img src= {`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.alpha3Code} />
            <p> <Link to={ `/${country.alpha3Code}`}>{country.name.common}</Link></p>
             
        </div>
        )
       })}

    </div>
    </>
    )
}

export default HomePage;

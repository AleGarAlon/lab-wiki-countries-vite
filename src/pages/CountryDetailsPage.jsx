import { useEffect, useState } from 'react'
import { useParams, useSearchParams, Link} from 'react-router-dom'
import axios from "axios";
import { } from 'react-router-dom'


function CountryDetails() {
    const params = useParams()
    const [country, setCountry] = useState({})
    const [searchParams, setSearchParams] = useSearchParams()
    const [isLoading, setIsLoading] = useState(true)
    
    console.log(params.countryId)
    
    useEffect(() => {
        const oneCountry = async ()=>{
        const response = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${params.countryId}`)
        console.log(response.data)
        setCountry(response.data)
        }
    oneCountry()
},[params])

   

    
    
    return( 
    <>
    {Object.keys(country).length !== 0 ? (
        <>
    <h1>Country Details</h1>
    <h2>{country.name.common}</h2>
    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" />
    <p>Capital: {country.capital[0]}</p>
    <p>Area: {country.area}</p>
    {country.borders.map(border => {
            return (
          <div key={border}>
            <p> <Link to={ `/${border}`}>{border}</Link></p>
          </div>   
        )
       })}
    <p></p>
    
    </>
    ):
      <p>Loading...</p>}
    </>
    )
}

export default CountryDetails;

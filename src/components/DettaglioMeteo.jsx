import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import DettagliSettimana from "./DettagliSettimana"
import DetailsDay from "./DetailsDay"
import HeroToday from "./HeroToday"
import cityNotFound from '../cityNotFound.jpg'


const DettaglioMeteo = (props) => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState([])
  const [oggi, setOggi] = useState({})
  const [location, setLocation] = useState(null)
  const params = useParams()

  const getNewToday = (today) => {
    setOggi(today)
  };

  useEffect(() => {
    const fetchCoordinate = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(
          `https://geocoding-api.open-meteo.com/v1/search?name=${params.city}&count=3&language=it&format=json`
        );
        const resultsList = response.data.results
        setResults(resultsList)
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    };

    if (params.city) {
      fetchCoordinate();
      setLocation(params.city)
    }
  }, [params.city])

  const latitude = results && results.length > 0 ? results[0].latitude : null
  const longitude = results && results.length > 0 ? results[0].longitude : null

  return (
    <>
      {latitude && longitude ? (
        <>
          <HeroToday today={oggi} city={location} />
          <DettagliSettimana latitudine={latitude} longitudine={longitude} dayShow={6} />
          <DetailsDay latitudine={latitude} longitudine={longitude} getNewToday={getNewToday} />
        </>
      ) : (
        <>
          {isLoading && <p>Caricamento...</p>}
          {error ? (
            <h2 className="d-flex justify-content-center text-white">Errore: {error}</h2>
          ) : (
            <div>
              <div>
                <h2 className="d-flex justify-content-center text-white text-center">Ma dove abiti? <br /> Dove vorresti andare? <br /> Questa città non è stata trovata <br /> o addirittura non esiste!!</h2>
              </div>
              <div className="d-flex justify-content-center my-5">
                <img src={cityNotFound} alt="citta' non trovata" width={500} />
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default DettaglioMeteo;
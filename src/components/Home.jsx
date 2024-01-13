import { Col, Row } from "react-bootstrap"
import DettagliSettimana from "./DettagliSettimana"
import MyAdv from "./MyAdv"
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()

    const handleClick = (city) => {
        navigate("/DettaglioMeteo/" + city)
    };

    return (
        <div>
            <Row className="justify-content-center ali">
                <Col xs={2} className="my-card d-flex flex-column justify-content-around my-animation align-items-center " onClick={() => handleClick("San severo")}>
                    <h2 className=" text-white">San Severo</h2>
                    <DettagliSettimana latitudine="41.6856" longitudine="15.3815" dayShow={1} />
                </Col>
                <Col xs={2} className="my-card d-flex flex-column justify-content-around my-animation align-items-center" onClick={() => handleClick("Torgiano")}>
                    <h2 className="text-white">Torgiano</h2>
                    <DettagliSettimana latitudine="43.0276" longitudine="12.4401" dayShow={1} />
                </Col>
                <Col xs={2} className="my-card d-flex flex-column justify-content-around my-animation align-items-center" onClick={() => handleClick("Caltanissetta")}>
                    <h2 className="text-white">Caltanissetta</h2>
                    <DettagliSettimana latitudine="37.4903" longitudine="14.0622" dayShow={1} />
                </Col>
                <Col xs={2} className="my-card d-flex flex-column justify-content-around my-animation align-items-center" onClick={() => handleClick("Foggia")}>
                    <h2 className="text-white">Foggia</h2>
                    <DettagliSettimana latitudine="41.4584" longitudine="15.5519" dayShow={1} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <MyAdv />
                </Col>
            </Row>
        </div>
    );
}

export default Home;

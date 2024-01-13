import logo from '../logo.png'
import { Navbar, Container } from "react-bootstrap"
import SearchCity from './SearchCity'
import { Link } from 'react-router-dom'


const MyNavbar = () => {

    return (
        <>
            <Navbar className="bg-body-light margin-bottom">
                <Container className="d-flex justify-content-between">
                    <Navbar.Brand as={Link} to="/" className="d-flex justify-content-between">
                        <img src={logo} alt='logo meteo' width={60}/>
                        <h1 className="text-white">MondoMeteo</h1>
                    </Navbar.Brand>
                    <SearchCity />
                </Container>
            </Navbar>
        </>
    )
}

export default MyNavbar
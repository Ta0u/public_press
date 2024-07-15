import '../global2.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
export default function Navigation() {
  return (
    <>
      <title>MTLab1 Graphs</title>
      <link rel="icon" href="../../Home/CLS-Logo.png" type="image/png"></link>
      <Navbar expand="lg">
        <div className="d-flex justify-content-center align-items-center w-100">
          <img src="../../Home/sp-logo.png" alt="Left Image" style={{ maxHeight: 65, marginRight: 40 }}></img>
          <h2 className="m-0" style={{ margin: 0 }}>Real Time Air Quality Monitoring System</h2>
          <img src="../../Home/CLS-Banner.jpg" alt="Right Image" style={{ maxHeight: 65, marginRight: 40 }}></img>
        </div>
      </Navbar>
      <Nav className="mx-auto" style={{ backgroundColor: "#f5f5dc" }}>
        <Nav.Item className="mx-auto">
          <Nav.Link className="nav-link" prefetch={true} href="../../Home/home.php">Home <span className={"sr-only"}>(current)</span></Nav.Link>
        </Nav.Item>
        <Nav.Item className="mx-auto">
          <Nav.Link className="nav-link" href="../../dash/alarm.php">Alarm Status <span className={"sr-only"}>(current)</span></Nav.Link>
        </Nav.Item>
        <Nav.Item className="mx-auto">
          <Nav.Link href="../../AQI/AQI.php">Air Quality <span className={"sr-only"}>(current)</span></Nav.Link>
        </Nav.Item>
        <NavDropdown className="mx-auto" title="Average values by Lab" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1" href={"../../Labs/MTLab1/MTLab1.php"}>MTLab1</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2" prefetch={true} href={"../../Labs/MTLab2/MTLab2.php"}>MTLab2</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3" href={"../../Labs/MTLab3/MTLab3.php"}>MTLab3</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.4" href={"../../Labs/MTLab4/MTLab4.php"}>MTLab4</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown className="mx-auto"title="View by Sensor" id="nav-dropdown">
          <NavDropdown.Item eventKey="5.1" href="../../Sensors/MTLab1S1/MTLab1S1.php">MTLab1S1</NavDropdown.Item>
          <NavDropdown.Item eventKey="5.2" href="../../Sensors/MTLab1S2/MTLab1S2.php">MTLab1S2</NavDropdown.Item>
          <NavDropdown.Item eventKey="5.3" href="../../Sensors/MTLab2S3/MTLab2S3.php">MTLab2S3</NavDropdown.Item>
          <NavDropdown.Item eventKey="5.4" href="../../Sensors/MTLab2S4/MTLab2S4.php">MTLab2S4</NavDropdown.Item>
          <NavDropdown.Item eventKey="5.5" href="../../Sensors/MTLab3S5/MTLab3S5.php">MTLab3S5</NavDropdown.Item>
          <NavDropdown.Item eventKey="5.6" href="../../Sensors/MTLab3S6/MTLab3S6.php">MTLab3S6</NavDropdown.Item>
          <NavDropdown.Item eventKey="5.7" href="../../Sensors/MTLab4S7/MTLab4S7.php">MTLab4S7</NavDropdown.Item>
          <NavDropdown.Item eventKey="5.8" href="../../Sensors/MTLab4S8/MTLab4S8.php">MTLab4S8</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown className="mx-auto" title="View by Parameter" id="nav-dropdown">
          <NavDropdown.Item eventKey="6.1" href="../../Parameters/Temperature/Temperature.php">Temperature</NavDropdown.Item>
          <NavDropdown.Item eventKey="6.2" href="../../Parameters/CO2/CO2.php">CO2</NavDropdown.Item>
          <NavDropdown.Item eventKey="6.3" href="../../Parameters/Humidity/Humidity.php">Humidity</NavDropdown.Item>
          <NavDropdown.Item eventKey="6.4" href="../../Parameters/DustPM2.5/DustPM2'5.php">DustPM2.5</NavDropdown.Item>
          <NavDropdown.Item eventKey="6.5" href="../../Parameters/DustPM10/DustPM10.php">DustPM10</NavDropdown.Item>
        </NavDropdown>
        <li className="nav-item dropdown">
          <div className="dropdown-menu custom-dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
            <form method="post" style={{ margin: 0 }}>
              <input type="submit" name="logout" value="Logout" className="btn btn-danger"></input>
            </form>
          </div>
        </li>
      </Nav >
    </>
  );
}

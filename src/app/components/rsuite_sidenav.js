import React from 'react'
import 'rsuite/dist/rsuite-no-reset.min.css';
import { Sidenav, Nav, Dropdown } from 'rsuite';
export default function Side() {
  return (
    <div className="App">
      <h3>React Suite Sidenav Appearance</h3>
      <div style={{ width: "200px" }}>
        <Sidenav appearance="subtle">
          <Sidenav.Body>
            <Nav activeKey="1">
              <Nav.Item eventKey="1">
                Dashboard
              </Nav.Item>
              <Nav.Menu eventKey="2" title="Average Values By Labs">
                <Nav.Item eventKey="2-1" href={"../Labs/1Lab"}>
                  MTLab1
                </Nav.Item>

                <Nav.Item eventKey="2-2"href={"../Labs/2Lab"}>
                  MTLab2
                </Nav.Item>

                <Nav.Item eventKey="2-3"href={"../Labs/3Lab"}>
                  MTLab3
                </Nav.Item>

                <Nav.Item eventKey="2-4"href={"../Labs/4Lab"}>
                  MTLab4
                </Nav.Item>
              </Nav.Menu>
            </Nav>
            <Nav activeKey="3">
              <Nav.Item eventKey="1" href={"../../Labs/MTLab1/MTLab1.php"}>
                Dashboard
              </Nav.Item>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </div>
    </div>
  );
}

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { GrSun } from "react-icons/gr";
import { IoMoon } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { useState } from "react";

function MyNavbar() {
  const [light, setLight] = useState(true);

  const handleClick = () => {
    setLight(!light);
  };
  return (
    <>
      {light ? (
        <Navbar
          expand="lg"
          className="d-flex justify-content-between align-items-center bg-secondary fw-bold"
        >
          <Container>
            <Navbar.Brand className="text-dark" href="#">
              React Movie App
            </Navbar.Brand>
            <div className="text-white">
              <ul className="d-flex list-unstyled">
                <li onClick={handleClick} className="p-2">
                  <GrSun />
                </li>
                <li className="p-2">
                  <FaUser />
                </li>
              </ul>
            </div>
          </Container>
        </Navbar>
      ) : (
        <Navbar
          expand="lg"
          className="d-flex justify-content-between align-items-center bg-dark fw-bold"
        >
          <Container>
          <Navbar.Brand className="text-white" href="#">
              React Movie App
            </Navbar.Brand>

            <div className="text-white">
              <ul className="d-flex list-unstyled">
                <li onClick={handleClick} className="p-2">
                  {light ? <GrSun /> : <IoMoon color="blue" />}
                </li>
                <li className="p-2">
                  <FaUser />
                </li>
              </ul>
            </div>
          </Container>
        </Navbar>
      )}
    </>
  );
}

export default MyNavbar;

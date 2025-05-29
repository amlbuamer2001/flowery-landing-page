import { Nav } from "react-bootstrap";
import { CustomButton } from "../../Shared/CustomButton";

export function NavigationLinks() {
  return (
    <Nav className="ms-auto">
      <Nav.Link className="me-5" style={{ color: "inherit" }} href="#home">Home</Nav.Link>
      <Nav.Link className="me-5" style={{ color: "inherit" }} href="#features">Features</Nav.Link>
      <Nav.Link className="me-5" style={{ color: "inherit" }} href="#pricing">Pricing</Nav.Link>
      <CustomButton><a href="#contact">Contact us</a></CustomButton>
    </Nav>
  );
}

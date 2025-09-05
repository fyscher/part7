import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
const Menu = () =>
{
  const padding =
    {
        paddingRight: 5
    }
    const user = null

    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#" as="span">
                        <Link style={padding} to="/">Home</Link>
                    </Nav.Link>
                    <Nav.Link href="#" as="span">
                        <Link style={padding} to="/users">Users</Link>
                    </Nav.Link>
                    <Nav.Link href="#" as="span">
                        <Link style={padding} to="/about">About</Link>
                    </Nav.Link>
                    <Nav.Link href="#" as="span">
                        <Link style={padding} to="/create">Create New</Link>
                    </Nav.Link>
                    <Nav.Link href="#" as="span">
                        {user
                            ? <em style={padding}>{user} logged in</em>
                            : <Link style={padding} to={"/login"}>Login</Link>
                        }
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Menu;
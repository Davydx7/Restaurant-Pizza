import { Nav, NavIcon, NavLink, Pizza } from "./NavbarElements"

const Navbar = () => {
    return (
        <Nav>
            <NavLink to="/"> Pizza</NavLink>
            <NavIcon>
                <p>Menu</p>
                <Pizza />
            </NavIcon>
        </Nav>
    )
}

export default Navbar

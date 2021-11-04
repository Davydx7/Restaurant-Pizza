import { NavContainer, NavIcon, NavLink, Pizza } from "./NavbarElements"

const Navbar = ({toggle}) => {
    return (
        <NavContainer>
            <NavLink to="/"> Pizza</NavLink>
            <NavIcon onClick={toggle}>
                <p>Menu</p>
                <Pizza />
            </NavIcon>
        </NavContainer>
    )
}

export default Navbar

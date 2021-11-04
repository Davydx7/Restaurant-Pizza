import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SideBtnWrarp, SidebarRoute  } from "./SidebarElements";

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Pizzas</SidebarLink>
                <SidebarLink to="/">Desserts</SidebarLink>
                <SidebarLink to="/">Full Menu</SidebarLink>
            </SidebarMenu>
            <SideBtnWrarp>
                <SidebarRoute to="/">Order Now</SidebarRoute>
            </SideBtnWrarp>
        </SidebarContainer>
    )
}

export default Sidebar

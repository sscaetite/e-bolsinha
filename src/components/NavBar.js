import React, { useState} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'

const NavBar = () => {
    const styleNavBar = {
        height: `${80}px`,
        paddingLeft: `${6}vw`,
        paddingRight: `${6}vw`
    }
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
            <Navbar color="faded" light expand="md" style={styleNavBar}>
                <NavbarBrand href="/" style={{fontFamily: "Vidaloka", fontSize: `${1.6}em`, color: '#808080'}}>e-Bolsinha</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Loja</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/">Sobre</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/">Carrinho</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/">Entrar</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>

    )
}

export default NavBar
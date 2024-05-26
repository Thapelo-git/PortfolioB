import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav'
// import Navbar from 'react-bootstrap/Navbar'
import { Container, NavbarBrand } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

function NavicationBar() {
  return (
    <Navbar expand='lg' className='bg-primary w-100 fixed-top z-1'
    data-bs-theme='dack'>
        <Container>
            <NavbarBrand href='#' className='fs-4'>TT<span
            className='text-dark'>S.</span>
</NavbarBrand>
    <NavbarToggle aria-controls='basic-navbar-nav'/>
    <NavbarCollapse id='basic-navbar-nav'>
        <Nav className='me-auto w-100 d-flex justify-content-end'>
            <Nav.Link href='#header'>Home</Nav.Link>
            <Nav.Link href='#about'>About</Nav.Link>
            <Nav.Link href='#project'>Projects</Nav.Link>
            <Nav.Link href='#header'>Contact</Nav.Link>
        </Nav>
    </NavbarCollapse>
        </Container>
    </Navbar>
  )
}

export default NavicationBar
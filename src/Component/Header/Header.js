import React from 'react';
import {
  Container,
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
  NavDropdown
} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link, NavLink, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import CustomButton from '../Button/CustomButton';
import "../Header/Header.css";

export const Header = (Props) => {
  const pathName = Props.location?.pathname;
  return (
    
    <Navbar sticky='top' className='header'>
      <Nav.Link as={NavLink} to='/portfolio'>
        <Navbar.Brand className='header_home'><HomeIcon /></Navbar.Brand>
      </Nav.Link>
      <Navbar.Collapse>
        <Nav className='header_left'>
          {/* Resume link */}
          <Nav.Link as={NavLink} to='/resume' className={pathName === '/' ? 'header_link_active' : 'header_link'}>Resume</Nav.Link>
          {/* Portfolio link */}
          <Nav.Link as={NavLink} to='/portfolio' className={pathName === '/portfolio' ? 'header_link_active' : 'header_link'}>Portfolio</Nav.Link>
        </Nav>
        <div className='header_right'>
          <a href='https://knowbody.github.io/react-router-docs/api/Link.html' target='_blank'><GitHubIcon /></a>
          <a href='https://knowbody.github.io/react-router-docs/api/Link.html' target='_blank'><FacebookIcon /></a>
          <a href='https://knowbody.github.io/react-router-docs/api/Link.html' target='_blank'><InstagramIcon /></a>
          <a href='https://knowbody.github.io/react-router-docs/api/Link.html' target='_blank'><LinkedInIcon /></a>
          <CustomButton text={'hire me'} icon={<TelegramIcon />} />
        </div>
      </Navbar.Collapse>



    </Navbar>
  )
}
export default Header;





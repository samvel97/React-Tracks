import { Navbar, Nav,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import './style.scss'

const NavBar = ()=>{
  return(
    <Navbar 
      bg="dark" 
      variant="dark" >
    <Nav className="mr-auto">
      <Navbar.Brand >
        <Link to='/'>
          <h3>ReactTracks</h3>
        </Link>
      </Navbar.Brand>
      <Link 
        to='/profile' 
        className='profile'>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="30" 
          height="30" 
          fill="currentColor" 
          className="bi bi-volume-down-fill" 
          viewBox="0 0 16 16">
            <path d="M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12V4zm3.025 4a4.486 4.486 0 0 1-1.318 3.182L10 10.475A3.489 3.489 0 0 0 11.025 8 3.49 3.49 0 0 0 10 5.525l.707-.707A4.486 4.486 0 0 1 12.025 8z"/>
        </svg>
        <h3>Samvel</h3>
      </Link>
      <Button 
      as="input" 
      type="logout" 
      value="Logout" 
      onChange={()=>{
        localStorage.setItem('token', JSON.stringify(false))
        }}/>
    </Nav>
  </Navbar>
 
  )
}

export default NavBar;
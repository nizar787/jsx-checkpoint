import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import image1 from './imageInSrc.jpg';
import { Navbar,Nav,NavDropdown} from 'react-bootstrap';





function App() {
  return ( 
    <div>
<Navbar bg="light" expand="lg">
              <div>
                  <Navbar.Brand href="#home">my website</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto">
                          <Nav.Link href="#home">Home</Nav.Link>
                          <Nav.Link href="#link">Link</Nav.Link>
                          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                              <NavDropdown.Divider />
                              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                          </NavDropdown>
                      </Nav>
                  </Navbar.Collapse>
              </div>
          </Navbar>
        
<h1 className="title red">nizar harb</h1>

        <div className='image' style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          
          
          <img src={image1}  /> ;
          
          <img src='/imageInPublic.jpg' />
        </div>
        <div className='video'>
        <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
        </div>

       
  <div className='buttons'>
  <>
  <Button variant="primary">Primary</Button>{' '}
  <Button variant="secondary">Secondary</Button>{' '}
  <Button variant="success">Success</Button>{' '}
  <Button variant="warning">Warning</Button>{' '}
  <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
  <Button variant="link">Link</Button>
</>
  </div>
  
</div>


     
    );}

    export default App
 
    

    
  

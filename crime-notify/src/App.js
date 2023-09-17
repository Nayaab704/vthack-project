import './App.css';
import Footer from './Components/Footer';
import Map from './Components/Map';
import Header from './Components/Header';
import {Link,Route, BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
  //   <div className="App">
  //   <Router>
  //   <Navbar bg="dark" data-bs-theme="dark">
  //     <Container>
  //       <Navbar.Brand href="#home">Navbar</Navbar.Brand>
  //       <Nav className="me-auto">
  //         <Route>
  //         <Nav.Link ><Link>Home</Link></Nav.Link>
  //         </Route>
  //       </Nav>
  //     </Container>
  //   </Navbar>
   
  //  <Map></Map>

  //   </Router>
  // </div>


    <div className="App">
      <Router>
      <Header></Header>
      <Map></Map>
      <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

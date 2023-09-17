import './App.css';
import Footer from './Components/Footer';
import Map from './Components/Map';
import Header from './Components/Header';

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
      <Header></Header>
      {/* <Sidebar></Sidebar> */}
      <Map></Map>
      <Footer></Footer>
    </div>
  );
}

export default App;

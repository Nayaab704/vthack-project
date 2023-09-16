import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import Map from './Components/Map';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Sidebar></Sidebar>
      <Map></Map>
      <Footer></Footer>
    </div>
  );
}

export default App;

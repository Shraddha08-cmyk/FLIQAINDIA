import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Header from './components/Header/Header';
import Associate from './components/Associate/Associate';
import Service from './components/Servicess/Service';
import Blog from './components/Blogs/Blog';
import Wedding from './components/Wedding/Wedding';
import Offer from './components/Offers/Offer';
import Test from './components/Testss/Test';
import Awards from './components/Awards/Awards';
import Success from './components/Success/Success';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Associate />
      <Service />
      <Blog />
      <Wedding />
      <Offer />
      <Test />
      <Awards />
      <Success />
    </div>
  );
}

export default App;

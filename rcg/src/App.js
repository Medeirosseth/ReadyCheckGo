import './App.css';
//import { useSpring, animated } from 'react-spring'
import Header from './components/Header';
import CheckControl from './components/CheckControl';
import Footer from './components/Footer';


function App() {

  return (
    <div className="App">
      <Header />
      <CheckControl />
      <Footer />
    </div>
  );
}


export default App;
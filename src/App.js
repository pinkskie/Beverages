import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch></Switch>
      <MainPage/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

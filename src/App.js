import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path='/' exact><MainPage/></Route>
        {/* <Route path='/categories'><Categories/></Route> */}
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

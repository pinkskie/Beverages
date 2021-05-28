import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import Categories from './pages/Сategories'
import Coctails from 'pages/CoctailsList';
import Details from 'pages/CoctailsList/Details';
import Ingredients from 'pages/IngrediestsPage/Ingredients';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path='/' exact><MainPage/></Route>
        <Route path='/categories'><Categories/></Route>
        <Route path='/coctails/:id'><Details/></Route>
        <Route path='/coctails'><Coctails/></Route>
        <Route path='/ingredients'><Ingredients/></Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

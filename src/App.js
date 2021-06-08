import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import Categories from './pages/Сategories'
import Coctails from 'pages/CoctailsList';
import Details from 'pages/CoctailsList/Details';
import Ingredients from 'pages/IngrediestsPage/Ingredients';
import CategoriesPage from 'pages/CategoriesPage/CategoriesPage';
import GlassesPage from 'pages/GlassesPage/GlassesPage';
import SearchPage from 'pages/SearchPage/SearchPage';
import Contacts from 'pages/Contacts/Contacts';
import About from 'pages/About/About';
import Wishlist from 'pages/Wishlist/Wishlist';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path='/' exact><MainPage/></Route>
        <Route path='/categories'><Categories/></Route>
        <Route path='/coctails/:id'><Details/></Route>
        <Route path='/coctails'><Coctails/></Route>
        <Route path='/ingredientsPage'><Ingredients/></Route>
        <Route path='/categoriesPage'><CategoriesPage/></Route>
        <Route path='/glassesPage'><GlassesPage/></Route>
        <Route path='/searchPage'><SearchPage/></Route>
        <Route path='/contacts'><Contacts/></Route>
        <Route path='/about'><About/></Route>
        <Route path='/wishlist'><Wishlist/></Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

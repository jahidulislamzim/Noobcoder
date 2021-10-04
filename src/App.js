import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Courses from './Components/Courses/Courses';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import NotFound  from './Components/NotFound/NotFound';



function App() {
  return (
    <div className="App">
      

      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route  path='/home'>
            <Home></Home>
          </Route>
          <Route path='/courses'>
            <Courses></Courses>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/blog'>
            <Blog></Blog>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

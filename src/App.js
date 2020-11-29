import React from 'react'
import {Switch, Route, useLocation} from 'react-router-dom'
//Animation
import {AnimatePresence} from 'framer-motion'

//Global Style
import GlobalStyle from './components/GlobalStyle';
import { Nav } from './components/Nav';
//Pages
import { ABoutUs } from './pages/ABoutUs'
import { ContactUs } from './pages/ContactUs';
import { MovieDetail } from './pages/MovieDetail';
import { OurWork } from './pages/OurWork';


function App() {
  const location = useLocation();



  return (
    <div className="App">
      <GlobalStyle />
      <Nav />

      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path='/'>
            <ABoutUs />
          </Route>
          <Route exact path='/work'>
            <OurWork />
          </Route>
          <Route path='/work/:id'>
            <MovieDetail />
          </Route>
          <Route path='/contact'>
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>

    </div>
  );
}

export default App;

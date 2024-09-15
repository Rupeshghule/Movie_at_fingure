import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './components/HomePage';
import MovieDetailPage from './components/MovieDetailPage';
import Navbar from './components/Navbar';
import TopRatedPage from './components/TopRatedPage';
import UpcomingPage from './components/UpcomingPage';

function App() {
  return (
    <div className="App">
      
      < BrowserRouter >
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/top-rated" component={TopRatedPage} />
        <Route exact path="/upcoming" component={UpcomingPage} />
        <Route path="/movie/:id" component={MovieDetailPage} />
        
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
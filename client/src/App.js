import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PrivatePage from './components/PrivatePage'
import PublicPage from './components/PublicPage'
import PrivateRouter from './PrivateRoute';
import PublicRouter from './PublicRouter';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <PrivateRouter path="/dashboard" component={PrivatePage} />
          <PublicRouter path="/" component={PublicPage} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
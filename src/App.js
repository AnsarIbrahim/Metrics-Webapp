import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import DisplayHome from './components/DisplayHome/DisplayHome';
import Home from './components/Home/Home';
import Details from './components/Content/Details/Details';
import Home2 from './components/Home/Home2';
import store from './redux/Store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<DisplayHome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/next" element={<Home2 />} />
            <Route path="/details/:num" element={<Details />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;

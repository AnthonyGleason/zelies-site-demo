import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import ContactMe from './components/ContactMe/ContactMe';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Nav />
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Blog />} path='/blog' />
        <Route element={<ContactMe />} path='/contact' />
      </Routes>
      <Footer />
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

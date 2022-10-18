import React from 'react';
import './App.scss';
import NavBar from "./components/layout/navbar/NavBar";
import AppRouter from "./components/AppRouter";
import Footer from "./components/layout/footer/Footer";

function App() {
  return (
    <>
        <NavBar />
        <AppRouter />
        <Footer />
    </>
  );
}

export default App;

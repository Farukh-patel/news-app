import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const [mode, setMode] = useState("light");
  const [progress, setProgress] = useState(0);

  const toggleMode = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "black";
      setMode("dark");
    } else {
      document.body.style.backgroundColor = "#e3e3e3";
      setMode("light");
    }
  };

  return (
    <>
      <Router>
        <LoadingBar height={3} color='#f11946' progress={progress} />
        <Navbar toggleMode={toggleMode} mode={mode} />
        <Routes>
          <Route
            path="/business"
            element={<News setProgress={setProgress} key="Business" mode={mode} country="in" category="Business" />}
          />
          <Route
            path="/entertainment"
            element={<News setProgress={setProgress} key="Entertainment" mode={mode} country="in" category="Entertainment" />}
          />
          <Route
            path="/"
            element={<News setProgress={setProgress} key="HOME" mode={mode} country="in" category="General" />}
          />
          <Route
            path="/health"
            element={<News setProgress={setProgress} key="Health" mode={mode} country="in" category="Health" />}
          />
          <Route
            path="/science"
            element={<News setProgress={setProgress} key="Science" mode={mode} country="in" category="Science" />}
          />
          <Route
            path="/sports"
            element={<News setProgress={setProgress} key="Sports" mode={mode} country="in" category="Sports" />}
          />
          <Route
            path="/technology"
            element={<News setProgress={setProgress} key="Technology" mode={mode} country="in" category="Technology" />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;

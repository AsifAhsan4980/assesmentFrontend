import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import Home from "./pages/Home";

function App() {

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>

            <Route path={"/"} element={<Home/>}/>
            <Route/>
        </Routes>
      </BrowserRouter>

    </ErrorBoundary>
  );
}

export default App;

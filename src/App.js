import React, { useState, useCallback } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import MainPage from 'pages/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Route path="/:category?" component={MainPage} />
    </BrowserRouter>
  );
}

export default App;

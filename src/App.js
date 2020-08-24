import React from 'react';
import { initNotification } from './services/firebaseServices';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hi There Bootcamp 2020 PWA</h1>
      <h1>Make By Aman Mirza</h1>
      <button onClick={initNotification}>Configure Notification</button>
    </div>
  );
}

export default App;

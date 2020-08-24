import React from 'react';
import { initNotification } from './services/firebaseServices';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>hi there</h1>
      <button onClick={initNotification}>Configure Notification</button>
    </div>
  );
}

export default App;

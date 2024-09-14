import React, { useState, useEffect } from 'react';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Productivity App</h1>
        <p>Organize your day efficiently.</p>
        <div className="time-display">
          Current Time: {currentTime.toLocaleTimeString()}
        </div>
      </header>
    </div>
  );
}

export default App;

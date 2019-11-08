import React, { useState } from 'react';
import './App.css';
import DashBoard from './components/Dashboard';
import Display from './components/Display';

function App() {
  
  const [counts, setCounts] = useState ({hits : 0,
                                        strikes: 0,
                                        balls: 0,
                                        fouls: 0
                                        });

  return (
    <div className="App">
      <Display counts={counts} />
      <DashBoard counts={counts} setCounts={setCounts}/>
    </div>
  );
}

export default App;

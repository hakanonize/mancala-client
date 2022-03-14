import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Game from './components/Game';
import Lobby from './components/Lobby';
import { useState } from 'react';

function App() {
  const [socket, setSocket] = useState(null);
  const [serverMessage, setServerMessage] = useState();

  return (
    <>
      <div className='app h-100 d-flex justify-content-center align-items-center'>
        <Router>
          <Routes>
            <Route
              path='/'
              element={
                <Lobby
                  setSocket={setSocket}
                  setServerMessage={setServerMessage}
                />
              }
            />
            <Route
              path='/game'
              element={<Game socket={socket} serverMessage={serverMessage} />}
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

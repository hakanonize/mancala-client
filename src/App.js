import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Game from './components/Game';
import Lobby from './components/Lobby';
import { useEffect, useState } from 'react';

function App() {
  const [socket, setSocket] = useState(null);
  const [serverMessage, setServerMessage] = useState();
  const [playerNum, setPlayerNum] = useState();
  const [isTurn, setIsTurn] = useState(0);
  const [holes, setHoles] = useState();

  useEffect(() => {
    setTimeout(() => {
      setServerMessage('');
    }, 5000);
  }, [serverMessage]);
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
                  setPlayerNum={setPlayerNum}
                  setIsTurn={setIsTurn}
                  setHoles={setHoles}
                />
              }
            />
            <Route
              path='/game'
              element={
                <Game
                  socket={socket}
                  serverMessage={serverMessage}
                  playerNum={playerNum}
                  isTurn={isTurn}
                  holes={holes}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

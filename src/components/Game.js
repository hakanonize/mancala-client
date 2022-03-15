import React from 'react';

const Game = ({
  socket,
  serverMessage,
  playerNum,
  isTurn,
  holes = [0, 6, 6, 6, 6, 6, 6, 0, 6, 6, 6, 6, 6, 6],
}) => {
  const hitTheHole = (hole) => {
    socket && socket.emit('hit', hole);
  };
  return (
    <>
      <div className='h1 position-absolute top-0 text-danger'>
        {serverMessage}
      </div>
      <div className='holder d-flex'>
        <div className='bg-primary text-white mancala d-flex justify-content-center align-items-center'>
          {holes[0]}
        </div>
        <div className='holes'>
          <div className='d-flex justify-content-between '>
            <button
              className={`${playerNum === 1 && isTurn ? 'active' : ''} button`}
              onClick={() => hitTheHole(8)}
            >
              {holes[13]}
            </button>
            <button
              className={`${playerNum === 1 && isTurn ? 'active' : ''} button`}
              onClick={() => hitTheHole(9)}
            >
              {holes[12]}
            </button>
            <button
              className={`${playerNum === 1 && isTurn ? 'active' : ''} button`}
              onClick={() => hitTheHole(10)}
            >
              {holes[11]}
            </button>
            <button
              className={`${playerNum === 1 && isTurn ? 'active' : ''} button`}
              onClick={() => hitTheHole(11)}
            >
              {holes[10]}
            </button>
            <button
              className={`${playerNum === 1 && isTurn ? 'active' : ''} button`}
              onClick={() => hitTheHole(12)}
            >
              {holes[9]}
            </button>
            <button
              className={`${playerNum === 1 && isTurn ? 'active' : ''} button`}
              onClick={() => hitTheHole(13)}
            >
              {holes[8]}
            </button>
          </div>
          <div className=' d-flex justify-content-between '>
            <button
              className={`${playerNum === 0 && isTurn ? 'active' : ''} button`}
              onClick={() => hitTheHole(1)}
            >
              {holes[1]}
            </button>
            <button
              className={`${playerNum === 0 && isTurn ? 'active' : ''} button`}
              onClick={() => hitTheHole(2)}
            >
              {holes[2]}
            </button>
            <button
              className={`${playerNum === 0 && isTurn ? 'active' : ''} button`}
              onClick={() => hitTheHole(3)}
            >
              {holes[3]}
            </button>
            <button
              className={`${playerNum === 0 && isTurn ? 'active' : ''} button`}
              onClick={() => hitTheHole(4)}
            >
              {holes[4]}
            </button>
            <button
              className={`${playerNum === 0 && isTurn ? 'active' : ''} button`}
              onClick={() => hitTheHole(5)}
            >
              {holes[5]}
            </button>
            <button
              className={`${playerNum === 0 && isTurn ? 'active' : ''} button`}
              onClick={() => hitTheHole(6)}
            >
              {holes[6]}
            </button>
          </div>
        </div>
        <div className='bg-primary text-white mancala d-flex justify-content-center align-items-center'>
          {holes[7]}
        </div>
      </div>
    </>
  );
};

export default Game;

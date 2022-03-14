import React from 'react';

const Game = ({ socket, serverMessage }) => {
  const hitTheHole = (hole) => {
    socket && socket.emit('hit', hole);
  };
  return (
    <>
      <div className='h1 position-absolute top-0 text-danger'>
        {serverMessage}
      </div>
      <div className='holder d-flex'>
        <button className='bg-primary text-white'>0</button>
        <div className='holes'>
          <div className='d-flex justify-content-between '>
            <button onClick={() => hitTheHole(8)}>6</button>
            <button onClick={() => hitTheHole(9)}>6</button>
            <button onClick={() => hitTheHole(10)}>6</button>
            <button onClick={() => hitTheHole(11)}>6</button>
            <button onClick={() => hitTheHole(12)}>6</button>
            <button onClick={() => hitTheHole(13)}>6</button>
          </div>
          <div className=' d-flex justify-content-between '>
            <button onClick={() => hitTheHole(1)}>6</button>
            <button onClick={() => hitTheHole(2)}>6</button>
            <button onClick={() => hitTheHole(3)}>6</button>
            <button onClick={() => hitTheHole(4)}>6</button>
            <button onClick={() => hitTheHole(5)}>6</button>
            <button onClick={() => hitTheHole(6)}>6</button>
          </div>
        </div>
        <button className='bg-primary text-white'>0</button>
      </div>
    </>
  );
};

export default Game;

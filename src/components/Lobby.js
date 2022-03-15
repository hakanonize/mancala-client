import React from 'react';
import { io } from 'socket.io-client';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Lobby = ({
  setSocket,
  setServerMessage,
  setPlayerNum,
  setIsTurn,
  setHoles,
}) => {
  const [userName, setUsername] = useState();
  const [roomName, setRoomName] = useState();

  const navigate = useNavigate();

  const connectSocket = () => {
    const socket = io('ws://localhost:65080', {
      query: {
        roomName: roomName,
        userName: userName,
        action: 'create',
      },
    });
    setSocket(socket);

    socket.on('message', (m) => {
      console.log(m);
      if (m.includes('Error')) window.alert(m);
      else setServerMessage(m);
    });

    socket.on('joined', (m) => {
      setPlayerNum(m);
      navigate('/game');
    });

    socket.on('turn', (m) => {
      setIsTurn(m);
      console.log(m);
    });

    socket.on('HOLES', (m) => {
      m && setHoles(m);
    });

    socket.on('END', (m) => {
      setServerMessage(`Winner is ${m.winner} by ${m.score[0]} `);
    });
  };
  const joinRoom = () => {
    const socket = io('ws://localhost:65080', {
      query: {
        roomName: roomName,
        userName: userName,
        action: 'join',
      },
    });
    setSocket(socket);

    socket.on('message', (m) => {
      console.log(m);
      if (m.includes('Error')) window.alert(m);
      else setServerMessage(m);
    });

    socket.on('joined', (m) => {
      setPlayerNum(m);
      navigate('/game');
    });

    socket.on('turn', (m) => {
      setIsTurn(m);
    });

    socket.on('HOLES', (m) => {
      m && setHoles(m);
    });

    socket.on('END', (m) => {
      setServerMessage(`Winner is ${m.winner} by ${m.score[0]} `);
    });
  };

  return (
    <div className='lobby w-25'>
      <input
        type='text'
        className='form-control'
        placeholder='Username'
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type='text'
        className='form-control mt-2'
        placeholder='Room Name'
        onChange={(e) => setRoomName(e.target.value)}
      />
      <div className='d-flex justify-content-between py-2'>
        <button className='btn btn-primary' onClick={connectSocket}>
          CREATE ROOM
        </button>
        <button className='btn btn-danger' onClick={joinRoom}>
          JOIN ROOM
        </button>
      </div>
    </div>
  );
};

export default Lobby;

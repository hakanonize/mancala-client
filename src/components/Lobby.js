import React from 'react';
import { io } from 'socket.io-client';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Lobby = ({ setSocket, setServerMessage }) => {
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

    socket.on('message', (m) => {
      setServerMessage(m);
    });
    setSocket(socket);
    navigate('/game');
  };
  const joinRoom = () => {
    const socket = io('ws://localhost:65080', {
      query: {
        roomName: roomName,
        userName: userName,
        action: 'join',
      },
    });
    socket.on('message', (m) => {
      setServerMessage(m);
    });
    setSocket(socket);
    navigate('/game');
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

import  React, { useState } from 'react';
import Client from './components/Client';
import AddClient from './components/AddClient';
import NavBar from './components/NavBar';
import './App.css';

function App() {

  const [clients, setClients] = useState([
    {id: 1, nom: '1er client'},
    {id: 2, nom: '2eme client'},
    {id: 3, nom: '3eme client'}
 ])

 const [darkMode, setDarkMode] = useState(false);

  //const input = React.createRef();

  const handleClick = (number) => {
      const newClients = clients.slice();
      const index = clients.findIndex((client) => {
        return client.id === number
      })

      newClients.splice(index, 1);

      setClients(newClients);

  }

  const handleSubmit = (client) => {
    const newClients = clients.slice();
    newClients.push(client);
    setClients(newClients);
  }

  


  return (
    <>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Client darkMode={darkMode} clients={clients} onDelete={handleClick}/>
      <AddClient darkMode={darkMode} onSubmit={handleSubmit}/>
    </>
  );
}

export default App;

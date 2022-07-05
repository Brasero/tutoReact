import  React from 'react';
import './index.css';

function Client({darkMode, clients, onDelete}){

    const client = clients

    return (
            <>
            <ul className={darkMode === true ? 'listContainer dark' : 'listContainer'}>
            {client.map((client) => (
              <li key={client.id}>{client.nom}<button onClick={() => {onDelete(client.id)}}>X</button></li>
            ))}
            </ul>
            </>
          
    )
}

export default Client;
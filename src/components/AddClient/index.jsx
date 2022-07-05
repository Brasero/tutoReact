import React, {useState} from 'react';
import './index.css';

function AddClient({darkMode, onSubmit}){
    const [newClient, setNewClient] = useState('');

    const handleChange = (event) => {
        setNewClient(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const client = {id: new Date().getTime(), nom: newClient};
        onSubmit(client);
        setNewClient('');
    }
    return (
        <>
        <form className={darkMode ? 'formContainer dark' : 'formContainer'} onSubmit={handleSubmit}>
          <input type="text" value={newClient} onChange={handleChange} placeholder="Nom Prénom" />
          <button>Validé</button>
        </form>
        </>
    )
}

export default AddClient;
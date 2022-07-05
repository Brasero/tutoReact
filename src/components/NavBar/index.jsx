import React from 'react';
import './index.css'
import DarkButton from '../DarkButton';

function NavBar({darkMode, setDarkMode}){
    return (
        <>
            <nav  className={darkMode === true ? 'container dark' : 'container'}>
                <h1>Hello world</h1>
                <DarkButton darkMode={darkMode} setDarkMode={setDarkMode} />
            </nav>
        </>
    )
}

export default NavBar;
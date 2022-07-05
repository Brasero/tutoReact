import React from 'react';
import './index.css';
import {BsSun} from 'react-icons/bs';

function DarkButton({darkMode, setDarkMode}){

    const handleClick = () => {
        setDarkMode(!darkMode);
    }

    return (
        <>
            <div className={darkMode === true ? 'darkButtonContainer dark' : 'darkButtonContainer'}>
            <label class="switch">
                <input type="checkbox" onClick={handleClick} />
                <span class="slider round">
                    <BsSun className="icon" />
                </span>
            </label>
            </div>
        </>
    )
}

export default DarkButton;
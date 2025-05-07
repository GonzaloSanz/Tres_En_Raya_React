import { useState } from "react";

const Player = ({ initialName, symbol, isActive, onChangeName }) => {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(prevIsEditing => !prevIsEditing);

        if(isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    const handleChange = (name) => {
        if(name.trim() === '') return;
        setPlayerName(name);
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {isEditing ? (
                    <input 
                        type="text" 
                        required 
                        value={playerName}
                        onChange={e => handleChange(e.target.value)} 
                        />
                ) : (
                    <span className="player-name">{playerName}</span>
                )}

                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={() => handleEditClick()}>{isEditing ? 'Guardar' : 'Editar'}</button>
        </li >
    )
}

export default Player;
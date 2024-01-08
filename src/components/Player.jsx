import { useState } from 'react';

function Player({ initialName, symbol, isActive, onChangePlayerName }) {
  const [name, setName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((prevState) => !prevState);

    if(isEditing) {
      onChangePlayerName(symbol, name);
    }
  }

  const handleChange = (e) => {
    setName(e.target.value);
  }

  let playerName = <span className="player-name">{name}</span>;
  
  if(isEditing) {
    playerName = <input type="text" value={name} onChange={handleChange} required />;
  }

  return (
    <li className={ isActive ? 'active': undefined }>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{ isEditing ? 'Save' : 'Edit' }</button>
    </li>
  );
}

export default Player;

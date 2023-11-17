import { useState } from 'react';

function Player({ initialName, symbol }) {
  const [name, setName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((prevState) => !prevState);
  }

  const handleChange = (e) => {
    setName(e.target.value);
  }

  let playerName = <span className="player-name">{name}</span>;
  
  if(isEditing) {
    playerName = <input type="text" value={name} onChange={handleChange} required />;
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{ isEditing ? 'Save' : 'Edit' }</button>
    </li>
  );
}

export default Player;

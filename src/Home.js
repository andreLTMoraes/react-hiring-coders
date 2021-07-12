import React, {useState} from 'react';
import axios from 'axios'

export default function Home() {
  const [usuario, setUsuario] = useState('');

  function handleSearch() {
    axios.get(`https://api.github.com/users/${usuario}/repos`)
    .then(response => {
      console.log(response)
    })
  }

  return (
    <>
      <input className='usuario' placeholder='Usuário' value={usuario} onChange={e => setUsuario(e.target.value)}/>
      <button onClick={handleSearch}>Pesquisar</button>
    </>
  );
}

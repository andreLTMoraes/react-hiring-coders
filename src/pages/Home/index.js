import React, {useState} from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import * as S from './styled'

export default function Home() {
  const history = useHistory()
  const [usuario, setUsuario] = useState('');

  function handleSearch() {
    axios.get(`https://api.github.com/users/${usuario}/repos`)
    .then(response => {
      const repositories = response.data;
      const repositoriesName = [];

      repositories.map(repository => {
        repositoriesName.push(repository.name);
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName))
      history.push('/repositories');
    })
  }

  return (
    <S.Container>
      <S.Input className='usuario' placeholder='Usuário' value={usuario} onChange={e => setUsuario(e.target.value)}/>
      <S.Button onClick={handleSearch}>Pesquisar</S.Button>
    </S.Container>
  );
}

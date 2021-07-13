import React, {useState} from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import * as S from './styled'

export default function Home() {
  const history = useHistory()
  const [usuario, setUsuario] = useState('');
  const [erro, setErro] = useState(false);

  function handleSearch() {
    axios.get(`https://api.github.com/users/${usuario}/repos`)
    .then(response => {
      const repositories = response.data;
      const repositoriesName = [];

      repositories.map(repository => {
        repositoriesName.push(repository.name);
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName))
      setErro(false);
      history.push('/repositories');
    }).catch(err => {
      setErro(true);
    })
  }

  return (
    <S.Container>
      <S.Content>
        <S.Input className='usuario' placeholder='Usuário' value={usuario} onChange={e => setUsuario(e.target.value)}/>
        <S.Button onClick={handleSearch}>Pesquisar</S.Button>
      </S.Content>
      {erro ? <S.ErrorMsg>Ocorreu um erro. Tente novamente.</S.ErrorMsg> : ''}
    </S.Container>
  );
}

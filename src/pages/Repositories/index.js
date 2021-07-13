import React from 'react'
import * as S from './styled'

export default function Repositories() {
    return(
        <S.Container>
            <S.Title>Repositories</S.Title>
            <S.List>
                <S.ListItem>Repositório 01</S.ListItem>
                <S.ListItem>Repositório 02</S.ListItem>
                <S.ListItem>Repositório 03</S.ListItem>
                <S.ListItem>Repositório 04</S.ListItem>
                <S.ListItem>Repositório 05</S.ListItem>
            </S.List>
        </S.Container>
    )
}
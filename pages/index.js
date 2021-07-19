import Box from '../src/components/Box';
import MainGrid from '../src/components/MainGrid';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AluraCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import ProfileSidebar from '../src/functions/Profile';
import React from 'react';
import CreateCommunity from '../src/functions/CreateCommunity';
import RelationsBlockList from '../src/functions/RelationsBlock';

export default function Home() {
  const username = 'joaofnr'
  const name = 'João Nunes Rios'
  const firstName = name.split(' ')[0]
  const gender = 'masculino'
  const relationship = 'casado'
  const country = 'Brasil'

  const people = [
    {id:'juunegreiros', title:'juunegreiros', url:'https://github.com/users/juunegreiros', image:'https://github.com/juunegreiros.png'},
    {id:'omariosouto', title:'omariosouto', url:'https://github.com/users/omariosouto', image:'https://github.com/omariosouto.png'},
    {id:'peas', title:'peas', url:'https://github.com/users/peas', image:'https://github.com/peas.png'},
    {id:'robertaarcoverde', title:'robertaarcoverde', url:'https://github.com/users/robertaarcoverde', image:'https://github.com/robertaarcoverde.png'},
    {id:'gabsferreira', title:'gabsferreira', url:'https://github.com/users/gabsferreira', image:'https://github.com/gabsferreira.png'}
  ]

  const [communities, setCommunities] = React.useState([{
      id: 'xpto123',
      title: 'Eu odeio acordar cedo',
      url: 'https://alurakut.vercel.app/capa-comunidade-01.jpg',
      image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }])

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar username={username} name={name} gender={gender} relationship={relationship} country={country} />
        </div>
        
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">Bem vindo(a), {firstName}</h1>
            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className="subTitle">Crie sua comunidade!</h2>
            <form id="createCommunity" onSubmit={(e) => {setCommunities( CreateCommunity( e, communities ) )} }>
              <div>
                <label htmlFor="title">Nome</label>
                <input placeholder="Nome" name="title" id="title" aria-label="Nome" type="text" />
              </div>
              <div>
                <label htmlFor="image">URL da imagem de capa</label>
                <input placeholder="Imagem" name="image" id="image" aria-label="URL da imagem de capa" type="text" />
              </div>
              <div>
                <label htmlFor="url">URL da página</label>
                <input placeholder="URL" name="url" id="url" aria-label="URL da página" type="text" />
              </div>
              <button>Criar comunidade</button>
            </form>
          </Box>
        </div>
        
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <RelationsBlockList title="Pessoas da comunidade" items={people} max="6" />
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <RelationsBlockList title="Comunidades" items={communities} max="6" />
          </ProfileRelationsBoxWrapper>
        </div>
        
      </MainGrid>
    </>
  )
}

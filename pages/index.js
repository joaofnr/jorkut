import Box from '../src/components/Box';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';
import MainGrid from '../src/components/MainGrid';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AluraCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import ProfileSidebar from '../src/functions/Profile';
import React from 'react';
import CreateCommunity from '../src/functions/CreateCommunity';
import RelationsBlockList from '../src/functions/RelationsBlock';

export default function Home(props) {
  const username = props.githubUser
  console.log(username)
  /*const name = 'João Nunes Rios'
  const firstName = name.split(' ')[0]
  const gender = 'masculino'
  const relationship = 'casado'
  const country = 'Brasil'*/
  const token = 'd99e38846db8f4fe6844fdcdae807e'

  const [followers, setFollowers] = React.useState([])
  React.useEffect(() => {
    fetch(`https://api.github.com/users/${username}/followers`)
    .then((_server) => {
      return _server.json()
    })
    .then((re) => {
      setFollowers(re)
    })
  }, [])

  const [communities, setCommunities] = React.useState([])
  React.useEffect(() => {
    fetch(`https://graphql.datocms.com/`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        query: `{ 
          allCommunities {
              id
              title
              imageUrl
              url
          }
         }`
      }),
    })
    .then((_server) => {
      return _server.json()
    })
    .then((re) => setCommunities(re.data.allCommunities) )
  }, [])


  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar username={username} />
        </div>
        
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">Bem vindo(a), {username}</h1>
            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className="subTitle">Crie sua comunidade!</h2>
            <form id="createCommunity" onSubmit={
              (evt) => {
                evt.preventDefault();
                const formData = new FormData(evt.target);
                const newCommunity = {
                    title: formData.get('title'),
                    imageUrl: formData.get('image'),
                    url: formData.get('url'),
                    creatorSlug: formData.get('creator')
                }

                fetch('../api/communities', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newCommunity)
                  })
                  .then(async (response) => {
                    const data = await response.json();
                    const community = data.newEntry;
                    console.log(community)
                    evt.target.reset()
                    setCommunities( [...communities, community] )
                  })
                // setCommunities( await CreateCommunity( e, communities ) ) // don't know why doesn't work :( 
              } 
            }>
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
              <input type="hidden" name="creator" value={username} />
              <button>Criar comunidade</button>
            </form>
          </Box>
        </div>
        
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <RelationsBlockList  
              title="Seguidores" 
              items={followers}
              idField="id" 
              imageField="avatar_url" 
              titleField="login" 
              urlField ="html_url"
              max="6" />
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <RelationsBlockList 
              title="Comunidades"
              items={communities}
              idField="id"
              imageField="imageUrl"
              titleField="title"
              urlField="url"
              max="6" />
          </ProfileRelationsBoxWrapper>
        </div>
        
      </MainGrid>
    </>
  )
}

export async function getServerSideProps(context){
  const cookies = nookies.get(context);
  const token = cookies.USER_TOKEN;
  const { isAuthenticated } = await fetch('https://alurakut.vercel.app/api/auth', {
    headers: { 
      Authorization: token
    }
  })
  .then((re) => re.json())

  if(!isAuthenticated){
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  const { githubUser } = jwt.decode(token)
  return {
    props: {
      githubUser
    }
  }
}
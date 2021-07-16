import Box from '../src/components/Box';
import MainGrid from '../src/components/MainGrid';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AluraCommons';
import ProfileSidebar from '../src/functions/Profile';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

export default function Home() {
  const username = 'joaofnr'
  const name = 'João Nunes Rios'
  const firstName = name.split(' ')[0]
  const gender = 'masculino'
  const relationship = 'casado'
  const country = 'Brasil'

  const people = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'robertaarcoverde',
    'gabsferreira'
  ]
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
        </div>
        
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
              Pessoas da comunidade ({people.length})
            </h2>

            <ul>
              {people.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
        
      </MainGrid>
    </>
  )
}

import styled from 'styled-components'

/* const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
` */

const Box = styled.div`
  background: #FFFFFF;
  border-radius: 8px;
`
const MainGrid = styled.main`
  width: 100%;
  grid-gap: 10px;
  margin-left: auto;
  margin-rigth:auto;
  max-width: 500px;
  padding: 16px;
  .profileArea {
    display: none;
    @media(min-width: 860px) {
      display: block;
    }
  }

  @media(min-width: 860px) {
    max-width: 1110px;
    display: grid;
    grid-template-areas: "profileArea welcomeArea profileRelationsArea"; 
    grid-template-columns: 160px 1fr 312px;  
  }
  
`;

export default function Home() {
  return (
    <MainGrid>
      {/* <Box styled="grid-area: profileArea;"> */}
      <div className="profileArea" style={{ gridArea: 'profileArea' }}>
        <Box>
          <img src="http://github.com/flavioldasilva.png" />
        </Box>
      </div>
      <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
        <Box>
          Bem vindo
        </Box>
      </div>
      <div className="profileArea" style={{ gridArea: 'profileRelationsArea' }}>
        <Box>
          Comunidades
        </Box>
      </div>

    </MainGrid>
  )
}

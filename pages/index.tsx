import { GlobalStyle } from 'components/GlobalStyle'
import { Head } from 'components/Head'
import { Header } from 'components/Header'
import styled from 'styled-components'

export async function getStaticProps() {
  return {
    props: {},
  }
}

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 16px;
`

export default function Home() {
  return (
    <Container>
      <GlobalStyle />

      <Head />

      <Header />

      <div style={{ fontSize: '20px', textAlign: 'center' }}>Work in progress</div>
    </Container>
  )
}

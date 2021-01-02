import { Footer } from 'components/Footer'
import { GlobalStyle } from 'components/GlobalStyle'
import { Head } from 'components/Head'
import { Header } from 'components/Header'
import { AboutMe } from 'components/Sections/AboutMe'
import { Education } from 'components/Sections/Education'
import { Experience } from 'components/Sections/Experience'
import { Talks } from 'components/Sections/Talks'
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

      <AboutMe />

      <Experience />

      <Education />

      <Talks />

      <Footer />
    </Container>
  )
}

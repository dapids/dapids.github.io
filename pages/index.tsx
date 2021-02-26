import { BackToTop } from 'components/BackToTop'
import { Container } from 'components/Container'
import { Footer } from 'components/Footer'
import { GlobalStyle } from 'components/GlobalStyle'
import { Head } from 'components/Head'
import { Header } from 'components/Header'
import { Menu } from 'components/Menu'
import { AboutMe } from 'components/Sections/AboutMe'
import { Education } from 'components/Sections/Education'
import { Experience } from 'components/Sections/Experience'
import { ArticlesAndTalks } from 'components/Sections/ArticlesAndTalks'

export async function getStaticProps() {
  return {
    props: {},
  }
}

export default function Home() {
  return (
    <>
      <GlobalStyle />

      <Head />

      <Menu />

      <Container>
        <Header />

        <AboutMe />

        <Experience />

        <Education />

        <ArticlesAndTalks />

        <Footer />
      </Container>

      <BackToTop />
    </>
  )
}

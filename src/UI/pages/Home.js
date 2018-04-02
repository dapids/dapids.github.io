import React from 'react'
import Styled from 'styled-components'
import { palette } from 'constants/palette'
import Section, { SectionBody } from 'UI/atoms/Section'
import Header from 'UI/molecules/Header'
import Footer from 'UI/molecules/Footer'
import Picture from 'UI/molecules/Picture'

const Page = Styled.div`
  background: ${palette.white};
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const Content = Styled.div`
  display: flex;
  flex: 1 0 auto;
  position: relative;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`

const Home = () => (
  <Page>
    <Header />

    <Content>
      <Picture />

      <Section
        background={palette.darkGray}
        color={palette.white}
      >
        <SectionBody title="Languages">
          ES6 JavaScript, TypeScript, Python, PHP, OCaml/Haskel, SQL.
        </SectionBody>
      </Section>

      <Section
        background={palette.lightGray}
        color={palette.black}
      >
        <SectionBody title="Technologies">
          React / React Native, Redux, Immutable, Jest, Webpack, Node.js.
        </SectionBody>
      </Section>
    </Content>

    <Footer />
  </Page>
)

export default Home

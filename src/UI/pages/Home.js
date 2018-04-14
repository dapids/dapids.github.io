import React from 'react'
import PropTypes from 'prop-types'
import Styled, { withTheme } from 'styled-components'
import Section, { SectionBody } from 'UI/atoms/Section'
import Header from 'UI/molecules/Header'
import Footer from 'UI/molecules/Footer'
import Picture from 'UI/molecules/Picture'

const Page = Styled.div`
  background: ${({ theme }) => theme.accentLight};
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

const Home = ({ theme }) => (
  <Page>
    <Header theme={theme} />

    <Content>
      <Picture />

      <Section
        background={theme.primaryLight}
        color={theme.accentLight}
      >
        <SectionBody title="Languages">
          ES6 JavaScript, TypeScript, Python, PHP, OCaml/Haskel, SQL.
        </SectionBody>
      </Section>

      <Section
        background={theme.accent}
        color={theme.primary}
      >
        <SectionBody title="Technologies">
          React / React Native, Redux, Immutable, Jest, Webpack, Node.js.
        </SectionBody>
      </Section>
    </Content>

    <Footer theme={theme} />
  </Page>
)

Home.propTypes = {
  theme: PropTypes.shape().isRequired,
}

export default withTheme(Home)

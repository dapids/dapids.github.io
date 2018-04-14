import React from 'react'
import PropTypes from 'prop-types'
import Styled, { withTheme } from 'styled-components'
import Section, { SectionBody } from 'ui/atoms/Section'
import Header from 'ui/molecules/Header'
import Footer from 'ui/molecules/Footer'
import Picture from 'ui/molecules/Picture'
import Switch from 'ui/molecules/Switch'

const Page = Styled.div`
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
      <Switch />

      <Picture />

      <Section
        background={theme.palette.secondary}
        color={theme.text.accent}
      >
        <SectionBody title="Languages">
          ES6 JavaScript, TypeScript, Python, PHP, OCaml/Haskel, SQL.
        </SectionBody>
      </Section>

      <Section
        background={theme.palette.accentAlternative}
        color={theme.text.primary}
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

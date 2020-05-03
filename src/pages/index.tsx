import React from 'react'
import { GlobalStyle } from 'components/GlobalStyle'
import { About } from 'components/sections/About'
import { Contact } from 'components/sections/Contact'
import { Hero } from 'components/sections/Hero'
import { Footer } from 'components/sections/Footer'
import { Work } from 'components/sections/Work'
import { Menu } from 'components/Menu'
import { ToTop } from 'components/ToTop'

const Index = () => (
  <>
    <GlobalStyle />

    <Menu />

    <Hero />

    <About />

    <Work />

    <Contact />

    <Footer />

    <ToTop href="#hero" />
  </>
)

export default Index

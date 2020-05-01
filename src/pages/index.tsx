import React from 'react'
import { GlobalStyle } from 'components/GlobalStyle'
import { About } from 'components/sections/About'
import { Contact } from 'components/sections/Contact'
import { Hero } from 'components/sections/Hero'
import { Work } from 'components/sections/Work'

const Index = () => (
  <>
    <GlobalStyle />

    <Hero />

    <div>
      Website under construction. Please 🐻 with me.
    </div>

    <About />

    <Work />

    <Contact />
  </>
)

export default Index

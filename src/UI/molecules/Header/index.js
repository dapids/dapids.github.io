import React from 'react'
import Bar, { BarItem } from 'UI/atoms/Bar'
import { palette } from 'constants/palette'

const links = [{
  icon: 'fab fa-github',
  text: 'Github',
  url: '//github.com/dapids',
}, {
  icon: 'fab fa-linkedin-in',
  text: 'Linkedin',
  url: '//www.linkedin.com/in/dapids',
}, {
  icon: 'fab fa-twitter',
  text: 'Twitter',
  url: '//twitter.com/dapidsorrentino',
}]

const Header = () => (
  <Bar
    background={palette.white}
    color={palette.black}
  >
    {links.map(({ icon, text, url }) => (
      <BarItem icon={icon} url={url}>{text}</BarItem>
    ))}
  </Bar>
)

export default Header

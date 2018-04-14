import React from 'react'
import PropTypes from 'prop-types'
import Bar, { BarItem } from 'ui/atoms/Bar'

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

const Header = ({ theme }) => (
  <Bar
    background={theme.palette.accent}
    color={theme.text.primary}
  >
    {links.map(({ icon, text, url }) => (
      <BarItem icon={icon} key={url} url={url}>{text}</BarItem>
    ))}
  </Bar>
)

Header.propTypes = {
  theme: PropTypes.shape().isRequired,
}

export default Header

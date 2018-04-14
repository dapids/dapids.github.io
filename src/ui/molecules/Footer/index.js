import React from 'react'
import PropTypes from 'prop-types'
import Bar, { BarItem } from 'ui/atoms/Bar'

const links = [{
  icon: 'fas fa-map-marker-alt',
  text: 'Currently in Milan (IT)',
  url: '//goo.gl/maps/DcqvdMtugRQ2',
}, {
  icon: 'fas fa-envelope',
  text: 'me@davidsorrentino.com',
  url: 'mailto:me@davidsorrentino.com',
}, {
  icon: 'fas fa-phone',
  text: '(+39) 333 3253433',
  url: 'tel:3333253433',
}]

const Footer = ({ theme }) => (
  <Bar
    background={theme.palette.primary}
    color={theme.text.accent}
  >
    {links.map(({ icon, text, url }) => (
      <BarItem icon={icon} key={url} url={url}>{text}</BarItem>
    ))}
  </Bar>
)

Footer.propTypes = {
  theme: PropTypes.shape().isRequired,
}

export default Footer

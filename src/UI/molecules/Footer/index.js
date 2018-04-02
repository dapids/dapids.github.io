import React from 'react'
import Bar, { BarItem } from 'UI/atoms/Bar'
import { palette } from 'constants/palette'

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

const Footer = () => (
  <Bar
    background={palette.black}
    color={palette.white}
  >
    {links.map(({ icon, text, url }) => (
      <BarItem icon={icon} key={url} url={url}>{text}</BarItem>
    ))}
  </Bar>
)

export default Footer

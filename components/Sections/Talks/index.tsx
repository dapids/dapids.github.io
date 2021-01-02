import { SectionTitle } from 'components/SectionTitle'
import { Body } from 'components/Typography/Body'
import styled from 'styled-components'

const Paragraph = styled(Body).attrs({
  weight: '400',
})`
  margin-bottom: 32px;
`

export const Talks = () => (
  <>
    <SectionTitle>Talks</SectionTitle>
    <Paragraph>Work in progress.</Paragraph>
  </>
)

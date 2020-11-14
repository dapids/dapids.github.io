import { Flex } from 'components/Flex'
import { SectionTitle } from 'components/SectionTitle'
import { Body } from 'components/Typography/Body'
import { HeadingSmall as HeadingSmallBase } from 'components/Typography/HeadingSmall'
import { Mark } from 'components/Typography/Mark'
import styled from 'styled-components'

const HeadingSmall = styled(HeadingSmallBase)`
  margin-bottom: 0px;
`

const Paragraph = styled(Body).attrs({
  weight: '400',
})`
  margin-bottom: 32px;
`

export const Education = () => (
  <>
    <SectionTitle>Education</SectionTitle>
    <Paragraph>
      <Flex direction="row" wrap="wrap">
        <Flex basis="360px" grow="0" shrink="0">
          <HeadingSmall weight="500">Háskólinn í Reykjavík</HeadingSmall>
          <Body weight="500">Master's Degree in Computer Science</Body>
          <Body>Grade: 9 / 10</Body>
          <Body>2011 – 2012</Body>
        </Flex>

        <Flex grow="1" shrink="1">
          In my Master's Degree study path I mainly focused on the following subjects:
          <ul>
            <li><Mark>Machine learning</Mark></li>
            <li>Virtual environments</li>
            <li>Human-Computer Interfaces</li>
          </ul>
        </Flex>
      </Flex>
    </Paragraph>

    <Paragraph>
      <Flex direction="row" wrap="wrap">
        <Flex basis="360px" grow="0" shrink="0">
          <HeadingSmall weight="500">University of Camerino</HeadingSmall>
          <Body weight="500">Master's degree in Computer Science</Body>
          <Body>Grade: 110 / 110 and honors</Body>
          <Body>2010 – 2012</Body>
        </Flex>

        <Flex grow="1" shrink="1">
          In my Master's Degree study path I mainly focused on the following subjects:
          <ul>
            <li><Mark>Advanced Software Engineering</Mark></li>
            <li>Complex System Design</li>
            <li>Distributed Calculus and Coordination</li>
          </ul>
        </Flex>
      </Flex>
    </Paragraph>

    <Paragraph>
      <Flex direction="row" wrap="wrap">
        <Flex basis="360px" grow="0" shrink="0">
          <HeadingSmall weight="500">University of Urbino</HeadingSmall>
          <Body weight="500">Bachelor's Degree in Computer Science</Body>
          <Body>Grade: 110 / 110</Body>
          <Body>2006 - 2010</Body>
        </Flex>

        <Flex grow="1" shrink="1">
          In my Bachelor's Degree study path I mainly focused on the following subjects:
          <ul>
            <li>Programming Languages and Compilers</li>
            <li><Mark>Algorithms and Data Structures</Mark></li>
            <li>Networks / Internet security</li>
            <li>Databases</li>
          </ul>
        </Flex>
      </Flex>
    </Paragraph>
  </>
)

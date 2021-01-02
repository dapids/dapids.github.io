import { Flex } from 'components/Flex'
import { SectionTitle } from 'components/SectionTitle'
import { Body } from 'components/Typography/Body'
import { HeadingSmall as HeadingSmallBase } from 'components/Typography/HeadingSmall'
import { useViewportSize } from 'components/useViewportSize'
import styled from 'styled-components'

const HeadingSmall = styled(HeadingSmallBase)`
  margin-bottom: 0px;
`

const Block = styled(Body).attrs({
  weight: '400',
})`
  margin-bottom: 32px;
  margin-top: 0;
  padding-bottom: 16px;
  position: relative;

  &::after {
    border-bottom: 1px dashed #e6e6e6;
    bottom: 0;
    content: '';
    display: ${({ last }: { last?: boolean }) => (last ? 'none' : 'visible')};
    height: 2px;
    left: 0;
    position: absolute;
    width: 100%;
  }
`

const Paragraph = styled.p`
  margin-top: 0;
`

export const Experience = () => {
  const viewportSize = useViewportSize()
  const wrap = viewportSize === 'small' ? 'wrap' : 'nowrap'

  return (
    <>
      <SectionTitle>Experience</SectionTitle>

      <Block>
        <Flex direction="row" wrap={wrap}>
          <Flex basis="360px" grow="0" shrink="0">
            <HeadingSmall weight="500">Tech Lead &amp; Frontend Lead</HeadingSmall>
            <Body weight="500">ProntoPro</Body>
            <Body>2017 – now</Body>
            <Body>Milan, Italy</Body>
          </Flex>

          <Flex grow="1" shrink="1">
            <Paragraph>
              Responsibilities:
              <ul>
                <li>Foster team success and growth</li>
                <li>Design and develop product features for web and native applications</li>
                <li>Supervise architectural decisions</li>
                <li>Improve technical standards</li>
                <li>Defend and enhance the product workflow</li>
                <li>Hire and train</li>
              </ul>
            </Paragraph>
            <Paragraph>
              Technology: React, Redux, Reselect, ImmutableJS, Next.js, NodeJS+ExpressJS, Symfony+Twig, JS, TS, HTML,
              CSS/SASS.
            </Paragraph>
          </Flex>
        </Flex>
      </Block>

      <Block>
        <Flex direction="row" wrap={wrap}>
          <Flex basis="360px" grow="0" shrink="0">
            <HeadingSmall weight="500">Software Consultant</HeadingSmall>
            <Body weight="500">The Hive CoWorking &amp; Incubator</Body>
            <Body>2015 - 2016</Body>
            <Body>Ancona, Italy</Body>
          </Flex>

          <Flex grow="1" shrink="1">
            <Paragraph>
              Responsibilities:
              <ul>
                <li>Design and develop websites and web applications.</li>
                <li>Manage projects and teams with Scrum methodologies</li>
                <li>Hire and train</li>
              </ul>
            </Paragraph>
            <Paragraph>Technology: Meteor, NodeJS, MongoDB, AngularJS, TypeScript, JS, HTML, CSS/SASS.</Paragraph>
          </Flex>
        </Flex>
      </Block>

      <Block>
        <Flex direction="row" wrap={wrap}>
          <Flex basis="360px" grow="0" shrink="0">
            <HeadingSmall weight="500">JavaScript Trainer</HeadingSmall>
            <Body weight="500">ArToo Campus</Body>
            <Body>2015 - 2016</Body>
            <Body>Ancona, Italy</Body>
          </Flex>

          <Flex grow="1" shrink="1">
            <Paragraph>
              Responsibilities:
              <ul>
                <li>Prepare teaching materials</li>
                <li>Deliver lectures and seminars</li>
                <li>Check and assess students work</li>
              </ul>
            </Paragraph>
            <Paragraph>Technology: AngularJS, NodeJS, ExpressJS, MongoDB, JS, HTML, CSS/SASS.</Paragraph>
          </Flex>
        </Flex>
      </Block>

      <Block>
        <Flex direction="row" wrap={wrap}>
          <Flex basis="360px" grow="0" shrink="0">
            <HeadingSmall weight="500">Software Consultant</HeadingSmall>
            <Body weight="500">Sida Group Srl</Body>
            <Body>2014 - 2016</Body>
            <Body>Ancona, Italy</Body>
          </Flex>

          <Flex grow="1" shrink="1">
            <Paragraph>
              Responsibilities:
              <ul>
                <li>Design and develop APIs, middlewares, web applications</li>
                <li>Optimize existing software</li>
                <li>Hire and train</li>
              </ul>
            </Paragraph>
            <Paragraph>Technology: NodeJS, AngularJS, JS, TypeScript, Python.</Paragraph>
          </Flex>
        </Flex>
      </Block>

      <Block>
        <Flex direction="row" wrap={wrap}>
          <Flex basis="360px" grow="0" shrink="0">
            <HeadingSmall weight="500">Tech Lead</HeadingSmall>
            <Body weight="500">WeBox Studio</Body>
            <Body>2013 - 2016</Body>
            <Body>Ancona, Italy</Body>
          </Flex>

          <Flex grow="1" shrink="1">
            <Paragraph>
              Responsibilities:
              <ul>
                <li>Foster team success and growth</li>
                <li>Design and develop websites, desktop and web applications, APIs, middlewares</li>
                <li>Hire and train</li>
              </ul>
            </Paragraph>
            <Paragraph>
              Technology: AngularJS, NodeJS, Meteor, MongoDB, MySQL, Elasticsearch, jQuery, JavaScript, TypeScript,
              HTML, CSS/SASS.
            </Paragraph>
          </Flex>
        </Flex>
      </Block>

      <Block>
        <Flex direction="row" wrap={wrap}>
          <Flex basis="360px" grow="0" shrink="0">
            <HeadingSmall weight="500">Web Engineer</HeadingSmall>
            <Body weight="500">Coworkingness Consulting</Body>
            <Body>2012 - 2014</Body>
            <Body>Poznań, Poland</Body>
          </Flex>

          <Flex grow="1" shrink="1">
            <Paragraph>
              Responsibilities:
              <ul>
                <li>Design and develop websites, web applications, management systems</li>
              </ul>
            </Paragraph>
            <Paragraph>Technology: Technology: AngularJS, NodeJS, MongoDB, JavaScript, HTML, CSS/SASS.</Paragraph>
          </Flex>
        </Flex>
      </Block>

      <Block>
        <Flex direction="row" wrap={wrap}>
          <Flex basis="360px" grow="0" shrink="0">
            <HeadingSmall weight="500">Software Engineer</HeadingSmall>
            <Body weight="500">CADIA</Body>
            <Body>2011 - 2012</Body>
            <Body>Reykjavik, Iceland</Body>
          </Flex>

          <Flex grow="1" shrink="1">
            <Paragraph>
              Responsibilities:
              <ul>
                <li>Design and develop smart home management platforms and virtual environments</li>
              </ul>
            </Paragraph>
            <Paragraph>Technology: JavaScript, Python, Panda 3D.</Paragraph>
          </Flex>
        </Flex>
      </Block>

      <Block>
        <Flex direction="row" wrap={wrap}>
          <Flex basis="360px" grow="0" shrink="0">
            <HeadingSmall weight="500">Software Engineer</HeadingSmall>
            <Body weight="500">Computer Sistemi Group</Body>
            <Body>2008</Body>
            <Body>Fano, Italy</Body>
          </Flex>

          <Flex grow="1" shrink="1">
            <Paragraph>
              Responsibilities:
              <ul>
                <li>Design and develop management systems</li>
              </ul>
            </Paragraph>
            <Paragraph>Technology: Java EE, C#.</Paragraph>
          </Flex>
        </Flex>
      </Block>

      <Block last>
        <Flex direction="row" wrap={wrap}>
          <Flex basis="360px" grow="0" shrink="0">
            <HeadingSmall weight="500">Freelance Web Engineer</HeadingSmall>
            <Body>2003 - 2006</Body>
            <Body>Sant'Antonio Abate, Italy</Body>
          </Flex>

          <Flex grow="1" shrink="1">
            <Paragraph>
              Responsibilities:
              <ul>
                <li>Design and develop websites</li>
              </ul>
            </Paragraph>
            <Paragraph>Technology: JavaScript, PHP, MySQL, HTML, CSS.</Paragraph>
          </Flex>
        </Flex>
      </Block>
    </>
  )
}

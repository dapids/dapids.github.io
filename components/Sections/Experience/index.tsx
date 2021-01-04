import { List } from 'components/List'
import { SectionBlock } from 'components/SectionBlock'
import { SectionTitle } from 'components/SectionTitle'
import { Mark } from 'components/Typography/Mark'
import styled from 'styled-components'

const Paragraph = styled.p`
  margin-bottom: 0;
  margin-top: ${({ first }: { first?: boolean }) => (first ? '0' : '16px')};
`

export const Experience = () => (
  <>
    <SectionTitle>Experience</SectionTitle>

    <SectionBlock
      primaryInformation="2018 – now"
      secondaryInformation="Milan, Italy"
      subtitle="ProntoPro"
      title="Tech Lead"
    >
      <>
        <Paragraph first>
          Responsibilities:
          <List>
            <li>
              <Mark>Foster team success and growth</Mark>
            </li>
            <li>Supervise architectural decisions</li>
            <li>Defend and enhance the product workflow</li>
            <li>Design and develop product features for web and native applications</li>
          </List>
        </Paragraph>
        <Paragraph>
          Technology:
          <List>
            <li>React</li>
            <li>Next.js, NodeJS, ExpressJS, Symfony, Twig</li>
            <li>JavaScript, TypeScript, PHP, HTML, CSS/SASS</li>
          </List>
        </Paragraph>
      </>
    </SectionBlock>

    <SectionBlock
      primaryInformation="2017 – now"
      secondaryInformation="Milan, Italy"
      subtitle="ProntoPro"
      title="Frontend Lead"
    >
      <>
        <Paragraph first>
          Responsibilities:
          <List>
            <li>Hire and train</li>
            <li>
              <Mark>Supervise architectural decisions</Mark>
            </li>
            <li>Improve technical standards</li>
            <li>Foster technological innovation</li>
          </List>
        </Paragraph>
        <Paragraph>
          Technology:
          <List>
            <li>React, Redux, Reselect, ImmutableJS, io-ts, fp-ts</li>
            <li>Next.js, NodeJS, ExpressJS</li>
            <li>JavaScript, TypeScript, HTML, CSS/SASS</li>
          </List>
        </Paragraph>
      </>
    </SectionBlock>

    <SectionBlock
      primaryInformation="2016 – 2017"
      secondaryInformation="Milan, Italy"
      subtitle="ProntoPro"
      title="Software Engineer"
    >
      <>
        <Paragraph first>
          Responsibilities:
          <List>
            <li>
              <Mark>Design and develop product features for web and native applications</Mark>
            </li>
            <li>Write unit and integration tests</li>
          </List>
        </Paragraph>
        <Paragraph>
          Technology:
          <List>
            <li>React, Redux, Reselect, ImmutableJS, jQuery</li>
            <li>NodeJS, ExpressJS, Symfony, Twig</li>
            <li>JavaScript, HTML, CSS/SASS</li>
          </List>
        </Paragraph>
      </>
    </SectionBlock>

    <SectionBlock
      primaryInformation="2015 - 2016"
      secondaryInformation="Ancona, Italy"
      subtitle="The Hive CoWorking &amp; Incubator"
      title="Software Consultant"
    >
      <>
        <Paragraph first>
          Responsibilities:
          <List>
            <li>Design and develop websites and web applications</li>
            <li>Manage projects and teams with Scrum methodologies</li>
            <li>
              <Mark>Hire and train</Mark>
            </li>
          </List>
        </Paragraph>
        <Paragraph>
          Technology:
          <List>
            <li>AngularJS, Meteor</li>
            <li>NodeJS, ExpressJS, MongoDB</li>
            <li>JavaScript, TypeScript, HTML, CSS/SASS</li>
          </List>
        </Paragraph>
      </>
    </SectionBlock>

    <SectionBlock
      primaryInformation="2015 - 2016"
      secondaryInformation="Ancona, Italy"
      subtitle="ArToo Campus"
      title="JavaScript Trainer"
    >
      <>
        <Paragraph first>
          Responsibilities:
          <List>
            <li>Prepare teaching materials</li>
            <li>
              <Mark>Deliver lectures and seminars</Mark>
            </li>
            <li>Check and assess students work</li>
          </List>
        </Paragraph>
        <Paragraph>
          Technology:
          <List>
            <li>AngularJS</li>
            <li>NodeJS, ExpressJS, MongoDB</li>
            <li>JavaScript, HTML, CSS/SASS</li>
          </List>
        </Paragraph>
      </>
    </SectionBlock>

    <SectionBlock
      primaryInformation="2014 - 2016"
      secondaryInformation="Ancona, Italy"
      subtitle="Sida Group Srl"
      title="Software Consultant"
    >
      <>
        <Paragraph first>
          Responsibilities:
          <List>
            <li>
              <Mark>Design and develop APIs, middlewares, web applications</Mark>
            </li>
            <li>Optimize existing software</li>
            <li>Hire and train</li>
          </List>
        </Paragraph>
        <Paragraph>
          Technology:
          <List>
            <li>AngularJS, NodeJS, ExpressJS</li>
            <li>JavaScript, TypeScript, Python</li>
          </List>
        </Paragraph>
      </>
    </SectionBlock>

    <SectionBlock
      primaryInformation="2013 - 2016"
      secondaryInformation="Ancona, Italy"
      subtitle="WeBox Studio"
      title="Tech Lead"
    >
      <>
        <Paragraph first>
          Responsibilities:
          <List>
            <li>
              <Mark>Design and develop websites, desktop and web applications, APIs, middlewares</Mark>
            </li>
            <li>Foster team success and growth</li>
            <li>Hire and train</li>
          </List>
        </Paragraph>
        <Paragraph>
          Technology:
          <List>
            <li>AngularJS, jQuery, Meteor</li>
            <li>NodeJS, ExpressJS, MongoDB, MySQL, Elasticsearch</li>
            <li>JavaScript, TypeScript, HTML, CSS/SASS</li>
          </List>
        </Paragraph>
      </>
    </SectionBlock>

    <SectionBlock
      primaryInformation="2012 - 2014"
      secondaryInformation="Poznań, Poland"
      subtitle="Coworkingness Consulting"
      title="Software Engineer"
    >
      <>
        <Paragraph first>
          Responsibilities:
          <List>
            <li>
              <Mark>Design and develop websites</Mark>
            </li>
            <li>Perform business requirements analysis</li>
          </List>
        </Paragraph>
        <Paragraph>
          Technology:
          <List>
            <li>AngularJS</li>
            <li>NodeJS, MongoDB</li>
            <li>JavaScript, HTML, CSS/SASS</li>
          </List>
        </Paragraph>
      </>
    </SectionBlock>

    <SectionBlock
      primaryInformation="2011 - 2012"
      secondaryInformation="Reykjavik, Iceland"
      subtitle="CADIA"
      title="Software Engineer"
    >
      <>
        <Paragraph first>
          Responsibilities:
          <List>
            <li>
              <Mark>Design and develop smart home management platforms</Mark>
            </li>
            <li>Design and develop virtual environments</li>
          </List>
        </Paragraph>
        <Paragraph>
          Technology:
          <List>
            <li>JavaScript, Python, Panda 3D</li>
          </List>
        </Paragraph>
      </>
    </SectionBlock>

    <SectionBlock
      last
      primaryInformation="2008"
      secondaryInformation="Fano, Italy"
      subtitle="Computer Sistemi Group"
      title="Software Engineer"
    >
      <>
        <Paragraph first>
          Responsibilities:
          <List>
            <li>Design and develop management systems</li>
            <li>
              <Mark>Perform business requirements analysis</Mark>
            </li>
          </List>
        </Paragraph>
        <Paragraph>
          Technology:
          <List>
            <li>Java EE, C#</li>
          </List>
        </Paragraph>
      </>
    </SectionBlock>
  </>
)

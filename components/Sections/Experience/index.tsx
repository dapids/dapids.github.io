import { Block } from 'components/Sections/Block'
import { SectionTitle } from 'components/SectionTitle'
import styled from 'styled-components'

const Paragraph = styled.p`
  margin-bottom: 0;
  margin-top: ${({ first }: { first?: boolean }) => (first ? '0' : '16px')};
`

const List = styled.ul`
  margin-bottom: 0;
  margin-top: 6px;
`

export const Experience = () => (
  <>
    <SectionTitle>Experience</SectionTitle>

    <Block company="ProntoPro" location="Milan, Italy" role="Tech Lead &amp; Frontend Lead" years="2017 – now">
      <>
        <Paragraph first>
          Responsibilities:
          <List>
            <li>Foster team success and growth</li>
            <li>Design and develop product features for web and native applications</li>
            <li>Supervise architectural decisions</li>
            <li>Improve technical standards</li>
            <li>Defend and enhance the product workflow</li>
            <li>Hire and train</li>
          </List>
        </Paragraph>
        <Paragraph>
          Technology:
          <List>
            <li>React, Redux, Reselect, ImmutableJS</li>
            <li>Next.js, NodeJS+ExpressJS, Symfony+Twig</li>
            <li>JavaScript, TypeScript, PHP, HTML, CSS/SASS</li>
          </List>
        </Paragraph>
      </>
    </Block>

    <Block
      company="The Hive CoWorking &amp; Incubator"
      location="Ancona, Italy"
      role="Software Consultant"
      years="2015 - 2016"
    >
      <>
        <Paragraph first>
          Responsibilities:
          <List>
            <li>Design and develop websites and web applications.</li>
            <li>Manage projects and teams with Scrum methodologies</li>
            <li>Hire and train</li>
          </List>
        </Paragraph>
        <Paragraph>
          Technology:
          <List>
            <li>AngularJS, Meteor</li>
            <li>NodeJS, MongoDB</li>
            <li>JavaScript, TypeScript, HTML, CSS/SASS</li>
          </List>
        </Paragraph>
      </>
    </Block>

    <Block company="ArToo Campus" location="Ancona, Italy" role="JavaScript Trainer" years="2015 - 2016">
      <>
        <Paragraph first>
          Responsibilities:
          <List>
            <li>Prepare teaching materials</li>
            <li>Deliver lectures and seminars</li>
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
    </Block>

    <Block company="Sida Group Srl" location="Ancona, Italy" role="Software Consultant" years="2014 - 2016">
      <>
        <Paragraph first>
          Responsibilities:
          <List>
            <li>Design and develop APIs, middlewares, web applications</li>
            <li>Optimize existing software</li>
            <li>Hire and train</li>
          </List>
        </Paragraph>
        <Paragraph>
          Technology:
          <List>
            <li>AngularJS, NodeJS</li>
            <li>JavaScript, TypeScript, Python</li>
          </List>
        </Paragraph>
      </>
    </Block>

    <Block company="WeBox Studio" location="Ancona, Italy" role="Tech Lead" years="2013 - 2016">
      <>
        <Paragraph first>
          Responsibilities:
          <List>
            <li>Foster team success and growth</li>
            <li>Design and develop websites, desktop and web applications, APIs, middlewares</li>
            <li>Hire and train</li>
          </List>
        </Paragraph>
        <Paragraph>
          Technology:
          <List>
            <li>AngularJS, jQuery, Meteor</li>
            <li>NodeJS, MongoDB, MySQL, Elasticsearch</li>
            <li>JavaScript, TypeScript, HTML, CSS/SASS</li>
          </List>
        </Paragraph>
      </>
    </Block>

    <Block company="Coworkingness Consulting" location="Poznań, Poland" role="Web Engineer" years="2012 - 2014">
      <>
        <Paragraph first>
          Responsibilities:
          <List>
            <li>Design and develop websites, web applications, management systems</li>
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
    </Block>

    <Block company="CADIA" location="Reykjavik, Iceland" role="Software Engineer" years="2011 - 2012">
      <>
        <Paragraph first>
          Responsibilities:
          <List>
            <li>Design and develop smart home management platforms and virtual environments</li>
          </List>
        </Paragraph>
        <Paragraph>
          Technology:
          <List>
            <li>JavaScript, Python, Panda 3D</li>
          </List>
        </Paragraph>
      </>
    </Block>

    <Block company="Computer Sistemi Group" location="Fano, Italy" role="Software Engineer" years="2008">
      <>
        <Paragraph first>
          Responsibilities:
          <List>
            <li>Design and develop management systems</li>
          </List>
        </Paragraph>
        <Paragraph>
          Technology:
          <List>
            <li>Java EE, C#</li>
          </List>
        </Paragraph>
      </>
    </Block>

    <Block last location="Sant'Antonio Abate, Italy" role="Freelance Web Engineer" years="2003 - 2006">
      <>
        <Paragraph first>
          Responsibilities:
          <List>
            <li>Design and develop websites</li>
          </List>
        </Paragraph>
        <Paragraph>
          Technology:
          <List>
            <li>JavaScript, PHP, MySQL, HTML, CSS</li>
          </List>
        </Paragraph>
      </>
    </Block>
  </>
)

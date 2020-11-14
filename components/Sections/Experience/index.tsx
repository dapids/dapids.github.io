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

// Responsibilities: foster my squad growth, defend and enhance the workflow, ensure good technical standards, supervise architectural decisions.

//     TitleFrontend Lead
//     Full-time
//     Dates EmployedJan 2017 – Present
//     Employment Duration3 yrs 11 mos
//     LocationMilan, Lombardy, Italy
//     Responsibilities: foster the frontend team growth, design and develop web and native applications, supervise architectural decisions, push the technical standards, recruit.

//     Technology: React, Redux, Reselect, ImmutableJS, NodeJS+ExpressJS, Symfony+Twig, JS, TS, PHP, HTML, CSS/SASS.

//     ---

//     Responsibilities: preparing teaching materials, delivering lectures and seminars, checking and assessing students’ work.

//     Technology: AngularJS, NodeJS, ExpressJS, MongoDB, JS, HTML, CSS/SASS, git.

//     ---

//     Responsibilities: project and team management with Scrum methodology, cloud applications design and development.

//     Technology: Meteor, NodeJS, MongoDB, AngularJS, TypeScript, JS, HTML, CSS/SASS, git.

//     ---

//     Responsibilities: team management, design and development of desktop and mobile application software, APIs, middlewares.

//     Technology: AngularJS, NodeJS, Meteor, MongoDB, MySQL, elasticsearch, jQuery, JS, TypeScript, HTML, CSS/SASS, git.

//     ---

//     Responsibilities: designing and developing management systems.

//     Technology: AngularJS, NodeJS, MongoDB, JS, HTML, CSS/SASS, git.

//     ---

//     Responsibilities: designing and developing smart software solutions and virtual environments.

//     Technology: JS, Python, Panda 3D, git.

//     ---

//     Responsibilities: software design, development, and testing.

//     Technology: Java EE, C#, svn.

//     ---

//     Responsibilities: websites design, development, and maintenance.

//     Technology: HTML, CSS, JS, LAMP stack, svn.

export const Experience = () => (
  <>
    <SectionTitle>Experience</SectionTitle>
    <Paragraph>
      Work in progress.
      {/* <Flex direction="row" wrap="wrap">
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
      </Flex> */}
    </Paragraph>
  </>
)

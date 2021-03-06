import React from 'react';
import {Typography} from 'antd';
import {MailTwoTone} from '@ant-design/icons';
import ExternalLink from '../components/ExternalLink';

const {Text} = Typography;

export default () => (
  <div className="home max-width900">
    <header>
      <h1 style={{fontWeight: 600, marginBottom: '.25em'}}>
        Vlad <span style={{color: '#ff5252'}}>Holubiev</span>
      </h1>

      <p>Software Engineer</p>
    </header>

    <section>
      <h2>Hello</h2>

      <p>
        I enjoy building hip back-end tech using <Text mark>Node.js</Text>,{' '}
        <Text mark>TypeScript</Text> and <Text mark>AWS</Text>. Most of the time I design serverless
        event-driven architectures and REST/GraphQL APIs.
      </p>

      <p>
        Fun fact - I made <Text mark>$2,555</Text> from GitHub&apos;s bug bounty program on{' '}
        <ExternalLink url={'https://hackerone.com/vladholubiev'} text={'HackerOne'} />.
      </p>

      <p>
        Find me on the web: &nbsp;
        <ExternalLink url={'https://twitter.com/vladholubiev'} text={'Twitter'} />
        <span>, </span>
        <ExternalLink url={'https://medium.com/@vladholubiev'} text={'Medium'} />
        <span>, </span>
        <ExternalLink url={'https://github.com/vladgolubev'} text={'GitHub'} />
        <span>, </span>
        <ExternalLink url={'https://linkedin.com/in/vlad-holubiev'} text={'LinkedIn'} />
      </p>
      <p>
        Also: &nbsp;
        <ExternalLink
          url={'https://stackoverflow.com/users/2727317/vlad-holubiev'}
          text={'StackOverflow'}
        />
        <span>, </span>
        <ExternalLink
          url={'https://scholar.google.com.ua/citations?hl=en&user=s1YepGMAAAAJ'}
          text={'Google Scholar'}
        />
        <span>, </span>
        <ExternalLink url={'https://www.instagram.com/vladholubiev/'} text={'Instagram'} />
        <span>, </span>
        <ExternalLink url={'https://hackerone.com/vladholubiev'} text={'HackerOne'} />
        <span>, </span>
        <ExternalLink url={'https://www.codementor.io/@golubevvld'} text={'CodeMentor'} />
      </p>

      <p>
        Or drop me a line at{' '}
        <Text>
          <a href={'mailto:hello@vladholubiev.com'}>
            <MailTwoTone style={{fontSize: '14px'}} /> hello@vladholubiev.com
          </a>
        </Text>
      </p>
    </section>
  </div>
);

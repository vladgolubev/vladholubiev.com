import {Avatar, List} from 'antd';
import Layout from '../components/Layout';

const data = [
  {
    title: `Hello, Startup: A Programmer's Guide to Building Products, Technologies, and Teams`,
    link: 'https://www.hello-startup.net/',
    description: `This book will teach you how to build products, technologies, and teams in a startup environment.`,
    icon: 'HS',
    bgColor: '#59bb41'
  },
  {
    title: 'Startup Resources',
    link: 'https://www.hello-startup.net/resources',
    description: `List of tools, links, and checklists to help you build a startup. Based on the book above`,
    icon: 'SR',
    bgColor: '#030102'
  },
  {
    title: 'Serverless Status',
    link: 'https://serverless.email/',
    description:
      'A weekly newsletter about serverless architectures, function-as-a-service, AWS Lambda, etc.',
    icon: 'ƛ',
    bgColor: '#e36b38'
  },
  {
    title: 'Node Weekly',
    link: 'https://nodeweekly.com',
    description: 'Weekly e-mail round-up of Node.js news and articles.',
    icon: 'NODE',
    bgColor: '#55bb22'
  },
  {
    title: 'Anti Patterns Catalog',
    link: 'http://wiki.c2.com/?AntiPatternsCatalog',
    description: '139 classical Anti Patterns',
    icon: 'AP',
    bgColor: '#042fee'
  },
  {
    title: 'Hacker News',
    link: 'https://news.ycombinator.com/',
    description: `¯\\_(ツ)_/¯`,
    icon: 'HN',
    bgColor: '#ff6600'
  },
  {
    title: '97 Things Every Programmer Should Know',
    link:
      'https://97-things-every-x-should-know.gitbooks.io/97-things-every-programmer-should-know/content/en/index.html',
    description: 'Pearls of wisdom for programmers collected from leading practitioners',
    icon: '97',
    bgColor: '#4183c4'
  },
  {
    title: 'Last Week in AWS',
    link: 'https://lastweekinaws.com/',
    description: `A weekly roundup of news from Amazon's cloud ecosystem- sprinkled with snark.`,
    icon: 'AWS',
    bgColor: '#f2cd00'
  },
  {
    title: '97 Things Every Software Architect Should Know',
    link:
      'https://manohars.files.wordpress.com/2009/11/97-things-every-software-architect-should-know.pdf',
    description: 'Similar to above, but more meta-level',
    icon: '97',
    bgColor: 'black',
    fgColor: 'white'
  },
  {
    title: `The Lean Startup`,
    link: 'https://www.amazon.com/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898',
    description:
      'Validated learning, rapid scientific experimentation, shorten product development cycles, measure actual progress without resorting to vanity metrics, and learn what customers really want',
    icon: 'LS',
    bgColor: '#027ac4'
  },
  {
    title: 'JavaScript Weekly',
    link: 'http://javascriptweekly.com/',
    description: 'Weekly e-mail round-up of JavaScript news and articles',
    iconURL: 'https://hsto.org/webt/59/cc/76/59cc7600c78a2239379574.jpeg',
    icon: 'JS',
    bgColor: '#f0db4f',
    fgColor: 'black'
  },
  {
    title: `mongoDB Weekly`,
    link: 'https://mongodb.email',
    description: 'Weekly e-mail round-up of MongoDB news and articles.',
    icon: 'MG',
    bgColor: '#449a45'
  },
  {
    title: `DB Weekly`,
    link: 'https://dbweekly.com',
    description:
      'A weekly round-up of database technology news and articles covering new developments, SQL, NoSQL, document databases, graph databases, and more',
    icon: 'DB',
    bgColor: '#478dda'
  },
  {
    title: 'Serverless Blog',
    link: 'https://serverless.com/blog',
    description: 'The blog on serverless & event-driven compute',
    icon: 'SLS',
    bgColor: '#FD5750'
  },
  {
    title: 'WebOps Weekly',
    link: 'https://webopsweekly.com',
    description: `A weekly newsletter on Web operations, infrastructure, performance, the backend, and tooling, from the browser down to the metal`,
    icon: 'SLS',
    bgColor: '#0093b1'
  }
];

export default () => (
  <Layout
    ogTags={[
      <meta
        property="og:title"
        content="Learning Materials for back-end devs I recommend after interviews"
      />,
      <meta property="og:type" content="website" />,
      <meta property="og:url" content="https://vladholubiev.com/learning-materials/" />,
      <meta property="og:description" content="Books, e-mail newsletters, online resources" />,
      <meta property="og:image" content="/static/og-images/learning-materials-1200x630.png" />,
      <meta
        property="og:image:secure_url"
        content="/static/og-images/learning-materials-1200x630.png"
      />,
      <meta property="og:image:type" content="image/png" />,
      <meta property="og:image:width" content="1200" />,
      <meta property="og:image:height" content="630" />,
      <meta
        property="og:image:alt"
        content="Learning Materials: Which I recommend to developers who apply for a Back-end Developer role at Shelf"
      />
    ]}
  >
    <header>
      <h2>Learning Materials</h2>

      <p>Which I recommend to developers who apply for a Back-end Developer role at Shelf</p>
    </header>

    <section>
      {/*language=CSS*/}
      <style jsx>{`
        .list-item__wrapper.ant-list-item-meta-avatar {
          flex-grow: 1;
        }
      `}</style>

      <List
        header={'In no particular order'}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <div className="list-item__wrapper">
              <List.Item.Meta
                avatar={
                  <Avatar
                    size="large"
                    style={{backgroundColor: item.bgColor, color: item.fgColor || 'white'}}
                    shape="square"
                  >
                    {item.icon}
                  </Avatar>
                }
                title={
                  <a href={item.link} target="_blank">
                    {item.title}
                  </a>
                }
                description={item.description}
              />
            </div>
          </List.Item>
        )}
      />
    </section>
  </Layout>
);
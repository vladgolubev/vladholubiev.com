import Layout from '../components/Layout';

function trackSocialClick(label) {
  window.gtag && window.gtag('event', 'link_click', {
    event_category: 'social_links',
    event_label: label
  });
}

export default () =>
  <Layout>
    {/*language=CSS*/}
    <style jsx>{`
        header {
            font-size: 2em;
            margin: 4em 0;
            max-width: 100%;
            text-align: center;
        }

        nav {
            background: white;
            margin: -1em auto 2.5em auto;
            max-width: 40rem;
            padding: 1em 0;
            position: -webkit-sticky;
            position: sticky;
            text-align: center;
            top: 0;
            z-index: 1;
        }
    `}</style>

    <header>
      <h1>Vlad <span style={{color: '#ff5252'}}>Holubiev</span></h1>

      <p>Software Engineer</p>
    </header>

    <nav>
      <ul>
        <li>
          Social links:
        </li>
        <li onClick={() => trackSocialClick('Twitter')}>
          <a href="https://twitter.com/vladholubiev" target="_blank">
            Twitter
          </a>
        </li>
        <li onClick={() => trackSocialClick('Medium')}>
          <a href="https://medium.com/@vladholubiev" target="_blank">
            Medium
          </a>
        </li>
        <li onClick={() => trackSocialClick('StackOverflow')}>
          <a href="https://stackoverflow.com/users/2727317/vlad-holubiev?tab=profile"
             target="_blank">
            StackOverflow
          </a>
        </li>
        <li onClick={() => trackSocialClick('GitHub')}>
          <a href="https://github.com/vladgolubev" target="_blank">
            GitHub
          </a>
        </li>
      </ul>
    </nav>
  </Layout>
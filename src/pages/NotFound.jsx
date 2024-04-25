import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { ContentBlock, PrimaryButton } from '../components/Elements';
import Menu from '../components/Menu';

import Flower from '../assets/illustrations/flower.svg';

function NotFound() {
  /* Get theme */
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') /* || systemTheme */ || 'dark'
  );
  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  const secret = useRef();
  const secretClassName = "secret";

  const showSecret = () => {
    secret.current.classList.remove(secretClassName);
  }

  useEffect(() => {
    const themes = ['dark', 'light'];
    localStorage.setItem('theme', theme);
    document.body.className = themes.includes(theme) ? theme : 'dark';
  }, [theme]);
  return (
    <>
      <Helmet>
        <title>404 | Ayush</title>
        {/* Disable indexing */}
        <meta name="robots" content="noindex" />
      </Helmet>
      <Menu theme={theme} toggleTheme={toggleTheme} />
      <main>
        <div className='error-page'>
          <ContentBlock>
            <div className='contentblock-text'>
              <h2>404 | Not found</h2>
              <p>
              Sorry, this page isn't available.
                <span ref={secret} className='secret'>
                  <br />
                  <b>Shh! That's ayush's flower please don't touch.</b>
                </span>
              </p>
              <div className='contentblock-actions'>
                <PrimaryButton text="Let's go" destination="/" arrow />
              </div>
            </div>
            <div onClick={showSecret} style={{ cursor: "help" }} className='contentblock-image'>
              <img alt='' height="200px" src={Flower} />
            </div>
          </ContentBlock>
        </div>
      </main>
    </>
  );
}

export default NotFound;
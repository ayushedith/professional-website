import { Helmet } from 'react-helmet';
import { useOutletContext } from 'react-router-dom';
import { PrimaryButton, ContentBlock } from '../components/Elements';
import Header from '../components/Header';

import edithDark from '../assets/illustrations/edithDark.svg'
import edithlight from '../assets/illustrations/edithLight.svg'
import programDark from '../assets/illustrations/programDark.svg'
import programLight from '../assets/illustrations/programLight.svg'
import designDark from '../assets/illustrations/designDark.svg'
import designLight from '../assets/illustrations/designLight.svg'
import hobDark from '../assets/illustrations/hobDark.svg'
import hobLight from '../assets/illustrations/hobLight.svg'
import eduDark from '../assets/illustrations/eduDark.svg'
import eduLight from '../assets/illustrations/eduLight.svg'

function Home() {
  const [theme] = useOutletContext();
  return (
    <>
      <Helmet>
        <title>Ayush | Home</title>
      </Helmet>
      <Header>
        <div>
          <h1>Ayush Kumar</h1>
          <p>Hey, I'm Ayush! I wear multiple hats - I'm into both coding and design. You name it, I've probably dabbled in it: HTML, CSS, JavaScript, Python, C, and C++. Whether it's building cool software or creating eye-catching websites and graphics, I'm all about making things awesome.</p>
        </div>
      </Header>
      <main>

        <ContentBlock animate>
          <div className='contentblock-text'>
            <h2>Ayush (edith)</h2>
            <p>
              Ayush is a 21 year old Website Developer and Graphic Designer from India (In), currently working for DPY.
            </p>
            {/* 
            <div className='contentblock-actions'>
              <PrimaryButton text="Visit Content" destination="content" arrow />
            </div>
             */}
          </div>
          <div className='contentblock-image'>
            <img className='no-touch' draggable={false} alt='' src={theme === 'dark' ? edithDark : edithlight} 
            />
          </div>
        </ContentBlock>

        <ContentBlock animate r>
          <div className='contentblock-text'>
            <h2>Programming</h2>
            <p>
             I've got a diverse skill set covering HTML, CSS, JavaScript, React JS, Python, C, and C++. Whether it's crafting elegant code for software solutions or designing captivating websites and graphics, I've got you covered. Let's collaborate and turn your ideas into reality!!
            </p>
          </div>
          <div className='contentblock-image'>
            <img className='no-touch' draggable={false} alt='' src={theme === 'dark' ?
              programDark : programLight}
            />
          </div>
        </ContentBlock>

        <ContentBlock animate>
          <div className='contentblock-text'>
            <h2>Designing</h2>
            <p>
             I also specialize in web and graphics design using tools like Figma, Photoshop, Illustrator, and Blender. Let's work together to bring your ideas to life!
            </p>
          </div>
          <div className='contentblock-image'>
            <img className='no-touch' draggable={false} alt='' src={theme === 'dark' ?
              designDark : designLight}
            />
          </div>
        </ContentBlock>

        <ContentBlock animate r>
          <div className='contentblock-text'>
            <h2>Hobbies</h2>
            <p>
              Outside work, I enjoy road trips, immersing in diverse music genres, and indulging in space series marathons. Exploring the open road brings me freedom, while music feeds my soul. Binge-watching space series is my go-to escape, where boundless adventures ignite my imagination.
            </p>
          </div>
          <div className='contentblock-image'>
            <img className='no-touch' draggable={false} alt='' src={theme === 'dark' ?
              hobDark : hobLight}
            />
          </div>
        </ContentBlock>

        <ContentBlock animate l>
          <div className='contentblock-text'>
            <h2>Education</h2>
            <p>
              I hold a diploma and a Bachelor's degree in Technology from NSIT. Additionally, I've pursued various courses from NIELIT, including web development using PHP and data science with Python. I've also completed an advanced web design course from DEV TOWN.
            </p>
          </div>
          <div className='contentblock-image'>
            <img className='no-touch' draggable={false} alt='' src={theme === 'dark' ?
              eduDark : eduLight}
            />
          </div>
        </ContentBlock>

        <div className='supportblock'>
          <h2>Let's create something extraordinary!</h2>
          <p>
          Driven by my passion for coding, design, and collaboration, I'm eager to join forces and create something truly remarkable with you. Let's harness our combined expertise to build innovative solutions and bring inspiring ideas to life! Thanks!
          </p>
          <div className='supportblock-actions'>
            <PrimaryButton disabled text="Instagram" border ext destination="https://www.instagram.com/ayush.edith/" arrow />
          </div>
        </div>

      </main>
    </>
  );
}

export default Home;
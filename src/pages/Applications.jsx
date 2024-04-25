import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { ContentFullsizeBlock, PrimaryButton } from '../components/Elements';
import Header from '../components/Header';
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Applications() {
  const loc = useLocation();
  return (
    <>
      <Helmet>
        <title>Ayush | Services</title>
      </Helmet>
      <Header>
        <div>
          <h1>Services</h1>
          <p>I offer a one-stop shop for all your digital needs! From crafting user-friendly websites that capture attention to creating eye-catching graphic designs that enhance your brand, I'm here to help you shine online and in print.</p>
        </div>
      </Header>
      <main>

        <AnimationOnScroll offset={0} animateOnce={true} animateIn={'animate__fadeInUp'} duration={.5}>

          <ContentFullsizeBlock>
            {/* <IconModerator className="application-icon mod" /> */}
            <h2 style={{ color: "var(--color-text-application-mod)" }}>Web Development</h2>
            <p>
              Bring your vision to life online! I offer comprehensive web development
              services to create user-friendly and visually appealing websites that meet your specific needs. 
              From initial concept to launch and beyond, I can handle all aspects of web development.
            </p>
            <h3 style={{ color: "var(--color-text-application-mod)" }}>Includes:</h3>
            <ul>
              <li>Custom website design and development</li>
              <li>Responsive design for optimal viewing across devices</li>
              <li>Content management systems (CMS) for easy content updates</li>
              <li>E-commerce solutions to sell your products or services online</li>
              <li>Performance optimization for fast loading times and a smooth user experience</li>
            </ul>
            <PrimaryButton ext text="Hire me" destination="https://forms.gle/mZRdSGQCx7Fw9eaE9" arrow />
          </ContentFullsizeBlock>

          <ContentFullsizeBlock>
            {/* <IconProfessional className="application-icon professional" /> */}
            <h2 style={{ color: "var(--color-text-application-professional)" }}>Graphic Design</h2>
            <p>
              I bring your ideas to life visually! I offer a range of graphic design 
              services to create impactful and engaging visuals that elevate your
              brand and communicate your message effectively.
            </p>
            <h3 style={{ color: "var(--color-text-application-professional)" }}>Includes:</h3>
            <ul>
              <li>Logo design and branding materials</li>
              <li>Social media graphics and marketing materials</li>
              <li>Illustrations and other creative assets</li>
              <li>Print design for brochures, flyers, and presentations</li>
            </ul>
            <PrimaryButton ext text="Hire me" destination="https://forms.gle/d7v5KhzcCipLv5ETA" arrow />
          </ContentFullsizeBlock>

          <ContentFullsizeBlock>
            {/* <IconProfessional className="application-icon professional" /> */}
            <h2 style={{ color: "var(--color-text-application-consultations)" }}>Terms of Service and Guidelines</h2>
            <p>
              By accessing or using our services, you agree to abide by these Terms. 
              Please read them carefully before proceeding.
            </p>
            <h3 style={{ color: "var(--color-text-application-consultations)" }}>Includes:</h3>
            <ul>
              <li>Scope of Services: Our services include web design, graphic design, branding, and related services as agreed upon between you and us.</li>
              <li>Client Responsibilities: You agree to provide timely communication, necessary materials, and adhere to deadlines and payment schedules.</li>
              <li>Intellectual Property: Materials provided by you should be owned or properly licensed. Design elements created by us remain our intellectual property until full payment is received.</li>
              <li>Confidentiality: We treat all client materials and communications with confidentiality and expect the same from you.</li>
              <li>Revisions and Payments: We offer a reasonable number of revisions, with additional revisions incurring extra fees. Payment terms will be outlined in our agreement.</li>
            </ul>
            <PrimaryButton ext text="Contact" destination="https://discord.com/users/581525444424368131" arrow />
          </ContentFullsizeBlock>

        </AnimationOnScroll>
      </main>
    </>
  );
}

export default Applications;
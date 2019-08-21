import Button from 'components/Button';
import PortfolioHead from 'components/PortfolioHead';
import MDTextField from 'components/material/TextField';
import Form from 'components/Form';
import css from 'sass/pages/contact.scss';

const Contact = () => (
  <>
    <PortfolioHead title="Get in Touch">
      <meta name="robots" content="noindex" />
    </PortfolioHead>

    <h1>Contact Me</h1>
    <div className={css.columns}>
      <Form submit={(<Button icon="send">Send Message</Button>)}>
        <MDTextField name="person" label="Name" autofocus />
        <MDTextField name="company" label="Company name" required={false} />
        <MDTextField name="email" label="Email address" type="email" />
        <MDTextField name="message" label="Message" textarea />
      </Form>
      <aside>
        <h2>Phone</h2>
        <p><a className={css.phoneNumber} href="tel:+31123456789">+33 6 24 19 30 63</a></p>
        <h3 className={css.getInTouch}>Get in touch to...</h3>
        <p>Talk about research on UX, HCI, AI or security</p>
        <p>Ask if I’m available for hire or for consulting</p>
        <p>Let me know about a new meetup in Paris</p>
      </aside>
    </div>


  </>
);

export default Contact;

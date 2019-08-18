import Button from 'components/Button';
import PortfolioHead from 'components/PortfolioHead';
import MDTextField from 'components/material/TextField';
import { Toolbar, ToolbarSpacing } from 'components/Toolbar';
import css from 'sass/pages/contact.scss';

const Contact = () => (
  <>
    <PortfolioHead title="Get in Touch">
      <meta name="robots" content="noindex" />
    </PortfolioHead>

    <h1>Contact Me</h1>
    <div className={css.columns}>
      <form>
        <MDTextField label="Name" autofocus />
        <MDTextField label="Company name" required={false} />
        <MDTextField label="Email address" type="email" />
        <MDTextField label="Message" textarea />

        <Toolbar>
          <ToolbarSpacing />
          <Button
            icon="send"
            type="submit"
            disabled
            onClick={() => console.log('clicked!')}
            tooltip="Please wait just a little more, my mail server isn't up yet!"
          >
              Send Message
          </Button>
        </Toolbar>
      </form>
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

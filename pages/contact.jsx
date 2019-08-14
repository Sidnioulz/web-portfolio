import Button from 'components/Button';
import PortfolioHead from 'components/PortfolioHead';
import TextField, { HelperText, Input } from '@material/react-text-field';
import css from 'sass/components/react-text-field.scss';

const Contact = () => (
  <>
    <PortfolioHead title="Get in Touch">
      <meta name="robots" content="noindex" />
    </PortfolioHead>
    <p>
      {'Contact me '}
      <a href="mailto:sdodierlazaro@gmail.com">by email</a>
      {' or '}
      <a href="tel:+31123456789">by phone at +33 6 24 19 63</a>
      {'.'}
    </p>


    <div className={css.TextField}>
      <TextField
        label="Name"
        outlined
      >
        <Input
          required
          onChange={e => console.log({ value: e.currentTarget.value })}
        />
      </TextField>
    </div>

    <div className={css.TextField}>
      <TextField
        label="Company name"
        outlined
        helperText={<HelperText>Optional</HelperText>}
      >
        <Input
          onChange={e => console.log({ value: e.currentTarget.value })}
        />
      </TextField>
    </div>


    <div className={css.TextField}>
      <TextField
        label="Email address"
        outlined
      >
        <Input
          type="email"
          required
          onChange={e => console.log({ value: e.currentTarget.value })}
        />
      </TextField>
    </div>


    <div className={css.TextField}>
      <TextField
        label="Message"
        outlined
        textarea
      >
        <Input
          required
          onChange={e => console.log({ value: e.currentTarget.value })}
        />
      </TextField>
    </div>


    <Button
      icon="send"
      type="submit"
      disabled="false"
      onClick={() => console.log('clicked!')}
    >
      Send Message
    </Button>


  </>
);

export default Contact;

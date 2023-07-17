import React from 'react';
import classnames from 'classnames';
import Icon from '../../components/Icon/Icon';
import './ContactForm.css';

const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfbcq5MKljpEZg27bOOj5OqdBP4ARBdikUs4G2zuqIgBYE4KA/viewform?embedded=true';

class ContactForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      formLoaded: false,
    };
  }

  iframeLoaded() {
    this.setState({
      formLoaded: true,
    });
  }

  render() {
    return (
      <>
        <div
          className={classnames({
            'contact-form-loading': true,
            'contact-form-loading__loaded': this.state.formLoaded,
          })}
        >
          Form is loading...
          <span className="contact-form-icon">
            <Icon name="cog fa-spin fa-fw" />
          </span>
        </div>
        <iframe
          className={classnames({
            'contact-form-iframe': true,
            'contact-form-iframe__loaded': this.state.formLoaded,
          })}
          src={FORM_URL}
          onLoad={this.iframeLoaded.bind(this)}
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
      </>
    );
  }
}

export default ContactForm;

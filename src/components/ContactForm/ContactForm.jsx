import React from 'react';
import styled from 'styled-components';

const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfbcq5MKljpEZg27bOOj5OqdBP4ARBdikUs4G2zuqIgBYE4KA/viewform?embedded=true';

const ContactFormLoadingSty = styled.div`
    position: absolute;
    ${props => props.loaded ? 'display: none;' : ''}
`;

const ContactFormIframeSty = styled.iframe`
    visibility: hidden;
    width: 640px;
    height: 822px;
    ${props => props.loaded ? 'visibility: visible;' : ''}
`;

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
            <React.Fragment>
                <ContactFormLoadingSty
                    loaded={this.state.formLoaded}
                >
                    Form is loading...
                </ContactFormLoadingSty>
                <ContactFormIframeSty
                    src={FORM_URL}
                    onLoad={this.iframeLoaded.bind(this)}
                    frameBorder='0'
                    marginHeight='0'
                    marginWidth='0'
                    loaded={this.state.formLoaded}
                >
                </ContactFormIframeSty>
            </React.Fragment>
        );
    }
}

export default ContactForm;
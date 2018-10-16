import React from 'react';
import _get from 'lodash/get';
import Layout from '../../components/Layout/Layout';
import Container from '../../components/Container/Container';
import { renderMd } from '../../services/md';

class BasePage extends React.PureComponent {
    constructor(props) {
        super(props);

        this.contentMd = null;

        this.state = {
            content: null,
        };
    }

    componentDidMount() {
        if (this.contentMd) {
            renderMd(this.contentMd)
                .then(content => this.setState({ content }));
        }
    }

    parentWrapper(children) {
        const siteTitle = _get(this.props, 'data.site.siteMetadata.title', null);
        const siteDescription = _get(this.props, 'data.site.siteMetadata.description', null);
        if (this.props.location && siteTitle && siteDescription) {
            return (
                <Layout
                    title={siteTitle}
                    metaTitle={siteTitle}
                    description={siteDescription}
                    location={this.props.location}
                >
                    {children}
                </Layout>
            );
        }
        return (
            <Container>
                {children}
            </Container>
        );
    }

    renderBeforeContent() {
        return null;
    }

    renderAfterContent() {
        return null;
    }

    render() {
        return this.parentWrapper(
            <React.Fragment>
                {this.renderBeforeContent()}
                <div
                    dangerouslySetInnerHTML={{__html: this.state.content}}
                />
                {this.renderAfterContent()}
            </React.Fragment>
        );
    }
}

export default BasePage;
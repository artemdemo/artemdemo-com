import React from 'react';
import _get from 'lodash/get';
import Posts from '../../components/Posts/Posts';
import Pagination from '../../components/Pagination/Pagination';
import BasePage from '../BasePage/BasePage';
import * as utils from '../../services/utils';

class PostsList extends BasePage {
    renderPagination(prefixer = utils.prefixBlog) {
        const totalCount = _get(this.props, 'data.allMarkdownRemark.totalCount', 0);
        const skip = _get(this.props, 'pageContext.skip', 0);
        const limit = _get(this.props, 'pageContext.limit', 0);

        return (
            <Pagination
                skip={skip}
                limit={limit}
                totalPosts={totalCount}
                prefixer={prefixer}
            />
        );
    }

    renderBeforeContent() {
        const posts = _get(this.props, 'data.allMarkdownRemark.edges');
        return (
            <Posts list={posts} />
        );
    }

    renderAfterContent() {
        return this.renderPagination();
    }
}

export default PostsList;

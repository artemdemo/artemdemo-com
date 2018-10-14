import React from 'react';
import SecondaryText from '../SecondaryText/SecondaryText';

const PostDate = props => (
    <SecondaryText>
        {props.children}
    </SecondaryText>
);

export default PostDate;
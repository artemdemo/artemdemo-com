import React from 'react'
import Icon from '../components/Icon/Icon';

class Bio extends React.Component {
    render() {
        return (
            <React.Fragment>
                <p>
                    Written by <strong>Artem Demo</strong> who lives and works in Tel Aviv building useful things.
                    <ul>
                        <li>
                            <a href="https://github.com/artemdemo" target='_blank'>
                                <Icon name='github' /> artemdemo
                            </a>
                        </li>
                    </ul>
                </p>
                <hr />
            </React.Fragment>
        )
    }
}

export default Bio

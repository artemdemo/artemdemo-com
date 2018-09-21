import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'

class Bio extends React.Component {
    render() {
        return (
            <div
                style={{
                    display: 'flex',
                    marginBottom: rhythm(2.5),
                }}
            >
                <p>
                    Written by <strong>Artem Demo</strong> who lives and works in Tel Aviv building useful things.{' '}
                    <a href="https://github.com/artemdemo">
                        You should follow him on Github
                    </a>
                </p>
            </div>
        )
    }
}

export default Bio

import React from 'react'

class Bio extends React.Component {
    render() {
        return (
            <div
                style={{
                    display: 'flex',
                    marginBottom: '10px',
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

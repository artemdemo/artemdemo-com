import React from 'react';
import { createNanoEvents } from 'nanoevents';
import styled from 'styled-components';

const updateReadyEmitter = createNanoEvents();
const UPDATE_READY_INFO = 'UPDATE_READY_INFO';

export const showUpdateReadyInfo = () => {
    updateReadyEmitter.emit(UPDATE_READY_INFO);
};

const Info = styled.div`
    position: fixed;
    cursor: pointer;
    color: #002c50;
    padding: 5px 8px;
    border-radius: 3px;
    right: 10%;
    font-size: 85%;
    box-shadow: rgba(0, 0, 0, 0.25) 1px 1px 4px;
    border: 1px solid rgb(112, 175, 224);
    background-color: rgb(145, 206, 255);
    transition: right 1s;
`;

class UpdateReadyInfo extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            updateIsReady: false,
        };

        this.unbind = null;
    }

    componentDidMount() {
        this.unbind = updateReadyEmitter.on(UPDATE_READY_INFO, () => {
            this.setState({
                updateIsReady: true,
            });
        })
    }

    componentWillUnmount() {
        this.unbind();
    }

    handleAppUpdate() {
        window.location.reload();
    }

    render() {
        return (
            <Info
                style={{
                    right: this.state.updateIsReady ? '10%' : '-100%',
                }}
                onClick={this.handleAppUpdate}
            >
                <div>This site has been updated.</div>
                <div>Reload to display the latest version?</div>
                <div>(click here)</div>
            </Info>
        );
    }
}

export default UpdateReadyInfo;

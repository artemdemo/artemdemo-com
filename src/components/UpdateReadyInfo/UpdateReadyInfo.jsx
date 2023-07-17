import React from 'react';
import { createNanoEvents } from 'nanoevents';
import './UpdateReadyInfo.css';

const updateReadyEmitter = createNanoEvents();
const UPDATE_READY_INFO = 'UPDATE_READY_INFO';

export const showUpdateReadyInfo = () => {
  updateReadyEmitter.emit(UPDATE_READY_INFO);
};

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
    });
  }

  componentWillUnmount() {
    this.unbind();
  }

  handleAppUpdate() {
    window.location.reload();
  }

  render() {
    return (
      <div
        className="update-ready-info"
        style={{
          right: this.state.updateIsReady ? '10%' : '-100%',
        }}
        onClick={this.handleAppUpdate}
      >
        <div>This site has been updated.</div>
        <div>Reload to display the latest version?</div>
        <div>(click here)</div>
      </div>
    );
  }
}

export default UpdateReadyInfo;

import React,{ Component } from 'react';
import './DownloadButton.scss';

class DownloadButton extends Component {
    render() {
        return (
            <div>
                <br/>
                    <button onClick={this.props.onclick} className='button-shadow button' >Download Resume</button>
                <br/>
            </div>
        );
    }
}
export default DownloadButton;
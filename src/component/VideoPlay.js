import React from 'react';


class VideoPlay extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          streamRef: ''
      }
      this.myRef = React.createRef();
    }
    componentWillReceiveProps(nextProps) {
        // let streamRef;
        console.log(navigator);
        navigator.mediaDevices.getUserMedia({
            video : nextProps.playVideo
        }).then(stream => {
            this.setState({streamRef: stream});
            this.myRef.current.src = window.URL.createObjectURL(stream);
        }).catch((err) => {
            console.log(err);
            this.state.streamRef.getTracks().map((val) => {
                val.stop();
            });
            this.myRef.current.src ='';
        })
    }
    render() {
      return (
        <div class="videospace">
            <video id='vid' autoPlay ref={this.myRef}></video>
        </div>
      )
    }
  }
export default VideoPlay;
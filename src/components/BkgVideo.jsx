import React from 'react'
import styles from "./BkgVideo.module.css";
import ReactPlayer from 'react-player';

function BkgVideo() {
    return (
    <div className={styles.mediaBox}>
        <ReactPlayer
            className={styles.bkgVideo}
            playing={true}
            loop
            muted={true}
            url="video.mp4" />
            </div>
    )
}

export default BkgVideo;

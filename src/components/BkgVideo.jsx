import React from 'react'
import styles from "./BkgVideo.module.css";

function BkgVideo() {
    return (
        <video autoPlay muted loop className={styles.bkgVideo}>
            <source src="../media/main_background.mp4" type="video/mp4"/>
        </video>
    )
}

export default BkgVideo;

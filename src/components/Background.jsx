import React from 'react'
import styles from "./Background.module.css";
    
function Background({src}) {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={src} alt="background clouds" />
        </div>
    )
}

export default Background

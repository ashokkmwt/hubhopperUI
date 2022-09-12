import React from 'react'
import styles from "./index.module.css"
import cx from 'classnames';

export default function Header() {
    return (
        <>
            <header>
                <div className={styles.title}>hubhopper</div>
                <div className={styles.items}>
                    <span className={styles.itemText}>Listen</span>
                    <span className={styles.itemText}>Products</span>
                    <span className={styles.itemText}>Help</span>
                    <span className={styles.itemText}>Add/Remove</span>
                    <span className={styles.itemText}>How to Create</span>
                    <span className={styles.itemText}>Login</span>
                    <span className={cx(styles.itemText, styles.itemTextApp)}>Get the app</span>
                </div>
            </header>
            <div className={styles.afterPosition}>
                <div className={styles.title}>hubhopper <span style={{ fontWeight: 350 }}> studio</span></div>
                <p style={{ fontSize: 25, fontWeight: 700 }} >Everything <span style={{ color: "orange" }}>podcasting.</span></p>
                <p style={{fontSize:18, textAlign:"center"}} >Create your podcast for free or discover a new podcast to listen to.</p><br/><br/>
                <span className={styles.afterTextBg} style={{ background: "white", color:"black" }}>Continue with Google</span>
                <span className={styles.afterTextBg} style={{ background: "orange" }}>Sign in with Email</span>
                <h5 className={styles.text}>Already have an account?  <span style={{ color: "orange", textDecoration: "underline" }}>Click here to login</span></h5>
            </div>

        </>

    )
}

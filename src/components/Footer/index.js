import React from 'react'
import styles from "./index.module.css"

export default function Footer() {
  return (
    <footer>
      <div className={styles.reviewSection}>
        <h1 className={styles.reviewSectionTop}>Here's what our podcasters have to say about us</h1>
        <div className={styles.reviews}></div>
      </div>
      <div className={styles.information}>
        <div className={styles.contact}>
          <h2 className={styles.contactBox}>hubhopper</h2>
          <div className={styles.contactBox}>
            <h4>COMPANY</h4>
            <p>Blog</p>
            <p>Contact Us</p>
            <p>Hubhopper Press</p>
            <p>Acknowledgments</p>
          </div>
          <div className={styles.contactBox}>
            <h4>PROPERTIES</h4>
            <p>Listen</p>
            <p>Hubhopper Editor</p>
          </div>
          <div className={styles.contactBox}>
            <h4>FOR PODCASTERS</h4>
            <p>Features</p>
            <p>Help Center</p>
            <p>How to Create</p>
          </div>
        </div>
        <div className={styles.follow}>follow us on....</div>
        <div className={styles.terms}><span>Site Map</span>|<span>Terms of Use </span>|<span>Privacy Policy</span>| © Parijat Innovations Pvt Ltd 2019</div>
      </div>
    </footer>
  )
}

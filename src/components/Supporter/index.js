import React from 'react'
import styles from "./index.module.css"
import cx from 'classnames';
import aajtakLogo from "../../assets/icons/aajtak-logo.png";
import delhiImg from "../../assets/icons/delhi-gov-in.png";
import juggernautImg from "../../assets/icons/juggernaut-logo.png";
import OMLimg from "../../assets/icons/oml-logo.png";
import shemarooImg from "../../assets/icons/shemaroo-logo.png";
import theartoflivingImg from "../../assets/icons/art-of-living-logo.png";
import htImg from "../../assets/icons/ht-smartcast-logo.png";
import mygovImg from "../../assets/icons/my-gov-logo.png";
import creatorImg from "../../assets/images/creators-bg.png";

export default function Supporter() {
  return (
    <div className={styles.supporters}>
      <h1>Creators that trust us</h1>
      <div className={styles.companyLogo}>
        <img src={aajtakLogo} alt='aajtakLogo img' />
        <img src={delhiImg} alt='delhigovt img' />
        <img src={juggernautImg} alt='juggernaut img' />
        <img src={OMLimg} alt='OMLimg img' />
        <img src={shemarooImg} alt='shemarooImg img' />
        <img src={theartoflivingImg} alt='theartoflivingImg img' />
        <img src={htImg} alt='htImg img' />
        <img src={mygovImg} alt='mygovImg img' />
      </div>
      <div className={styles.creativeImage1}>
          <img width={140} height={240} src={creatorImg} alt='creatorImg img' />
        </div>
    </div>
  )
}

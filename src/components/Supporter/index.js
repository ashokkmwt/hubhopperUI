import React from 'react'
import styles from "./index.module.css"
import aajtakLogo from "../../assets/icons/aajtak-logo.png";
import _delhi from "../../assets/icons/delhi-gov-in.png";
import _juggernaut from "../../assets/icons/juggernaut-logo.png";
import _OML from "../../assets/icons/oml-logo.png";
import _shemaroo from "../../assets/icons/shemaroo-logo.png";
import _theartofliving from "../../assets/icons/art-of-living-logo.png";
import _ht from "../../assets/icons/ht-smartcast-logo.png";
import _mygov from "../../assets/icons/my-gov-logo.png";
import _creator from "../../assets/images/creators-bg.png";

export default function Supporter() {
  return (
    <div className={styles.supporters}>
      <h1>Creators that trust us</h1>
      <div className={styles.companyLogo}>
        <img src={aajtakLogo} alt='aajtakLogo' />
        <img src={_delhi} alt='delhigovt' />
        <img src={_juggernaut} alt='juggernaut' />
        <img src={_OML} alt='OML' />
        <img src={_shemaroo} alt='shemaroo' />
        <img src={_theartofliving} alt='theartofliving' />
        <img src={_ht} alt='ht' />
        <img src={_mygov} alt='mygov' />
      </div>
      <div className={styles.creativeImage1}>
          <img width={140} height={240} src={_creator} alt='creator' />
        </div>
    </div>
  )
}

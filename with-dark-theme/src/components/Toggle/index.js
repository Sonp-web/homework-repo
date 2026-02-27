import React from "react";
import styles from "./index.module.scss";

const Toggle = ({ value, onChange }) => (
  <label className={styles.switch} htmlFor="toggler">
    <input id="toggler" type="checkbox" onChange={onChange} checked={value} />
    <span className={styles.slider} />
    <span className={styles.wave} />
  </label>
);

export default Toggle;

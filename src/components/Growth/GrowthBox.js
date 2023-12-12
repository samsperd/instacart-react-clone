import { Fragment, useState } from "react";
import styles from "./Growth.module.css";

const GrowthBox = ({ time, field, description }) => {
  const [click, setClick] = useState(false);

  return (
    <div data-aos="flip-up" data-aos-duration={time} onClick={() => setClick(!click)} className={styles.growthDiv}>
      <Fragment>
        <div className={styles.growthField}>{field}</div>
        <div className={`${styles.growthDes} ${click && styles.open}`}>
          {description}
        </div>
      </Fragment>
    </div>
  );
};

export default GrowthBox;

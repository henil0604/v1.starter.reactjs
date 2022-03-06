import { Link } from "react-router-dom";
import styles from "@css/pages/Root.module.scss";
import { Button } from "antd";

export default function PAGE_Root() {
  return (
    <div className={styles.container}>
      <Button type='primary'>
        <Link to='/about'>Go To /about</Link>
      </Button>
    </div>
  );
}

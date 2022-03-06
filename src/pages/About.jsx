import { Link } from "react-router-dom";
import styles from "@css/pages/About.module.scss";
import { Button } from "antd";

export default function PAGE_Root() {
  return (
    <div className={styles.container}>
      <Button>
        <Link to='/'>Go To /</Link>
      </Button>
    </div>
  );
}

import styles from "./WelcomeMsg.module.css";
const WelcomeMsg = ({ toDo }) => {
  return (
    <>
      {toDo.length === 0 && (
        <h1 className={styles.welcome}>No Todo's left. Enjoy your data</h1>
      )}
    </>
  );
};

export default WelcomeMsg;

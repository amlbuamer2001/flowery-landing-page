import styles from './CustomButton.module.css'
export function CustomButton({children}) {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.customButton}>{children}</button>
    </div>
  );
}

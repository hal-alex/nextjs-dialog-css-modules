import styles from './page.module.css';
import { DialogButton } from '@/components/DialogButton/DialogButton';

export default function Home() {
  return (
    <div className={styles.container}>
      <DialogButton 
        content={
          <div>
            <h2>Dialog Example</h2>
            <p>This is a simple dialog component implementation.</p>
          </div>
        }
      >
        Open Dialog
      </DialogButton>
    </div>
  );
}
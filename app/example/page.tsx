import styles from "./page.module.css"
import { DialogButton } from "@/components/DialogButton/DialogButton"

// this page is server rendered but the dialog will be client rendered
export default function ExamplePage() {
  return (
    <div className={styles.container}>
      <h1>Example Page</h1>
      <DialogButton
        content={
          <div>
            <h2>Another Dialog</h2>
            <p>This dialog was triggered from a different page!</p>
          </div>
        }
      >
        Open Another Dialog
      </DialogButton>
    </div>
  )
}

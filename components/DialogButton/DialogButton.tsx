"use client"

import { useDialog } from "@/contexts/DialogContext"
import styles from "./DialogButton.module.css"

interface DialogButtonProps {
  content: React.ReactNode
  children: React.ReactNode
  className?: string
}

export function DialogButton({
  content,
  children,
  className,
}: DialogButtonProps) {
  const { openDialog } = useDialog()

  const handleClick = () => {
    openDialog(content)
  }

  return (
    <button
      onClick={handleClick}
      className={`${styles.button} ${className || ""}`}
    >
      {children}
    </button>
  )
}

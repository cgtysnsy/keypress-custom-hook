"use client"
import Image from 'next/image'
import styles from './page.module.css'
import useKeyPress from './hooks/useKeyPress'
import toast, {Toaster} from "react-hot-toast"

export default function Home() {

  const triggerAction = () => {
      toast('Good Job!', {
      icon: '👏',
    });
  }
  useKeyPress("Enter", triggerAction)

  return (
    <div>
      Press enter key
      <div><Toaster/></div>
  </div>
  )
}

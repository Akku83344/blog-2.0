import Link from "next/link";
import React from 'react'
import styles from "./comments.module.css"
import Image from "next/image";
const Comments = () => {
    const status = "authenticated";
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Comments</h1>
        {status=== "authenticated" ? (
            <div className={styles.write}>
                <textarea placeholder="write a comment..." className={styles.input}/>
                <button className={styles.button} >
            Send
          </button>
            </div>
        ):(
            <Link href="/login">Login to write a comment</Link>
        )}
        <div className={styles.comments}>
          <div className={styles.comment}>
            <div className={styles.user}>
              <Image className={styles.image}/>
              <div className={styles.userInfo}>
                <span className={styles.username}>akanksha</span>
                <span className={styles.date}>01.01.2004</span>
              </div>
            </div>
            <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
          </div>
        </div>
    </div>
  )
}

export default Comments
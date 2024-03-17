"use client"
import React, { useState } from 'react'
import Image from "next/image";
import styles from "./writePage.module.css";
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.bubble.css";

const WritePage = () => {
  
  const[open,setOpen] = useState(false)
  const [value, setValue] = useState("");
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className={styles.editor}>
        <button className={styles.button} >
          <Image src="/plus.png" alt="" width={16} height={16} onClick={() => setOpen(!open)}/>
        </button>
        {open && (
          <div className={styles.add}>
          <button className={styles.addButton}>
              <label htmlFor="image">
                <Image src="/image.png" alt="" width={16} height={16} />
              </label>
            </button>
            <button className={styles.addButton}>
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill theme="bubble"
          className={styles.textArea}
          value={value}
          onChange={setValue}
          placeholder="Write your blog here"
        />
      </div>
      <button className={styles.publish}>
        Publish
      </button>
    </div>
  )
}

export default WritePage
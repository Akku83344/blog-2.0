import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css"

const MenuPosts = ({ withImage, posts }) => {
  return (
    <div className={styles.items}>
      {posts.map((post) => (
        <Link key={post.slug} href={`/posts/${post.slug}`} className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image src={post.img} alt="" fill className={styles.image} />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>{post.category.title}</span>
            <h3 className={styles.postTitle}>{post.title}</h3>
            <div className={styles.detail}>
              <span className={styles.username}>{post.user.name}</span>
              <span className={styles.date}> - {post.createdAt.substring(0, 10)}</span>
              
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPosts;
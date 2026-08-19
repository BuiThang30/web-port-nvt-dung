import React from 'react';
import Image from 'next/image';
import styles from './about.module.css';

export default function AboutPage() {
  return (
    <div className={styles.aboutWrapper}>
      <div className={styles.aboutContent}>
        {/* Cột trái: Tiêu đề + Đoạn giới thiệu */}
        <div className={styles.leftColumn}>
          <h1 className={styles.title}>ABOUT ME</h1>
          <p className={styles.description}>
            Every piece here started as scrap once: a bolt, a wire, a motherboard nobody else wanted. The question is always the same: what could this become? Chemistry has asked for numbers that didn&#39;t add up at first. Engineering asked for a device that failed more than it worked. Lately, it&#39;s the question behind wanting to build something that outlasts me. <br/>
            The rest of this site is what came of asking.
          </p>
        </div>

        {/* Cột phải: Khung xám */}
        <div className={styles.rightColumn}>
          <div className={styles.imageBox}>
            <Image src="/image/anh.png" alt="About photo" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </div>

      {/* Dụng cụ màu vàng nằm đè góc phải, định vị theo aboutWrapper */}
      <div className={styles.toolsOverlay}>
        <Image
          src="/image/about-1.png"
          alt="Tools illustration"
          width={763}
          height={399}
          priority
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </div>
  );
}
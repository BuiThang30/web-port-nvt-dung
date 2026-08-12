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
            Before any piece of a model gets glued in place, it gets tuned, swapped, rearranged until it earns something permanent. The same instinct carried onto chemistry: trying different combinations of chemicals and formulas until it actually worked. Engineering, and more recently business, followed the same thread outward. Most of what&#39;s on this site started the same way: tried loose, adjusted, and only made permanent once it actually held up.
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
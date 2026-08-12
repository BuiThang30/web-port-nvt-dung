'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './where.module.css';

type SectionKey = 'school' | 'society' | null;

export default function WherePage() {
  const [activeSection, setActiveSection] = useState<SectionKey>(null);

  const toggleSection = (section: SectionKey) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  return (
    <div className={styles.whereWrapper}>
      <div className={styles.whereContainer}>
        {/* Tiêu đề & Tagline hiển thị ở trạng thái ĐÓNG */}
        {activeSection === null && (
          <>
            <h1 className={styles.mainTitle}>WHERE I SHOW UP</h1>
            <div className={styles.introTagline}>
              Not everything worth doing is built alone on a bench. Some of it is also just showing up consistently, on time, for something bigger than what any one person could finish by themselves. This is where that side lives.
            </div>
          </>
        )}

        {/* Khung chứa các mục Accordion */}
        <div
          className={`${styles.accordionList} ${
            activeSection === 'school' ? styles.isFirstActive : ''
          }`}
        >
          {/* --- 1. SCHOOL --- */}
          <div
            className={`${styles.accordionItem} ${
              activeSection === 'school' ? styles.activeItem : ''
            }`}
          >
            {activeSection === 'school' ? (
              <div
                className={styles.accordionContent}
                onClick={() => toggleSection('school')}
              >
                <h2 className={`${styles.mainTitle} ${styles.activeTitle}`}>
                  SCHOOL
                </h2>
                
                <div onClick={(e) => e.stopPropagation()}>
                  {/* Hoạt động 1 */}
                  <div className={styles.sectionBlock}>
                    <div className={styles.sectionSubTitle}>
                      Student Representative in Hyogo High School exchange program 2025 and 2026
                    </div>
                    <div className={styles.galleryGrid}>
                      <div className={styles.imageWrapper}>
                        <Image src="/image/school-1.png" alt="Certificate" fill sizes="328px" style={{ objectFit: 'cover' }} />
                      </div>
                      <div className={styles.imageWrapper}>
                        <Image src="/image/school-2.png" alt="Exchange group" fill sizes="328px" style={{ objectFit: 'cover' }} />
                      </div>
                      <div className={styles.imageWrapper}>
                        <Image src="/image/school-3.png" alt="Cultural visit" fill sizes="328px" style={{ objectFit: 'cover' }} />
                      </div>
                      <div className={styles.imageWrapper}>
                        <Image src="/image/school-4.png" alt="Presentation" fill sizes="328px" style={{ objectFit: 'cover' }} />
                      </div>
                    </div>
                  </div>

                  {/* Hoạt động 2 (Đã sửa lỗi hiển thị to khổng lồ) */}
                  <div className={styles.sectionBlock}>
                    <div className={styles.sectionSubTitle}>
                      Head of Chemistry Expertise in HSGS Educational Assistance Team
                    </div>
                    <div className={styles.galleryGrid}>
                      <div className={styles.certWrapper} style={{ border: "none" }}>
                        <Image
                          src="/image/school-cert.png"
                          alt="HSGS Certificate"
                          fill
                          sizes="328px"
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Hoạt động 3 */}
                  <div className={styles.sectionBlock}>
                    <div className={styles.sectionSubTitle}>
                      Playing for the class in school&#39;s football tournament
                    </div>
                    <div className={styles.galleryGrid}>
                      <div className={styles.imageWrapper}>
                        <Image src="/image/football-1.png" alt="Football match 1" fill sizes="328px" style={{ objectFit: 'cover' }} />
                      </div>
                      <div className={styles.imageWrapper}>
                        <Image src="/image/football-2.png" alt="Football match 2" fill sizes="328px" style={{ objectFit: 'cover' }} />
                      </div>
                      <div className={styles.imageWrapper}>
                        <Image src="/image/football-3.png" alt="Football match 3" fill sizes="328px" style={{ objectFit: 'cover' }} />
                      </div>
                      <div className={styles.imageWrapper}>
                        <Image src="/image/football-4.png" alt="Football match 4" fill sizes="328px" style={{ objectFit: 'cover' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <button
                className={styles.accordionHeader}
                onClick={() => toggleSection('school')}
              >
                <span className={styles.accordionTitle}>SCHOOL</span>
                <Image
                  src="/image/muiten.png"
                  alt="Arrow"
                  width={48}
                  height={16}
                  className={styles.arrowIcon}
                />
              </button>
            )}
          </div>

          {/* --- 2. SOCIETY --- */}
          <div
            className={`${styles.accordionItem} ${
              activeSection === 'society' ? styles.activeItem : ''
            }`}
          >
            {activeSection === 'society' ? (
              <div
                className={styles.accordionContent}
                onClick={() => toggleSection('society')}
              >
                <h2 className={`${styles.mainTitle} ${styles.activeTitle}`}>
                  SOCIETY
                </h2>
                
                <div className={styles.societyContent} onClick={(e) => e.stopPropagation()}>
                  <div className={styles.societyItem}>
                    <p>-Chemistry YouTube channel:</p>
                    <a
                      href="https://www.youtube.com/@ChemJoe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.societyLink}
                    >
                      https://www.youtube.com/@ChemJoe
                    </a>
                  </div>

                  <div className={styles.societyItem}>
                    <p>-Gieo ánh sáng, thắp tương lai charity program at Lùng Lý and Lang Cang rural commune:</p>
                    <a
                      href="https://drive.google.com/drive/folders/1TGPlLpXXpCSF4PwNXi44x3v9gWp-7UO4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.societyLink}
                    >
                      https://drive.google.com/drive/folders/1TGPlLpXXpCSF4PwNXi44x3v9gWp-7UO4?usp=sharing
                    </a>
                  </div>

                  <div className={styles.societyItem}>
                    <p>-DEco Project 2024:</p>
                    <a
                      href="https://drive.google.com/drive/folders/1qr2ptvO1Nzk--7h7i5JWHk_48MCodjne"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.societyLink}
                    >
                      https://drive.google.com/drive/folders/1qr2ptvO1Nzk--7h7i5JWHk_48MCodjne?usp=sharing
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <button
                className={styles.accordionHeader}
                onClick={() => toggleSection('society')}
              >
                <span className={styles.accordionTitle}>SOCIETY</span>
                <Image
                  src="/image/muiten.png"
                  alt="Arrow"
                  width={48}
                  height={16}
                  className={styles.arrowIcon}
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
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

                  {/* Hoạt động 2 */}
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
                
                <div className={styles.societyGrid} onClick={(e) => e.stopPropagation()}>
                  
                  {/* Khối 1: Góc trên bên trái */}
                  <div className={styles.societyBlock}>
                    <p className={styles.societyDesc}>
                      Gieo ánh sáng, thắp tương lai charity program at Lùng Lý and Lang Cang rural commune:
                    </p>
                    <div className={styles.societyImages3}>
                      <div className={styles.img208}>
                        <Image src="/image/soc-1.png" alt="Charity 1" fill sizes="(max-width: 768px) 33vw, 208px" style={{ objectFit: 'cover' }} />
                      </div>
                      <div className={styles.img208}>
                        <Image src="/image/soc-2.png" alt="Charity 2" fill sizes="(max-width: 768px) 33vw, 208px" style={{ objectFit: 'cover' }} />
                      </div>
                      <div className={styles.img208}>
                        <Image src="/image/soc-3.png" alt="Charity 3" fill sizes="(max-width: 768px) 33vw, 208px" style={{ objectFit: 'cover' }} />
                      </div>
                    </div>
                  </div>

                  {/* Khối 2: Góc trên bên phải */}
                  <div className={styles.societyBlock}>
                    <p className={styles.societyDesc}>
                      Viet Nam Red Cross Society volunteer:
                    </p>
                    <div className={styles.societyImages3}>
                      <div className={styles.img208}>
                        <Image src="/image/soc-4.png" alt="Charity 4" fill sizes="(max-width: 768px) 33vw, 208px" style={{ objectFit: 'cover' }} />
                      </div>
                      <div className={styles.img208}>
                        <Image src="/image/soc-5.png" alt="Charity 5" fill sizes="(max-width: 768px) 33vw, 208px" style={{ objectFit: 'cover' }} />
                      </div>
                      <div className={styles.img208}>
                        <Image src="/image/soc-6.png" alt="Charity 6" fill sizes="(max-width: 768px) 33vw, 208px" style={{ objectFit: 'cover' }} />
                      </div>
                    </div>
                  </div>

                  {/* Khối 3: Góc dưới bên trái */}
                  <div className={styles.societyBlock}>
                    <p className={styles.societyDesc}>
                      DEco Project 2024:
                    </p>
                    <div className={styles.societyImagesMixed}>
                      {/* Ảnh to (416x235) */}
                      <div className={styles.img416}>
                        <Image src="/image/soc-7.png" alt="DEco 1" fill sizes="(max-width: 768px) 76vw, 416px" style={{ objectFit: 'cover' }} />
                      </div>
                      {/* Ảnh dọc hẹp (131x234) */}
                      <div className={styles.img131}>
                        <Image src="/image/soc-8.png" alt="DEco 2" fill sizes="(max-width: 768px) 24vw, 131px" style={{ objectFit: 'cover' }} />
                      </div>
                    </div>
                  </div>

                  {/* Khối 4: Góc dưới bên phải (YouTube) */}
                  <div className={styles.societyBlock}>
                    <p className={styles.societyDesc}>
                      Chemistry YouTube channel:
                    </p>
                    <a
                      href="https://www.youtube.com/@ChemJoe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.societyLink}
                    >
                      https://www.youtube.com/@ChemJoe
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
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './build.module.css';

type SectionKey = 'innovation' | 'research' | 'achievements' | null;

export default function BuildPage() {
  const [activeSection, setActiveSection] = useState<SectionKey>(null);

  const toggleSection = (section: SectionKey) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  return (
    <div className={styles.buildWrapper}>
      <div className={styles.buildContainer}>
        {/* Tiêu đề & Tagline màu vàng hiển thị ở trạng thái MẶC ĐỊNH */}
        {activeSection === null && (
          <>
            <h1 className={styles.mainTitle}>WHAT I BUILD</h1>
            <div className={styles.introTagline}>
              Not everything collected here worked on the first attempt. A few of these are still on the bench, one adjustment away from finished rather than actually there. What follows isn&#39;t a highlight reel so much as a record of things taken apart, put back together, and tested again until they&#39;re held.
            </div>
          </>
        )}

        {/* Khung danh sách chứa các mục */}
        <div
          className={`${styles.accordionList} ${
            activeSection !== null ? styles.hasActive : ''
          } ${activeSection === 'innovation' ? styles.isFirstActive : ''}`}
        >
          {/* --- 1. INNOVATION --- */}
          <div
            className={`${styles.accordionItem} ${
              activeSection === 'innovation' ? styles.activeItem : ''
            }`}
          >
            {activeSection === 'innovation' ? (
              <div
                className={styles.accordionContent}
                onClick={() => toggleSection('innovation')}
              >
                <h2 className={`${styles.mainTitle} ${styles.activeTitle}`}>
                  INNOVATION
                </h2>
                <div
                  className={styles.textContent}
                  onClick={(e) => e.stopPropagation()}
                >
                  <p><strong>Dead zone Emergency distress device</strong></p>
                  <br />
                  <p><strong>Problem:</strong> Flooding regularly knocks out cell towers in Vietnam, right when people most need to call for help.</p>

                  <p><strong>Solution:</strong> A mobile beacon that skips cell networks entirely. A GPS chip and a low-power LoRa radio send a location straight to a nearby base station when the SOS button is pressed, no satellite, no subscription.</p>

                  <p><strong>Stack:</strong> ESP32-C3, GPS module, LoRa transceiver, Express.js/SQLite backend, live web dashboard.</p>

                  <p><strong>Results:</strong> 94% radio delivery rate over 50 test packets, 8-10 km range, full system succeeded end-to-end 4 times out of 5.</p>
                  
                  <p><strong>Status:</strong> Working prototype. Receiver enclosure still unfinished.</p>
                </div>
              </div>
            ) : (
              <button
                className={styles.accordionHeader}
                onClick={() => toggleSection('innovation')}
              >
                <span className={styles.accordionTitle}>INNOVATION</span>
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

          {/* --- 2. RESEARCH --- */}
          <div
            className={`${styles.accordionItem} ${
              activeSection === 'research' ? styles.activeItem : ''
            }`}
          >
            {activeSection === 'research' ? (
              <div
                className={styles.accordionContent}
                onClick={() => toggleSection('research')}
              >
                <h2 className={`${styles.mainTitle} ${styles.activeTitle}`}>
                  RESEARCH
                </h2>
                <div
                  className={styles.textContent}
                  onClick={(e) => e.stopPropagation()}
                >
                  <p><strong>- Improving GI Polyp Segmentation with a Balanced-Mix-Driven Research assistant</strong></p>
                  <p><strong>- Dead Zone Emergency Distress Device</strong></p>
                  <p><strong>- ROBOTIC ARM FOR MOVEMENT ASSISTANCE IN PATIENTS WITH CEREBRAL PALSY</strong></p>
                  <p><strong>Author</strong></p>
                </div>
              </div>
            ) : (
              <button
                className={styles.accordionHeader}
                onClick={() => toggleSection('research')}
              >
                <span className={styles.accordionTitle}>RESEARCH</span>
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

          {/* --- 3. ACHIEVEMENTS --- */}
          <div
            className={`${styles.accordionItem} ${
              activeSection === 'achievements' ? styles.activeItem : ''
            }`}
          >
            {activeSection === 'achievements' ? (
              <div
                className={styles.accordionContent}
                onClick={() => toggleSection('achievements')}
              >
                <h2 className={`${styles.mainTitle} ${styles.activeTitle}`}>
                  ACHEIVEMENTS
                </h2>
                <div
                  className={styles.certificatesGrid}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Bằng khen 1 */}
                  <div className={styles.certCard}>
                    <div className={styles.certImageWrapper}>
                      <Image
                        src="/image/cert1.png"
                        alt="Bronze medal HUS Chemistry Olympiad"
                        fill
                        sizes="264px"
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                    <div className={styles.certCaption}>
                      Bronze medal HUS Chemistry Olympiad
                    </div>
                  </div>

                  {/* Bằng khen 2 */}
                  <div className={styles.certCard}>
                    <div className={styles.certImageWrapper}>
                      <Image
                        src="/image/cert2.png"
                        alt="Bronze medal HUS Chemistry Olympiad"
                        fill
                        sizes="264px"
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                    <div className={styles.certCaption}>
                      Bronze medal HUS Chemistry Olympiad
                    </div>
                  </div>

                  {/* Bằng khen 3 */}
                  <div className={styles.certCard}>
                    <div className={styles.certImageWrapper}>
                      <Image
                        src="/image/cert3.png"
                        alt="Bronze medal HUS Chemistry Olympiad"
                        fill
                        sizes="264px"
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                    <div className={styles.certCaption}>
                      Bronze medal HUS Chemistry Olympiad
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <button
                className={styles.accordionHeader}
                onClick={() => toggleSection('achievements')}
              >
                <span className={styles.accordionTitle}>ACHEIVEMENTS</span>
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
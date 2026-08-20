'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './build.module.css';

type SectionKey = 'innovation' | 'research' | 'achievements' | null;

// Cấu hình dữ liệu Slider kèm kích thước chuẩn xác
const innovationSlides = [
  {
    images: ['/image/inno1.png', '/image/inno2.png'],
    maxWidth: '316px',
    aspectRatio: '316 / 425',
    gap: '8px' // 316 + 8 + 316 = 640px
  },
  {
    images: ['/image/inno3.png', '/image/inno4.png'],
    maxWidth: '316px',
    aspectRatio: '316 / 425',
    gap: '8px'
  },
  {
    images: ['/image/inno5.png'],
    maxWidth: '640px',
    aspectRatio: '640 / 365', // Slide 3 lùn hơn một chút
    gap: '0px'
  },
  {
    images: ['/image/inno6.png'],
    maxWidth: '640px',
    aspectRatio: '640 / 401', // Slide 4
    gap: '0px'
  },
];

export default function BuildPage() {
  const [activeSection, setActiveSection] = useState<SectionKey>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const toggleSection = (section: SectionKey) => {
    setActiveSection((prev) => (prev === section ? null : section));
    setCurrentSlide(0);
  };

  const startAutoPlay = () => {
    if (slideIntervalRef.current) clearInterval(slideIntervalRef.current);
    slideIntervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % innovationSlides.length);
    }, 3000);
  };

  const stopAutoPlay = () => {
    if (slideIntervalRef.current) clearInterval(slideIntervalRef.current);
  };

  useEffect(() => {
    if (activeSection === 'innovation') {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }
    return () => {
      stopAutoPlay();
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, [activeSection]);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
    stopAutoPlay();

    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);

    resumeTimeoutRef.current = setTimeout(() => {
      startAutoPlay();
    }, 6000);
  };

  return (
    <div className={styles.buildWrapper}>
      <div className={styles.buildContainer}>
        {activeSection === null && (
          <>
            <h1 className={styles.mainTitle}>WHAT I BUILD</h1>
            <div className={styles.introTagline}>
              Not everything collected here worked on the first attempt. A few of these are still on the bench, one adjustment away from finished rather than actually there. What follows isn&#39;t a highlight reel so much as a record of things taken apart, put back together, and tested again until they&#39;re held.
            </div>
          </>
        )}

        <div
          className={`${styles.accordionList} ${
            activeSection !== null ? styles.hasActive : ''
          } ${activeSection === 'innovation' ? styles.isFirstActive : ''}`}
        >
          {/* ==================== 1. INNOVATION ==================== */}
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
                  className={styles.splitContent}
                  onClick={(e) => e.stopPropagation()} 
                >
                  <div className={styles.textColumn}>
                    <p><strong>Dead zone Emergency distress device</strong></p>
                    <br />
                    <p><strong>Problem:</strong> Flooding regularly knocks out cell towers in Vietnam, right when people most need to call for help.</p>
                    <p><strong>Solution:</strong> A mobile beacon that skips cell networks entirely. A GPS chip and a low-power LoRa radio send a location straight to a nearby base station when the SOS button is pressed, no satellite, no subscription.</p>
                    <p><strong>Stack:</strong> ESP32-C3, GPS module, LoRa transceiver, Express.js/SQLite backend, live web dashboard.</p>
                    <p><strong>Results:</strong> 94% radio delivery rate over 50 test packets, 8-10 km range, full system succeeded end-to-end 4 times out of 5.</p>
                    <p><strong>Status:</strong> Working prototype. Receiver enclosure still unfinished.</p>
                  </div>

                  {/* Kéo giãn bề ngang max 640px */}
                  <div className={styles.sliderColumn}>
                    <div className={styles.sliderViewport}>
                      <div 
                        className={styles.sliderTrack}
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                      >
                        {innovationSlides.map((slideData, slideIndex) => (
                          <div 
                            key={slideIndex} 
                            className={styles.slide}
                            style={{ gap: slideData.gap }}
                          >
                            {slideData.images.map((imgSrc, imgIndex) => (
                              <div 
                                key={imgIndex} 
                                className={styles.slideImageWrapper}
                                style={{
                                  maxWidth: slideData.maxWidth,
                                  aspectRatio: slideData.aspectRatio
                                }}
                              >
                                <Image
                                  src={imgSrc}
                                  alt={`Innovation ${slideIndex}-${imgIndex}`}
                                  fill
                                  sizes="(max-width: 768px) 100vw, 640px"
                                  style={{ objectFit: 'cover' }}
                                />
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className={styles.dotsWrapper}>
                      {innovationSlides.map((_, index) => (
                        <button
                          key={index}
                          className={`${styles.dot} ${currentSlide === index ? styles.activeDot : ''}`}
                          onClick={() => handleDotClick(index)}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
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

          {/* ==================== 2. RESEARCH ==================== */}
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
                  <div className={styles.researchItem}>
                    <p className={styles.researchTitle}>
                      -Improving GI Polyp Segmentation with a Balanced-Mix-Driven
                    </p>
                    <p className={styles.authorText}>Author</p>
                  </div>

                  <div className={styles.researchItem}>
                    <p className={styles.researchTitle}>
                      -Dead Zone Emergency Distress Device
                    </p>
                    <a
                      href="https://cokhivietnam.vn/post/thiet-bi-phat-tin-hieu-cap-cuu-cho-vung-mat-song-di-dong"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.viewHereLink}
                    >
                      View Here
                    </a>
                  </div>

                  <div className={styles.researchItem}>
                    <p className={styles.researchTitle}>
                      -ROBOTIC ARM FOR MOVEMENT ASSISTANCE IN PATIENTS WITH CEREBRAL PALSY
                    </p>
                    <a
                      href="https://cokhivietnam.vn/post/canh-tay-robot-ho-tro-van-dong-cho-nguoi-bai-nao"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.viewHereLink}
                    >
                      View Here
                    </a>
                  </div>
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

          {/* ==================== 3. ACHIEVEMENTS ==================== */}
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
                  ACHIEVEMENTS
                </h2>
                <div
                  className={styles.certificatesGrid}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className={styles.certCard}>
                    <div className={styles.certImageWrapper}>
                      <Image
                        src="/image/cert1.png"
                        alt="Bronze medal at HSGS Olympiad"
                        fill
                        sizes="(max-width: 768px) 100vw, 188px"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className={styles.certInfo}>
                      <p className={styles.certTitle}>Bronze medal at HSGS Olympiad:</p>
                      <p className={styles.certDetail}>Role: participant</p>
                      <p className={styles.certDetail}>Scale: competed against students in gifted schools nationally, over 100 participants</p>
                    </div>
                  </div>

                  <div className={styles.certCard}>
                    <div className={styles.certImageWrapper}>
                      <Image
                        src="/image/cert2.png"
                        alt="Third prize at National Olympiad Selection"
                        fill
                        sizes="(max-width: 768px) 100vw, 188px"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className={styles.certInfo}>
                      <p className={styles.certTitle}>Third prize at National Olympiad Selection:</p>
                      <p className={styles.certDetail}>Role: participant</p>
                      <p className={styles.certDetail}>Scale: competed against 247 students regionally for the National Olympiad</p>
                    </div>
                  </div>

                  <div className={styles.certCard}>
                    <div className={styles.certImageWrapper}>
                      <Image
                        src="/image/cert3.png"
                        alt="World Invention Creativity Olympics 2026 Gold Award"
                        fill
                        sizes="(max-width: 768px) 100vw, 188px"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className={styles.certInfo}>
                      <p className={styles.certTitle}>World Invention Creativity Olympics 2026 Gold Award</p>
                      <p className={styles.certDetail}>Role: team leader</p>
                      <p className={styles.certDetail}>Scale: competed against 364 projects internationally</p>
                    </div>
                  </div>

                  <div className={styles.certCard}>
                    <div className={styles.certImageWrapper}>
                      <Image
                        src="/image/cert4.png"
                        alt="World Invention Creativity Olympics 2026 Gold Award"
                        fill
                        sizes="(max-width: 768px) 100vw, 188px"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className={styles.certInfo}>
                      <p className={styles.certTitle}>World Invention Creativity Olympics 2026 Gold Award</p>
                      <p className={styles.certDetail}>Role: team leader</p>
                      <p className={styles.certDetail}>Scale: competed against 364 projects internationally</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <button
                className={styles.accordionHeader}
                onClick={() => toggleSection('achievements')}
              >
                <span className={styles.accordionTitle}>ACHIEVEMENTS</span>
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
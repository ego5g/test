'use client';

import React, { useRef } from 'react';
import styles from './Testimonials.module.css';

// Sample data for testimonials
const testimonials = [
  {
    quote: 'The excellent voice recognition quality of Curio app makes it perfect for dictation and note taking. I have never come across such accuracy before',
    name: 'Jane Doe',
    title: 'Product Manager, TechCorp',
    image: '/1.png',
    color: 'cardGreen',
  },
  {
    quote: 'The excellent voice recognition quality of Curio app makes it perfect for dictation and note taking. I have never come across such accuracy before',
    name: 'Peter Jones',
    title: 'Lead Developer, Innovate LLC',
    image: '/2.png',
    color: 'cardPink',
  },
    {
    quote: 'The excellent voice recognition quality of Curio app makes it perfect for dictation and note taking. I have never come across such accuracy before',
    name: 'Adam Jordan',
    title: 'CEO, Design Studio',
    image: '/3.png',
    color: 'cardBlue',
  },
  {
    quote: 'The excellent voice recognition quality of Curio app makes it perfect for dictation and note taking. I have never come across such accuracy before',
    name: 'Jane Doe',
    title: 'Product Manager, TechCorp',
    image: '/4.png',
    color: 'cardGreen',
  },
];

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (scrollOffset: number) => {
    if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.textHeader}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>Testimonials</h2>
          <p className={styles.description}>
            Don't just take our word for it - hear from our satisfied clients who have experienced the transformative impact of our Al text tool.
          </p>
        </div>
        <div className={styles.arrowsContainer}>
          <button className={styles.arrowButton} onClick={() => scroll(-434)} aria-label="Scroll left">
            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.833 9.99996H4.16634M4.16634 9.99996L9.99967 15.8333M4.16634 9.99996L9.99967 4.16663" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className={styles.arrowButton} onClick={() => scroll(434)} aria-label="Scroll right">
            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.16602 9.99996H15.8327M15.8327 9.99996L9.99935 4.16663M15.8327 9.99996L9.99935 15.8333" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <div className={styles.cardsContainer} ref={scrollContainerRef}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={`${styles.testimonialCard} ${styles[testimonial.color]}`}>
            <p className={styles.cardQuote}>"{testimonial.quote}"</p>
            <div className={styles.cardUser}>
              <img src={testimonial.image} alt={testimonial.name} className={styles.userImage} />
              <div className={styles.userInfo}>
                <p className={styles.userName}>{testimonial.name}</p>
                <p className={styles.userTitle}>{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

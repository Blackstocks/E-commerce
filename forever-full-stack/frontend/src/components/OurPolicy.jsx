import React from 'react';
import { assets } from '../assets/assets';

const OurPolicy = () => {
  return (
    <div style={styles.container}>
      <div style={styles.row}>
        <div style={styles.col}>
          <h1 style={styles.heading}>
            <span>Welcome to</span> Chiltel
          </h1>
          <p style={styles.paragraph}>
            <strong>“Chiltel India”</strong> established in 2021 by Mr. Sudarshan
            Kuumar Raut, is a distinguished startup in the Sales and Service sector
            of Domestic and Commercial Home Appliances Industries. Recognized as a
            Startup by the Department of Industrial Policy and Promotion (DIIPT) of
            the Government of India in 2022, we have become a reputable force in the
            market.
          </p>
          <p style={styles.paragraph}>
            Operating both through offline and online on-demand platforms, Chiltel
            India is dedicated to providing comprehensive solutions to its clients.
            Our team comprises trained and experienced professionals specializing in
            both Domestic and Commercial Refrigeration Industries. We aim to offer
            top-notch services to our clients.
          </p>
          <p style={styles.paragraph}>
            At Chiltel India, our vision is centered on delivering premium services
            to customers at affordable rates, all within the convenience of their
            doorstep. Specializing in a range of products, including Deep Freezers,
            Visi-Coolers, Chest Freezers, Back Bar Freezers, Under Counters,
            Horizontal Steel Freezers &amp; Chillers, and Domestic Freezers &amp;
            ACs, we cater to the diverse needs of our clientele in the Eastern
            region.
          </p>
          <p style={styles.paragraph}>
            Our commitment extends beyond mere transactions; we aspire to provide
            the best service experience in the industry to each of our customers.
          </p>
          <p style={styles.paragraph}>
            Additionally, we recognize the potential for our associated
            professionals to earn a substantial income during the process, thereby
            enhancing their standard of living and social status.
          </p>
        </div>
      </div>
    </div>
    
  );
};

const styles = {
  container: {
    backgroundColor: '#f5f5f5', // light grey background
    padding: '40px', // spacing around the content
    fontFamily: 'Arial, sans-serif',
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  col: {
    maxWidth: '800px', // limits the width of the text area
    textAlign: 'justify',
    lineHeight: '1.6',
    fontSize: '18px', // larger font size for easier readability
  },
  heading: {
    textAlign: 'center',
    fontSize: '36px', // large heading font
    marginBottom: '20px',
    color: '#333', // dark grey text color for heading
  },
  paragraph: {
    marginBottom: '20px',
    color: '#333', // dark grey text color for paragraphs
  },
};

export default OurPolicy;

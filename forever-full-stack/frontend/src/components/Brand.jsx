import React from 'react';
import { assets } from '../assets/assets'; // Adjust the path as needed

const Brand = () => {

  const styles = {
    brands: {
      padding: '50px 0',
    },
    sectionTitle: {
      textAlign: 'center',
      fontSize: '2rem',
      marginBottom: '20px',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '30px',
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    row: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    col: {
      flex: '1 0 15%',
      maxWidth: '15%',
      padding: '10px',
    },
    partnerLogo: {
      padding: '10px',
      textAlign: 'center',
      transition: 'transform 0.3s ease',
    },
    partnerLogoImg: {
      maxWidth: '100px',
      height: 'auto',
    },
    '@media (maxWidth: 768px)': {
      col: {
        flex: '1 0 30%',
        maxWidth: '30%',
      }
    },
    '@media (maxWidth: 480px)': {
      col: {
        flex: '1 0 45%',
        maxWidth: '45%',
      }
    },
  };

  return (
    <section style={styles.brands}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div style={styles.sectionTitle}>
              <h2>
                <span>Channel Partner</span>
              </h2>
            </div>
          </div>
          <div className="col-12">
            <div style={styles.heading}>
              <h3>We Service All Brands</h3>
            </div>
          </div>
        </div>
        <div style={styles.row}>
          <div style={styles.col}>
            <div style={styles.partnerLogo}>
              <img src={assets.brand1} alt="Brand 1" style={styles.partnerLogoImg} />
            </div>
          </div>
          <div style={styles.col}>
            <div style={styles.partnerLogo}>
              <img src={assets.brand2} alt="Brand 2" style={styles.partnerLogoImg} />
            </div>
          </div>
          <div style={styles.col}>
            <div style={styles.partnerLogo}>
              <img src={assets.brand3} alt="Brand 3" style={styles.partnerLogoImg} />
            </div>
          </div>
          <div style={styles.col}>
            <div style={styles.partnerLogo}>
              <img src={assets.brand4} alt="Brand 4" style={styles.partnerLogoImg} />
            </div>
          </div>
          <div style={styles.col}>
            <div style={styles.partnerLogo}>
              <img src={assets.brand5} alt="Brand 5" style={styles.partnerLogoImg} />
            </div>
          </div>
          <div style={styles.col}>
            <div style={styles.partnerLogo}>
              <img src={assets.brand6} alt="Brand 6" style={styles.partnerLogoImg} />
            </div>
          </div>
          <div style={styles.col}>
            <div style={styles.partnerLogo}>
              <img src={assets.brand8} alt="Brand 8" style={styles.partnerLogoImg} />
            </div>
          </div>
          <div style={styles.col}>
            <div style={styles.partnerLogo}>
              <img src={assets.brand9} alt="Brand 9" style={styles.partnerLogoImg} />
            </div>
          </div>
          <div style={styles.col}>
            <div style={styles.partnerLogo}>
              <img src={assets.brand10} alt="Brand 10" style={styles.partnerLogoImg} />
            </div>
          </div>
          <div style={styles.col}>
            <div style={styles.partnerLogo}>
              <img src={assets.brand11} alt="Brand 11" style={styles.partnerLogoImg} />
            </div>
          </div>
          <div style={styles.col}>
            <div style={styles.partnerLogo}>
              <img src={assets.brand12} alt="Brand 12" style={styles.partnerLogoImg} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;

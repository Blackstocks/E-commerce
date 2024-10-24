import React, { useEffect, useState } from 'react';

const Funfact = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle the scroll event
  const handleScroll = () => {
    const section = document.querySelector('.funfact');
    const position = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (position < windowHeight) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to animate the counters
  const Counter = ({ end }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (isVisible) {
        let start = 0;
        const duration = 2000; // 2 seconds
        const increment = end / (duration / 10);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }
          setCount(Math.floor(start));
        }, 10);
      }
    }, [isVisible, end]);

    return <span>{count}</span>;
  };

  return (
    <section className="funfact" style={styles.funfact}>
      <div style={styles.container}>
        <div style={styles.row}>
          <div style={styles.col}>
            <div style={styles.singleFunfact}>
              <img src="assets/images/icons/funfact1.svg" alt="" />
              <h2>
                <Counter end={15} />
                <span>+</span>
              </h2>
              <h3>Years Experience</h3>
            </div>
          </div>
          <div style={styles.col}>
            <div style={styles.singleFunfact}>
              <img src="assets/images/icons/funfact2.svg" alt="" />
              <h2>
                <Counter end={1500} />
                <span>+</span>
              </h2>
              <h3>Happy Customers</h3>
            </div>
          </div>
          <div style={styles.col}>
            <div style={styles.singleFunfact}>
              <img src="assets/images/icons/funfact3.svg" alt="" />
              <h2>
                <Counter end={30} />
                <span>+</span>
              </h2>
              <h3>Experience Technicians</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  funfact: {
    backgroundColor: '#333', // dark background
    padding: '50px 0',
    color: '#fff',
  },
  container: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  col: {
    flex: '1',
    textAlign: 'center',
    margin: '10px',
  },
  singleFunfact: {
    backgroundColor: '#444', // dark grey background for each fact
    padding: '20px',
    borderRadius: '10px',
  },
};

export default Funfact;

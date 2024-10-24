import React from 'react';

const ActionCall = () => {

  const onSubmitHandler = (event) => {
    event.preventDefault();
  }

  return (
    <section style={styles.call_to_action}>
      <div style={styles.container}>
        <div style={styles.row}>
          <div style={styles.col}>
            <div style={styles.call_action_inner}>
              <div style={styles.call_text}>
                <h3>Get a Quote or callback from our experts</h3>
              </div>
              <div style={styles.discover_now}>
                <a href="contact-us" style={styles.discover_now_link}>Enquiry Now</a>
              </div>
              <div style={styles.link_follow}>
                <ul style={styles.link_follow_ul}>
                  <li style={styles.link_follow_li}>
                    <a href="#" style={styles.link_follow_a}>
                      <i className="fa fa-facebook-f" />
                    </a>
                  </li>
                  <li style={styles.link_follow_li}>
                    <a href="#" style={styles.link_follow_a}>
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li style={styles.link_follow_li}>
                    <a href="#" style={styles.link_follow_a}>
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  call_to_action: {
    width: '100%', // Full width of the page
    background: 'linear-gradient(135deg, #4f4fef, #67e8f9)',
    padding: '60px 0',
    color: '#fff',
    textAlign: 'center',
  },
  container: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  col: {
    width: '100%',
  },
  call_action_inner: {
    padding: '40px',
    backgroundColor: '#ffffff15',
    borderRadius: '10px',
    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
  },
  call_text: {
    marginBottom: '20px',
  },
  discover_now: {
    marginBottom: '20px',
  },
  discover_now_link: {
    display: 'inline-block',
    padding: '12px 30px',
    backgroundColor: '#ff6584',
    color: 'white',
    borderRadius: '25px',
    textTransform: 'uppercase',
    fontSize: '1rem',
    fontWeight: 600,
    transition: 'background-color 0.3s ease',
    textDecoration: 'none',
  },
  discover_now_link_hover: {
    backgroundColor: '#ff8fa6',
  },
  link_follow: {
    marginTop: '20px',
  },
  link_follow_ul: {
    padding: 0,
    listStyle: 'none',
    margin: '20px 0 0',
    display: 'flex',
    justifyContent: 'center',
  },
  link_follow_li: {
    margin: '0 10px',
  },
  link_follow_a: {
    color: 'white',
    fontSize: '1.5rem',
    transition: 'color 0.3s ease',
  },
  link_follow_a_hover: {
    color: '#ff6584',
  },
  '@media (max-width: 768px)': {
    call_text_h3: {
      fontSize: '2rem',
    },
    discover_now_link: {
      fontSize: '0.9rem',
      padding: '10px 25px',
    },
    call_action_inner: {
      padding: '20px',
    },
  },
};

export default ActionCall;

import styles from './FooterStyles.module.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id='footer' className={styles.container}>
      <p>
        <span>&copy; {currentYear} SLEE</span>
        <span>Designed and built with care.</span>
        <a href="#hero">Back to top ↑</a>
      </p>
      
    </footer>
  );
}

export default Footer;
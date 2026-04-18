import "./Footer.css"

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <p className="footer__copyright">
            <span> &copy; Henrique Bossle | Programador Full-Stack</span>
            <br />
            {currentYear}
          </p>
          
          <div className="footer__socials">
            <a href="http://instagram.com/henriquegbossle/" target="_blank" rel="noreferrer" className="footer__link">
              Instagram
            </a>
            <a href="https://github.com/HenriqueBossle" target="_blank" rel="noreferrer" className="footer__link">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/henrique-bossle-219b622b9/" target="_blank" rel="noreferrer" className="footer__link">
              LinkedIn
            </a>
          </div>
        </div>
        
   
      </div>
    </footer>
  )
}

export default Footer
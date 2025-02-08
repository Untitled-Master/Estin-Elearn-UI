import "./Footer.css"; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: "#09090B", color: "#FAFAFA" }}>
      <div className="footer-content">
        <div className="footer-section">
        <div> {/* hi, i dont know why i used a div for this */}
            <img 
                src="https://elearn.estin.dz/pluginfile.php/1/theme_klass/footerlogo/1685881281/elearn.png" 
                alt="ESTIN Logo" 
            />
        </div>
          <p>
            L’École a été créée en 2019 sous le nom de l’École Supérieure en Sciences et Technologies de l’Informatique et du Numérique (ESTIN). Rattachée au Ministère de l’Enseignement Supérieur.
          </p>
        </div>
        <div className="footer-section">
          <h3>Notre Campus</h3>
          <ul>
            <li>TALENTS</li>
            <li>BIBLIOTHÈQUE</li>
            <li>THÈSES</li>
            <li>REPOSITORY</li>
          </ul>
          <p>Route nationale n° 75, Amizour – 06300 Bejaia</p>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>: +213-34-824-916</p>
          <p>: contact@estin.dz</p>
        </div>
      </div>
      <div className="footer-bottom" style={{ borderTop: "1px solid #FAFAFA" }}>
        <p>Droits d'auteur © 2022 - Développé par estin. Powered by ESTIN.DZ</p>
      </div>
    </footer>
  );
};

export default Footer;
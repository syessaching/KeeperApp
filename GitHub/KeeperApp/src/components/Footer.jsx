import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return(
    <footer>
        <p>© {currentYear} Chezza Bomediano. All rights reserved.</p>
    </footer>
    );

};

export default Footer;
import * as React from "react";
import ContactsLine from "./ContactsLine";
import CopyRight from "./CopyRight";
import "../../CSS/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <ContactsLine />
            <CopyRight />
        </footer>
    );
};

export default Footer;

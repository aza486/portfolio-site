import "./Footer.css";

interface FooterProps {
    onImpressum: () => void;
    onDatenschutz: () => void;
    mobile?: boolean;
}

function Footer({
    onImpressum,
    onDatenschutz,
    mobile = false,
}: FooterProps) {

    return (

        <footer className={`footer ${mobile ? "footer-mobile" : ""}`}>

            <button onClick={onImpressum}>
                Impressum
            </button>

            <button onClick={onDatenschutz}>
                Datenschutz
            </button>

        </footer>

    );

}

export default Footer;
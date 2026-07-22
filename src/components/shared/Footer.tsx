import "./Footer.css";

interface FooterProps {
    onImpressum: () => void;
    onDatenschutz: () => void;
}

function Footer({
    onImpressum,
    onDatenschutz,
}: FooterProps) {

    return (

        <footer className="footer">

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
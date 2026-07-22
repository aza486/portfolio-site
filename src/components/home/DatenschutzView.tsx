import "./DatenschutzView.css";

function DatenschutzView() {
    return (
        <div className="legal-view">

            <h1>Datenschutzerklärung</h1>

            <h2>1. Datenschutz auf einen Blick</h2>

            <p>
                Der Schutz Ihrer persönlichen Daten ist mir ein wichtiges Anliegen.
                Nachfolgend informiere ich Sie über die Verarbeitung
                personenbezogener Daten beim Besuch dieser Website.
            </p>

            <h2>2. Verantwortlicher</h2>

            <p>
                Daniel Podjapolski<br />
                Musterstraße 1<br />
                01234 Musterstadt<br />
                E-Mail: deine@email.de
            </p>

            <h2>3. Hosting</h2>

            <p>
                Diese Website wird über Cloudflare Pages bereitgestellt. Beim Aufruf
                der Website werden technisch notwendige Daten wie IP-Adresse,
                Browsertyp, Datum und Uhrzeit verarbeitet, um den sicheren Betrieb
                der Website zu gewährleisten.
            </p>

            <h2>4. Server-Log-Dateien</h2>

            <p>
                Der Hosting-Anbieter erhebt und speichert automatisch Informationen
                in sogenannten Server-Log-Dateien, die Ihr Browser automatisch
                übermittelt.
            </p>

            <h2>5. Kontaktaufnahme</h2>

            <p>
                Wenn Sie mich per E-Mail kontaktieren, werden Ihre Angaben
                ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.
            </p>

            <h2>6. Ihre Rechte</h2>

            <p>
                Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung,
                Einschränkung der Verarbeitung sowie auf Datenübertragbarkeit nach
                den geltenden gesetzlichen Bestimmungen.
            </p>

            <h2>7. Änderungen</h2>

            <p>
                Diese Datenschutzerklärung kann angepasst werden, wenn sich
                rechtliche Anforderungen oder technische Änderungen ergeben.
            </p>

        </div>
    );
}

export default DatenschutzView;
export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container header-inner">
          <div className="logo">WirWohnen</div>
          <nav>
            <ul className="nav">
              <li>
                <a href="#features">Funktionen</a>
              </li>
              <li>
                <a href="#how-it-works">So gehts</a>
              </li>
              <li>
                <a href="#pricing">Preise</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1>
            Euer Haus, <span>eure Verwaltung</span>
          </h1>
          <p>
            WirWohnen gibt Eigentümergemeinschaften die Werkzeuge, um ihr
            Mehrparteienhaus selbst zu managen — ohne teure Hausverwaltung,
            dafür mit voller Kontrolle.
          </p>
          <div className="cta-group">
            <a href="#pricing" className="btn btn-primary">
              Jetzt starten
            </a>
            <a href="#features" className="btn btn-secondary">
              Mehr erfahren
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features" id="features">
        <div className="container">
          <h2>Alles, was eure WEG braucht</h2>
          <p>
            Von der Nebenkostenabrechnung bis zur Eigentümerversammlung — alles
            an einem Ort.
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Kostenübersicht</h3>
              <p>
                Alle Kosten transparent aufgeschlüsselt. Nebenkosten,
                Rücklagen und Sonderumlagen — immer im Blick.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏗️</div>
              <h3>Sanierungsplaner</h3>
              <p>
                Sanierungsoptionen vergleichen, Angebote einholen und gemeinsam
                über Maßnahmen abstimmen.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🗳️</div>
              <h3>Abstimmungen</h3>
              <p>
                Digitale Eigentümerversammlungen und Umlaufbeschlüsse.
                Entscheidungen demokratisch und dokumentiert treffen.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📄</div>
              <h3>Dokumentenablage</h3>
              <p>
                Protokolle, Verträge und Rechnungen zentral gespeichert.
                Jederzeit abrufbar für alle Eigentümer.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔔</div>
              <h3>Benachrichtigungen</h3>
              <p>
                Automatische Erinnerungen für Fristen, Versammlungen und
                anstehende Zahlungen.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Eigentümerverwaltung</h3>
              <p>
                Kontaktdaten, Miteigentumsanteile und Stimmrechte aller
                Eigentümer übersichtlich verwaltet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="how-it-works" id="how-it-works">
        <div className="container">
          <h2>In 3 Schritten zur Selbstverwaltung</h2>
          <div className="steps">
            <div className="step">
              <h3>Registrieren</h3>
              <p>
                Erstellt ein Konto für eure WEG und ladet alle Eigentümer ein.
              </p>
            </div>
            <div className="step">
              <h3>Einrichten</h3>
              <p>
                Erfasst euer Gebäude, Einheiten und die aktuelle Kostenstruktur.
              </p>
            </div>
            <div className="step">
              <h3>Loslegen</h3>
              <p>
                Verwaltet euer Haus gemeinsam — transparent, demokratisch und
                digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing" id="pricing">
        <div className="container">
          <h2>Faire Preise für jede WEG</h2>
          <p>Keine versteckten Kosten. Monatlich kündbar.</p>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Starter</h3>
              <p>Für kleine Wohnanlagen</p>
              <div className="pricing-price">
                0€ <span>/ Monat</span>
              </div>
              <ul className="pricing-features">
                <li>Bis zu 6 Einheiten</li>
                <li>Kostenübersicht</li>
                <li>Dokumentenablage</li>
                <li>1 Admin</li>
              </ul>
              <a href="#" className="btn btn-secondary" style={{ width: "100%" }}>
                Kostenlos starten
              </a>
            </div>
            <div className="pricing-card featured">
              <div className="pricing-badge">Beliebt</div>
              <h3>Standard</h3>
              <p>Für mittlere Wohnanlagen</p>
              <div className="pricing-price">
                29€ <span>/ Monat</span>
              </div>
              <ul className="pricing-features">
                <li>Bis zu 20 Einheiten</li>
                <li>Alle Funktionen</li>
                <li>Abstimmungen</li>
                <li>Unbegrenzte Admins</li>
              </ul>
              <a href="#" className="btn btn-primary" style={{ width: "100%" }}>
                Jetzt starten
              </a>
            </div>
            <div className="pricing-card">
              <h3>Premium</h3>
              <p>Für große Wohnanlagen</p>
              <div className="pricing-price">
                59€ <span>/ Monat</span>
              </div>
              <ul className="pricing-features">
                <li>Unbegrenzte Einheiten</li>
                <li>Alle Funktionen</li>
                <li>Prioritäts-Support</li>
                <li>API-Zugang</li>
              </ul>
              <a href="#" className="btn btn-secondary" style={{ width: "100%" }}>
                Kontakt aufnehmen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <ul className="footer-links">
            <li>
              <a href="#">Impressum</a>
            </li>
            <li>
              <a href="#">Datenschutz</a>
            </li>
            <li>
              <a href="#">Kontakt</a>
            </li>
          </ul>
          <p>&copy; {new Date().getFullYear()} WirWohnen. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </>
  );
}

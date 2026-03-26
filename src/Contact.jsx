import "./style/contact.css";
import { Github } from "lucide-react";

export default function Contact() {
  return (
    <section className="contact-section">
      <h2>Contact </h2>

      <div className="contact-links">
        <a href="tel:+491772593961">📞 Anrufen</a>
        <a href="mailto:h1782848@gmail.com">✉️ E-Mail</a>
        <a href="https://github.com/Haitham3689" target="_blank" rel="noopener noreferrer">
          <Github size={20} /> GitHub
        </a>
      </div>
    </section>
  );
}

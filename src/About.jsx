import { motion } from "framer-motion";
import profilePic from "./assets/haitham.jpg";

export default function About() {
  return (
    <div className="portfolio-container max-w-4xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start gap-6"
      >
        {/* Bild links, klein */}
        <div className="profile-pic-wrapper flex-shrink-0">
          <img
            src={profilePic}
            alt="Mein Bild"
            className="w-24 h-24 rounded-full border-4 border-blue-600 shadow-lg"
          />
        </div>

        {/* Text rechts */}
        <div className="about-section p-6 bg-gray-50 rounded-xl shadow-md flex-1">
          <h2 className="text-2xl font-bold mb-4">Über mich</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Mein Name ist <strong>Haitham Almohamad</strong>, geboren am 02.01.1996, ursprünglich aus Syrien. Ich lebe seit etwa 10 Jahren in Deutschland und habe die deutsche Staatsbürgerschaft erhalten.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-2">
            Während meiner Ausbildung an der IRAD Akademie habe ich umfassende Kenntnisse in Full-Stack Webentwicklung erworben: 
            <strong>React, Tailwind, Node.js, REST APIs, Git/GitHub, SQL und MongoDB</strong>. Ich habe mehrere praxisnahe Projekte umgesetzt und gelernt, dynamische Websites zu erstellen und Backend-Logik zu integrieren.
            </p>
          


          <p className="text-gray-700 text-lg leading-relaxed mt-2">
           Wegen des Krieges konnte ich mein Studium in Syrien nicht abschließen. Ich habe mehrere Jahre in der Fliesenbranche gearbeitet, aber mein Traum war es immer, mich der Webentwicklung zu widmen.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-2">
            Ich habe eine Ausbildung in Webentwicklung an der IRAD Akademie in Essen abgeschlossen (30.08.2025) und währenddessen sowohl gearbeitet als auch meine Familie betreut.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-2">
            Heute bin ich hoch motiviert, meine Karriere in der Webentwicklung zu starten, kreative Lösungen umzusetzen und mich stetig weiterzuentwickeln. Ich spreche Deutsch (B1), Arabisch und Kurdisch.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

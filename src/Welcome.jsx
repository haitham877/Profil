import { motion } from "framer-motion";

import profilePic from "./assets/haitham.jpg";
export default function Welcome() {
  return (
  <div className="portfolio-container">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="portfolio-header"
      >
        <div className="profile-pic-wrapper">
          <img
            src={profilePic}
            alt="Mein Bild"
            className="w-32 h-32 rounded-full border-4 border-blue-600 shadow-lg"
          />
        </div>
        <h1>
          hi 👋 ich bin{" "}
          <span style={{ color: "#3b82f6" }}>Haitham</span>
        </h1>
        <p>Frontend- und Webentwickler</p>
      </motion.div>
     



    <section className="p-6 bg-gray-50 rounded-xl text-center max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Über mich</h2>
      <p className="text-gray-700 text-lg leading-relaxed">
        Hallo, ich bin <strong>Haitham</strong>, ein Webentwickler, Absolvent der IRAD Akademie. 
        Ich liebe es, moderne und schnelle Websites und Benutzeroberflächen mit React, Tailwind und Node.js zu entwickeln.
        Ich genieße es, technische Probleme zu lösen und die Benutzererfahrung zu verbessern. 
        Ich bin stets bereit, neue Technologien zu lernen und in meinen Projekten anzuwenden.
        Mein Ziel ist es, professionelle Websites zu erstellen, die Unternehmen und Einzelpersonen helfen, ihre digitalen Ziele zu erreichen.
      </p>
    </section>
      </div>
  );
}

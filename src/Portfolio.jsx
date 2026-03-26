import { motion } from "framer-motion";
import { Card, CardContent } from "./Card";
import { Button } from "./Button";
import { Github, Globe } from "lucide-react";
import profilePic from "./assets/haitham.jpg";
import "./style/Portfolio.css"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function Portfolio() {
  const projects = [
    { title: "To-Do App", description: "تطبيق لإدارة المهام باستخدام React وLocalStorage.", github: "#", live: "#" },
    { title: "Chat App", description: "Instant-Chat-Anwendung mit Socket.io وMongoDB.", github: "https://github.com/Haitham3689/chat" },
    
  ];

  return (
    <div className="portfolio-container">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="portfolio-header"
      >
        <div className="profile-pic-wrapper">
          <img src={profilePic} alt="Mein Bild" />
        </div>
        <h1>hi 👋 ich bin  <span style={{ color: "#3b82f6" }}>Haitham</span></h1>
        <p>Frontend- und Webentwickler</p>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Card>
              <CardContent>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="flex gap-4">
                  <Button variant="outline" asChild>
                    <a href={project.github} target="_blank"><Github className="w-4 h-4 mr-2" /> GitHub</a>
                  </Button>
                  <Button asChild>
                    <a href={project.live} target="_blank"><Globe className="w-4 h-4 mr-2" /> Live</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="portfolio-footer">
        <p>© {new Date().getFullYear()} haitham Alle Rechte vorbehalten</p>
      </div>
    </div>
  );
}


"use client";

import { Code2, LayoutGrid, Monitor, FileCode2, Database } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const skills = [
    { name: "HTML", icon: <FileCode2 className="w-8 h-8" /> },
    { name: "CSS", icon: <LayoutGrid className="w-8 h-8" /> },
    { name: "BOOTSTRAP", icon: <Monitor className="w-8 h-8" /> },
    { name: "TAILWIND CSS", icon: <LayoutGrid className="w-8 h-8" /> },
    { name: "JAVASCRIPT", icon: <Code2 className="w-8 h-8" /> },
    { name: "REACT JS", icon: <Code2 className="w-8 h-8" /> },
    { name: "WORDPRESS", icon: <LayoutGrid className="w-8 h-8" /> },
    { name: "SEO", icon: <Monitor className="w-8 h-8" /> },
    { name: "FireBase", icon: <Database className="w-8 h-8" /> },
    { name: "UI-UX Designer", icon: <LayoutGrid className="w-8 h-8" /> },
  ];

  const projects = [
    { 
      id: 1, 
      title: "Projet 1", 
      description: "Une application de défis et challenges fait à partir de React-js et Firebase.", 
      link: "https://venerable-biscotti-4c9437.netlify.app/",
      image: "im1.jpg"
    },
    { 
      id: 2, 
      title: "Projet 2", 
      description: "Plateforme professionnelle faite avec React.js .", 
      link: "https://prismatic-lebkuchen-f336dd.netlify.app/",
      image: "porto2.webp"
    },
    { 
      id: 3, 
      title: "Projet 3", 
      description: "Une application de générateur d'entrainement quotidien faite à artir de Type-Script", 
      link: "hhttps://frolicking-selkie-519905.netlify.app/",
      image: "crunch.avif"
    },
    { 
      id: 4, 
      title: "Projet 4", 
      description: "Site E-commerce crée à partir de HTML et CSS.", 
      link: "https://eclectic-cajeta-ae2d38.netlify.app/",
      image: "ecom.webp"
    },
  
    { 
      id: 5, 
      title: "Projet 5", 
      description: "Une application de bibliothèque digitale réaliser à partir de React- Vite.", 
      link: "https://euphonious-lolly-d24442.netlify.app/",
      image: "j.jpg"
    },
   
    { 
      id: 6, 
      title: "Projet 6", 
      description: "Site de vente de produits et conseils pour Maman & Bébé.", 
      link: "https://bespoke-mermaid-0c78d8.netlify.app/",
      image: "logo.jpg"
    },
    { 
      id: 7, 
      title: "Projet 7",
      description: "Site E-commerce crée à partir de HTML,CSS et Java-Script.", 
      link: "https://singular-swan-618276.netlify.app/",
      image: "ecom1.webp"
    },
    { 
      id: 8, 
      title: "Projet 8", 
      description: "Projet d'hôtellerie crée avec HTML et CSS.", 
      link: "https://ephemeral-fenglisu-03b46c.netlify.app/",
      image: "resto1.jpeg"
    },
    { 
      id: 9, 
      title: "Projet 9", 
      description: "Projet de restauration fait à partir de React JS.", 
      link: "https://lucent-parfait-4274af.netlify.app/",
      image: "resto2.jpeg"
    },
    { 
      id: 10, 
      title: "Projet 10", 
      description: "Portofolio fait à partir de Type Script, Vite et la Librairie de Material UI.", 
      link: "https://typeporto.netlify.app",
      image: "porto1.jpeg"
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <h1 className="text-lg md:text-xl font-bold">Ndeye Khadidiatou Touré</h1>
          <div className="flex gap-4 md:gap-6">
            <a href="#" className="text-sm md:text-base hover:text-gray-600">Accueil</a>
            <a href="#projects" className="text-sm md:text-base hover:text-gray-600">Projets</a>
            <a href="#contact" className="text-sm md:text-base hover:text-gray-600">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('img.jpg')",
            filter: "brightness(0.7) contrast(1.2)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}
        />
        <div className="z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Mon Portfolio</h1>
          <p className="text-lg sm:text-xl md:text-2xl">Développeuse Full Stack & Designer UI/UX</p>
          <button className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105">
            Voir mes projets
          </button>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Mes compétences</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md text-center transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-center mb-3 sm:mb-4">{skill.icon}</div>
                <h3 className="text-sm sm:text-base font-semibold">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Mes projets</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="h-48 sm:h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`Image de ${project.title}`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-3">{project.description}</p>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-500 hover:text-blue-700 hover:underline text-sm sm:text-base"
                  >
                    Voir le projet
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Contactez-moi</h2>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <input
                type="text"
                placeholder="Nom"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm sm:text-base"
            >
              Envoyer Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm sm:text-base text-center sm:text-left">© 2024 Ndeye Khadidiatou Touré. Tous les droits sont réservés.</p>
            <div className="flex gap-4 sm:gap-6">
              <a href="#" className="hover:text-gray-300 text-sm sm:text-base">Twitter</a>
              <a href="#" className="hover:text-gray-300 text-sm sm:text-base">LinkedIn</a>
              <a href="#" className="hover:text-gray-300 text-sm sm:text-base">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
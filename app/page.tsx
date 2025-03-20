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
    { name: "FireBase", icon: <Database className="w-8 h-8" /> }
  ];

  const projects = [
    { 
      id: 1, 
      title: "Projet 1", 
      description: "Projet de restaurant crée avec HTML et CSS.", 
      link: "https://restosama.netlify.app",
      image: "resto1.jpeg"
    },
    { 
      id: 2, 
      title: "Projet 2", 
      description: "Site E-commerce crée à partir de HTML et CSS.", 
      link: "https://boutique001.netlify.app",
      image: "ecom.webp"
    },
    { 
      id: 3, 
      title: "Projet 3", 
      description: "Portofolio fait à partir de Type Script, Vite et la Librairie de Material UI.", 
      link: "https://typeporto.netlify.app",
      image: "porto1.jpeg"
    },
    { 
      id: 4, 
      title: "Projet 4", 
      description: "Site E-commerce crée à partir de HTML et CSS.", 
      link: "https://clonejiji.netlify.app",
      image: "ecom1.webp"
    },
    { 
      id: 5, 
      title: "Projet 5", 
      description: "Projet de restauration fait à partir de React JS.", 
      link: "https://bellecuisine.netlify.app",
      image: "resto2.jpeg"
    },
    { 
      id: 6, 
      title: "Projet 6", 
      description: "Plateform professionnel.", 
      link: "https://materiallui.netlify.app",
      image: "porto2.webp"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ name, email, message });
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold">Ndeye Khadidiatou Touré</h1>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-600">Accueil</a>
            <a href="#projects" className="hover:text-gray-600">Projets</a>
            <a href="#contact" className="hover:text-gray-600">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('img.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            backgroundBlendMode: "overlay"
          }}
        />
        <div className="z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">Mon Portfolio</h1>
          <p className="text-xl">Découvrez mes projets</p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Mes compétences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:shadow-lg"
              >
                <div className="flex justify-center mb-4">{skill.icon}</div>
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Mes projets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`Image de ${project.title}`}
                    className="w-full h-full object-cover transition-transform transform hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-500 hover:text-blue-700 hover:underline"
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
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Contacter moi</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Nom"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            >
              Envoyer Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <p>© 2024 Ndeye Khadidiatou Touré. Tous les droits sont réservés.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-300">Twitter</a>
              <a href="#" className="hover:text-gray-300">LinkedIn</a>
              <a href="#" className="hover:text-gray-300">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
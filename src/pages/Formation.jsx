import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import './styles/Formation.css';

const FormationPage = () => {
  useEffect(() => {
    // Add subtle animation to formation items on page load
    anime({
      targets: '.formation-item',
      translateX: [50, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1000,
      delay: anime.stagger(200)
    });

    // Add subtle animation to skill tags
    anime({
      targets: '.skill-tag',
      scale: [0, 1],
      opacity: [0, 1],
      easing: 'easeOutElastic(1, .8)',
      duration: 1000,
      delay: anime.stagger(50)
    });
  }, []);

  const formations = [
    {
      title: "Master 1 en Système d'exploitation et Réseaux",
      date: "2023 - 2024",
      institution: "Université de Yaoundé I, Cameroun",
      description: "J'ai obtenu mon Master 1 avec une mGP de 2.6/4.",
      skills: ["Systèmes d'exploitation", "Réseaux"]
    },
    {
      title: "Licence en Sécurité Informatique",
      date: "2022 - 2023",
      institution: "Université de Yaoundé I, Cameroun",
      description: "J'ai obtenu ma licence avec une MGP de 2.525/4.",
      skills: ["Sécurité Informatique", "Cryptographie", "Gestion de Projet"]
    },
    {
      title: "DEUG en Développement Web",
      date: "2021 - 2022",
      institution: "Université de Yaoundé I, Cameroun",
      description: "J'ai obtenu le DEUG (diplôme du niveau II) avec une MGP de 2.02/4.",
      skills: ["Développement Web", "Frontend", "Backend", "PHP", "JavaScript", "AJAX", "Java", "Python", "Django"]
    },
    {
      title: "Baccalauréat Série C",
      date: "2019",
      institution: "Lycée de Minkama, Cameroun",
      description: "J'ai obtenu mon Baccalauréat avec une note de 13.12 et une mention de A.B.",
      skills: ["Mathématiques", "Physique", "Raisonnement Scientifique"]
    }
  ];

  const professionalFormations = [
    {
      title: "Network Essentials",
      institution: "Cisco Networking Academy",
      description: "Formation en NetWork Essentials.",
      link: "https://www.netacad.com"
    },
    {
      title: "Cybersécurité",
      institution: "Cisco Networking Academy",
      description: "Cours sur la cybersécurité et la sécurité des systèmes.",
      link: "https://www.netacad.com"
    },
    {
      title: "DevOps",
      institution: "Udemy",
      description: "Formation en DevOps (non terminée).",
      link: "https://www.udemy.com"
    },
    {
      title: "Conception des Systèmes Embarqués",
      description: "Formation en cours sur la conception des systèmes embarqués."
    }
  ];

  return (
    <div className="formation-container">
      <main className="flex-grow">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold mb-8">Formation</h1>
            <p>Ci-dessous la liste des formations officielles que j'ai eu à subir de ma vie. Chacune d'elle est sanctionnée par un diplôme verifiable de manière universel par les organes competents. Tout ce parcours a forgé l'homme que je suis aujourd'hui en me permettant de m'affirmer grace à ma passion d'apprendre et mon désir d'aider les autres au maximum.</p>
            <p style={{paddingTop:"2pc", paddingBottom:"4pc"}}> Je suis Serge Noah.</p>
          <h2 style={{marginTop:"6pc"}} className="text-2xl font-bold mb-4 mt-8">Formations Academiques</h2>
          {formations.map((formation, index) => (
            <div className="formation-item" style={{marginBottom:"4pc", padding:"8px"}} key={index}>
              <h2 className="formation-title text-2xl">{formation.title}</h2>
              <p className="formation-date">{formation.date}</p>
              <p className="formation-description">{formation.institution}</p>
              <p className="formation-description">{formation.description}</p>
              <div className="skills-container mt-2">
                {formation.skills.map((skill, skillIndex) => (
                  <span style={{padding:"10px"}} className="skill-tag" key={skillIndex}>{skill}</span>
                ))}
              </div>
            </div>
          ))}

          <h2 style={{marginTop:"6pc"}} className="text-2xl font-bold mb-4 mt-8">Formations Professionnelles</h2>
          
          {professionalFormations.map((formation, index) => (
            <div className="formation-item" key={index}>
              <h2 className="formation-title text-2xl">{formation.title}</h2>
              <p className="formation-description">{formation.institution}</p>
              <p className="formation-description">{formation.description}</p>
              {formation.link && <a href={formation.link} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Voir la formation</a>}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FormationPage;

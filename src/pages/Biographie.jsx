import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import './styles/Biography.css';

const BiographyPage = () => {
  useEffect(() => {
    // Animations for section images
    anime({
      targets: '.section-image',
      translateY: [-20, 0],
      opacity: [0, 1],
      delay: anime.stagger(200),
      duration: 1000,
      easing: 'easeOutQuad',
    });
  }, []);

  const sections = [
    {
      title: "Mon Histoire",
      description: "Né et élevé dans un petit village au Cameroun, j'ai toujours été fasciné par la technologie et son pouvoir de changer des vies. Dès mon plus jeune âge, j'étais déterminé à poursuivre une carrière en informatique, poussé par la curiosité et le désir de faire une différence dans le monde.",
      imageUrl: "https://via.placeholder.com/600",
    },
    {
      title: "Mes Parents",
      description: "Mes parents, tous deux agriculteurs, m'ont inculqué les valeurs de persévérance et de dévouement. Ils ont soutenu mes rêves, même s'ils ne comprenaient pas pleinement le monde de la technologie que je voulais tant explorer. Leur croyance inébranlable en moi a été ma plus grande source de force tout au long de mon parcours.",
      imageUrl: "https://via.placeholder.com/600",
    },
    {
      title: "Mon Village",
      description: "Grandir dans une communauté soudée m'a appris l'importance de la collaboration et du soutien mutuel. Les défis auxquels nous avons été confrontés en tant que village, de l'accès limité à l'éducation aux ressources rares, ont alimenté ma passion pour l'utilisation de la technologie afin de résoudre des problèmes concrets et d'améliorer la vie des gens.",
      imageUrl: "https://via.placeholder.com/600",
    },
    {
      title: "Mes Principes",
      description: "L'intégrité, l'apprentissage continu et le retour à la communauté sont les principes fondamentaux qui guident ma vie personnelle et professionnelle. Je crois au pouvoir du partage des connaissances et je m'efforce de mentorat de jeunes développeurs en herbe chaque fois que possible.",
      imageUrl: "https://via.placeholder.com/600",
    },
    {
      title: "Ma Vision de la Vie",
      description: "Je vois la vie comme une opportunité sans fin de croissance et d'impact positif. Chaque défi est une chance d'apprendre, chaque revers une pierre de touche vers de plus grandes réalisations. Je crois au potentiel de la technologie pour combler les lacunes, connecter les gens et créer un monde plus équitable.",
      imageUrl: "https://via.placeholder.com/600",
    },
    {
      title: "Mes Ambitions",
      description: "Mon objectif ultime est d'utiliser mes compétences en développement full-stack et en administration de systèmes pour créer des solutions innovantes qui répondent à des problèmes urgents en Afrique et au-delà. J'aspire à fonder une entreprise technologique qui repoussera les limites de ce qui est possible tout en offrant des opportunités aux jeunes talents issus de milieux défavorisés.",
      imageUrl: "https://via.placeholder.com/600",
    },
    {
      title: "Derniers Mots",
      description: "Je suis Serge Noah, un développeur full-stack passionné et administrateur de systèmes avec des racines dans le Cameroun rural. Mon parcours, du jeune garçon curieux du village au professionnel de la technologie, a été marqué par la détermination, l'apprentissage continu et un désir profond de faire un impact positif.",
      imageUrl: "https://via.placeholder.com/600",
    },
  ];

  return (
    <div className="biography-container">

      <div className="content-container">
        <h1 className="main-title">Ma Biographie</h1>
        {sections.map((section, index) => (
          <div key={index} className={`section ${index % 2 === 0 ? 'section-even' : 'section-odd'}`}>
            <div className="section-content">
              <div className="section-image" style={{ backgroundImage: `url(${section.imageUrl})`, width: '50%' }}></div>
              <div className="section-text" style={{ width: '50%' }}>
                <h2 className="section-title">{section.title}</h2>
                <p>{section.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BiographyPage;

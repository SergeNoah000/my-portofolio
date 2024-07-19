import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import './styles/Home.css';

const HomePage = () => {
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

    // Animations for buttons
    anime({
      targets: '.section-button',
      translateX: [20, 0],
      opacity: [0, 1],
      delay: anime.stagger(200, { start: 800 }),
      duration: 1000,
      easing: 'easeOutQuad',
    });
  }, []);

  const sections = [
    { title: "Biography", description: "Ma vie, une histoire, un chemin et une Idée", importance: "Vous voulez savoir qui je suis, mon parcourt, tout  ce qui est arrivé d'important et de serieux sur mon chemin, suivez le lien ci-dessous.👇👇", link: "/biography", isAnimated: true },
    { title: "Blog", description: "Read my thoughts, articles, and short stories.", importance: "Explore my ideas and perspectives on various topics.", link: "/blog", isAnimated: false, imageUrl: "https://via.placeholder.com/100" },
    { title: "Formation", description: "Explore my academic and professional education.", importance: "See the foundations of my knowledge and skills.", link: "/formation", isAnimated: true },
    { title: "Projects", description: "View my professional and personal projects.", importance: "Learn about the practical applications of my skills.", link: "/projects", isAnimated: true },
    { title: "CV", description: "My online resume as a Full Stack Developer and System Administrator.", importance: "Get a detailed look at my professional experience and competencies.", link: "/cv", isAnimated: false, imageUrl: "https://via.placeholder.com/100" },
    { title: "Contact", description: "Get in touch with me and find my social media profiles.", importance: "Reach out for collaborations, inquiries, or networking.", link: "/contact", isAnimated: false, imageUrl: "https://via.placeholder.com/100" },
  ];

  return (
    <div className="home-container">
      <div className="cover-photo">
        <h1>NOAH MVONDO Serge Gaetan</h1>
        <h2>Developpeur Full Stack et Concepteur de Systeme d'Exploitation</h2>
      </div>

      <div className="sections">
        {sections.map((section, index) => (
          <Section
            key={index}
            title={section.title}
            description={section.description}
            importance={section.importance}
            link={section.link}
            isAnimated={section.isAnimated}
            imageUrl={section.imageUrl}
            isEven={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
};

const Section = ({ title, description, importance, link, isAnimated, imageUrl, isEven }) => (
  <div className={`section ${isEven ? 'section-even' : 'section-odd'}`}>
    <div className="section-content">
      <div className="section-text">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{importance}</p>
        <button className="section-button" onClick={() => window.location.href = link}>
          GO
        </button>
      </div>
      {isAnimated ? (
        <div className="section-image animated"></div>
      ) : (
        <div className="section-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      )}
    </div>
  </div>
);

export default HomePage;

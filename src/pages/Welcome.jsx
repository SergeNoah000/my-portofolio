import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import './styles/Welcome.css';

const BackgroundAnimation = () => {
  useEffect(() => {
    const background = document.querySelector("#cgth");
    for (let i = 0; i <= 100; i++) {
      const blocks = document.createElement("div");
      blocks.classList.add("block");
      background.appendChild(blocks);
    }

    const animateBlocks = () => {
      anime({
        targets: ".block",
        translateX: () => anime.random(-700, 700),
        translateY: () => anime.random(-500, 500),
        scale: () => anime.random(1, 5),
        easing: "linear",
        duration: 3000,
        delay: anime.stagger(10),
        complete: animateBlocks,
      });
    };

    animateBlocks();
  }, []);

  return (
    <div id="cgth" style={{position:"relative", top:"5rem"}}>
      <div style={{position:"relative", left:"20%", top:"25%", zIndex:"800"}}>
          <span>
            <span>Welcome, I'm </span>
            <h1 style={{paddingTop:"10%"}}>Serge Noah</h1>
        </span>
        <button className="go-button" style={{position:"relative", bottom:"-10%"}} onClick={() => window.location.pathname = '/home'}>
          LET'S GO
        </button>
      </div>
    </div>
  );
};

export default BackgroundAnimation;

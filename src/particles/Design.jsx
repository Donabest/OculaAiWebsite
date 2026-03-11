import { useCallback, useEffect, useState } from "react";
import { loadFull } from "tsparticles";
import Particles, { initParticlesEngine } from "@tsparticles/react";

function Design() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = () => {
    // console.log(container);
  };
  return (
    <div>
      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 -z-10"
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#0B0F19",
              },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },

              links: {
                color: "rgba(255,255,255,0.15)",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.4,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 2, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </div>
  );
}

export default Design;

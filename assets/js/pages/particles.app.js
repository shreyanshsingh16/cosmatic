particlesJS("login-particles", {
  particles: {
    number: { value: 90, density: { enable: !0, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
    },
    opacity: {
      value: 0.8,
      random: !0,
      anim: { enable: !0, speed: 1, opacity_min: 0, sync: !1 },
    },
    size: {
      value: 4,
      random: !0,
      anim: { enable: !1, speed: 4, size_min: 0.2, sync: !1 },
    },
    line_linked: {
      enable: !1,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: !0,
      speed: 2,
      direction: "none",
      random: !1,
      straight: !1,
      out_mode: "out",
      attract: { enable: !1, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: !0, mode: "bubble" },
      onclick: { enable: !0, mode: "repulse" },
      resize: !0,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 4, duration: 2, opacity: 0.8, speed: 3 },
      repulse: { distance: 200 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: !0,
  config_demo: {
    hide_card: !1,
    background_color: "#b61924",
    background_image: "",
    background_position: "50% 50%",
    background_repeat: "no-repeat",
    background_size: "cover",
  },
});

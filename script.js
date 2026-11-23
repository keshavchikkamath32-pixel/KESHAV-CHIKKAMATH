// Keshav Chikkamath portfolio interactions.
// Replace the Instagram profile URLs in the reel cards with individual reel URLs as you add them.
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());

  const menu = document.querySelector(".menu-toggle");
  if (menu) menu.addEventListener("click", () => {
    const nav = document.querySelector(".site-header nav");
    const open = nav.classList.toggle("nav-open");
    menu.setAttribute("aria-expanded", String(open));
  });

  // Custom cursor on pointer devices.
  const cursor = document.querySelector(".cursor-dot");
  if (cursor && matchMedia("(pointer:fine)").matches) {
    document.addEventListener("mousemove", e => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
    document.querySelectorAll("a,button").forEach(el => {
      el.addEventListener("mouseenter", () => cursor.classList.add("cursor-hover"));
      el.addEventListener("mouseleave", () => cursor.classList.remove("cursor-hover"));
    });
  }

  // Tiny interaction sound, generated locally. No background music or external audio.
  let audioContext;
  function clickSound() {
    try {
      audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
      if (audioContext.state === "suspended") audioContext.resume();
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();
      osc.type = "sine"; osc.frequency.setValueAtTime(520, audioContext.currentTime);
      osc.frequency.exponentialRampToValueAtTime(760, audioContext.currentTime + 0.075);
      gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.055, audioContext.currentTime + 0.012);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.11);
      osc.connect(gain); gain.connect(audioContext.destination);
      osc.start(); osc.stop(audioContext.currentTime + 0.12);
    } catch (_) { /* Sound is an enhancement; navigation still works. */ }
  }
  document.querySelectorAll("[data-sound]").forEach(el => el.addEventListener("click", clickSound));

  // Homepage object hotspots.
  document.querySelectorAll(".hotspot[data-href]").forEach(el => {
    el.addEventListener("click", () => { clickSound(); window.location.href = el.dataset.href; });
  });

  // Work laptop folders.
  const projects = {
    green: {
      label: "GREEN PEDDLE / CONTENT MARKETING",
      title: "Building a page from zero.",
      body: "Helped build Green Peddle’s Instagram presence from the ground up through content planning, creative concepts, reels, carousel posts and sustainability-focused messaging. The work introduced the marketplace’s purpose and helped people discover the initiative."
    },
    innovate: {
      label: "INNOVATE CONNECTA / CONTENT MARKETING",
      title: "Making student content click.",
      body: "Worked on student-focused content and event-promotion ideas, including messaging for a Food Technology session. The focus was making the topic relevant and useful to students."
    },
    laksya: {
      label: "LAKSYA 2.0 / EVENT ORGANISER & EVENT MARKETER",
      title: "From outreach to event day.",
      body: "Managed a Pan–North Karnataka event for 10th-standard students end to end. Responsibilities included approaching potential sponsors, communicating the event’s value, supporting sponsorship outreach, planning advertising and promotion, public relations, logistics and execution."
    },
    tedx: {
      label: "TEDx / COLLEGE INVOLVEMENT",
      title: "Pre-marketing team.",
      body: "Part of the TEDx Pre-Marketing Team at college. Additional campaign details, creative assets and exact responsibilities can be added when supplied."
    }
  };
  const panel = document.querySelector("#project-window");
  document.querySelectorAll("[data-project]").forEach(button => button.addEventListener("click", () => {
    clickSound();
    const p = projects[button.dataset.project];
    if (!p || !panel) return;
    panel.innerHTML = `<button class="close-project" aria-label="Close project">×</button><span class="eyebrow">${p.label}</span><h3>${p.title}</h3><p>${p.body}</p><span class="project-footnote">CASE FILE / DETAILS BASED ON CURRENT RESUME</span>`;
    panel.classList.add("project-open");
    panel.querySelector(".close-project").addEventListener("click", () => panel.classList.remove("project-open"));
  }));

  // Gentle reveal on scroll.
  const revealEls = document.querySelectorAll(".door-card,.timeline-item,.evidence-card,.reel-tile,.intro-strip");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("revealed"); observer.unobserve(entry.target); }
    }), {threshold: 0.12});
    revealEls.forEach(el => observer.observe(el));
  } else revealEls.forEach(el => el.classList.add("revealed"));
});

// SLOW, SUBTLE VIDEO MOVEMENT

document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("heroVideo");

  if (!video) return;

  video.playbackRate = 0.8;

  video.addEventListener("loadedmetadata", () => {
    video.playbackRate = 0.8;
  });
});

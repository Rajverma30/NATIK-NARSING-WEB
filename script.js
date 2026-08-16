(() => {
  const CONFIG = {
    whatsappNumber: "917000150604",
    defaultCity: "Your City",
    storageKey: "ne-preferred-service",
    sessionWelcomeKey: "ne-welcome-seen",
  };

  const COPY = {
    nursing: {
      label: "Nursing",
      title: "Home Nursing Care | Naitik Enterprises",
      metaDescription:
        "Book trusted home nursing care with Naitik Enterprises. Trained professionals, reliable coordination, and care at your doorstep.",
      ogDescription:
        "Professional nursing care at home. Book on WhatsApp — trained staff and reliable coordination.",
      ogImage: "./images/brand/logo-full.webp",
      pill: "Trusted home nursing • Coordinated care",
      heroTitle: "Professional Care. Right at Home.",
      heroSubtitle:
        "Trusted nursing support designed around the comfort and needs of your home.",
      heroCta: "Book Nursing Service →",
      waGhost: "WhatsApp Us",
      bookCta: "Book Nursing",
      contactCta: "Book Nursing Support →",
      contactSub:
        "Share your details and required service — we’ll confirm availability and schedule via WhatsApp.",
      servicesTitle: "Services built for recovery — at home",
      servicesSub:
        "A premium catalog of nursing and advanced care services — designed for comfort, safety, and dignity.",
      whyTitle: "Why families choose Naitik Enterprises",
      whySub:
        "We combine trained professionals, modern service coordination, and a patient-first approach.",
      journeyTitle: "Care Journey",
      journeySub: "A clear path from request to ongoing support.",
      aboutSub:
        "Trusted home nursing with compassionate care and responsible service coordination.",
      aboutA:
        'Pramila Gehlot is the founder of <strong>Naitik Enterprises</strong>. Her core focus is on patient-first care, maintaining high standards of hygiene, and ensuring timely coordination. Her vision is to provide compassionate and reliable support, so that families feel confident and at ease throughout the recovery journey of their loved ones.',
      aboutB:
        "From bedside nursing and elder care to physiotherapy and ICU-level support at home — trained caregivers and clear service planning help deliver consistent care.",
      footer:
        "Premium home nursing and advanced care services. Trusted support for recovery, elder care, and critical care at home.",
      statusLive: "Care available",
      statusTitle: "Professional Support",
      statusSub: "Home Nursing",
      statusA: "✓ Trained Staff",
      statusB: "✓ Reliable Service",
      waMessage:
        "Hello Naitik Enterprises! I want to book home nursing care. Please share availability and pricing.",
      fabMessage:
        "Hello Naitik Enterprises! I want to know pricing & availability for home nursing services.",
      heroAlt: "Nursing care at home",
      services: [
        "Bedside Caregiver",
        "Home Nursing Care",
        "Physiotherapy",
        "ICU at Home",
        "Mother & Baby Care",
        "Medical Equipment",
        "Elder Care",
        "Post Surgery Care",
        "Critical Care",
        "Palliative Care",
        "Dementia Care",
        "Home Visit Doctor",
      ],
    },
    housekeeping: {
      label: "Housekeeping",
      title: "Housekeeping Services | Naitik Enterprises",
      metaDescription:
        "Book professional housekeeping with Naitik Enterprises. Trained teams, hygienic cleaning, and reliable home support.",
      ogDescription:
        "Professional housekeeping for homes and offices. Book on WhatsApp — trained staff and hygienic cleaning.",
      ogImage: "./images/brand/logo-full.webp",
      pill: "Professional cleaning • Trained staff",
      heroTitle: "A Cleaner Home. A Better Life.",
      heroSubtitle:
        "Reliable and trained staff to keep your space clean, hygienic, and stress-free.",
      heroCta: "Book Housekeeping →",
      waGhost: "WhatsApp Us",
      bookCta: "Book Housekeeping",
      contactCta: "Book Housekeeping Service →",
      contactSub:
        "Select your service category, choose date and time, and we will coordinate the team.",
      servicesTitle: "Housekeeping Services",
      servicesSub:
        "Choose the type of cleaning you need. We will schedule a trained team for your space.",
      whyTitle: "Why clients choose us",
      whySub: "Cleanliness and reliability with a customer-first approach.",
      journeyTitle: "Clean Journey",
      journeySub: "A simple flow to book housekeeping services.",
      aboutSub: "Clean environments improve comfort, hygiene, and overall wellbeing.",
      aboutA:
        'Pramila Gehlot, the founder of <strong>Naitik Enterprises</strong>, leads housekeeping services with a hygiene-first approach. We follow safe and consistent cleaning practices to keep homes, offices, and healthcare environments clean, fresh, and stress-free.',
      aboutB:
        "You can trust our teams for consistent cleaning, careful sanitization, and proper handling of surfaces and supplies.",
      footer:
        "Professional housekeeping and reliable service coordination for clean, hygienic spaces.",
      statusLive: "Service available",
      statusTitle: "Professional",
      statusSub: "Housekeeping",
      statusA: "✓ Hygienic",
      statusB: "✓ Reliable",
      waMessage:
        "Hello Naitik Enterprises! I want to book housekeeping services. Please share availability and pricing.",
      fabMessage:
        "Hello Naitik Enterprises! I want to know pricing & availability for housekeeping services.",
      heroAlt: "Housekeeping services",
      services: [
        "Residential Housekeeping",
        "Commercial Housekeeping",
        "Deep Cleaning",
        "Hospital/Patient Care Cleaning",
        "Specialized Cleaning",
      ],
    },
  };

  const IMAGES = {
    nursing: {
      hero: {
        avif: [
          ["./images/nursing-hero-640.avif", "640w"],
          ["./images/nursing-hero-960.avif", "960w"],
          ["./images/nursing-hero-1280.avif", "1280w"],
          ["./images/nursing-hero-1600.avif", "1600w"],
        ],
        webp: [
          ["./images/nursing-hero-640.webp", "640w"],
          ["./images/nursing-hero-960.webp", "960w"],
          ["./images/nursing-hero-1280.webp", "1280w"],
          ["./images/nursing-hero-1600.webp", "1600w"],
        ],
        fallback: "./images/nursing-hero-1280.webp",
        placeholder: "./images/nursing-hero-placeholder.webp",
        sizes: "(max-width: 860px) 92vw, 560px",
      },
    },
    housekeeping: {
      hero: {
        avif: [
          ["./images/housekeeping-hero-640.avif", "640w"],
          ["./images/housekeeping-hero-740.avif", "740w"],
        ],
        webp: [
          ["./images/housekeeping-hero-640.webp", "640w"],
          ["./images/housekeeping-hero-740.webp", "740w"],
        ],
        fallback: "./images/housekeeping-hero-740.webp",
        placeholder: "./images/housekeeping-hero-placeholder.webp",
        sizes: "(max-width: 860px) 92vw, 560px",
      },
    },
    founder: {
      avif: [
        ["./images/founder-320.avif", "320w"],
        ["./images/founder-480.avif", "480w"],
        ["./images/founder-640.avif", "640w"],
      ],
      webp: [
        ["./images/founder-320.webp", "320w"],
        ["./images/founder-480.webp", "480w"],
        ["./images/founder-640.webp", "640w"],
      ],
      fallback: "./images/founder-640.webp",
      placeholder: "./images/founder-placeholder.webp",
      sizes: "(max-width: 860px) 92vw, 420px",
    },
  };

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const reduceMotion = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const sanitizePhone = (value) => String(value || "").replace(/[^\d]/g, "");
  const buildWhatsAppUrl = (message) => {
    const base = `https://wa.me/${CONFIG.whatsappNumber}`;
    return `${base}?text=${encodeURIComponent(message.trim())}`;
  };

  const getServiceFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    const q = (params.get("service") || "").toLowerCase();
    if (q === "nursing" || q === "housekeeping") return q;
    const hash = (window.location.hash || "").replace("#", "").toLowerCase();
    if (hash === "nursing" || hash === "housekeeping") return hash;
    const path = window.location.pathname.toLowerCase();
    if (path.includes("housekeeping")) return "housekeeping";
    if (path.includes("nursing")) return "nursing";
    return null;
  };

  let currentService = "nursing";
  let transitioning = false;

  const setText = (sel, value) => {
    const el = $(sel);
    if (el) el.textContent = value;
  };
  const setHtml = (sel, value) => {
    const el = $(sel);
    if (el) el.innerHTML = value;
  };

  const syncPanels = (service) => {
    $$("[data-service-panel]").forEach((el) => {
      const match = el.getAttribute("data-service-panel") === service;
      el.hidden = !match;
    });
  };

  const syncSwitch = (service) => {
    $$("[data-set-service]").forEach((btn) => {
      const active = btn.getAttribute("data-set-service") === service;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-checked", String(active));
    });
  };

  const fillBookingOptions = (service) => {
    const select = $("#bookingService");
    if (!select) return;
    const options = COPY[service].services;
    select.innerHTML =
      '<option value="" selected disabled>Choose a service</option>' +
      options.map((o) => `<option>${o}</option>`).join("");
  };

  const setWhatsAppLinks = (service) => {
    const msg = COPY[service].waMessage;
    $$("[data-whatsapp-link]").forEach((a) => {
      a.setAttribute("href", buildWhatsAppUrl(msg));
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener");
    });
    const ghost = $$(".hero__actions [data-whatsapp-link]")[0];
    if (ghost) ghost.textContent = COPY[service].waGhost;
  };

  const setPhoneText = () => {
    const pretty = `+${CONFIG.whatsappNumber.slice(0, 2)} ${CONFIG.whatsappNumber.slice(
      2,
      7
    )} ${CONFIG.whatsappNumber.slice(7)}`;
    $$("[data-phone]").forEach((el) => (el.textContent = pretty));
  };

  const srcset = (pairs) => pairs.map(([u, w]) => `${u} ${w}`).join(", ");

  const loadResponsiveImage = (img, pack, { eager = false, alt = "" } = {}) => {
    if (!img || !pack) return;
    img.classList.add("is-loading");
    img.classList.remove("is-loaded");
    if (alt) img.alt = alt;

    const parent = img.parentElement;
    if (parent) {
      parent.style.setProperty(
        img.id === "founderImage" ? "--founder-placeholder" : "--hero-placeholder",
        `url("${pack.placeholder}")`
      );
    }

    const apply = () => {
      const useAvif = window.__neAvif === true && pack.avif;
      const list = useAvif ? pack.avif : pack.webp;
      img.srcset = srcset(list);
      img.sizes = pack.sizes;
      img.src = pack.fallback;
      img.loading = eager ? "eager" : "lazy";
      img.decoding = "async";
      if (eager) img.fetchPriority = "high";

      const done = () => {
        img.classList.remove("is-loading");
        img.classList.add("is-loaded");
      };
      if (img.complete && img.naturalWidth) done();
      else img.addEventListener("load", done, { once: true });
      img.addEventListener(
        "error",
        () => {
          img.removeAttribute("srcset");
          img.src = pack.fallback;
          done();
        },
        { once: true }
      );
    };

    // Defer non-eager loads slightly so nursing/housekeeping don't fight
    if (eager) apply();
    else requestAnimationFrame(apply);
  };

  const preloadServiceHero = (service) => {
    const pack = IMAGES[service]?.hero;
    if (!pack) return;
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = pack.fallback;
    link.imagesrcset = srcset(pack.webp);
    link.imagesizes = pack.sizes;
    document.head.appendChild(link);
  };

  const applyCopy = (service) => {
    const c = COPY[service];
    document.title = c.title;
    setText("[data-service-label]", c.label);
    setText("[data-hero-pill-text]", c.pill);
    setText("[data-hero-title]", c.heroTitle);
    setText("[data-hero-subtitle]", c.heroSubtitle);
    setText("[data-hero-cta]", c.heroCta);
    setText("[data-book-cta]", c.bookCta);
    setText("[data-contact-cta]", c.contactCta);
    setText("[data-contact-sub]", c.contactSub);
    setText("[data-services-title]", c.servicesTitle);
    setText("[data-services-sub]", c.servicesSub);
    setText("[data-why-title]", c.whyTitle);
    setText("[data-why-sub]", c.whySub);
    setText("[data-journey-title]", c.journeyTitle);
    setText("[data-journey-sub]", c.journeySub);
    setText("[data-about-sub]", c.aboutSub);
    setHtml("[data-about-a]", c.aboutA);
    setText("[data-about-b]", c.aboutB);
    setText("[data-footer-text]", c.footer);
    setText("[data-status-live]", c.statusLive);
    setText("[data-status-title]", c.statusTitle);
    setText("[data-status-sub]", c.statusSub);
    setText("[data-status-a]", c.statusA);
    setText("[data-status-b]", c.statusB);
    fillBookingOptions(service);
    setWhatsAppLinks(service);

    // Meta Ads / social message-match
    const abs = (path) => {
      try {
        return new URL(path, window.location.href).href;
      } catch (_) {
        return path;
      }
    };
    const setAttr = (id, attr, value) => {
      const el = document.getElementById(id);
      if (el) el.setAttribute(attr, value);
    };
    setAttr("metaDescription", "content", c.metaDescription);
    setAttr("ogTitle", "content", c.title);
    setAttr("ogDescription", "content", c.ogDescription);
    setAttr("ogImage", "content", abs(c.ogImage));
    setAttr("twTitle", "content", c.title);
    setAttr("twDescription", "content", c.ogDescription);
    setAttr("canonicalLink", "href", abs(`/?service=${service}`));
  };

  const buildModePath = (toHousekeeping) => {
    // ECG-like then smooth trail
    if (toHousekeeping) {
      return "M0 60 H180 L210 60 L235 18 L260 102 L285 60 H520 C620 60 680 40 760 50 C880 65 980 35 1200 55";
    }
    return "M0 55 C120 40 220 70 340 55 C460 40 540 60 620 60 H780 L805 60 L830 18 L855 102 L880 60 H1200";
  };

  const playTransition = (from, to) =>
    new Promise((resolve) => {
      if (reduceMotion()) {
        resolve();
        return;
      }
      const fx = $("#modeFx");
      const path = $("#modeFxPath");
      const sparks = $("#modeFxSparks");
      if (!fx || !path || !sparks) {
        resolve();
        return;
      }

      const toHk = to === "housekeeping";
      path.setAttribute("d", buildModePath(toHk));
      sparks.innerHTML = "";
      fx.classList.remove("is-sparkle");
      fx.classList.add("is-on");

      // mid-transition morph
      window.setTimeout(() => {
        if (toHk) {
          fx.classList.add("is-sparkle");
          for (let i = 0; i < 28; i++) {
            const s = document.createElement("span");
            s.className = "modeFx__spark";
            s.style.left = `${8 + Math.random() * 84}%`;
            s.style.top = `${28 + Math.random() * 40}%`;
            s.style.setProperty("--sx", `${(Math.random() - 0.5) * 160}px`);
            s.style.setProperty("--sy", `${-30 - Math.random() * 90}px`);
            s.style.animationDelay = `${Math.random() * 0.28}s`;
            sparks.appendChild(s);
          }
        } else {
          fx.classList.remove("is-sparkle");
          for (let i = 0; i < 10; i++) {
            const s = document.createElement("span");
            s.className = "modeFx__spark";
            s.style.left = `${10 + Math.random() * 80}%`;
            s.style.top = `${40 + Math.random() * 20}%`;
            s.style.setProperty("--sx", `${(Math.random() - 0.5) * 40}px`);
            s.style.setProperty("--sy", `${(Math.random() - 0.5) * 40}px`);
            s.style.background = "var(--secondary)";
            s.style.animationDelay = `${Math.random() * 0.2}s`;
            sparks.appendChild(s);
          }
        }
      }, 220);

      window.setTimeout(() => {
        fx.classList.remove("is-on", "is-sparkle");
        sparks.innerHTML = "";
        resolve();
      }, 780);
    });

  const nursingVideo = (() => {
    let started = false;
    let soundOn = false;
    let soundBound = false;
    let visibilityBound = false;
    let cineVisible = false;

    const els = () => ({
      soundBtns: $$(".nursingVideo__sound"),
      cine: $("#cineStoryVideo"),
      shell: $("#cineStoryShell"),
      story: $("#cineStory"),
    });

    const syncSoundUi = () => {
      els().soundBtns.forEach((soundBtn) => {
        soundBtn.classList.toggle("is-on", soundOn);
        soundBtn.setAttribute("aria-pressed", String(soundOn));
        soundBtn.setAttribute("aria-label", soundOn ? "Mute video" : "Unmute video");
        const offIcon = soundBtn.querySelector(".nursingVideo__soundIcon--off");
        const onIcon = soundBtn.querySelector(".nursingVideo__soundIcon--on");
        if (offIcon) offIcon.hidden = soundOn;
        if (onIcon) onIcon.hidden = !soundOn;
      });
    };

    const applyMuteState = () => {
      const { cine } = els();
      if (cine) {
        cine.muted = !soundOn;
        cine.volume = 1;
      }
      syncSoundUi();
    };

    const tryPlay = async (video) => {
      if (!video) return false;
      if (document.body.getAttribute("data-service") !== "nursing") return false;
      try {
        video.muted = !soundOn;
        await video.play();
        return true;
      } catch (_) {
        try {
          video.muted = true;
          soundOn = false;
          syncSoundUi();
          await video.play();
          return true;
        } catch (__) {
          return false;
        }
      }
    };

    const pauseAll = () => {
      const { cine } = els();
      if (cine && !cine.paused) cine.pause();
    };

    const syncPlaybackToVisibility = () => {
      if (!started || document.body.getAttribute("data-service") !== "nursing") {
        pauseAll();
        return;
      }
      const { cine } = els();
      if (cineVisible && cine) {
        if (cine.paused) tryPlay(cine);
      } else {
        pauseAll();
      }
    };

    const bindSound = () => {
      if (soundBound) return;
      const { soundBtns, cine } = els();
      if (!soundBtns.length) return;
      soundBound = true;

      soundBtns.forEach((soundBtn) => {
        soundBtn.addEventListener("click", async (e) => {
          e.preventDefault();
          e.stopPropagation();
          soundOn = !soundOn;
          applyMuteState();
          if (cine) {
            try {
              cine.muted = !soundOn;
              if (cine.paused) await cine.play();
            } catch (_) {
              soundOn = false;
              applyMuteState();
            }
          }
        });
      });
      syncSoundUi();
    };

    const bindVisibilityPause = () => {
      if (visibilityBound) return;
      const { cine, shell, story } = els();
      if (!cine) return;
      visibilityBound = true;

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.target === shell || entry.target === story || entry.target === cine) {
              cineVisible = entry.isIntersecting && entry.intersectionRatio >= 0.25;
            }
          });
          syncPlaybackToVisibility();
        },
        { threshold: [0, 0.25, 0.35, 0.5, 0.75] }
      );

      if (shell) io.observe(shell);
      else if (story) io.observe(story);
      else io.observe(cine);

      document.addEventListener("visibilitychange", () => {
        if (document.hidden) pauseAll();
        else syncPlaybackToVisibility();
      });
    };

    const prepareCine = () => {
      const { cine } = els();
      if (!cine) return;
      bindSound();
      bindVisibilityPause();
      if (cine.preload !== "metadata") cine.preload = "metadata";
      soundOn = false;
      applyMuteState();
      syncPlaybackToVisibility();
    };

    const bindCineScroll = () => {
      const { story, shell } = els();
      if (!story || !shell) return;
      if (reduceMotion()) return;
      if (window.matchMedia("(max-width: 980px)").matches) return;

      const steps = $$("[data-cine-step]", story);
      let ticking = false;

      const update = () => {
        ticking = false;
        if (document.body.getAttribute("data-service") !== "nursing") return;
        if (story.hidden) return;
        const rect = story.getBoundingClientRect();
        const total = story.offsetHeight - window.innerHeight;
        const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
        const p = scrolled / Math.max(total, 1);
        const scale = 1 + p * 0.12;
        shell.style.setProperty("--cine-scale", String(scale));
        const maxW = Math.min(720, window.innerWidth - 72);
        const baseW = Math.min(520, window.innerWidth - 96);
        shell.style.width = `${baseW + p * (maxW - baseW)}px`;

        const idx = Math.min(steps.length - 1, Math.floor(p * steps.length));
        steps.forEach((el, i) => el.classList.toggle("is-active", i === idx));

        syncPlaybackToVisibility();
      };

      window.addEventListener(
        "scroll",
        () => {
          if (ticking) return;
          ticking = true;
          requestAnimationFrame(update);
        },
        { passive: true }
      );
    };

    const start = () => {
      if (document.body.classList.contains("is-gated")) return;
      started = true;
      prepareCine();
    };

    const hardStop = () => {
      const { cine } = els();
      soundOn = false;
      applyMuteState();
      if (cine) {
        cine.pause();
        try {
          cine.load();
        } catch (_) {}
      }
      started = false;
      cineVisible = false;
    };

    return { start, stop: hardStop, bindCineScroll };
  })();

  const applyService = async (service, { animate = false, persist = true } = {}) => {
    if (service !== "nursing" && service !== "housekeeping") return;
    if (transitioning) return;
    if (service === currentService && animate) return;

    transitioning = true;
    const prev = currentService;

    if (animate && prev !== service) {
      await playTransition(prev, service);
    }

    currentService = service;
    document.body.setAttribute("data-service", service);
    syncSwitch(service);
    syncPanels(service);
    applyCopy(service);

    if (service === "housekeeping") {
      nursingVideo.stop();
      loadResponsiveImage($("#heroImage"), IMAGES.housekeeping.hero, {
        eager: true,
        alt: COPY.housekeeping.heroAlt,
      });
    } else {
      nursingVideo.start();
      if ("requestIdleCallback" in window) {
        requestIdleCallback(() => preloadServiceHero("housekeeping"), { timeout: 2500 });
      }
    }

    // Journey animation reset
    $$(".journey").forEach((j) => {
      j.classList.remove("is-active", "is-complete");
      if (!j.hidden) {
        requestAnimationFrame(() => j.classList.add("is-active"));
        window.setTimeout(() => j.classList.add("is-complete"), 1800);
      }
    });

    if (persist) {
      try {
        localStorage.setItem(CONFIG.storageKey, service);
      } catch (_) {}
    }

    transitioning = false;
  };

  const welcomeFlow = () => {
    const modal = $("#welcomeModal");
    if (!modal) return;

    const urlService = getServiceFromUrl();
    const params = new URLSearchParams(window.location.search);
    const fromAds =
      params.has("utm_source") ||
      params.has("utm_campaign") ||
      params.get("ads") === "1" ||
      params.get("fbclid") != null ||
      params.get("gclid") != null;
    const skipWelcome = params.get("welcome") === "0";

    let stored = null;
    try {
      stored = localStorage.getItem(CONFIG.storageKey);
      localStorage.removeItem("ne-has-chosen-service");
      sessionStorage.removeItem(CONFIG.sessionWelcomeKey);
    } catch (_) {}

    const closeWelcome = async (service) => {
      const card = $(`[data-welcome-service="${service}"]`);
      if (card) card.classList.add("is-selected");
      modal.classList.add("is-leaving");
      await applyService(service, { animate: true, persist: true });
      // Drop ?service= so organic reloads still show the welcome gate
      try {
        const url = new URL(window.location.href);
        url.searchParams.delete("service");
        url.searchParams.delete("welcome");
        const clean = url.pathname.replace(/index\.html$/i, "/").replace(/\.html$/i, "");
        window.history.replaceState({}, "", clean + url.search + url.hash);
      } catch (_) {}
      window.setTimeout(() => {
        modal.hidden = true;
        document.body.classList.remove("is-gated");
        modal.classList.remove("is-leaving");
        if (service === "nursing") nursingVideo.start();
      }, reduceMotion() ? 0 : 520);
    };

    // Meta Ads / dedicated deep-links only — skip popup for message match
    if (fromAds || skipWelcome) {
      modal.hidden = true;
      document.body.classList.remove("is-gated");
      applyService(urlService || stored || "nursing", { animate: false, persist: true });
      return;
    }

    // Always show welcome on organic opens / reloads
    modal.hidden = false;
    document.body.classList.add("is-gated");
    applyService(stored === "housekeeping" ? "housekeeping" : "nursing", {
      animate: false,
      persist: false,
    });

    $$("[data-welcome-service]").forEach((btn) => {
      btn.addEventListener("click", () => {
        closeWelcome(btn.getAttribute("data-welcome-service"));
      });
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !modal.hidden) {
        closeWelcome(stored || "nursing");
      }
    });
  };

  const serviceSwitch = () => {
    const group = $("#serviceSwitch");
    if (!group) return;

    $$("[data-set-service]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const service = btn.getAttribute("data-set-service");
        applyService(service, { animate: true, persist: true });
      });
    });

    group.addEventListener("keydown", (e) => {
      const keys = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"];
      if (!keys.includes(e.key)) return;
      e.preventDefault();
      const next =
        e.key === "Home"
          ? "nursing"
          : e.key === "End"
            ? "housekeeping"
            : currentService === "nursing"
              ? "housekeeping"
              : "nursing";
      applyService(next, { animate: true, persist: true });
      const focusBtn = $(`[data-set-service="${next}"]`);
      focusBtn?.focus();
    });
  };

  const navBehavior = () => {
    const nav = $(".nav");
    const toggle = $(".nav__toggle");
    const menu = $("#navMenu");
    if (!nav || !toggle || !menu) return;

    const closeMenu = () => {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
      document.body.style.overflow = document.body.classList.contains("is-gated")
        ? "hidden"
        : "";
    };

    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      if (!document.body.classList.contains("is-gated")) {
        document.body.style.overflow = open ? "hidden" : "";
      }
    });

    $$(".nav__link", menu).forEach((link) => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });

    const onScroll = () => {
      nav.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  };

  const revealOnScroll = () => {
    const items = $$(".reveal");
    if (!items.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((el) => io.observe(el));
  };

  const journeyObserver = () => {
    const journeys = $$(".journey");
    if (!journeys.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting || e.target.hidden) return;
          e.target.classList.add("is-active");
          window.setTimeout(() => e.target.classList.add("is-complete"), 1600);
        });
      },
      { threshold: 0.35 }
    );
    journeys.forEach((j) => io.observe(j));
  };

  const bookingForm = () => {
    const form = $("#bookingForm");
    const check = $("#termsAgreeCheck");
    const submit = $("#bookingSubmit");
    const err = $("#termsAgreeError");
    const modal = $("#termsModal");
    const openBtn = $("#openTermsModal");
    const acceptBtn = $("#termsAcceptBtn");
    if (!form || !check || !submit) return;

    const syncSubmit = () => {
      const ok = check.checked;
      submit.disabled = !ok;
      submit.setAttribute("aria-disabled", String(!ok));
      if (ok && err) err.hidden = true;
    };

    const openTerms = () => {
      if (!modal) return;
      modal.hidden = false;
      document.body.style.overflow = "hidden";
      acceptBtn?.focus();
    };

    const closeTerms = () => {
      if (!modal) return;
      modal.hidden = true;
      if (!document.body.classList.contains("is-gated")) {
        document.body.style.overflow = "";
      }
    };

    check.addEventListener("change", syncSubmit);
    syncSubmit();

    openBtn?.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      openTerms();
    });

    acceptBtn?.addEventListener("click", () => {
      check.checked = true;
      syncSubmit();
      closeTerms();
      check.focus();
    });

    modal?.querySelectorAll("[data-terms-close]").forEach((el) => {
      el.addEventListener("click", closeTerms);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal && !modal.hidden) closeTerms();
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!check.checked) {
        if (err) err.hidden = false;
        check.focus();
        return;
      }
      if (err) err.hidden = true;

      const fd = new FormData(form);
      const message = [
        "Hello Naitik Enterprises!",
        `I want to book a ${COPY[currentService].label.toLowerCase()} service.`,
        "",
        `Name: ${String(fd.get("name") || "").trim()}`,
        `Phone: ${sanitizePhone(fd.get("phone"))}`,
        `Service: ${String(fd.get("service") || "").trim()}`,
        `Preferred Date: ${String(fd.get("date") || "").trim()}`,
        `Preferred Time: ${String(fd.get("time") || "").trim()}`,
        `City/Area: ${CONFIG.defaultCity}`,
        "",
        "I agree to the Naitik Enterprises Terms & Policy.",
      ].join("\n");
      window.open(buildWhatsAppUrl(message), "_blank", "noopener");
    });
  };

  const careerForm = () => {
    const form = $("#careerForm");
    const alert = $("#careerAlert");
    if (!form || !alert) return;

    const show = (msg, variant = "success") => {
      alert.classList.remove("is-error", "is-show");
      alert.textContent = msg;
      if (variant === "error") alert.classList.add("is-error");
      alert.classList.add("is-show");
    };

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const name = String(fd.get("name") || "").trim();
      const phone = sanitizePhone(fd.get("phone"));
      const qualification = String(fd.get("qualification") || "").trim();
      const experience = Number(fd.get("experience") || "0");
      const address = String(fd.get("address") || "").trim();

      if (name.length < 2) return show("Please enter your full name.", "error");
      if (phone.length < 10) return show("Please enter a valid phone number.", "error");
      if (qualification.length < 2) return show("Please enter your qualification.", "error");
      if (!Number.isFinite(experience) || experience < 0)
        return show("Please enter valid experience.", "error");
      if (address.length < 6) return show("Please enter your full address.", "error");

      const message = [
        "Hello Naitik Enterprises!",
        "Nurse application details:",
        "",
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Qualification: ${qualification}`,
        `Experience (years): ${String(fd.get("experience") || "").trim()}`,
        `Address: ${address}`,
      ].join("\n");

      window.open(buildWhatsAppUrl(message), "_blank", "noopener");
      show("Application details sent to WhatsApp.", "success");
      form.reset();
      setTimeout(() => alert.classList.remove("is-show"), 4500);
    });
  };

  const fab = () => {
    const btn = $("#fabWhatsapp");
    if (!btn) return;
    btn.addEventListener("click", () => {
      window.open(buildWhatsAppUrl(COPY[currentService].fabMessage), "_blank", "noopener");
    });
  };

  const heroParticles = () => {
    const root = $("#heroParticles");
    const hero = $(".hero");
    if (!root || reduceMotion()) return;
    root.innerHTML = "";
    const count = window.matchMedia("(max-width: 860px)").matches ? 8 : 28;
    for (let i = 0; i < count; i++) {
      const p = document.createElement("span");
      p.className = "hero__particle";
      p.style.left = `${Math.random() * 100}%`;
      p.style.top = `${Math.random() * 100}%`;
      p.style.animationDelay = `${Math.random() * 4}s`;
      p.style.animationDuration = `${3.5 + Math.random() * 4}s`;
      p.style.width = `${4 + Math.random() * 5}px`;
      p.style.height = p.style.width;
      root.appendChild(p);
    }

    if (hero) {
      const io = new IntersectionObserver(
        ([entry]) => {
          hero.classList.toggle("is-offscreen", !entry.isIntersecting);
        },
        { threshold: 0.05 }
      );
      io.observe(hero);
    }
  };

  const year = () => {
    const el = $("#year");
    if (el) el.textContent = String(new Date().getFullYear());
  };

  const loadFounder = () => {
    loadResponsiveImage($("#founderImage"), IMAGES.founder, {
      eager: false,
      alt: "Founder Pramila Gehlot",
    });
  };

  const detectAvif = () =>
    new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(img.width === 1);
      img.onerror = () => resolve(false);
      img.src =
        "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=";
    });

  const init = async () => {
    window.__neAvif = await detectAvif();
    year();
    setPhoneText();
    navBehavior();
    serviceSwitch();
    revealOnScroll();
    journeyObserver();
    bookingForm();
    careerForm();
    fab();
    heroParticles();
    loadFounder();
    nursingVideo.bindCineScroll();
    welcomeFlow();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

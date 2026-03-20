(() => {
  const CONFIG = {
    whatsappNumber: "9170001 50604", // TODO: Replace with your WhatsApp number (countrycode + number, no + or spaces)
    defaultCity: "Your City",
  };

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const sanitizePhone = (value) => String(value || "").replace(/[^\d]/g, "");

  const buildWhatsAppUrl = (message) => {
    const base = `https://wa.me/${CONFIG.whatsappNumber}`;
    const text = encodeURIComponent(message.trim());
    return `${base}?text=${text}`;
  };

  const setWhatsAppLinks = () => {
    const msg =
      "Hello Naitik Enterprises! I want to book home nursing care. Please share availability and pricing.";
    $$("[data-whatsapp-link]").forEach((a) => {
      a.setAttribute("href", buildWhatsAppUrl(msg));
      a.setAttribute("target", "_blank");
    });
  };

  const setPhoneText = () => {
    const pretty = `+${CONFIG.whatsappNumber.slice(0, 2)} ${CONFIG.whatsappNumber.slice(
      2,
      7
    )} ${CONFIG.whatsappNumber.slice(7)}`;
    $$("[data-phone]").forEach((el) => (el.textContent = pretty));
  };

  const year = () => {
    const y = new Date().getFullYear();
    const el = $("#year");
    if (el) el.textContent = String(y);
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
      document.body.style.overflow = "";
    };

    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      document.body.style.overflow = open ? "hidden" : "";
    });

    // close on link click
    $$(".nav__link", menu).forEach((link) => link.addEventListener("click", closeMenu));

    // close on ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });

    // sticky shadow + color change on scroll
    const onScroll = () => {
      const scrolled = window.scrollY > 8;
      nav.classList.toggle("is-scrolled", scrolled);
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

  const counters = () => {
    const els = $$(".counter");
    if (!els.length) return;

    const animate = (el) => {
      const target = Number(el.getAttribute("data-count") || "0");
      const duration = 1100;
      const start = performance.now();
      const initial = 0;

      const tick = (t) => {
        const p = Math.min(1, (t - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        const value = Math.round(initial + (target - initial) * eased);
        el.textContent = String(value);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target;
            if (el.getAttribute("data-animated") === "true") return;
            el.setAttribute("data-animated", "true");
            animate(el);
          }
        });
      },
      { threshold: 0.4 }
    );

    els.forEach((el) => io.observe(el));
  };

  const bookingForm = () => {
    const form = $("#bookingForm");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const name = String(fd.get("name") || "").trim();
      const phone = sanitizePhone(fd.get("phone"));
      const service = String(fd.get("service") || "").trim();

      const message = [
        "Hello Naitik Enterprises!",
        "I want to book a service.",
        "",
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Service: ${service}`,
        `City/Area: ${CONFIG.defaultCity}`,
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

    const validate = (fd) => {
      const name = String(fd.get("name") || "").trim();
      const phone = sanitizePhone(fd.get("phone"));
      const qualification = String(fd.get("qualification") || "").trim();
      const experience = Number(fd.get("experience") || "0");
      const address = String(fd.get("address") || "").trim();
      const files = fd.getAll("documents").filter((f) => f && typeof f === "object" && f.name);

      if (name.length < 2) return "Please enter your full name.";
      if (phone.length < 10) return "Please enter a valid phone number.";
      if (qualification.length < 2) return "Please enter your qualification.";
      if (!Number.isFinite(experience) || experience < 0) return "Please enter valid experience.";
      if (address.length < 6) return "Please enter your full address.";
      if (!files.length) return "Please upload at least one document.";
      if (files.length > 5) return "Please upload a maximum of 5 files.";

      const allowed = ["application/pdf", "image/png", "image/jpeg"];
      for (const f of files) {
        if (!allowed.includes(f.type)) return "Only PDF, JPG, or PNG documents are allowed.";
        if (f.size > 6 * 1024 * 1024) return "Each file must be under 6MB.";
      }
      return null;
    };

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const err = validate(fd);
      if (err) {
        show(err, "error");
        return;
      }

      show("Application submitted successfully! Our team will contact you soon.", "success");
      form.reset();
      setTimeout(() => alert.classList.remove("is-show"), 4500);
    });
  };

  const fab = () => {
    const btn = $("#fabWhatsapp");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const msg =
        "Hello Naitik Enterprises! I want to know pricing & availability for home nursing services.";
      window.open(buildWhatsAppUrl(msg), "_blank", "noopener");
    });
  };

  // Lazy loading hint for older browsers (native loading="lazy" handles modern ones)
  const lazyFallback = () => {
    const imgs = $$("img[loading='lazy']");
    if (!imgs.length) return;
    if ("loading" in HTMLImageElement.prototype) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const img = e.target;
          const dataSrc = img.getAttribute("data-src");
          if (dataSrc) img.src = dataSrc;
          io.unobserve(img);
        });
      },
      { rootMargin: "200px 0px" }
    );
    imgs.forEach((img) => io.observe(img));
  };

  const init = () => {
    setWhatsAppLinks();
    setPhoneText();
    year();
    navBehavior();
    revealOnScroll();
    counters();
    bookingForm();
    careerForm();
    fab();
    lazyFallback();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();


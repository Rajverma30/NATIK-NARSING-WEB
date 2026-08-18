(() => {
  const CONFIG = {
    whatsappNumber: "917000150604",
    defaultCity: "Your City",
  };

  const COPY = {
    nursing: {
      label: "Nursing",
      title: "Book Nursing Care",
      subtitle:
        "Share your care requirement and preferred timing. We will coordinate quickly on WhatsApp with the right support options.",
      options: [
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
      chips: ["Trained professionals", "Fast coordination", "Home comfort first"],
      points: [
        "Verified nursing support tailored to the patient's needs.",
        "Simple WhatsApp confirmation with quick response.",
        "Compassionate care planning for families at home.",
      ],
    },
    housekeeping: {
      label: "Housekeeping",
      title: "Book Housekeeping Service",
      subtitle:
        "Choose your cleaning requirement, date, and timing. We will coordinate the right team and confirm everything on WhatsApp.",
      options: [
        "Residential Housekeeping",
        "Commercial Housekeeping",
        "Deep Cleaning",
        "Hospital/Patient Care Cleaning",
        "Specialized Cleaning",
      ],
      chips: ["Hygienic cleaning", "Reliable team", "Flexible scheduling"],
      points: [
        "Professional housekeeping for homes, offices, and care spaces.",
        "Clear booking flow with easy WhatsApp follow-up.",
        "Clean, safe, and detail-focused service coordination.",
      ],
    },
  };

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const service = document.body.getAttribute("data-service") === "housekeeping" ? "housekeeping" : "nursing";
  const current = COPY[service];

  const sanitizePhone = (value) => String(value || "").replace(/[^\d]/g, "");
  const buildWhatsAppUrl = (message) =>
    `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message.trim())}`;

  const fillServiceOptions = () => {
    const select = $("#bookingServicePage");
    if (!select) return;
    select.innerHTML =
      '<option value="" selected disabled>Choose a service</option>' +
      current.options.map((option) => `<option>${option}</option>`).join("");
  };

  const fillStaticCopy = () => {
    document.title = `${current.title} | Naitik Enterprises`;
    const title = $("#bookingPageTitle");
    const sub = $("#bookingPageSubtitle");
    const chips = $("#bookingPageChips");
    const points = $("#bookingPagePoints");

    if (title) title.textContent = current.title;
    if (sub) sub.textContent = current.subtitle;
    if (chips) {
      chips.innerHTML = current.chips
        .map((chip) => `<span class="bookingPage__chip">${chip}</span>`)
        .join("");
    }
    if (points) {
      points.innerHTML = current.points.map((point) => `<li>${point}</li>`).join("");
    }

    $$("[data-booking-service-label]").forEach((el) => {
      el.textContent = current.label;
    });
  };

  const initForm = () => {
    const form = $("#bookingPageForm");
    const check = $("#termsAgreeCheckPage");
    const submit = $("#bookingSubmitPage");
    const err = $("#termsAgreeErrorPage");
    if (!form || !check || !submit) return;

    const syncSubmit = () => {
      const enabled = check.checked;
      submit.disabled = !enabled;
      submit.setAttribute("aria-disabled", String(!enabled));
      if (enabled && err) err.hidden = true;
    };

    check.addEventListener("change", syncSubmit);
    syncSubmit();

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!check.checked) {
        if (err) err.hidden = false;
        check.focus();
        return;
      }

      const fd = new FormData(form);
      const message = [
        "Hello Naitik Enterprises!",
        `I want to book a ${current.label.toLowerCase()} service.`,
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

  const setYear = () => {
    const year = $("#year");
    if (year) year.textContent = String(new Date().getFullYear());
  };

  fillStaticCopy();
  fillServiceOptions();
  initForm();
  setYear();
})();

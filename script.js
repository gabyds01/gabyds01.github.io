// Tailwind Custom Theme & Configuration
// Must be loaded AFTER cdn.tailwindcss.com so `tailwind` global exists
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      colors: {
        sys: {
          bg: "#0d1117" /* GitHub / Linux Dark background */,
          card: "#161b22" /* Subtle container dark */,
          border: "#30363d" /* Clean subtle border */,
          hover: "#21262d",
          green: "#2ea043" /* Terminal success green */,
          cyan: "#38bdf8" /* Tech accent cyan */,
          purple: "#a855f7" /* Infra accent purple */,
          text: "#f0f6fc" /* Primary bright text */,
          muted: "#8b949e" /* Muted text */,
        },
      },
    },
  },
};

// Mobile Menu Toggle
function toggleMobileMenu() {
  const nav = document.getElementById("mobile-nav");
  const icon = document.getElementById("mobile-menu-icon");
  if (nav) {
    nav.classList.toggle("hidden");
    if (icon) {
      icon.classList.toggle("fa-bars");
      icon.classList.toggle("fa-xmark");
    }
  }
}

// Clipboard/Touch Interaction Logic
function copyEmail() {
  const email = "gabyingds01@gmail.com";

  // Modern clipboard API (works on touch and clicks)
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(email);
    showCopyFeedback();
  } else {
    const dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.value = email;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    showCopyFeedback();
  }
}

function showCopyFeedback() {
  const status = document.getElementById("copy-email-status");
  if (status) {
    status.classList.remove("hidden");
    setTimeout(() => {
      status.classList.add("hidden");
    }, 2000);
  }
}

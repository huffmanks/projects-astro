const lightThemeBtns = document.querySelectorAll("[data-theme-light-btn]");
const darkThemeBtns = document.querySelectorAll("[data-theme-dark-btn]");

const mobileNavbar = document.querySelector("#mobile-navbar");
const mobileNavbarToggle = document.querySelector("#mobile-navbar-toggle");
const mobileNavbarOpenSvg = document.querySelector("#mobile-navbar-open-svg");
const mobileNavbarCloseSvg = document.querySelector("#mobile-navbar-close-svg");

const navLinks = document.querySelectorAll("#nav-links a");
const allSections = document.querySelectorAll("section");

const isMobile = window.innerWidth < 768;

document.addEventListener("DOMContentLoaded", () => {
  const initialTheme = localStorage.getItem("portfolio_theme") ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  if (initialTheme === "light") {
    lightThemeBtns.forEach((btn) => {
      btn.classList.add("hidden");
    });
    darkThemeBtns.forEach((btn) => {
      btn.classList.remove("hidden");
    });
  } else {
    lightThemeBtns.forEach((btn) => {
      btn.classList.remove("hidden");
    });
    darkThemeBtns.forEach((btn) => {
      btn.classList.add("hidden");
    });
  }

  lightThemeBtns.forEach((button) => {
    button.addEventListener("click", () => {
      localStorage.setItem("portfolio_theme", "light");
      html.classList.remove("dark");
      html.classList.add("light");

      lightThemeBtns.forEach((btn) => {
        btn.classList.add("hidden");
      });
      darkThemeBtns.forEach((btn) => {
        btn.classList.remove("hidden");
      });
    });
  });

  darkThemeBtns.forEach((button) => {
    button.addEventListener("click", () => {
      localStorage.setItem("portfolio_theme", "dark");
      html.classList.remove("light");
      html.classList.add("dark");

      lightThemeBtns.forEach((btn) => {
        btn.classList.remove("hidden");
      });
      darkThemeBtns.forEach((btn) => {
        btn.classList.add("hidden");
      });
    });
  });

  mobileNavbarToggle.addEventListener("click", () => {
    if (mobileNavbar.classList.contains("hidden")) {
      mobileNavbar.classList.remove("hidden");
      mobileNavbar.classList.add("open");
      mobileNavbarToggle.setAttribute("aria-expanded", true);
      mobileNavbarToggle.classList.add("open");

      mobileNavbarOpenSvg.classList.add("hidden");
      mobileNavbarCloseSvg.classList.remove("hidden");
    } else {
      mobileNavbar.classList.add("hidden");
      mobileNavbar.classList.remove("open");
      mobileNavbarToggle.setAttribute("aria-expanded", false);
      mobileNavbarToggle.classList.remove("open");

      mobileNavbarOpenSvg.classList.remove("hidden");
      mobileNavbarCloseSvg.classList.add("hidden");
    }
  });
});

const linkMap = {};
navLinks.forEach((link) => {
  const href = link.getAttribute("href");
  linkMap[href] = link;
});

function setActiveLink(targetHref) {
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === targetHref);
  });
}

let currentSection = null;
let suppressObserver = false;

const observer = new IntersectionObserver(
  (entries) => {
    if (suppressObserver) return;

    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);

    if (visible.length > 0) {
      const top = visible[0].target;
      const sectionId = top.getAttribute("data-nav-section");

      if (sectionId && sectionId !== currentSection) {
        currentSection = sectionId;
        setActiveLink(sectionId);
      }
    }
  },
  {
    root: null,
    rootMargin: "0px 0px -40% 0px",
    threshold: 0.1,
  }
);

allSections.forEach((section) => observer.observe(section));

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const href = link.getAttribute("href");
    setActiveLink(href);
    suppressObserver = true;
    setTimeout(() => {
      suppressObserver = false;
    }, 800);
  });
});

window.addEventListener("DOMContentLoaded", () => {
  if (location.hash) {
    setActiveLink(location.hash);
  }
});

window.addEventListener("scroll", () => {
  if (suppressObserver) return;

  const scrollBottom = window.innerHeight + window.scrollY;
  const pageHeight = document.body.scrollHeight;

  if (scrollBottom >= pageHeight - 5) {
    const contactSection = document.querySelector('[data-nav-section="#contact"]');
    if (contactSection) {
      setActiveLink("#contact");
      currentSection = "#contact";
    }
  }
});

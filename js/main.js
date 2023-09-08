/*======================= NAVIGATION =======================*/
/*=== NAV SHOW UNDERLINE ===*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=== MOBILE MENU SHOW/HIDDEN ===*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* SHOW */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* HIDE */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=== REMOVE MOBILE MENU ===*/
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav_link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=== NAV HIGHLIGHT ON SCROLL ===*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*====================== EXPERIENCE =======================*/
/*=== TABS ===*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    console.log("TAB", tab);
    const target = document.querySelector(tab.dataset.target);
    console.log("target", target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("experience_active");
    });

    target.classList.add("experience_active");

    tabs.forEach((tab) => {
      tab.classList.remove("experience_active");
    });

    tab.classList.add("experience_active");
  });
});

/*========================= BUTTONS =========================*/
/*=== DARK LIGHT THEME ===*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=== SHOW SCROLL UP ===*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*========================= PORTFOLIO =========================*/
/*=== PORTFOLIO MODAL ===*/
const learnMoreBtns = document.querySelectorAll('.portfolio_button'),
      allModalContainers = document.querySelectorAll('.portfolio_modal'),
      modalCloseBtns = document.querySelectorAll('.portfolio_modal-close');

let modal = function(modalNumber){
  const openModal = allModalContainers[modalNumber];
  openModal.classList.add('active-modal');

  openModal.addEventListener('click', event => {
    const isClickInsideOpenModal = openModal.firstElementChild.contains(event.target);

    if(!isClickInsideOpenModal){
      openModal.classList.remove('active-modal');
    }
  })
}

learnMoreBtns.forEach((button, modalNumber) => {
  button.addEventListener('click', () => {
    modal(modalNumber);
  });
});

modalCloseBtns.forEach((button) => {
  button.addEventListener('click', () => {
    allModalContainers.forEach((modalContainer) => {
      modalContainer.classList.remove('active-modal');
    });
  });
});

/*========================= CONTACT =========================*/
/*=== EMAIL JS ===*/
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  if (contactForm.checkValidity()) {

    // serviceID - templateID - #form - publicKey
    emailjs
      .sendForm(
        "service_3rmf0mq",
        "template_9abixd9",
        "#contact-form",
        "fb8CbjtLjJNU4jK9v"
      )
      .then(
        () => {
          contactMessage.textContent = "✅ Message sent successfully.";

          setTimeout(() => {
            contactMessage.textContent = "";
          }, 5000);

          contactForm.reset();

        },
        () => {
          contactMessage.textContent =
            "❌ Something went wrong. Please try again later.";
        }
      );
  }
};

contactForm.addEventListener("submit", sendEmail);

/*======================= FOOTER =======================*/
/*=== DATE ===*/
const footerDate = document.getElementById("date");
footerDate.innerHTML = new Date().getFullYear();
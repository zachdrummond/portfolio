/*======================= REUSABLE FUNCTIONS =======================*/
//initialize throttleTimer as false
let throttleTimer = false;
const throttle = (callback, time) => {
  //don't run the function while throttle timer is true
  if (throttleTimer) return;

  //first set throttle timer to true so the function doesn't run
  throttleTimer = true;

  setTimeout(() => {
    //call the callback function in the setTimeout and set the throttle timer to false after the indicated time has passed
    callback();
    throttleTimer = false;
  }, time);
};

/*======================= NAVIGATION =======================*/
/*=== ALLOWS USER TO OPEN/CLOSE MOBILE MENU ===*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* OPEN */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("open-mobile-menu");
  });
}

/* CLOSE */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("open-mobile-menu");
  });
}

/*=== REMOVE MOBILE MENU ===*/
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav_link, we remove the open-mobile-menu class
  navMenu.classList.remove("open-mobile-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=== STOP ANIMATIONS ===*/
const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

/*======================= SCROLL EVENTS =======================*/
const handleScrollEvents = () => {
  const nav = document.getElementById("header"),
    sections = document.querySelectorAll("section[id]"),
    elementsToAnimate = document.querySelectorAll(".hide-for-animation"),
    scrollToTop = document.getElementById("scroll-to-top"),
    // Number of pixels document is currently scrolled vertically
    scrollY = window.scrollY;

  // Adds/Removes class based on scroll position
  const changeClassOnScroll = (targetScroll, element, className) => {
    if (scrollY >= targetScroll && !element.classList.contains(className))
      element.classList.add(className);
    else if (scrollY < targetScroll && element.classList.contains(className))
      element.classList.remove(className);
  };

  // Returns true/false if element is visible
  const elementInView = (element, percentageScroll = 100) => {
    // distance from top of element to top of the page
    const distanceToPageTop = element.getBoundingClientRect().top;

    return distanceToPageTop <= window.innerHeight * (percentageScroll / 100);
  };

  // Returns true/false if section is in full view
  const sectionShouldHighlightNav = (section) => {
    // Height of section, including vertical padding and borders
    const sectionHeight = section.offsetHeight;
    // Distance of section's outer border to the top of the page
    const sectionTop = section.offsetTop - 100;

    return scrollY > sectionTop && scrollY <= sectionTop + sectionHeight;
  };

  /*=== ADDS BOX SHADOW TO NAVBAR ON SCROLL ===*/
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  changeClassOnScroll(80, nav, "scroll-header");

  /*=== SHOW SCROLL UP ===*/
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  changeClassOnScroll(550, scrollToTop, "show-scroll");

  sections.forEach((section) => {
    /*=== NAV HIGHLIGHT ON SCROLL ===*/
    if (sectionShouldHighlightNav(section)) {
      const element = document.querySelector(
        ".nav_menu a[href*=" + section.getAttribute("id") + "]"
      );

      element.classList.add("active-link");
    } else {
      const element = document.querySelector(
        ".nav_menu a[href*=" + section.getAttribute("id") + "]"
      );

      element.classList.remove("active-link");
    }
  });

  /*=== NO PREFERENCE ON ANIMATIONS ===*/
  if (!mediaQuery.matches) {
    elementsToAnimate.forEach((element) => {
      /*=== ELEMENT ANIMATION ON SCROLL ===*/
      const percentageScroll = element.getAttribute("data-scroll") ?? 75,
        animation = element.getAttribute("data-animation") ?? "slide-in-left",
        duration = element.getAttribute("data-duration") ?? "1s",
        delay = element.getAttribute("data-delay") ?? "0s";

      if (elementInView(element, percentageScroll)) {
        element.style.visibility = "visible";
        element.style.animation = `${animation} ${duration} cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay} both`;
      }
    });
  }
};

window.addEventListener("scroll", () => throttle(handleScrollEvents, 250));

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

/*========================= PORTFOLIO =========================*/
/*=== PORTFOLIO MODAL ===*/
const learnMoreBtns = document.querySelectorAll(".portfolio_button"),
  allModalContainers = document.querySelectorAll(".portfolio_modal"),
  modalCloseBtns = document.querySelectorAll(".portfolio_modal_close");

let modal = function (modalNumber) {
  const openModal = allModalContainers[modalNumber];
  openModal.classList.add("active-modal");

  openModal.addEventListener("click", (event) => {
    const isClickInsideOpenModal = openModal.firstElementChild.contains(
      event.target
    );

    if (!isClickInsideOpenModal) {
      openModal.classList.remove("active-modal");
    }
  });
};

learnMoreBtns.forEach((button, modalNumber) => {
  button.addEventListener("click", () => {
    modal(modalNumber);
  });
});

modalCloseBtns.forEach((button) => {
  button.addEventListener("click", () => {
    allModalContainers.forEach((modalContainer) => {
      modalContainer.classList.remove("active-modal");
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

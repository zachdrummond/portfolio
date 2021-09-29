const IMAGES = {
  Profiles: {
    Headshot: require("./Profiles/Headshot.jpg").default,
    HeadshotCircle: require("./Profiles/HeadshotCircle.jfif").default,
    GlassesHeadshot: require("./Profiles/GlassesHeadshot.jpg").default,
    GlassesHeadshotCircle: require("./Profiles/GlassesHeadshotCircle.jfif").default,
  },
  Projects: {
    Ciphr: {
      id: "Ciphr",
      name: "Ciphr",
      pitch: "A platform to share and solve coding algorithms.",
      description:
        "Ciphr is a platform to share and solve coding algorithms. It enables developers to connect with each other in order to strengthen their critical thinking abilities and problem solving skills.",
      images: {
        logo: require("./Projects/Ciphr/Ciphr.png").default,
        one: require("./Projects/Ciphr/HomePage.png").default,
        two: require("./Projects/Ciphr/ChallengePage.png").default,
        three: require("./Projects/Ciphr/SolutionPage.png").default,
      },
      alt: "Ciphr Project",
      link: "https://ciphr.dev/",
      gitHub: "https://github.com/zachdrummond/ciphr",
      tech: "React, Node.js, MongoDB, Express",
    },
    EatDaBurger: {
      id: "Eat-da-Burger",
      name: "Eat-da-Burger",
      pitch: "Create and eat a fictional burger.",
      description:
        "Do you dream about tasty burgers? Eat-da-Burger is an app where you can create any fictional burger you desire and eat it online!",
      images: {
        logo: require("./Projects//EatDaBurger/BothBurgers.png").default,
        one: require("./Projects//EatDaBurger/BurgersToEat.png").default,
      },
      alt: "Eat-da-Burger Project",
      link: "https://eat-da-burger-zachdrummond.herokuapp.com/",
      gitHub: "https://github.com/zachdrummond/eat-da-burger",
      tech: "JavaScript, Node.js, MySQL, Express",
    },
    FindYourAdventure: {
      id: "FindYourAdventure",
      name: "Find Your Adventure",
      pitch: "Plan your next visit to a US National Park.",
      description:
        "Find Your Adventure is a website that gives you everything you need to know about a national park site in one place, based on your preferences. We want to help users like you spend your precious time at one of America’s national park site, not online trying to get there.",
      images: {
        logo: require("./Projects/FindYourAdventure/HomePage.png").default,
        one: require("./Projects/FindYourAdventure/ActivitiesPage.png").default,
        two: require("./Projects/FindYourAdventure/ListOfParksPage.png")
          .default,
        three: require("./Projects/FindYourAdventure/ParkPage.png").default,
      },
      alt: "Find Your Adventure Project",
      link: "https://zachdrummond.github.io/Find-Your-Adventure/",
      gitHub: "https://github.com/zachdrummond/Find-Your-Adventure",
      tech: "JavaScript, HTML, CSS, Bootstrap",
    },
    GoogleBooksSearch: {
      id: "GoogleBooksSearch",
      name: "Google Books Search",
      pitch: "Create your own library via Google Books API.",
      description:
        "Google Books Search is an app that uses Google Books API to find and save any book.",
      images: {
        logo: require("./Projects/GoogleBooksSearch/HomePage.png").default,
        one: require("./Projects/GoogleBooksSearch/SavedBooksPage.png").default,
        two: require("./Projects/GoogleBooksSearch/SearchResultsPage.png")
          .default,
      },
      alt: "Google Books Search Project",
      link: "https://google-books-search-zd.herokuapp.com/search",
      gitHub: "https://github.com/zachdrummond/google-books-search",
      tech: "React, Node.js, MongoDB, Express",
    },
    Gifted: {
      id: "Gifted",
      name: "Gifted",
      pitch: "Track all of your gifts in one organized place.",
      description:
        "Gifted is an app that tracks all of your gifts in one organized place. There is a table that organizes all of the gifts you receive from others and a table that organizes all of the gifts that you send to others.",
      images: {
        logo: require("./Projects/Gifted/HomePage.png").default,
        one: require("./Projects/Gifted/giftsReceivedPage.png").default,
        two: require("./Projects/Gifted/addReceivedPage.png").default,
        three: require("./Projects/Gifted/sentGiftsPage.png").default,
      },
      alt: "Gifted Project",
      link: "http://gifted-project2.herokuapp.com/",
      gitHub: "https://github.com/zachdrummond/gifted",
      tech: "JavaScript, Node.js, MySQL, Express",
    },
    BudgetTracker: {
      id: "BudgetTracker",
      name: "Budget Tracker",
      pitch: "Manage your financial budget.",
      description:
        "Budget Tracker is a progressive web app tracks all of your financial needs in one place. You can access everything at any time, even if you are offline. You can even download this app on your mobile device.",
      images: {
        logo: require("./Projects/BudgetTracker/Example.png").default,
        one: require("./Projects/BudgetTracker/HomePage.png").default,
      },
      alt: "Budget Tracker Project",
      link: "https://pwa-budget-tracker-zd.herokuapp.com/",
      gitHub: "https://github.com/zachdrummond/pwa-budget-tracker",
      tech: "React, Node.js, MongoDB, Express",
    },
  },
  Skills: {
    TopRow: {
      React: {
        name: "REACT.JS",
        image: require("./Skills/React.svg").default,
        alt: "React Logo",
      },
      Nodejs: {
        name: "NODE.JS",
        image: require("./Skills/Nodejs.svg").default,
        alt: "Nodejs Logo",
      },
      Expressjs: {
        name: "EXPRESS.JS",
        image: require("./Skills/Expressjs.svg").default,
        alt: "Expressjs Logo",
      },
      MongoDB: {
        name: "MONGO DB",
        image: require("./Skills/MongoDB.svg").default,
        alt: "MongoDB Logo",
      },
    },
    BottomRow: {
      HTML: {
        name: "HTML",
        image: require("./Skills/HTML.svg").default,
        alt: "HTML Logo",
      },
      CSS: {
        name: "CSS",
        image: require("./Skills/CSS.svg").default,
        alt: "CSS Logo",
      },
      Javascript: {
        name: "JAVASCRIPT",
        image: require("./Skills/Javascript.svg").default,
        alt: "JavaScript Logo",
      },
      Git: {
        name: "GIT",
        image: require("./Skills/Git.svg").default,
        alt: "Git Logo",
      },
      MySQL: {
        name: "MYSQL",
        image: require("./Skills/MySQL.svg").default,
        alt: "MySQL Logo",
      },
    },
  },
};
export default IMAGES;

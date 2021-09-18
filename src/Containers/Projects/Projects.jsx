import "./Projects.css";
import IMAGES from "../../images/images";
import Project from "../../Components/Project/Project";

const Projects = () => {
  return (
    <main id="Projects" className="container mt-5">
      <div className="row row-cols-3">
        <div className="col-sm-12">
          <h1 className="text-center">Projects</h1>
        </div>
        <Project
          id="Ciphr"
          name="Ciphr"
          description="A platform to share and solve coding algorithms."
          image={IMAGES.Projects.Ciphr}
          alt="Ciphr Project"
          link="https://ciphr.dev/"
          gitHub="https://github.com/zachdrummond/ciphr"
        />
        <Project
          id="Gifted"
          name="Gifted"
          description="Track all of your gifts in one
          organized place."
          image={IMAGES.Projects.Gifted}
          alt="Gifted Project"
          link="http://gifted-project2.herokuapp.com/"
          gitHub="https://github.com/zachdrummond/gifted"
        />
        <Project
          id="GoogleBooksSearch"
          name="Google Books Search"
          description="Find and save any book via Google Books API."
          image={IMAGES.Projects.GoogleBooksSearch}
          alt="Google Books Search Project"
          link="https://google-books-search-zd.herokuapp.com/search"
          gitHub="https://github.com/zachdrummond/google-books-search"
        />
        <Project
          id="BudgetTracker"
          name="Budget Tracker"
          description="A progressive web app that helps you manage your financial budget."
          image={IMAGES.Projects.BudgetTracker}
          alt="Budget Tracker Project"
          link="https://pwa-budget-tracker-zd.herokuapp.com/"
          gitHub="https://github.com/zachdrummond/pwa-budget-tracker"
        />
        <Project
          name="Eat-da-Burger"
          description="Create and eat a fictional burger."
          image={IMAGES.Projects.EatDaBurger}
          alt="Eat-da-Burger Project"
          link="https://eat-da-burger-zachdrummond.herokuapp.com/"
          gitHub="https://github.com/zachdrummond/eat-da-burger"
        />
        <Project
          name="Find Your Adventure"
          description="Plan your next visit to a US National Park."
          image={IMAGES.Projects.FindYourAdventure}
          alt="Find Your Adventure Project"
          link="https://zachdrummond.github.io/Find-Your-Adventure/"
          gitHub="https://github.com/zachdrummond/Find-Your-Adventure"
        />
      </div>
    </main>
  );
};

export default Projects;

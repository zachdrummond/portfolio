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
          name="Ciphr"
          description="A platform to share and solve coding algorithms."
          image={IMAGES.Projects.Ciphr}
          alt="Ciphr Project"
        />
        <Project
          name="Gifted"
          description="Track all of your gifts in one
          organized place."
          image={IMAGES.Projects.Gifted}
          alt="Gifted Project"
        />
        <Project
          name="Google Books Search"
          description="Find and save any book via Google Books API."
          image={IMAGES.Projects.GoogleBooksSearch}
          alt="Google Books Search Project"
        />
        <Project
          name="Budget Tracker"
          description="A progressive web app that helps you manage your financial budget."
          image={IMAGES.Projects.BudgetTracker}
          alt="Budget Tracker Project"
        />
        <Project
          name="Eat-da-Burger"
          description="Create and eat a fictional burger."
          image={IMAGES.Projects.EatDaBurger}
          alt="Eat-da-Burger Project"
        />
        <Project
          name="Find Your Adventure"
          description="Plan your next visit to a US National Park."
          image={IMAGES.Projects.FindYourAdventure}
          alt="Find Your Adventure Project"
        />
      </div>
    </main>
  );
};

export default Projects;

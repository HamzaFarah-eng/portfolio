import Projects from "./Projects";
import myTasks from "../../assets/images/portfolio-images/my-tasks.jpg";
import memoryGame from "../../assets/images/portfolio-images/memory-game.jpg";
import guesstheWord from "../../assets/images/portfolio-images/guess-the-word.jpg";
import bimiCake from "../../assets/images/portfolio-images/bimi-cake.jpg";

const projectData = [
  {
    id: 1,
    image: bimiCake,
    category: "Backend Project",
    title: "Bimi Cake",
    description:
      "Developed a scalable backend system for a cake shop using Node.js, Express.js, and MongoDB, featuring RESTful APIs for product and order management.",
    link: "https://documenter.getpostman.com/view/39694644/2sB2ca5emv",
  },
  {
    id: 2,
    image: guesstheWord,
    category: "Frontend Project",
    title: "Guess The Word",
    description:
      "Built an interactive word-guessing game with dynamic UI updates, engaging gameplay mechanics, and a responsive design for smooth user experience.",
    link: "https://hamzafarah-eng.github.io/Guess-Game/",
  },
  {
    id: 3,
    image: memoryGame,
    category: "Frontend Project",
    title: "Memory Game",
    description:
      "Created a fun, responsive memory card game that sharpens attention and recall, with smooth animations and adaptive layouts across devices.",
    link: "https://hamzafarah-eng.github.io/Memory-Game/",
  },
  {
    id: 4,
    image: myTasks,
    category: "Frontend Project",
    title: "My Tasks",
    description:
      "Designed and implemented a task management app with CRUD functionality, responsive layout, and an intuitive interface for organising daily activities.",
    link: "https://hamzafarah-eng.github.io/TaskManeger/",
  },
];


const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            A collection of my recent projects, demonstrating my skills in
            crafting intuitive, responsive, and visually appealing web
            applications.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

import person from "../../assets/images/person.png";
import "./introduction.css";

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I’m
            <span className="text-nowrap shrink-0 inline-block w-full">
              Hamza Abo-Farah
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            I am Hamza Abo-Farah, a <span className="bg-highlight">Computer
            Engineer and Full-Stack Developer</span> passionate about building
            efficient, scalable, and user-friendly web applications. With
            experience in frontend development (HTML, CSS, JS, Bootstrap) and
            backend development (Node.js, Express.js, MongoDB, MySQL).
          </p>
        </div>
        <div className="mx-auto lg:mx-0 relative">
        </div>
      </div>
      <div
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative`}
      >
        <img
          className={`shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl`}
          src={person}
          alt="person"
        />
      </div>
    </div>
  );
};

export default Introduction;

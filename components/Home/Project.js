import Link from "next/link";

function Project() {
  return (
    <div className="w-full" id="project-section">
      <h2 className="text-center text-[48px] font-bold md:mt-2 mt-4">
        Projects - In
        <br /> a nutshell
      </h2>
      <div className="w-20 h-1 mx-auto bg-yellow-400 rounded-2"></div>
      <div className="flex flex-col md:gap-[100px] gap-[50px] mt-[50px]">
        <div className="flex flex-col md:w-auto w-full md:flex-row shadow rounded-[24px] overflow-hidden custom-shadow-color mx-auto ">
          <div className="flex flex-col lg:h-[524px] justify-center lg:px-[36px] md:px-3 p-4 md:md:w-[496px] items-start gap-6">
            <h3 className="lg:text-[40px] text-[30px] font-bold">
              Infovap - a website
            </h3>
            <p className="text-[#828282] text-[18px] font-normal leading-9">
              For my school project, I built a website to enable voters with
              disability in Kenya to access voter information effectively.
            </p>
            
            <button className="py-2 relative md:m-0 mx-auto border-[#25282B] text-[18px] px-4 rounded-full border font-bold">
              <Link
                href=" https://info-vap-2.vercel.app/"
                target="_blank"
                className="w-full h-full"
              >
                View Project
              </Link>
            </button>
          </div>
          <img
            className="h-[524px] lg:w-[496px] md:w-[350px] w-full"
            src="../assets/info-vap.svg"
          />
        </div>
        <div className="flex flex-col md:w-auto w-full md:flex-row-reverse shadow rounded-[24px] overflow-hidden custom-shadow-color mx-auto">
          <div className="flex flex-col lg:h-[524px] justify-center lg:px-[36px] md:px-3 p-4  md:w-[496px] items-start gap-6">
            <h3 className="lg:text-[40px] text-[30px] font-bold">
              Data Science
            </h3>
            <p className="text-[#828282] text-[18px] font-normal leading-9">
              I have worked as a Data analyst intern at Untapped AI and PWC. I
              have profeciency in data analysis and NLP, Causal Inference and
              always willing to learn more.
            </p>

            <button className="py-2 relative md:m-0 mx-auto border-[#25282B] text-[18px] px-4 rounded-full border font-bold">
              <Link
                href="https://medium.com/@rotich-95982/using-machine-learning-to-analyze-famous-speeches-e90ee385dc1b"
                target="_blank"
                className="w-full h-full"
              >
                View Project
              </Link>
            </button>
          </div>
          <img
            className="h-[524px] lg:w-[496px] md:w-[350px] w-full"
            src="../assets/data-science.png"
          />
        </div>
        <div className="flex flex-col md:w-auto w-full md:flex-row shadow rounded-[24px] overflow-hidden custom-shadow-color mx-auto">
          <div className="flex flex-col lg:h-[524px] justify-center lg:px-[36px] md:px-3 p-4  md:w-[496px] items-start gap-6">
            <h3 className="lg:text-[40px] text-[30px] font-bold">Instructor</h3>
            <p className="text-[#828282] text-[18px] font-normal leading-9">
              I have worked as a teaching assistant at Minerva as a complex
              systems and data structures and algorithims teacher. I worked as a
              Math instructor at Sponsors .at Educational Opportunity and helped
              develop a document to help students be better at Math.{" "}
            </p>
            <button className="py-2 relative md:m-0 mx-auto border-[#25282B] text-[18px] px-4 rounded-full border font-bold">
              <Link
                href="https://drive.google.com/file/d/1I3fqFaWz0FV1qSRQrBmD4S1hLAlzenRd/view?usp=sharing"
                target="_blank"
                className="w-full h-full"
              >
                View Project
              </Link>
            </button>
          </div>
          <img
            className="h-[524px] lg:w-[496px] md:w-[350px] w-full"
            src="../assets/instructor.svg"
          />
        </div>
        <div className="flex flex-col md:w-auto w-full md:flex-row-reverse shadow rounded-[24px] overflow-hidden custom-shadow-color mx-auto">
          <div className="flex flex-col lg:h-[524px] justify-center lg:px-[36px] md:px-3 p-4  md:w-[496px] items-start gap-6">
            <h3 className="lg:text-[40px] text-[30px] font-bold">
              Poverty reduction - A book
            </h3>
            <p className="text-[#828282] text-[18px] leading-9">
              For a personal project I am writing a book to suggest how Kenya
              can propel itself from poverty.
            </p>
            <button className="py-2 relative md:m-0 mx-auto border-[#25282B] text-[18px] px-4 rounded-full border font-bold">
              <Link
                href="https://www.notion.so/what-can-propel-us-from-poverty-6842a98c6dab42af9265416c782f5814"
                target="_blank"
                className="w-full h-full"
              >
                View Project
              </Link>
            </button>
          </div>
          <img
            className="h-[524px] lg:w-[496px] md:w-[350px] w-full"
            src="../assets/book.svg"
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
